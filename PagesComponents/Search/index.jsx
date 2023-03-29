import "react-toastify/dist/ReactToastify.min.css";
import { useLang } from "../../Context/LangContext";

import apiUnlogged from "../../services/apiUnlogged";

import SearchComponent from "./searchPage";

const SearchPage = (props) => {
  const { routeTranslations } = useLang();
  const appAlgoliaIndexSearch =
    process.env.NEXT_PUBLIC_REACT_APP_ALGOLIA_INDEX_SEARCH;
  const mktName = process.env.NEXT_PUBLIC_REACT_APP_NAME;
  const appImagesUrl = process.env.NEXT_PUBLIC_REACT_APP_IMAGES_URL;
  const companyId = process.env.NEXT_PUBLIC_REACT_APP_COMPANY_ID;

  return (
    <>
      <SearchComponent
        apiUnlogged={apiUnlogged}
        routeTranslations={routeTranslations}
        appAlgoliaIndexSearch={appAlgoliaIndexSearch}
        ssrData={props}
        mktName={mktName}
        appImagesUrl={appImagesUrl}
        companyId={companyId}
        useRouter={props.useRouter}
      />
    </>
  );
};

export default SearchPage;
