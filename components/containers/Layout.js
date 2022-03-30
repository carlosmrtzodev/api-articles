import Container from "./Container";
import Header from "../elements/Header";
import Footer from "../elements/Footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
