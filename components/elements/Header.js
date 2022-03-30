import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/">
          <a className="header__container-logo">
            <FaHeartbeat />
            Salud y Nutrición
          </a>
        </Link>
      </div>
    </header>
  );
}
