import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .unknown {
    min-height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  margin-bottom: 100px;
  ${customMedia.lessThan("tablet")`
      margin-bottom:200px;
    `}
  .containerTopo {
    width: 80%;
    max-width: 1640px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    position: relative;

    ${customMedia.lessThan("tablet")`
          width: 100%;
        
      `}
  }
  .customContainerBanner {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 360px;
    img {
      width: 100%;
      height: 360px;
      object-fit: cover;
    }
  }

  .containerBanner {
    width: 100%;
    height: 360px;
    background: url("/images/bannerLojista.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .logoLojista {
    position: absolute;

    left: 1%;
    display: flex;
    bottom: 10%;
    ${customMedia.lessThan("tablet")`
        flex-direction:column;
        left:50%;
        transform: translate(-50%);
        width:auto;
        justify-content:center;
        align-items:center;
        bottom: 27%;

        &.not{
          bottom:4%;
          
        }
        
    `}

    .containerImage {
      border-radius: 60px;
      justify-content: center;
      width: 125px;
      height: 125px;
      display: flex;
      background: white;
      align-items: center;
      bottom: -35%;
      border: 1px solid black;

      img {
        width: 100%;

        border-radius: 60px;
      }

      ${customMedia.lessThan("tablet")`
      margin-bottom:40px;
    
      
      `}
    }

    img {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }

    svg {
      display: flex;
      justify-content: center;
      width: 90%;
      color: #343a1c;
      align-items: center;
    }
  }
  .containerProfileFunctions {
    display: flex;
    width: 100%;
    height: 100px;

    ${customMedia.lessThan("tablet")`
          flex-direction:column;
          height: 250px;
          padding:10px;

          &.not{
            height: 100px;
          }
        
      `}

    .containerDescription {
      display: flex;
      flex-direction: column;
      width: 60%;
      gap: 15px;
      padding-left: 150px;
      padding-top: 10px;
      padding-right: 10px;

      .title {
        font-size: 20px;
        font-weight: bold;
      }

      .description {
        ${customMedia.lessThan("tablet")`
        text-align:center;
        
        `}
      }

      ${customMedia.lessThan("tablet")`
          height:100px;
          align-items:center;
          justify-content:center;
          width:100%;
          padding:0px;
          margin-top:40px;
        
      `}
    }
    .containerButtons {
      display: flex;
      width: 40%;
      justify-content: flex-end;
      align-items: center;
      gap: 15px;

      ${customMedia.lessThan("tablet")`
      width:100%;
        justify-content:center;
        
      `}

      button {
        font-size: 14px;
        display: flex;
        width: 220px;
        border: 0px;
        height: 50px;
        justify-content: center;
        align-items: center;
        transition: 0.3s;
        font-weight: bold;

        cursor: pointer;

        &:hover {
        }

        &.configure {
          background: #ccc;
          &:hover {
            background: #ccc;
          }
        }

        span {
          width: 25px;
          margin-left: 10px;
          svg {
            width: 25px;
          }
        }
      }
    }
  }
`;

export const ContainerPhotobookFunctions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 80%;
  max-width: 1640px;

  ${customMedia.lessThan("900px")`
          width: 90%;
        
      `}

  .containerFunctionButtons {
    display: flex;
    width: 100%;
    border-bottom: 4px solid var(--default-color);

    ${customMedia.lessThan("1016px")`
          flex-direction:column;
        
      `}

    button {
      border: 0px;
      background: white;
      width: 200px;
      padding: 10px 2px;
      transition: 0.3s;
      font-weight: 600;
      border: solid 2px transparent;
      border-bottom: 0px solid transparent !important;
      ${customMedia.lessThan("1016px")`
        width:50%;
        
      `}

      :hover {
        border: solid 2px var(--default-color);
      }

      &.active {
        background: var(--default-color);
        color: var(--title-modal-color);
        font-weight: bold;
      }
    }

    .containerUnlockedButtons {
      display: flex;

      ${customMedia.lessThan("1016px")`
        width:100%;
        
      `}
    }

    .containerFirstButtons {
      display: flex;

      ${customMedia.lessThan("1016px")`
        width:100%;
        
      `}
    }
  }
`;

export const ContainerDataFunctions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-height: 65vh;
  overflow: auto;

  .boxNothing {
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .boxAddNewPhotobook {
    display: flex;
    width: 100%;
    background: #f4f3f4;
    padding: 20px;
    align-items: center;
    margin-top: 10px;
    gap: 30px;
    font-weight: bold;

    .containerImage {
      display: flex;
      width: 40px;
      cursor: pointer;

      svg {
        width: 100%;
        transition: 0.3s;
        :hover {
          // color: #b9cb96;
        }
      }
    }
  }
  .containerBoxPhotobook {
    display: flex;
    flex-direction: column;
    max-height: 500px;
    overflow: auto;
    gap: 10px;
    margin-top: 10px;
  }

  .containerText {
    min-height: 100px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

export const closeButton = styled.span`
  font-size: 25px;
  display: flex;
  color: var(--tile-color);
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
    color: var(--tile-color);
  }
`;

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
