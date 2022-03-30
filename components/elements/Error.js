import Link from "next/link";
import Button from "./Button";
export default function Error({ text, notfound }) {
  return (
    <div className="error">
      <h3 className="error__message">{text}</h3>

      {notfound && (
        <div className="error__button">
          <Link href="/" passHref>
            <a>
              <Button type="button">Go to Home</Button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
