import { connectPagination } from "react-instantsearch-dom";

const Pagination = ({ refine, handleOrderMobile, routeTranslations }) => (
  <div className="title">
    <div
      className="MenorMaior positiveButton"
      style={{ marginBottom: "10px", padding: "10px" }}
      onClick={() => {
        refine(1);

        handleOrderMobile("_asc");
      }}
    >
      {routeTranslations !== false && routeTranslations?.labels?.labelModal02}
    </div>
    <div
      className="MaiorMenor positiveButton"
      style={{ marginBottom: "10px", padding: "10px" }}
      onClick={() => {
        refine(1);
        handleOrderMobile("");
      }}
    >
      {routeTranslations !== false && routeTranslations?.labels?.labelModal03}
    </div>
  </div>
);

const SelectFilterPaginationMobileSearch = connectPagination(Pagination);
export default SelectFilterPaginationMobileSearch;
