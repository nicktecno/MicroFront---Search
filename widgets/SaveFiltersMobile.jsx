import React from "react";
import { connectStats } from "react-instantsearch-dom";
import { useLang } from "../Context/LangContext";
import { formatNumber } from "./utils";

const SaveFiltersMobile = ({ nbHits, onClick }) => {
  const { routeTranslations } = useLang();
  return (
    <>
      <button className="button button-primary" onClick={onClick}>
        {routeTranslations !== false &&
          routeTranslations?.labels?.buttonModal05}
        ({formatNumber(nbHits)})
        {routeTranslations !== false &&
          routeTranslations?.labels?.buttonModal06}
      </button>
      <button className="bt-close" onClick={onClick}>
        x
      </button>
    </>
  );
};

export default connectStats(SaveFiltersMobile);
