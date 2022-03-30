import Main from "./Main";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
