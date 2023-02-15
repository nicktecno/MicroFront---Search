import { Like } from "@styled-icons/boxicons-regular/Like";
import * as S from "./styles";
import { useEffect, useState } from "react";
import notification from "../../services/notification";

export function ModalPhotobookPublicShowAllImagesPhotobook({
  setActiveShowAllImagesPhotobookModal,
  activeShowAllImagesPhotobookModal,
  photobookData,
  setCartLength,
  wishListApi,
  appHeaderUrl,
  mktName,
}) {
  const [logged, setLogged] = useState(false);
  const [allLikes, setAllLikes] = useState([]);
  const [loading, setLoading] = useState(false);

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
      activeShowAllImagesPhotobookModal === "active"
    ) {
      loadLikes();
      setLogged(true);
    }
  }, [activeShowAllImagesPhotobookModal]);

  return (
    <S.ModalWishList className={activeShowAllImagesPhotobookModal}>
      <S.Transparent
        onClick={() => {
          setActiveShowAllImagesPhotobookModal("inactive");
        }}
      />

      <S.centroAlertaWishList>
        <div className="modalTitle">
          <span className="title">Galeria {photobookData.name} </span>
          <S.closeButton
            onClick={() => {
              setActiveShowAllImagesPhotobookModal("inactive");
            }}
          >
            x
          </S.closeButton>
        </div>
        <div className="boxShow">
          {photobookData.images.map((data, index) => (
            <div className="boxImage" key={index}>
              <img src={data.image} alt={data.name} />

              {logged && (
                <>
                  {allLikes.length > 0 && allLikes.includes(data.image) ? (
                    <div
                      className="boxLike liked"
                      onClick={() => handleDislike(data)}
                    >
                      <Like />
                    </div>
                  ) : (
                    <div className="boxLike" onClick={() => handleLike(data)}>
                      <Like />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </S.centroAlertaWishList>
    </S.ModalWishList>
  );
}
