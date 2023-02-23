import "react-toastify/dist/ReactToastify.min.css";
import { useLang } from "../../Context/LangContext";

import apiUnlogged from "../../services/apiUnlogged";

import SearchComponent from "./searchPage";

const SearchPage = (props) => {
  const { routeTranslations } = useLang();
  const appAlgoliaIndexSearch =
    process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_INDEX_SEARCH;

  return (
    <>
      <SearchComponent
        apiUnlogged={apiUnlogged}
        routeTranslations={routeTranslations}
        appAlgoliaIndexSearch={appAlgoliaIndexSearch}
        ssrData={props}
      />
    </>
  );
};

export default SearchPage;
