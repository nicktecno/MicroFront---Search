import React from "react";
import { connectStats } from "react-instantsearch-dom";
import { formatNumber } from "./utils";

const ResultsNumberMobile = ({ nbHits }) => (
  <div>
    Encontramos <strong>{formatNumber(nbHits)}</strong> produto(s)
  </div>
);

export default connectStats(ResultsNumberMobile);
