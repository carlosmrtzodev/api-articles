import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../../components/elements/Button";
import Loading from "../../components/elements/Loading";
import Section from "../../components/containers/Section";

const DynamicResults = dynamic(
  () => import("../../components/elements/Results"),
  { loading: () => <Loading /> }
);
export default function Post({ results }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{results.title}</title>
        <meta name="description" content={results.headline} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00A400" />
        <meta property="og:title" content={results.title} />
        <meta property="og:url" content={results.link} />
        <meta property="og:image" content={results.featured_media.large} />
        <meta property="og:description" content={results.headline} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Section>
        <div className="post__container">
          <Link href="/">
            <a>
              <Button type="button">
                <AiOutlineClose className="post__close-icon" />
              </Button>
            </a>
          </Link>

          <DynamicResults
            key={results.id}
            id={results.id}
            image={results.featured_media.large}
            title={results.title}
            categories={results.categories}
            headline={results.headline}
            excerpt={results.excerpt}
            author={results.author.name}
            post={true}
          />
        </div>
      </Section>
    </>
  );
}
export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/${params.id}`
  );

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return { props: { results: data } };
  } catch (data) {
    return { notFound: true };
  }
};
export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];

  return {
    paths,
    fallback: "blocking",
  };
};
