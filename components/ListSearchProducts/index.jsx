import { connectInfiniteHits } from "react-instantsearch-dom";
import CardSearchProduct from "../CardSearchProduct";
import * as S from "./style";
import { useEffect, useState } from "react";
import CardDefaultProduct from "../CardDefaultProduct";
import { useLang } from "../../Context/LangContext";

const InfiniteHits = ({ hits, hasMore, refineNext }) => {
  const [dataLayerState, setDataLayerState] = useState(false);
  const { routeTranslations } = useLang();

  useEffect(() => {
    if (window.dataLayer !== undefined) {
      if (hits.length > 0) {
        dataLayerTrigger();
      }
    } else {
      setDataLayerState(!dataLayerState);
    }
  }, [dataLayerState]);
  async function dataLayerTrigger() {
    const DadosProdutos = hits.map((produto) => ({
      name: produto.name,
      id: String(produto.id),
      price:
        produto.son_offers !== undefined && produto.son_offers !== null
          ? produto?.son_offers[0].price.toFixed(2).toString()
          : "Indisponível",
      brand: produto.brand,
      variant: produto.son_sku,
      category:
        produto.categories.lvl0 !== undefined
          ? produto.categories.lvl0.length === undefined
            ? produto.categories.lvl0
            : produto.categories.lvl0[1]
          : "Sem categoria",
    }));

    window.dataLayer.push({
      event: "internalSiteSearchView",
      userId:
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
        ) !== undefined &&
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
        ) !== null
          ? parseInt(
              localStorage.getItem(
                `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
              )
            )
          : "Sem Login",
      pageCategory: "search",
      pageTitle: "Result search page",

      impressions: DadosProdutos,
    });
  }

  return (
    <>
      <S.ContainerProducts>
        {hits.map((hit) => (
          <CardDefaultProduct key={hit.objectID} hit={hit} />
        ))}
      </S.ContainerProducts>

      <S.ContainerBotao>
        {hasMore && (
          <button
            className="positiveButton"
            disabled={!hasMore}
            onClick={refineNext}
          >
            {routeTranslations !== false && routeTranslations?.labels?.button02}
          </button>
        )}
      </S.ContainerBotao>
    </>
  );
};

const ListSearchProducts = connectInfiniteHits(InfiniteHits);

export default ListSearchProducts;
