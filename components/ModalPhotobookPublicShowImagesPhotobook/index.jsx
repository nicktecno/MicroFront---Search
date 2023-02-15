import React, { useEffect, useState } from "react";

import * as S from "./styles";

import notification from "../../services/notification";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Like } from "@styled-icons/boxicons-regular/Like";
import { ModalPhotobookPublicShowAllImagesPhotobook } from "../ModalPhotobookPublicShowAllImagesPhotobook";
import ModalPhotobookSharePhotobook from "../ModalPhotobookSharePhotobook";

export default function ModalPhotobookPublicShowImagesPhotobook({
  activeModalAddImagesPhotobook,
  setActiveModalAddImagesPhotobook,
  photobookData,
  profileData,
  setCartLength,
  wishListApi,
  appHeaderUrl,
  appUrl,
  mktName,
}) {
  const [galleryData, setGalleryData] = useState(photobookData);
  const [sharePhotobookModal, setSharePhotobookModal] = useState("inactive");

  const [loading, setLoading] = useState(false);

  const [index, setIndex] = useState(0);
  const [authorization, setAuthorization] = useState(false);

  const [activeNewImageModal, setActiveNewImageModal] = useState("inactive");
  const [activeUpdateImageModal, setActiveUpdateImageModal] =
    useState("inactive");

  const [
    activeShowAllImagesPhotobookModal,
    setActiveShowAllImagesPhotobookModal,
  ] = useState("inactive");
  const [activeDeleteImageModal, setActiveDeleteImageModal] =
    useState("inactive");

  const [allLikes, setAllLikes] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  async function handleLike(item) {
    setLoading(true);

    try {
      await wishListApi.post(
        `/photobook/customer/gallery/${photobookData.id}/image/like/${item.id}`,
        {},
        {
          headers: {
            Type: "customer",
            "Url-Store": appHeaderUrl,
          },
        }
      );

      notification("Foto curtida com sucesso", "success");
      loadLikes();
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
        notification("Erro ao curtir foto", "error");
        setLoading(false);
      }
    }
  }

  async function handleDislike(item) {
    setLoading(true);

    try {
      await wishListApi.post(
        `/photobook/customer/gallery/${photobookData.id}/image/dislike/${item.id}`,
        {},
        {
          headers: {
            Type: "customer",
            "Url-Store": appHeaderUrl,
          },
        }
      );

      notification("Curtida removida com sucesso", "success");
      loadLikes();
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
        notification("Erro ao remover curtida", "error");
        setLoading(false);
      }
    }
  }

  async function loadLikes() {
    setLoading(true);

    try {
      const { data: response } = await wishListApi.get(
        `/photobook/customer/like`,

        {
          headers: {
            Type: "customer",
            "Url-Store": appHeaderUrl,
          },
        }
      );
      if (response.data !== undefined) {
        const mapLikes = response.data.map((like) => like.image);
        setAllLikes(mapLikes);
      } else {
        setAllLikes([]);
      }

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
        notification("Erro ao carregar curtidas do Photobook", "error");
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    if (
      localStorage.getItem(mktName) &&
      activeModalAddImagesPhotobook === "active"
    ) {
      setAuthorization(true);
      loadLikes();
    }
  }, [activeModalAddImagesPhotobook]);

  function copyText(link) {
    notification("Link copiado", "success");
    navigator.clipboard.writeText(link);
  }

  return (
    <>
      <ModalPhotobookPublicShowAllImagesPhotobook
        setActiveShowAllImagesPhotobookModal={
          setActiveShowAllImagesPhotobookModal
        }
        activeShowAllImagesPhotobookModal={activeShowAllImagesPhotobookModal}
        photobookData={photobookData}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        appHeaderUrl={appHeaderUrl}
        mktName={mktName}
      />
      <ModalPhotobookSharePhotobook
        shareModal={sharePhotobookModal}
        setShareModal={setSharePhotobookModal}
        allProfileData={profileData}
        copyText={copyText}
        modalInside={true}
        idMyPhotobook={photobookData}
        appUrl={appUrl}
        mktName={mktName}
      />

      {activeNewImageModal === "inactive" &&
        sharePhotobookModal === "inactive" &&
        activeUpdateImageModal === "inactive" &&
        activeDeleteImageModal === "inactive" &&
        activeShowAllImagesPhotobookModal === "inactive" && (
          <S.ModalPhotobook className={activeModalAddImagesPhotobook}>
            <S.Transparent
              onClick={() => {
                document.body.style.overflow = "auto";

                setActiveModalAddImagesPhotobook("inactive");
              }}
            />

            <S.AlertCenterPhotobook>
              <div className="modalTitle">
                <span className="title">Photobook {photobookData.name}</span>
                <S.closeButton
                  onClick={() => {
                    document.body.style.overflow = "auto";

                    setActiveModalAddImagesPhotobook("inactive");
                  }}
                >
                  x
                </S.closeButton>
              </div>

              <S.ContainerCenterBox>
                <div className="carouselContainer">
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {activeModalAddImagesPhotobook === "active" &&
                    galleryData.images.length > 0 ? (
                      galleryData.images.map((item, index) => (
                        <Carousel.Item key={item.id} interval={10000000}>
                          <div className="containerItem">
                            <S.ImageBannerWeb
                              alt={item.name}
                              title={item.description}
                              src={item.image}
                            />
                            <div className="containerButtons">
                              {authorization && (
                                <>
                                  {allLikes.includes(item.image) ? (
                                    <button
                                      className="liked"
                                      onClick={() => handleDislike(item)}
                                    >
                                      <div className="image">
                                        <Like />
                                      </div>
                                      <div className="title">Curtida</div>
                                    </button>
                                  ) : (
                                    <button
                                      className="like"
                                      onClick={() => handleLike(item)}
                                    >
                                      <div className="image">
                                        <Like />
                                      </div>
                                      <div className="title">Curtir</div>
                                    </button>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </Carousel.Item>
                      ))
                    ) : (
                      <div className="noImages">Sem imagens adicionadas</div>
                    )}
                  </Carousel>
                </div>
                <div className="dataContainer">
                  <div className="containerPhotoData">
                    <div className="titleContent">Nome da Foto</div>
                    <div className="content name">
                      {galleryData.images[index]?.name}
                    </div>
                    <div className="titleContent">Classificação</div>
                    <div className="content">
                      {galleryData.images[index]?.classifications.map(
                        (classification, classificationIndex) => (
                          <div key={classificationIndex}>
                            {classification.name}
                          </div>
                        )
                      )}
                    </div>
                    <div className="titleContent">Descrição</div>
                    <div className="content">
                      {galleryData.images[index]?.description}
                    </div>
                  </div>
                  <div className="containerAddNewImage">
                    {photobookData.images.length > 0 && (
                      <div
                        className="addNewImage positiveButton"
                        onClick={() =>
                          setActiveShowAllImagesPhotobookModal("active")
                        }
                      >
                        Visualizar todas as imagens
                      </div>
                    )}
                    {photobookData.code !== undefined &&
                      photobookData.code !== null && (
                        <a
                          target="_blank"
                          className="addNewImage positiveButton"
                          href={`/publiclist/${photobookData.code}`}
                          rel="noreferrer"
                        >
                          Meu Projeto vinculado
                        </a>
                      )}
                    <div
                      className="addNewImage positiveButton"
                      onClick={() => setSharePhotobookModal("active")}
                    >
                      Compartilhar Photobook
                    </div>
                  </div>
                </div>
              </S.ContainerCenterBox>
              <div className="containerAddNewImageMobile">
                {photobookData.images.length > 0 && (
                  <div
                    className="addNewImage positiveButton"
                    onClick={() =>
                      setActiveShowAllImagesPhotobookModal("active")
                    }
                  >
                    Visualizar todas as imagens
                  </div>
                )}
                {photobookData.code !== undefined &&
                  photobookData.code !== null && (
                    <a
                      target="_blank"
                      className="addNewImage positiveButton"
                      href={`/publiclist/${photobookData.code}`}
                      rel="noreferrer"
                    >
                      Minha lista vinculada
                    </a>
                  )}
                <div
                  className="addNewImage positiveButton"
                  onClick={() => setSharePhotobookModal("active")}
                >
                  Compartilhar Photobook
                </div>
              </div>
            </S.AlertCenterPhotobook>
          </S.ModalPhotobook>
        )}
    </>
  );
}
