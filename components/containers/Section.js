export default function Section({ children, title }) {
  return (
    <section className="section">
      <div className="section__container">
        <h1 className="section__title">{title}</h1>
        {children}
      </div>
    </section>
  );
}
