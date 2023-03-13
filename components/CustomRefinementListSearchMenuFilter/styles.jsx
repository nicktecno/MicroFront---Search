import styled from "styled-components";

export const BoxTotal = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;

export const ContainerAttr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TouchableContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;

  .checkBox {
    display: flex;
    min-width: 20px;
    width: 20px;
    height: 20px;

    border: 1px solid black;

    &.active {
      background-color: var(--default-color);
    }
  }
`;

export const ContainerDataAttr = styled.div`
  flex-direction: row;

  display: flex;

  margin-left: ${(props) =>
    props.sub ? (props.subLevel2 ? "35px" : "25px") : "10px"};
  width: 100%;

  margin-top: 3px;
  margin-bottom: 3px;
  align-items: center;
`;

export const TextName = styled.div`
  width: 80%;
  display: flex;
  padding-right: 10px;
  flex-wrap: wrap;
  font-weight: ${(props) => (props.refined ? "bold" : "normal")};
`;

export const ContainerCount = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const TextCount = styled.div`
  min-width: 45px;
  display: flex;
  min-height: 30px;
  align-self: flex-end;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: var(--default-color);
`;
