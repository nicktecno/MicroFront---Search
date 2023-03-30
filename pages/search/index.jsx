import SearchPage from "../../PagesComponents/Search/index";

export default function Search(props) {
  return <SearchPage routeUrl={props?.resolvedUrl} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  return {
    props: {
      resolvedUrl,
    },
  };
}
