import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const ContainerClear = styled.div`
  .nenhumFiltro {
    width: 100%;
    text-align: center;
    align-items: center;
    padding: 12px;
    font-weight: bold;
    background: var(--bt-positive-color);
    color: var(--bt-positive-text-color);
    cursor: pointer;
    :hover {
      background: var(--bt-positive-color-hover);
      color: var(--bt-positive-text-color-hover);
    }
  }
`;
