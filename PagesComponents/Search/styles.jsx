import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Delete } from "@styled-icons/typicons/Delete";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GeneralSearch = styled.div`
  width: 90%;
  height: 65px;
  margin: auto;
  background: #ffffff;

  h4 {
    font-size: 13px;
    color: black;
    padding-top: 40px;

    span {
      font-weight: bold;
    }
  }

  ${customMedia.lessThan("tablet")`
        height: 47px;
        position: relative;

        h4{
            color: black;
            padding-top: 16px;
            padding-left: 0px;
        }
        `}
`;

export const HideContainer = styled.div`
  display: none;
`;

export const CategorySearch = styled.div`
  width: 100%;
  height: ${(props) => props.size};
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--default-color);
  object-fit: cover;
  padding: 0px 50px;
  top: -10px;
  background-repeat: no-repeat;
  background-size: 100%;
  h4 {
    align-self: end;
    font-size: ${(props) => props.sizeTitle};

    span {
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  ${customMedia.lessThan("tablet")`
      height:150px;
        h4{
          padding-top: 10px;
          padding-left: 0px;
        }
    `}
  ${customMedia.lessThan("mobile")`
      h4{
          font-size:18px;
        }
      `}
`;

export const MainContainer = styled.div`
  display: flex;
  width: 90%;
  max-width: 2000px;
  align-self: center;
  justify-content: center;
  margin: auto;
`;

export const FacetsContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 30px;
  ${customMedia.lessThan("1050px")`
    width: 40%;
  `}
  ${customMedia.lessThan("tablet")`
    max-width: 0px;
    margin-right: 0px;
  `}



  div.containerClear {
    ${customMedia.lessThan("tablet")`
    display:none;
  `}
  }

  div.stopScrollMob {
    ${customMedia.lessThan("tablet")`
        position: fixed;
        top: 0;
        height: 100%;
        left: 0;
        width: 100%;
        z-index: -1;
        overflow-y: scroll;
        padding-top: 200px;
      `}
  }

  div.container-filters {
    ${customMedia.lessThan("tablet")`
      background: #fff;
      border-radius: 0;
      left: 0;
      min-height: 550px;
      max-width: none;
      position: fixed;
      top: 330px!important;
      padding: 15px 15px 150px;
      transform: translateY(120vh);
      transition: transform .3s cubic-bezier(.465,.183,.153,.946);
      width: 100%;
      will-change: transform;
      z-index: 9;
    `}

    div.ais-Panel {
      margin-bottom: 10px;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.08rem;
      line-height: 1.6;
      color: var(--font-color);

      div.ais-Panel-header {
        border: none;
        padding-bottom: 5px;
        margin-bottom: 10px;
        text-transform: uppercase;
        border-bottom: 1px solid #ddd;
      }
    }
  }

  button.filters-button {
    display: none;
    ${customMedia.lessThan("tablet")`
      align-items: center;
      background-color: var(--bt-positive-color);
      color: var(--bt-positive-text-color);
      border: none;
      border-radius: 0px;
      bottom: 90px;
      box-shadow: 0 4px 22px 0 #a09d918e;
      cursor: pointer;
      display: flex;
      font: inherit;
      font-size: 0.875rem;
      font-weight: bold;
      justify-content: center;
      left: 29%;
      min-height: 40px;
      min-width: 112px;
      position: fixed;
      z-index: 8;
      transform: translateX(-50%);
      transition: 0.3s;
    `}
    :hover {
      background-color: var(--bt-positive-color-hover);
    }
    svg {
      height: 14px;
      stroke: var(--bt-positive-text-color) !important;
      margin-right: 8px;
      width: 16px;
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  ${customMedia.lessThan("1050px")`
    width: 60%;
  `}
  ${customMedia.lessThan("tablet")`
    width: 100%;
  `}
`;

export const FiltersOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 20px;
  border-bottom: 1px solid black;

  ${customMedia.lessThan("tablet")`
    justify-content: center;
  `}

  ${customMedia.lessThan("mobile")`
  flex-direction:column;
  `}
`;

export const ResultsPerPage = styled.div`
  cursor: pointer;

  select {
    min-width: 250px !important;
    width: auto;
    font-size: 12px;
    padding: 10px;
    margin: 10px 0px;
    appearance: none;

    ${customMedia.lessThan("notebook")`
      min-width:220px !important;
      padding: 10px 10px 10px 0px;
    `}
  }

  ${customMedia.lessThan("tablet")`
      justify-content:center
      width:300px;
    `}

  ${customMedia.lessThan("mobile")`
      width:auto;
    `}
`;

export const OrderSelect = styled.div`
  display: flex;

  select {
    font-size: 12px;
    appearance: none;
    min-width: 200px;
    cursor: pointer !important;
    border: none;
    margin: 10px 0px;
    padding: 10px;
    background: url(/images/icon-errow-down.png) 95% center no-repeat !important;
  }

  ${customMedia.lessThan("tablet")`
      display:none;
    `}
`;

export const produtos = styled.div`
  display: flex;
  position: relative;
  padding: 50px 0px;
  justify-content: center;
  align-items: center;

  .container {
    ${customMedia.lessThan("1200px")`
      max-width:95%;
  `}
    ${customMedia.lessThan("1000px")`
      max-width:90% !important;
    `}
  }

  .clearRefinementsBody {
    ${customMedia.lessThan("899px")`
    display:none;
  `}
  }

  ${customMedia.lessThan("tablet")`
        position: relative;
        padding: 20px 0 150px;
        .direita{
            margin-left: 20px;
        }
    `}
`;

export const slider = styled.div`
  position: relative;
  top: -50px;
`;
export const imgitem = styled.div`
  width: 160px;
  height: 320px;

  img {
    width: 100%;
    height: auto;
  }

  h3 {
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
  }
  h4 {
    font-size: 12px;
    color: #929292;
    margin-left: 10px;
  }
  p {
    font-size: 10px;
    color: #ce171f;
    margin-left: 10px;
    margin-top: 10px;

    span {
      font-size: 14px;
    }
  }
  ${customMedia.lessThan("tablet")`
        width: 170px;
    `}
`;

export const caixaFiltro = styled.div`
  background-color: var(--default-color);

  padding: 5px 5px 5px 5px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 200px;
  margin: 20px 0px;
  font-size: 13px;

  ${customMedia.lessThan("899px")`
display:none;
`}

  ${customMedia.lessThan("tablet")`
max-width:100%;
width:100%;
`}

a {
    color: black !important;
  }

  svg {
    color: black;
  }
`;

export const deleteIcon = styled(Delete)`
  color: var(--title-color);
  height: 24px;
  width: 24px;
  display: inline-block;
  margin: 0px 5px;
  cursor: pointer;
`;

export const ButtonOrdenar = styled.div`
  display: none;
  ${customMedia.lessThan("tablet")`
    align-items: center;
    background: var(--bt-positive-color);
    color: var(--bt-positive-text-color);
    border: none;
    border-radius: 0px;
    bottom: 10px;
    box-shadow: 0 4px 22px 0 #a09d918e;
    cursor: pointer;
    display: flex;
    font: inherit;
    font-size: 0.875rem;
    font-weight: bold;
    justify-content: center;
    left: 75%;
    min-height: 40px;
    min-width: 112px;
    position: fixed;
    z-index: 8;
    transform: translateX(-50%);
    transition: 0.3s;
  

  :hover {
    background: var(--bt-positive-color-hover);
    color: var(--bt-positive-text-color-hover);
  }

  svg {
    height: 14px;

    margin-right: 8px;
    width: 16px;
  }
  `}

  ${customMedia.lessThan("tablet")`
    bottom: 90px;
`}
`;

export const OrderingModal = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      display: none;
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

  ${customMedia.lessThan("tablet")`
    width:100%;
    height:80vh;
    position:fixed;
    margin-top:90px;
    
  `}

  @media (min-height: 900px) and  (max-height: 1024px) {
    height: 100vh;
  }
`;

export const Transparent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const OrderingCenter = styled.div`
  display: none;
  width: 700px;
  height: 520px;
  background: white;
  text-align: center;
  color: 292728;
  flex-direction: column;
  position: absolute;
  z-index: 99999;

  .increasing {
    width: 100%;
    padding: 10px 50px 10px 50px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .decreasing {
    width: 100%;
    padding: 10px 50px 10px 50px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    margin-bottom: 20px;
  }

  ${customMedia.lessThan("900px")`
    display: flex;	
	`}

  ${customMedia.lessThan("tablet")`
    width:100%;
    height:100%;
    overflow:auto;    
  `}

	.header {
    display: flex;
    font-weight: 600;
    font-size: 20px;
    width: 100%;
    height: 50px;
    background: var(--default-color);
    color: var(--title-modal-color);
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .title {
    width: 100%;
    padding: 40px;
    min-height: 300px;
  }

  h3 {
    font-weight: 600;
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
  }

  .buttonsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    ${customMedia.lessThan("tablet")`
       padding: 40px;
       padding-top:10px;
       margin-bottom:20px;
  
    flex-direction:column-reverse;
  `}

    .buttonClass {
      width: 200px;
      padding: 10px 50px 10px 50px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: 600;
      ${customMedia.lessThan("tablet")`
        width:100%;
      `}
    }
  }
`;

export const GeneralContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  background: #ffffff;
`;

export const ContainerFooter = styled.div`
  display: flex;
  ${customMedia.lessThan("tablet")`
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
  `}
`;
