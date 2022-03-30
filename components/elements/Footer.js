import Link from "next/link";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="page__footer">
        <div className="page__footer-container">
          <Link href="https://github.com/carlosmrtzodev" passHref>
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="page__footer-container_github"
            >
              <FaGithub className="page__footer-container_github-icon" />
              carlosmrtzodev
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
}
