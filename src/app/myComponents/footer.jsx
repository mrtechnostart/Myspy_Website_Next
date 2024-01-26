import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact US</Link>
              </li>
              <li>
                <Link href={"/terms"}>Terms & Condition</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
            <Link href={""}>
              <FaFacebook />
            </Link>
            <Link href={""}>
              <FaTwitter />
            </Link>
            <Link href={""}>
              <FaInstagram />
            </Link>
            <Link href={""}>
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <div className="pb-2">
          <p className="text-center">Get in touch for wisdom 😊</p>
        </div>
      </footer>
    </>
  );
}
