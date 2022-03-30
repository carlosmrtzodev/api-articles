import dynamic from "next/dynamic";
import Info from "../../../components/elements/Info";
import Error from "../../../components/elements/Error";
import Grid from "../../../components/containers/Grid";
import Search from "../../../components/elements/Search";
import Loading from "../../../components/elements/Loading";
import Section from "../../../components/containers/Section";
import Pagination from "../../../components/elements/Pagination";

const DynamicResults = dynamic(
  () => import("../../../components/elements/Results"),
  { loading: () => <Loading /> }
);

export default function SearchResults({ results, value, pagination }) {
  let page = Number(pagination);

  return (
    <>
      <Section>
        <Search />
      </Section>

      <Section>
        {results.size > 0 && results.data.length > 0 && page > 0 ? (
          <>
            <Info params={value} size={results.size} />

            <Grid>
              {results.data.map((result) => (
                <DynamicResults
                  key={result.id}
                  id={result.id}
                  image={result.featured_media.large}
                  title={result.title}
                  categories={result.categories}
                />
              ))}
            </Grid>

            <Pagination page={page} params={value} pages={results.pages} />
          </>
        ) : results.data.length > 0 ? (
          <Error text="¡No hay artículos relacionados con el término de búsqueda!" />
        ) : (
          <Error text="¡No existe la página a la que intentas ir!" />
        )}
      </Section>
    </>
  );
}
export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${params.value}&page=${params.page}`
  );

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        results: data,
        value: params.value,
        pagination: params.page,
      },
    };
  } catch (data) {
    return { notFound: true };
  }
};
export const getStaticPaths = async () => {
  const paths = [{ params: { page: "1", value: "" } }];

  return {
    paths,
    fallback: "blocking",
  };
};
