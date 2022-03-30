import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/router";
export default function Error({ text, notfound, redirect }) {
  const router = useRouter();

  redirect ? router.push(`/posts`) : null;
  return (
    <>
      <div className={`${notfound ? "page__error-container" : "page__error"}`}>
        <h4 className="page__error-message">{text}</h4>

        {notfound && (
          <div className="page__error-container_button">
            <Link href="/">
              <a>
                <Button type="button">Go to Home</Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
