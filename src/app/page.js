import Section from "./myComponents/section";
// import Mailing from "./myComponents/mailing";
import Hero from "./myComponents/hero";
import Footer from "./myComponents/footer";
import Cursor from "./myComponents/cursor";
import NavBar from "./myComponents/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Cursor />
      <Hero />
      <Section />
      {/* <Mailing /> */}
      <Footer />
    </>
  );
}
