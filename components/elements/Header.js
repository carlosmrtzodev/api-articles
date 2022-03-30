import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <header className="page__header">
        <div className="page__header-container">
          <Link href="/">
            <a className="header__page-container_logo">
              <FaHeartbeat className="header__page-container_logo-icon" />
              Salud y Nutrición
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
