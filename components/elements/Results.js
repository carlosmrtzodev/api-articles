import Link from "next/link";
import Image from "next/image";
export default function Results({
  id,
  image,
  title,
  categories,
  post,
  excerpt,
  headline,
  link,
  author,
}) {
  return (
    <>
      <div className="search__results-container">
        <Link href={`${post ? link : `/posts/${id}}`}`}>
          <a>
            <div className="search__results-container_image">
              <Image src={image} alt={title} width={1024} height={640} />
            </div>

            <div className="search__results-container_info">
              <ul className="search__results-container_categories">
                {categories.map((category) => (
                  <li
                    key={category.id}
                    className="search__results-container_categories-category"
                  >
                    {category.name}
                  </li>
                ))}
              </ul>

              <h3 className="search__results-container_title">{title}</h3>

              {post && (
                <>
                  <p className="search__results-container_headline">
                    {headline}
                  </p>

                  <hr />

                  <p className="search__results-container_excerpt">{excerpt}</p>

                  <hr />

                  <div className="search__results-container_badge">
                    <span className="search__results-container_badge-author">
                      <strong className="strong__medium">Autor:</strong>{" "}
                      {author}
                    </span>
                  </div>
                </>
              )}
            </div>
          </a>
        </Link>
      </div>
    </>
  );
}
