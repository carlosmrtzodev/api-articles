import Head from "next/head";
import dynamic from "next/dynamic";
import Error from "../components/elements/Error";
import Grid from "../components/containers/Grid";
import Search from "../components/elements/Search";
import Loading from "../components/elements/Loading";
import Section from "../components/containers/Section";
import Subtitle from "../components/elements/Subtitle";

const DynamicResults = dynamic(() => import("../components/elements/Results"), {
  loading: () => <Loading />,
});
export default function All({ results }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Últimos artículos</title>
        <meta
          name="description"
          content="API Rest Website with search products in Next.js with Tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00A400" />
        <meta property="og:title" content="Últimos artículos" />
        <meta property="og:url" content="pomodoro-app-sage.vercel.app/" />
        <meta property="og:image" content="/OGimage.png" />
        <meta
          property="og:description"
          content="API Rest Website with search products in Next.js with Tailwind."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Section>
        <Search route="" />

        <Error text="¡No hay artículos relacionados con el término de búsqueda!" />
      </Section>

      <Section>
        <Subtitle>Últimos artículos publicados</Subtitle>

        <Grid>
          {results.data.map((result) => (
            <DynamicResults
              key={result.id}
              id={result.id}
              image={result.featured_media.large}
              title={result.title}
              categories={result.categories}
              headline={false}
              excerpt={false}
              link={false}
              author={false}
              post={false}
            />
          ))}
        </Grid>
      </Section>
    </>
  );
}
export const getStaticProps = async () => {
  const response = await fetch(
    `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc`
  );

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return {
      props: {
        results: data,
      },
    };
  } catch (data) {
    return { notFound: true };
  }
};
