export default function Button({ children, type }) {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
}
