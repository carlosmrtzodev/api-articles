export default function Main({ children }) {
  return (
    <>
      <main className="page__main">
        <article className="page__article">{children}</article>
      </main>
    </>
  );
}
