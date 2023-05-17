import { useRouter } from "next/router";
import React from "react";
import * as S from "./styleClearFilter";

import {
  connectCurrentRefinements,
  ClearRefinements,
} from "react-instantsearch-dom";

const ClearFiltersMobile = ({ items, refine, routeTranslations }) => {
  // const history = useRouter();

  function handleFilter() {
    refine(items);
    document.body.classList.remove("filtering");
    // history.push("/search");
  }

  return (
    <S.ContainerClear>
      {items.length >= 1 ? (
        <div>
          <ClearRefinements
            translations={{
              reset: `${
                routeTranslations !== false &&
                routeTranslations?.labels?.buttonModal02
              }`,
            }}
          />
        </div>
      ) : (
        <div className="nenhumFiltro" onClick={() => handleFilter()}>
          {routeTranslations !== false &&
            routeTranslations?.labels?.buttonModal03}
        </div>
      )}
    </S.ContainerClear>
  );
};

export default connectCurrentRefinements(ClearFiltersMobile);
