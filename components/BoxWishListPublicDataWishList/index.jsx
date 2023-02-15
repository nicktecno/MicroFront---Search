import * as S from "./styles";

import { Gallery } from "@styled-icons/remix-line/Gallery";

export default function BoxWishListPublicDataWishList({ photobookData }) {
  return (
    <>
      <S.BoxPhotobookConfigPhotobook
        target="_blank"
        href={`/publiclist/${photobookData.code}`}
      >
        <div className="containerLogoName">
          <div className="boxLogo">
            {photobookData.cover === null ? (
              <Gallery />
            ) : (
              <img
                src={photobookData.cover}
                alt={`imagem de capa da lista  ${photobookData.name}`}
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
