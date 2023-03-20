import { findResultsState } from "react-instantsearch-dom/server";
import qs from "qs";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import algoliasearch from "algoliasearch/lite";

import SearchPage from "../../PagesComponents/Search/index";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_SEARCH_API_KEY
);

const updateAfter = 700;

const createURL = (state) => `?${qs.stringify(state)}`;

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

const searchStateToURL = (searchState) =>
  searchState ? `${window.location.pathname}?${qs.stringify(searchState)}` : "";

const DEFAULT_PROPS = {
  searchClient,
  indexName: process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_INDEX_SEARCH,
};

export default function Search(props) {
  const [searchState, setSearchState] = useState(props.searchState);
  const router = useRouter();
  const debouncedSetState = useRef();

  useEffect(() => {
    if (router) {
      router.beforePopState(({ url }) => {
        setSearchState(pathToSearchState(url));
      });
    }
  }, [router]);

  return (
    <SearchPage
      {...DEFAULT_PROPS}
      searchState={searchState}
      resultsState={props?.resultsState}
      onSearchStateChange={(nextSearchState) => {
        clearTimeout(debouncedSetState.current);

        debouncedSetState.current = setTimeout(() => {
          const href = searchStateToURL(nextSearchState);

          router.push(href, href, { shallow: true });
        }, updateAfter);

        setSearchState(nextSearchState);
      }}
      createURL={createURL}
      term={props?.term}
      routeUrl={props?.resolvedUrl}
      useRouter={useRouter}
    />
  );
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  const searchState = pathToSearchState(resolvedUrl);
  const resultsState = await findResultsState(SearchPage, {
    ...DEFAULT_PROPS,
    searchState,
  });

  return {
    props: {
      resultsState: JSON.parse(JSON.stringify(resultsState)),
      searchState,
      term,
      resolvedUrl,
    },
  };
}
