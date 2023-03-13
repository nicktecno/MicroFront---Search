import * as S from "./styles";

import { useState } from "react";
import { connectRefinementList, Panel } from "react-instantsearch-dom";

const RefinementList = function ({ items, refine, createURL, name, limit }) {
  const [extended, setExtended] = useState(false);

  return (
    <>
      {items.length > 0 && (
        <Panel header={name}>
          {items.map(
            (item, i) =>
              (i < limit || extended) && (
                <S.ContainerAttr key={item.label}>
                  <S.TouchableContainer
                    onClick={() => {
                      createURL(item.value);
                      refine(item.value);
                    }}
                  >
                    <div
                      className={
                        item.isRefined ? "checkBox active" : "checkBox"
                      }
                    />

                    <S.ContainerDataAttr>
                      <S.TextName refined={item.isRefined}>
                        {item.label}
                      </S.TextName>
                      <S.ContainerCount>
                        <S.TextCount>{`${item.count}`}</S.TextCount>
                      </S.ContainerCount>
                    </S.ContainerDataAttr>
                  </S.TouchableContainer>
                </S.ContainerAttr>
              )
          )}
          {/* {showMore && (
        <div className="containerButton">
          <button
            onClick={() => {
              setExtended(!extended);
            }}
            className="ais-RefinementList-showMore"
          >
            {translations["showMore"](extended)}
          </button>
        </div>
      )} */}
        </Panel>
      )}
    </>
  );
};

const CustomRefinementListSearchMenuFilter =
  connectRefinementList(RefinementList);
export default CustomRefinementListSearchMenuFilter;
