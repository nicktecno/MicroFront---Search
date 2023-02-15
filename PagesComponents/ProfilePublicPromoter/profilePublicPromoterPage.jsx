import React, { useEffect, useState } from "react";

import * as S from "./styles";

import Loading from "../../components/Loading";

import { ShareAlt } from "@styled-icons/boxicons-solid/ShareAlt";

import { User } from "@styled-icons/boxicons-regular/User";

import notification from "../../services/notification";

import { useRouter } from "next/router";

import BoxPhotobookPublicDataPhotobook from "../../components/BoxPhotobookPublicDataPhotobook";
import BoxWishListPublicDataWishList from "../../components/BoxWishListPublicDataWishList";
import ModalPromoterShareProfile from "../../components/ModalPromoterShareProfile";

function ProfilePublicPromoterComponent({
  companyId,
  appUrl,
  appHeaderUrl,
  appImages,
  wishListApi,
  api,
  setCartLength,
  mktName,
  routeTranslations,
}) {
  const history = useRouter();
  const { id } = history.query;
  const [loading, setLoading] = useState(false);
  const [loadingFunctions, setLoadingFunctions] = useState(false);
  const [profileData, setProfileData] = useState(false);
  const [publicWishLists, setPublicWishLists] = useState([]);
  const [shareModal, setShareModal] = useState("inactive");

  const [activeMyPhotobook, setActiveMyPhotobook] = useState("active");
  const [activeWishLists, setActiveWishLists] = useState("inactive");

  const [myPhotobooks, setMyPhotobooks] = useState([]);

  async function loadPhotobooks() {
    setLoadingFunctions(true);
    try {
      const { data: responseList } = await wishListApi.get(
        "/photobook/public/gallery",
        {
          headers: {
            Type: "customer",
            "Url-Store": appHeaderUrl,
            Company: companyId,
            Customer: id[0],
          },
        }
      );

      setMyPhotobooks(responseList.data);
      setLoadingFunctions(false);
    } catch (e) {
      if (e.response?.data.message === "Não Autorizado.") {
        notification("Sua sessão expirou, faça o login novamente", "error");
        sessionStorage.setItem("urlantiga", window.location.href);
        setLoadingFunctions(false);
        setCartLength("0");
        setTimeout(function () {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.log(e);
        notification("Erro ao carregar a lista de Photobooks", "error");
        setLoadingFunctions(false);
      }
    }
  }

  async function loadProfileData() {
    setLoading(true);
    try {
      const { data: responseList } = await api.get(`/public/promoter/${id[0]}`);

      setProfileData(responseList.data);
      setLoading(false);
    } catch (e) {
      if (e.response?.data.message === "Não Autorizado.") {
        notification("Sua sessão expirou, faça o login novamente", "error");
        sessionStorage.setItem("urlantiga", window.location.href);
        setLoading(false);
        setCartLength("0");
        setTimeout(function () {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.log(e);
        notification(
          "Erro ao carregar dados do perfil do promotor ou lojista inexistente",
          "error"
        );

        setLoading(false);
        window.location.href = "/findpromoters";
      }
    }
  }

  async function loadPublicWishLists() {
    setLoadingFunctions(true);
    try {
      const { data: responseList } = await wishListApi.get(
        `/wish-list/public/company/${companyId}/customer/${profileData.id}/public-lists`
      );

      setPublicWishLists(responseList.data);
      setLoadingFunctions(false);
    } catch (e) {
      if (e.response?.data.message === "Não Autorizado.") {
        notification("Sua sessão expirou, faça o login novamente", "error");
        sessionStorage.setItem("urlantiga", window.location.href);
        setLoadingFunctions(false);
        setCartLength("0");
        setTimeout(function () {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.log(e);
        notification("Erro ao projetos públicos", "error");

        setLoadingFunctions(false);
        window.location.href = "/findpromoters";
      }
    }
  }

  useEffect(() => {
    setLoading(true);
    if (history.isReady) {
      loadProfileData();
      loadPhotobooks();
    }
  }, [history]);

  async function handleFunctionsPhotoboook(option) {
    if (option === "activeMyPhotobook") {
      setActiveMyPhotobook("active");
      setActiveWishLists("inactive");
    }
    if (option === "activeWishLists") {
      if (publicWishLists.length === 0) {
        loadPublicWishLists();
      }
      setActiveWishLists("active");
      setActiveMyPhotobook("inactive");
    }
  }

  function copyText(link) {
    notification("Link copiado", "success");
    navigator.clipboard.writeText(link);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ModalPromoterShareProfile
            shareModal={shareModal}
            setShareModal={setShareModal}
            allProfileData={profileData}
            copyText={copyText}
            appUrl={appUrl}
            mktName={mktName}
          />
          <S.GeneralContainer>
            {profileData !== undefined ? (
              <>
                <div className="containerTopo">
                  {profileData.cover !== null ? (
                    <div className="customContainerBanner">
                      <img
                        src={`${appImages}/${profileData.cover}`}
                        alt="Meu banner"
                      />
                    </div>
                  ) : (
                    <div className="containerBanner" />
                  )}
                  <div
                    className={
                      profileData.description !== null
                        ? "logoLojista"
                        : "logoLojista not"
                    }
                  >
                    <div className="containerImage">
                      {profileData.img_profile !== null ? (
                        <img
                          src={`${appImages}/${profileData.img_profile}`}
                          alt="Meu perfil"
                        />
                      ) : (
                        <User />
                      )}
                    </div>
                  </div>
                  <div
                    className={
                      profileData.description !== null
                        ? "containerProfileFunctions"
                        : "containerProfileFunctions not"
                    }
                  >
                    <div className="containerDescription">
                      <div className="title">{profileData.name}</div>
                      {profileData.description !== null && (
                        <div className="description">
                          {profileData.description}
                        </div>
                      )}
                    </div>
                    <div className="containerButtons">
                      <button
                        className="positiveButton"
                        onClick={() => {
                          document.body.style.overflow = "hidden";
                          setShareModal("active");
                        }}
                      >
                        <div>COMPARTILHAR PERFIL</div>
                        <span>
                          <ShareAlt />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <S.ContainerPhotobookFunctions>
                  <div className="containerFunctionButtons">
                    <div className="containerUnlockedButtons">
                      <button
                        className={activeMyPhotobook}
                        onClick={() =>
                          handleFunctionsPhotoboook("activeMyPhotobook")
                        }
                      >
                        PHOTOBOOK
                      </button>
                      <button
                        className={activeWishLists}
                        onClick={() =>
                          handleFunctionsPhotoboook("activeWishLists")
                        }
                      >
                        LISTAS
                      </button>
                    </div>
                  </div>
                  <S.ContainerDataFunctions>
                    {loadingFunctions ? (
                      <Loading />
                    ) : (
                      <>
                        {activeMyPhotobook === "active" && (
                          <>
                            {myPhotobooks.length > 0 && !loadingFunctions ? (
                              <>
                                <div className="containerBoxPhotobook">
                                  {myPhotobooks.map(
                                    (photobook, photobookIndex) => (
                                      <BoxPhotobookPublicDataPhotobook
                                        key={photobookIndex}
                                        profileData={profileData}
                                        photobookData={photobook}
                                        setCartLength={setCartLength}
                                        wishListApi={wishListApi}
                                        appHeaderUrl={appHeaderUrl}
                                        appUrl={appUrl}
                                        mktName={mktName}
                                      />
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              <div className="containerText">
                                Não há Photobooks criados por esse promotor
                              </div>
                            )}
                          </>
                        )}
                        {activeWishLists === "active" && (
                          <>
                            {publicWishLists.length > 0 && !loading ? (
                              <>
                                <div className="containerBoxPhotobook">
                                  {publicWishLists.map(
                                    (wishlist, wishlistIndex) => (
                                      <BoxWishListPublicDataWishList
                                        key={wishlistIndex}
                                        photobookData={wishlist}
                                      />
                                    )
                                  )}
                                </div>
                              </>
                            ) : (
                              <div className="containerText">
                                Não há Projetos públicos vinculados a esse
                                promotor
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </S.ContainerDataFunctions>
                </S.ContainerPhotobookFunctions>
              </>
            ) : (
              <div className="unknown">Promotor inexistente</div>
            )}
          </S.GeneralContainer>
        </>
      )}
    </>
  );
}

export default ProfilePublicPromoterComponent;
