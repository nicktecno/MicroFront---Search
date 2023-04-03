import { findResultsState } from "react-instantsearch-dom/server";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";

import SearchPage from "../../PagesComponents/Search/index";

export default function Search(props) {
  return <SearchPage term={props?.term} routeUrl={props?.resolvedUrl} />;
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  return {
    props: {
      term,
      resolvedUrl,
    },
  };
}
