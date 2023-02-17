import React from "react";
import { Copy } from "@styled-icons/evaicons-solid/Copy";
import * as S from "./styles";

export default function ModalPromoterShareProfile({
  shareModal,
  setShareModal,
  allProfileData,
  copyText,
  appUrl,
  mktName,
}) {
  return (
    <S.ModalPhotobook className={shareModal}>
      <S.Transparent
        onClick={() => {
          document.body.style.overflow = "auto";
          setShareModal("inactive");
        }}
      />

      <S.AlertCenterPhotobook>
        <div className="modalTitle">
          <span className="title">Compartilhar Perfil</span>
          <S.closeButton
            onClick={() => {
              document.body.style.overflow = "auto";
              setShareModal("inactive");
            }}
          >
            x
          </S.closeButton>
        </div>
        <div className="caixaShare">
          <div className="title">Link de compartilhamento</div>
          <div className="containerCopyURL">
            <div className="url">
              <input
                readOnly
                type="text"
                value={`${appUrl}/profilepublicpromoter/${allProfileData.id}`}
              />
              <button
                className="copyButton"
                onClick={() =>
                  copyText(
                    `${appUrl}/profilepublicpromoter/${allProfileData.id}`
                  )
                }
              >
                <Copy />
              </button>
            </div>
            <div className="boxButtons">
              {mktName &&
              appUrl &&
              typeof window !== "undefined" &&
              localStorage.getItem("nome") ? (
                <a
                  rel="noreferrer"
                  className="socialMediaButton positiveButton"
                  href={
                    allProfileData
                      ? `https://api.whatsapp.com/send?text= Olá, ${localStorage.getItem(
                          "nome"
                        )} acaba de compartilhar contigo o perfil do ${
                          allProfileData.name
                        } no ${mktName}. Click no link abaixo para acessá-lo. ${appUrl}/profilepublicpromoter/${
                          allProfileData?.id
                        }`
                      : ""
                  }
                  target="_blank"
                >
                  Compartilhar
                  <S.WhatsIcon />
                </a>
              ) : (
                <a
                  rel="noreferrer"
                  className="socialMediaButton positiveButton"
                  href={
                    allProfileData
                      ? `https://api.whatsapp.com/send?text= Olá, acabo de compartilhar contigo o perfil do  ${allProfileData.name} no ${mktName}. Click no link abaixo para acessá-lo. ${appUrl}/profilepublicpromoter/${allProfileData?.id}`
                      : ""
                  }
                  target="_blank"
                >
                  Compartilhar
                  <S.WhatsIcon />
                </a>
              )}
            </div>
          </div>
        </div>
      </S.AlertCenterPhotobook>
    </S.ModalPhotobook>
  );
}
