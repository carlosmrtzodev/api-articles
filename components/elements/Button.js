export default function Button({ children, type }) {
  return (
    <>
      <button type={type} className="button__primary">
        {children}
      </button>
    </>
  );
}
