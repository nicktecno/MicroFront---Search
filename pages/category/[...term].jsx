import SearchPage from "../../PagesComponents/Search/index";
import apiUnlogged from "../../services/apiUnlogged";

export default function CategoryPage() {
  return <SearchPage />;
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  const term1Edited = term[0].split("+").join(" ");
  const term2Edited =
    term[1] !== undefined
      ? term[1].split("+").join(" ").split(">")[1].replace(" ", "")
      : "";

  let content = [];
  let contentFiltered = [];
  try {
    const { data: response } = await apiUnlogged.get("/descendant-categories");
    content = response.data;

    if (term.length > 1) {
      contentFiltered = response.data
        .filter((category) => category.name === term1Edited)[0]
        .children.filter((subCategory) => subCategory.name === term2Edited)[0];
    } else {
      contentFiltered = response.data.filter(
        (category) => category.name === term1Edited
      )[0];
    }
  } catch (e) {
    return { redirect: { destination: "/404", permanent: false } };
  }

  const title = contentFiltered.meta_title;
  const metaKeywords = contentFiltered.meta_keywords;
  const metaDescription = contentFiltered.meta_description;
  const metaKdt = `${process.env.NEXT_PUBLIC_REACT_APP_NAME} - Pesquisa por Categorias`;

  return {
    props: {
      seo: {
        title,
        metaDescription,
        metaKdt,
        metaKeywords,
      },
      term,
      contentFiltered,
      content,
    },
  };
}
