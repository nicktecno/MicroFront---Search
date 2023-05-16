import SearchPage from "../../PagesComponents/Search/index";

export default function SeeMorePage() {
  return <SearchPage />;
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  const title = `${process.env.NEXT_PUBLIC_REACT_APP_GENERAL_TITLE} - Veja mais`;
  const metaKeywords = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_KEYWORDS;
  const metaDescription = process.env.NEXT_PUBLIC_REACT_APP_GENERAL_DESCRIPTION;
  const metaKdt = `${process.env.NEXT_PUBLIC_REACT_APP_NAME} - Veja mais`;

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKdt,
        metaKeywords,
      },
      term,
    },
  };
}
