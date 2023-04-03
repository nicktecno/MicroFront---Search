import { connectPagination } from "react-instantsearch-dom";

const Pagination = ({ refine, handleOrder, routeTranslations }) => (
  <select
    className="selectMaiorMenor"
    onChange={(e) => {
      refine(1);
      handleOrder(e);
    }}
  >
    <option value="_asc">
      {routeTranslations !== false && routeTranslations?.labels?.labelModal02}
    </option>
    <option value="">
      {routeTranslations !== false && routeTranslations?.labels?.labelModal03}
    </option>
  </select>
);

const SelectFilterPaginationDeskSearch = connectPagination(Pagination);
export default SelectFilterPaginationDeskSearch;
