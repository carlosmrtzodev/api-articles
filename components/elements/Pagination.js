import Link from "next/link";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function Pagination({ page, params, pages, route }) {
  console.log(route, params);
  return (
    <>
      <ul className="search__pagination">
        {page > 1 && (
          <>
            <Link href={`/search/${page}/${params}/${route}`}>
              <a>
                <li className="search__pagination-links">
                  <FaAngleDoubleLeft />
                </li>
              </a>
            </Link>

            <Link
              href={`/search/${
                page === pages ? page - 2 : page - 1
              }/${params}/${route}`}
            >
              <a>
                <li className="search__pagination-links">
                  {page === pages ? page - 2 : page - 1}
                </li>
              </a>
            </Link>
          </>
        )}

        <Link
          href={`/search/${
            page === pages ? page - 1 : page
          }/${params}/${route}`}
        >
          <a>
            <li
              className={`search__pagination-links ${
                (page > 1 && page < pages) || page === 1
                  ? "search__pagination-links_active"
                  : null
              }`}
            >
              {page === pages ? page - 1 : page}
            </li>
          </a>
        </Link>

        <Link
          href={`/search/${
            page === pages ? page : page + 1
          }/${params}/${route}`}
        >
          <a>
            <li
              className={`search__pagination-links ${
                page === pages ? "search__pagination-links_active" : null
              }`}
            >
              {page === pages ? page : page + 1}
            </li>
          </a>
        </Link>

        {page === 1 && (
          <>
            <Link href={`/search/${page + 2}/${params}/${route}`}>
              <a>
                <li className="search__pagination-links">{page + 2}</li>
              </a>
            </Link>

            <Link href={`/search/${page + 3}/${params}/${route}`}>
              <a>
                <li className="search__pagination-links">{page + 3}</li>
              </a>
            </Link>
          </>
        )}

        {page < pages && (
          <Link href={`/search/${pages}/${params}/${route}`}>
            <a>
              <li className="search__pagination-links">
                <FaAngleDoubleRight />
              </li>
            </a>
          </Link>
        )}
      </ul>
    </>
  );
}
