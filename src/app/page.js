import Section from "./myComponents/section";
// import Mailing from "./myComponents/mailing";
import Navbar from "@/components/NavBar";
import Cursor from "./myComponents/cursor";
import Footer from "./myComponents/footer";
import Hero from "./myComponents/hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Cursor />
      <Hero />
      <Section />
      {/* <Mailing /> */}
      <Footer />
    </>
  );
}
