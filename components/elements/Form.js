import Button from "./Button";
import { FaSearch } from "react-icons/fa";
export default function Form({ change, submit }) {
  return (
    <form className="form" onSubmit={submit}>
      <input
        className="input"
        onChange={change}
        placeholder="¿Qué estás buscando?"
      />

      <Button type="submit">
        <FaSearch />
      </Button>
    </form>
  );
}
