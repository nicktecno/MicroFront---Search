import styled from "styled-components";
import { generateMedia } from "styled-media-query";

// Refatorar esta merda de nomenclatura seguindo padrão de %
const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const ContainerProducts = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  cursor: pointer;

  ${customMedia.lessThan("tablet")`
  justify-content:center
  `}
`;

export const ContainerBotao = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 45px;

  ${customMedia.lessThan("899px")`
  margin-top: 40px;
  margin-bottom: 80px;
  
  `}

  button {
    border: 0px;
    padding: 10px 50px;
    transition: 0.3s;
  }
`;
