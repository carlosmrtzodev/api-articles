export default function Container({ children }) {
  return (
    <main className="main">
      <article className="article">{children}</article>
    </main>
  );
}
