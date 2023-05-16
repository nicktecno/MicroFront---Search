import SearchPage from "../../PagesComponents/Search/index";

export default function Search() {
  return <SearchPage />;
}

export async function getServerSideProps() {
  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Pesquisa de produto`;
  const metaKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;
  const metaDescription = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_DESCRIPTION;
  const metaKdt = `${process.env.NEXT_PUBLIC_REACT_APP_NAME} - Pesquisa de produto`;

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKdt,
        metaKeywords,
      },
    },
  };
}
