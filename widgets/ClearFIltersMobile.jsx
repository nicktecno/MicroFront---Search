import React from "react";
import * as S from "./styleClearFilter";

import {
  connectCurrentRefinements,
  ClearRefinements,
} from "react-instantsearch-dom";
import { useRouter } from "next/router";
import { useLang } from "../Context/LangContext";

const ClearFiltersMobile = ({ items, refine }) => {
  const { routeTranslations } = useLang();
  const history = useRouter();

  function onClick() {
    refine(items);
    document.body.classList.remove("filtering");
    history.push("/search");
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
        <div className="nenhumFiltro" onClick={onClick}>
          {routeTranslations !== false &&
            routeTranslations?.labels?.buttonModal03}
        </div>
      )}
    </S.ContainerClear>
  );
};

export default connectCurrentRefinements(ClearFiltersMobile);
