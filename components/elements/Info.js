import Link from "next/link";
import Button from "./Button";
export default function Info({ params, size }) {
  const relevance = "relevance";

  return (
    <>
      <div className="search__info">
        <Link href={`/search/${1}/${params}/${relevance}`}>
          <a>
            <Button type="button">Más relevantes</Button>
          </a>
        </Link>

        <p className="search__count">
          Se encontraron:{" "}
          <strong className="strong__medium">{size} Articulos</strong>
        </p>
      </div>
    </>
  );
}
