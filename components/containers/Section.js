export default function Section({ children }) {
  return (
    <>
      <section className="page__section">
        <div className="page__section-container">{children}</div>
      </section>
    </>
  );
}
