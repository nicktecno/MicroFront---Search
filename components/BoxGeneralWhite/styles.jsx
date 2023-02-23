import styled from "styled-components";
import { generateMedia } from "styled-media-query";

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

export const whiteContainer = styled.div`
  display: none;

  ${customMedia.lessThan("tablet")` 
      z-index:7;
	    display: flex;
		  align-items: center;
		  justify-content:center;
      width: 100%;
      height: 61px;
      background-color: #fff;
      position: fixed;
      bottom: 0;
      box-shadow: rgb(32 31 31 / 26%) 1px 2px 16px;
    `}
  ${customMedia.lessThan("tablet")`
		  bottom: 80px;
      height: 61px;
		`}
`;
