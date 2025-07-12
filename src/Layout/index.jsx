import Container from "../components/Container";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
