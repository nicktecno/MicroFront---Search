import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const WhatsIcon = styled(Whatsapp)`
  width: 26px;
  height: 26px;
  fill: var(--title-modal-color);
  margin-left: 10px;
`;

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ModalPhotobook = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      margin-top: 90px;
      width: 100%;
      height: 1000vh;
      z-index: 0;
      background: #0000004e;
    }
  }
  width: 100%;
  height: 100%;

  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @-moz-document url-prefix() {
    background-color: #0000006c;
  }

  position: fixed;

  left: 0;
  top: 0;
  z-index: 99;
  display: none;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const closeButton = styled.span`
  font-size: 25px;
  display: flex;
  color: var(--title-color);
  font-weight: 700;
  position: absolute;
  top: 13px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;

  ${customMedia.lessThan("400px")`
        top: 12px;
        right:5px;
        padding:0 10px;
        
    `}

  :hover {
  }
`;

export const AlertCenterPhotobook = styled.div`
  display: flex;
  width: 500px;
  height: 300px;
  background: white;

  text-align: center;
  color: black;
  flex-direction: column;
  align-items: center;
  position: absolute;

  ${customMedia.lessThan("mobile")`
     width: 95%;
    `}

  .modalTitle {
    width: 100%;
    position: relative;
    color: var(--title-modal-color);
    background: var(--default-color);
    font-size: 1.125rem;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    text-align: center;

    .title {
      font-weight: bold;
      font-size: 16px;
    }
    ${customMedia.lessThan("tablet")`
        margin-bottom: 0px;
    `}
  }

  .caixaShare {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 20px;
    }

    .type {
      font-size: 16px;
    }

    .containerBotoes {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 5px;
      margin-bottom: 20px;
      .botao {
        height: 30px;
        width: 150px;
        margin-top: 20px;
        border: 0px;
        transition: 0.3s;
        background-color: #dbc79a;
        :hover {
          background-color: #b9cb967b;
        }
      }
      .botaoActive {
        height: 30px;
        width: 150px;
        margin-top: 20px;
        border: 0px;
        transition: 0.3s;
        background-color: #cca8a8;
        :hover {
          background-color: #b9cb967b;
        }
      }
    }

    .containerEmail {
      flex-direction: column;
      display: flex;
      width: 100%;

      justify-content: center;
      align-items: center;
      margin-bottom: 20px;

      .title {
        font-weight: bold;
        font-size: 16px;
        margin-bottom: 20px;
      }

      input {
        width: 300px;

        height: 40px;
        padding-left: 10px;
        font-size: 14px;

        border: none;
        border-bottom: 1px solid var(--input-border-color);
        background-color: #e9e9e9;
        transition: 0.3s;

        ${customMedia.lessThan("360px")`
     width: 95%;
    `}

        :hover {
          border-bottom: 1px solid var(--input-border-color-hover);
        }
      }
    }

    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .containerCopyURL {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: column;
      .url {
        display: flex;
        justify-content: center;
        align-items: center;
        ${customMedia.lessThan("360px")`
          width: 95%;
        `}
      }
      .boxButtons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        .copyButton {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px;
          border: 0px;
          width: 110px;
          height: 40px;
          transition: 0.3s;

          svg {
            width: 30px;
            margin-left: 5px;
          }
        }
        a.socialMediaButton {
          width: 160px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          :hover {
            color: #fff !important;
          }
        }
      }
      input {
        width: 245px;
        display: flex;
        height: 40px;
        padding-left: 10px;
        font-size: 14px;
        justify-content: center;
        border: none;
        border-bottom: 2px solid var(--input-border-color);
        background-color: #f4f4f5;
        transition: 0.3s;
        :hover {
          border-bottom: 2px solid var(--input-border-color-hover);
        }
      }
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
        padding: 0px;
        border: 0px;
        width: 50px;
        height: 40px;
        transition: 0.3s;

        :hover {
          background: var(--default-color-hover);
          color: var(--title-color);
        }

        svg {
          width: 30px;
        }
      }
    }
  }
  .boxInputs {
    display: flex;
    width: 90%;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    align-items: center;
    .containerInput {
      width: 100%;
      height: 41px;
      margin-bottom: 10px;
      background: #f4f4f5;
      border-bottom: 2px solid var(--input-border-color);
      transition: 0.3s;

      :hover {
        border-bottom: 2px solid var(--input-border-color-hover);
      }
      input {
        width: 100%;
        height: 100%;
        padding-left: 10px;
        color: black;

        ::placeholder {
          color: black;
        }

        background: transparent;
        border: 0px;
      }
    }
    textarea {
      width: 100%;
      padding: 10px;
      background: #f4f4f5;
      border: 0px;
      border-bottom: 2px solid var(--input-border-color);
      transition: 0.3s;
      color: black;
      margin-bottom: 10px;

      ::placeholder {
        color: black;
      }
      :hover {
        border-bottom: 2px solid var(--input-border-color-hover);
      }
    }
  }

  .labelJoinWishList {
    margin-top: 10px;
    font-weight: bold;
  }

  .listContainer {
    display: flex;
    margin-top: 20px;
    width: 100%;
    min-height: 120px;
    max-height: 120px;
    overflow: auto;
    flex-direction: column;
    gap: 10px;

    ::-webkit-scrollbar {
      width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f4f4f5;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #cccc;
      border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #ccc;
    }

    .boxWishList {
      background: #f4f3f4;
      display: flex;
      padding: 10px;
      width: 100%;
      height: 60px;
      transition: 0.3s;
      cursor: pointer;

      :hover {
        background: #ccc;
      }

      &.active {
        background: #ccc;
      }

      .boxImage {
        display: flex;
        width: 70px;
        margin-right: 10px;

        svg {
          width: 100%;
        }

        img {
          width: 100%;
        }
      }

      .boxText {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: flex-start;
      }
    }
  }

  .modalFooter {
    justify-content: center;
    gap: 20px;
    display: flex;
    bottom: 0px;
    margin-top: 20px;

    .loading {
      width: 50px;
    }

    button {
      padding: 10px 20px;
      border: 0px;
      font-weight: 600;
    }
  }
`;
