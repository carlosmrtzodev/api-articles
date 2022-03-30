import Error from "./Error";
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
export default function Search({ route }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    error ? setError(false) : null;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search === ""
      ? setError(true)
      : router.push(`/search/${1}/${search}/${route}`);
  };

  return (
    <>
      <h1 className="main__title">Articulos de Salud y Nutrición.</h1>

      <form className="form__search" onSubmit={handleSubmit}>
        <input
          className="form__search-input"
          onChange={handleChange}
          placeholder="¿Qué estás buscando?"
        />

        <Button type="submit">
          <FaSearch />
        </Button>
      </form>

      {error && (
        <Error text="Error: Necesitas escribir una búsqueda" notfound={false} />
      )}
    </>
  );
}
