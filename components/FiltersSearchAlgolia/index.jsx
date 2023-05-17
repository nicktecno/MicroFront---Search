import React, { useEffect, useState } from "react";
import { useLang } from "../../Context/LangContext";

import {
  ClearFiltersMobile,
  PriceSlider,
  SaveFiltersMobile,
} from "../../widgets";

import apiFacets from "../../services/apiFacets";
import CustomRefinementListSearchMenuFilter from "../CustomRefinementListSearchMenuFilter";
import CustomHierarchicalSearchMenuFilterCategory from "../CustomHierarchicalSearchMenuFilterCategory";

import { Filter } from "@styled-icons/fa-solid/Filter";

const FiltersSearchAlgolia = ({
  openFilters,
  closeFilters,
  slug,
  companyId,
}) => {
  const { routeTranslations } = useLang();
  const [facets, setFacets] = useState(false);
  async function getFacets() {
    try {
      const { data: response } = await apiFacets.get(
        `/algolia/public/facets/company/${companyId} `
      );

      setFacets(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getFacets();
  }, []);

  return (
    <>
      <div className="stopScrollMob">
        <div className="container-filters">
          <CustomHierarchicalSearchMenuFilterCategory
            showParentLevel
            name={
              routeTranslations !== false && routeTranslations?.labels?.label06
            }
            attributes={[
              "son_categories.lvl0",
              "son_categories.lvl1",
              "son_categories.lvl2",
            ]}
            defaultRefinement={
              slug === undefined
                ? ""
                : slug.length > 1
                ? slug[1].replace(/\+/g, " ")
                : slug[0]?.replace(/\+/g, " ")
            }
            limit={50}
            sub={false}
          />

          <PriceSlider attribute="son_offers.price" />

          {facets !== false &&
            facets.length > 0 &&
            facets.map((facet, key) => (
              <CustomRefinementListSearchMenuFilter
                key={key}
                name={facet.name}
                attribute={facet.code}
                limit={50}
              />
            ))}
        </div>
      </div>

      <aside data-layout="mobile">
        <button
          className="filters-button"
          data-action="open-overlay"
          onClick={openFilters}
        >
          <Filter />
          {routeTranslations !== false &&
            routeTranslations?.labels?.buttonModal04}
        </button>
      </aside>

      <footer
        style={{ zIndex: "99999999" }}
        className="container-filters-footer"
        data-layout="mobile"
      >
        <div className="container-filters-footer-button-wrapper">
          <ClearFiltersMobile />
        </div>

        <div className="container-filters-footer-button-wrapper">
          <SaveFiltersMobile onClick={closeFilters} />
        </div>
      </footer>
    </>
  );
};

export default FiltersSearchAlgolia;
