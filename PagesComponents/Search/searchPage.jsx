import React, { useState, useRef, useEffect } from "react";

import FiltersSearchAlgolia from "../../components/FiltersSearchAlgolia";
import ListSearchProducts from "../../components/ListSearchProducts";

import { SortAlt2 } from "@styled-icons/boxicons-regular/SortAlt2";

import {
  ClearRefinements,
  HitsPerPage,
  Configure,
  InstantSearch,
  RefinementList,
} from "react-instantsearch-dom";
import { NoResults } from "../../widgets";

import * as S from "./styles";

import BoxGeneralWhite from "../../components/BoxGeneralWhite";

function SearchComponent({
  ssrData,
  routeTranslations,
  apiUnlogged,
  appAlgoliaIndexSearch,
}) {
  const headerRef = useRef(null);
  const [allCategories, setAllCategories] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState(false);
  const [order, setOrder] = useState("_asc");
  const [orderState, setOrderState] = useState("inactive");
  const [loading, setLoading] = useState(false);

  async function getMenu() {
    try {
      if (allCategories === false) {
        setLoading(true);
        const { data: response } = await apiUnlogged.get(
          "/descendant-categories"
        );

        if (response.data.filter((filtro) => filtro.name !== "Root")) {
          if (ssrData.searchState.hierarchicalMenu !== undefined) {
            const categoryInfo = response.data
              .filter((filtro) => filtro.name !== "Root")
              ?.filter(({ name }) => {
                return (
                  name.split(" ").join("+").toLowerCase() ===
                  ssrData.searchState.hierarchicalMenu[
                    "son_categories.lvl0"
                  ].toLowerCase()
                );
              });

            setAllCategories(response.data);

            setCategoryInfo({
              color: categoryInfo[0].color,
              banner: categoryInfo[0].banner,
            });
          } else {
            const categoryInfo = response.data
              .filter((filtro) => filtro.name !== "Root")
              ?.filter(({ name }) => {
                return (
                  name.split(" ").join("+").toLowerCase() ===
                  ssrData.term[0].toLowerCase()
                );
              });

            setAllCategories(response.data);

            setCategoryInfo({
              color: categoryInfo[0].color,
              banner: categoryInfo[0].banner,
            });
          }
        }
      } else {
        if (allCategories !== false && allCategories.length > 0) {
          const categoryInfo = allCategories
            .filter((filtro) => filtro.name !== "Root")
            ?.filter(({ name }) => {
              return (
                name.split(" ").join("+").toLowerCase() ===
                ssrData.searchState.hierarchicalMenu[
                  "son_categories.lvl0"
                ].toLowerCase()
              );
            });

          setCategoryInfo({
            color: categoryInfo[0].color,
            banner: categoryInfo[0].banner,
          });
        }
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMenu();
  }, [ssrData.searchState?.hierarchicalMenu]);

  // resetar busca sempre que entrar nela

  function openFilters() {
    document.body.classList.add("filtering");
    window.scrollTo(0, 0);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("click", onClick);
  }

  function closeFilters() {
    document.body.classList.remove("filtering");
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("click", onClick);
  }

  function onKeyUp(event) {
    if (event.key !== "Escape") {
      return;
    }

    closeFilters();
  }

  function onClick(event) {
    if (event.target !== headerRef.current) {
      return;
    }

    closeFilters();
  }

  function handleOrder(e) {
    setOrder(e.target.value === "_asc" ? "" : "_asc");
  }

  function handleOrderMobile(e) {
    setOrder(e === "_asc" ? "" : "_asc");

    document.body.style.overflow = "auto";
    setOrderState("inactive");
  }
  const { indexName, ...rest } = ssrData;

  return (
    <>
      {" "}
      <S.GeneralContainer>
        {" "}
        <InstantSearch indexName={appAlgoliaIndexSearch + order} {...rest}>
          <S.OrderingModal className={orderState}>
            <S.Transparent
              onClick={() => {
                document.body.style.overflow = "auto";
                setOrderState("inactive");
              }}
            />
            <S.OrderingCenter>
              <div className="header">
                {routeTranslations !== false &&
                  routeTranslations?.labels?.labelModal01}
              </div>
              <div className="title">
                <div
                  className="decreasing positiveButton"
                  onClick={() => handleOrderMobile("_dec")}
                >
                  {routeTranslations !== false &&
                    routeTranslations?.labels?.labelModal02}
                </div>
                <div
                  className="increasing positiveButton"
                  onClick={() => handleOrderMobile("_asc")}
                >
                  {routeTranslations !== false &&
                    routeTranslations?.labels?.labelModal03}
                </div>
              </div>
              <div className="buttonsContainer ">
                <div
                  onClick={() => {
                    document.body.style.overflow = "auto";
                    setOrderState("inactive");
                  }}
                  className="buttonClass negativeButton"
                >
                  {routeTranslations !== false &&
                    routeTranslations?.labels?.buttonModal01}
                </div>
              </div>
            </S.OrderingCenter>
          </S.OrderingModal>

          <S.ButtonOrdenar
            onClick={() => {
              document.body.style.overflow = "hidden";
              setOrderState("active");
            }}
          >
            <SortAlt2 />
            {routeTranslations !== false && routeTranslations?.labels?.button01}
          </S.ButtonOrdenar>

          {ssrData.routeUrl?.includes("search") ||
          ssrData.routeUrl?.includes("seemore") ? (
            <S.GeneralSearch>
              <span>
                <h4>
                  {ssrData.term !== undefined ? (
                    <>
                      {routeTranslations !== false &&
                        routeTranslations?.labels?.label01}
                      <span>{ssrData.term[0]}</span>
                    </>
                  ) : (
                    <>
                      {routeTranslations !== false &&
                        routeTranslations?.labels?.label01}
                      <span>
                        {routeTranslations !== false &&
                          routeTranslations?.labels?.label02}
                      </span>
                    </>
                  )}
                </h4>
              </span>
            </S.GeneralSearch>
          ) : ssrData.routeUrl?.includes("category") ? (
            <S.CategorySearch
              style={{
                background: categoryInfo.banner
                  ? `url(${categoryInfo.banner})`
                  : categoryInfo.color,
              }}
              size={categoryInfo.banner ? "200px" : "65px"}
              sizeTitle={categoryInfo.banner ? "30px" : "18px"}
            >
              <h4
                style={{
                  color:
                    categoryInfo.color !== "" && categoryInfo.color !== null
                      ? categoryInfo.color
                      : "#000",
                }}
              >
                {ssrData.term !== undefined && routeTranslations !== false
                  ? routeTranslations?.labels?.label01
                  : ""}
                {ssrData.term !== undefined && (
                  <span>
                    {ssrData.searchState.hierarchicalMenu !== undefined
                      ? ssrData.searchState.hierarchicalMenu[
                          "son_categories.lvl0"
                        ]
                      : ssrData.term === undefined
                      ? ""
                      : ssrData.term.length > 1
                      ? ssrData.term[1].replace(/\+/g, " ")
                      : ssrData.term[0]?.replace(/\+/g, " ")}
                  </span>
                )}
              </h4>
            </S.CategorySearch>
          ) : (
            <S.GeneralSearch>
              <span>
                <h4>
                  {ssrData.term !== undefined ? (
                    <>
                      {routeTranslations !== false &&
                        routeTranslations?.labels?.label01}
                      <span>{ssrData.term[0]}</span>
                    </>
                  ) : (
                    <></>
                  )}
                </h4>
              </span>
            </S.GeneralSearch>
          )}

          {ssrData.routeUrl?.includes("seemore") &&
            ssrData.term !== undefined && (
              <S.HideContainer>
                <RefinementList
                  attribute={ssrData.term[1]}
                  defaultRefinement={["Sim"]}
                />
              </S.HideContainer>
            )}

          {ssrData.routeUrl?.includes("category") ||
          ssrData.routeUrl?.includes("seemore") ? (
            <Configure filters="son_has_offers:true" />
          ) : (
            <Configure query={ssrData.term} filters="son_has_offers:true" />
          )}

          <div className="conteudo">
            <S.produtos>
              <S.MainContainer>
                <S.FacetsContainer>
                  <div className="containerClear">
                    <ClearRefinements
                      translations={{
                        reset: <>Limpar Filtros</>,
                      }}
                    />
                  </div>

                  <FiltersSearchAlgolia
                    openFilters={openFilters}
                    closeFilters={closeFilters}
                    slug={
                      ssrData.routeUrl?.includes("category") ? ssrData.term : ""
                    }
                  />
                </S.FacetsContainer>
                <S.ProductsContainer>
                  <S.FiltersOptions>
                    <S.ResultsPerPage className="changeSelect">
                      <HitsPerPage
                        className="container-option"
                        items={[
                          {
                            label: `${
                              routeTranslations !== false &&
                              routeTranslations?.labels?.label03
                            }`,
                            value: 8,
                          },
                          {
                            label: `${
                              routeTranslations !== false &&
                              routeTranslations?.labels?.label04
                            }`,
                            value: 16,
                          },
                          {
                            label: `${
                              routeTranslations !== false &&
                              routeTranslations?.labels?.label05
                            }`,
                            value: 32,
                          },
                        ]}
                        defaultRefinement={8}
                      />
                    </S.ResultsPerPage>
                    <S.OrderSelect>
                      <select onChange={handleOrder}>
                        <option value="">
                          {routeTranslations !== false &&
                            routeTranslations?.labels?.labelModal02}
                        </option>
                        <option value="_asc">
                          {routeTranslations !== false &&
                            routeTranslations?.labels?.labelModal03}
                        </option>
                      </select>
                    </S.OrderSelect>
                  </S.FiltersOptions>

                  <ListSearchProducts />

                  <NoResults />
                </S.ProductsContainer>
              </S.MainContainer>
            </S.produtos>
          </div>
        </InstantSearch>
      </S.GeneralContainer>
      <BoxGeneralWhite />
      <S.ContainerFooter>{/* <FooterSpecialRoutes /> */}</S.ContainerFooter>
    </>
  );
}

export default SearchComponent;
