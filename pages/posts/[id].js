export default function Post({ results }) {
  console.log(results);
  return (
    <div>
      {results.title}
      {results.author.name}
    </div>
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
