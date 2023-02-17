import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const BoxPhotobookConfigPhotobook = styled.a`
  display: flex;
  width: 100%;
  gap: 10px;
  height: 120px;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  border-bottom: 2px solid var(--default-color);
  transition: 0.3s;

  ${customMedia.lessThan("mobile")`
       height:auto;
       flex-direction:column;
       padding-bottom:10px;
    `}

  .containerLogoName {
    display: flex;
    align-items: center;
    width: 100%;

    ${customMedia.lessThan("mobile")`
      flex-direction:column;
      gap:10px;
    `}

    .boxLogo {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 90px;
      width: 90px;
      height: 90px;
      background: #ffffff;
      border: 1px solid #343a1c;

      img {
        width: auto;
        max-height: 100%;
        height: auto;
        max-width: 100%;
      }
      svg {
        width: 50px;
      }
    }
    .boxName {
      display: flex;
      align-items: center;
      width: 40%;
      min-height: 70px;

      max-height: 70px;
      overflow: auto;
      font-weight: bold;
      color: #343a1c;
      font-size: 20px;
      margin-left: 20px;
      margin-right: 30px;
      line-height: 25px;

      ${customMedia.lessThan("mobile")`
      justify-content:center;
      margin-left:0px;
      margin-right:0px;
      width:90%;
    `}
    }
    .boxDescription {
      display: flex;
      overflow: auto;
      width: 60%;
      max-height: 70px;
      font-size: 17px;
      ${customMedia.lessThan("mobile")`
      text-align:center;
      justify-content:center;
      width:90%;
      min-height:70px;
    `}
    }
  }
`;
