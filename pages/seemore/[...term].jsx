import SearchPage from "../../PagesComponents/Search/index";

export default function SeeMorePage(props) {
  return <SearchPage term={props?.term} routeUrl={props?.resolvedUrl} />;
}

export async function getServerSideProps({ params, resolvedUrl }) {
  const { term } = params;

  return {
    props: {
      term,
      resolvedUrl,
    },
  };
}
