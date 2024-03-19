import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <hr className="block mt-3 md:hidden md:mt-0" />
        <div className="container flex flex-wrap items-center justify-center px-4 py-2 md:py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4">
              <li>
                <Link href={"https://dhnz.short.gy/zeal"}>Zanny Zeal</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/about"}>Who am I</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/discussion"}>For Discussion</Link>
              </li>
              <li>
                <Link href={"https://dhnz.short.gy/connect"}>Wanna Connect</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-2 pt-3 md:pt-0">
          <p className="text-center font-serif font-semibold">
            Get in touch for Wisdom 😊
          </p>
        </div>
      </footer>
    </>
  );
}
