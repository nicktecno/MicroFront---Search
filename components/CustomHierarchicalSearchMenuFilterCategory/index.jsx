import * as S from "./styles";

import { useState } from "react";
import { connectHierarchicalMenu, Panel } from "react-instantsearch-dom";
import { DownArrow } from "@styled-icons/boxicons-solid/DownArrow";

import { UpArrow } from "@styled-icons/boxicons-solid/UpArrow";

const HierarchicalMenu = function ({
  items,
  refine,
  createURL,
  currentRefinement,
  limit,
  showMore,
  translations,
  sub,
  defaultRefinement,
  name,
  subLevel2,
}) {
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
                    <S.Arrow sub={sub} subLevel2={subLevel2} className="arrows">
                      {item.isRefined ? (
                        <UpArrow size="12px" />
                      ) : (
                        <DownArrow size="12px" />
                      )}
                    </S.Arrow>

                    <S.ContainerDataAttr>
                      <S.TextName refined={item.isRefined}>
                        {item.label}
                      </S.TextName>
                      <S.ContainerCount>
                        <S.TextCount>{`${item.count}`}</S.TextCount>
                      </S.ContainerCount>
                    </S.ContainerDataAttr>
                  </S.TouchableContainer>
                  {item.items && (
                    <>
                      <HierarchicalMenu
                        items={item.items}
                        subLevel2={sub && true}
                        sub={true}
                        refine={refine}
                        limit={limit}
                        createURL={createURL}
                      />
                    </>
                  )}
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

const CustomHierarchicalSearchMenuFilterCategory =
  connectHierarchicalMenu(HierarchicalMenu);
export default CustomHierarchicalSearchMenuFilterCategory;
