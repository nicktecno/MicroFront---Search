import { Copy } from "@styled-icons/evaicons-solid/Copy";
import * as S from "./styles";

export default function ModalPhotobookSharePhotobook({
  shareModal,
  setShareModal,
  allProfileData,
  copyText,
  idMyPhotobook,
  modalInside,
  appUrl,
  mktName,
}) {
  return (
    <S.ModalPhotobook className={shareModal}>
      <S.Transparent
        onClick={() => {
          if (modalInside === false) {
            document.body.style.overflow = "auto";
          }
          setShareModal("inactive");
        }}
      />

      <S.AlertCenterPhotobook>
        <div className="modalTitle">
          <span className="title">Compartilhar Perfil</span>
          <S.closeButton
            onClick={() => {
              if (modalInside === false) {
                document.body.style.overflow = "auto";
              }
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
                value={`${appUrl}/publicphotobook/${allProfileData.id}/${idMyPhotobook.id}`}
              />
              <button
                className="copyButton"
                onClick={() =>
                  copyText(
                    `${appUrl}/publicphotobook/${allProfileData.id}/${idMyPhotobook.id}`
                  )
                }
              >
                <Copy />
              </button>
            </div>
            <div className="boxButtons">
              <a
                className="socialMediaButton positiveButton"
                href={`https://api.whatsapp.com/send?text= Olá, ${allProfileData.name} acaba de te enviar o link de um photobook no ${mktName}. Click no link abaixo para acessá-lo. ${appUrl}/publicphotobook/${allProfileData.id}/${idMyPhotobook.id}`}
                target="_blank"
                rel="noreferrer"
              >
                Compartilhar
                <S.WhatsIcon />
              </a>
            </div>
          </div>
        </div>
      </S.AlertCenterPhotobook>
    </S.ModalPhotobook>
  );
}
