import Link from "next/link";

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
                <Link href={"https://dhnz.short.gy/discussion"}>For Discussion</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/about"}>Who am I?</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/zeal"}>Zany Zeal</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/connect"}>Wanna Connect?</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-2">
          <p className="text-center font-serif font-semibold">Get in touch for wisdom 😊</p>
        </div>
      </footer>
    </>
  );
}
