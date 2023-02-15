import { useState } from "react";
import * as S from "./styles";

import { Gallery } from "@styled-icons/remix-line/Gallery";

import ModalPhotobookPublicShowImagesPhotobook from "../ModalPhotobookPublicShowImagesPhotobook";

export default function BoxPhotobookPublicDataPhotobook({
  photobookData,
  profileData,
  setCartLength,
  wishListApi,
  appHeaderUrl,
  appUrl,
  mktName,
}) {
  const [activeModalAddImagesPhotobook, setActiveModalAddImagesPhotobook] =
    useState("inactive");

  return (
    <>
      <ModalPhotobookPublicShowImagesPhotobook
        activeModalAddImagesPhotobook={activeModalAddImagesPhotobook}
        setActiveModalAddImagesPhotobook={setActiveModalAddImagesPhotobook}
        photobookData={photobookData}
        profileData={profileData}
        appHeaderUrl={appHeaderUrl}
        appUrl={appUrl}
        setCartLength={setCartLength}
        wishListApi={wishListApi}
        mktName={mktName}
      />

      <S.BoxPhotobookConfigPhotobook>
        <div
          className="containerLogoName"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setActiveModalAddImagesPhotobook("active");
          }}
        >
          <div className="boxLogo">
            {photobookData.images.length < 1 ? (
              <Gallery />
            ) : (
              <img
                src={photobookData.images[0].image}
                alt={`imagem da logo da empresa ${photobookData.name}`}
              />
            )}
          </div>
          <div className="boxName">{photobookData.name}</div>
          <div className="boxDescription">{photobookData.description}</div>
        </div>
      </S.BoxPhotobookConfigPhotobook>
    </>
  );
}
