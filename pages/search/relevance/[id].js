import Link from "next/link";
export default function Relevance({ results }) {
  console.log(results[1].id);
  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <Link href={`/posts/${result.id}`}>{result.title}</Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${params.id}&page=1&orderby=relevance`
  );

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return { props: { results: data.data, par: params.id } };
  } catch (data) {
    return { notFound: true };
  }
};
export const getStaticPaths = async () => {
  const paths = [{ params: { id: "" } }];

  return {
    paths,
    fallback: "blocking",
  };
};
