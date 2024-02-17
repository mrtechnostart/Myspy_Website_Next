"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import backgroudDark from "../../../public/Dark.jpg";
import backgroudLight from "../../../public/Light.jpg";
import Typewriter from "typewriter-effect";
export default function Hero() {
  const { theme } = useTheme();
  return (
    <>
      <div className="-z-10 absolute w-full ">
        <Image
          src={theme === "dark" ? backgroudDark : backgroudLight}
          className="h-[90vh] bg-cover opacity-50"
        />
      </div>
      <div className={`flex flex-col h-screen mx-20`}>
        <div className="flex h-40 items-end mb-3">
          <div className="flex flex-col md:flex-row">
            <h1 className="scroll-m-20 md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1">
              Hey there, it{"'s"}
            </h1>
            <h1 className="ml-0 md:ml-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
              <Typewriter
                options={{
                  strings: [
                    "Myspy",
                    "Madhusudhan",
                    "Maneswar",
                    "Captain X",
                    "Nicof",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
        <p className="">
          Divided by Personas, United by Purpose. Keep Calm, Website is Under
          Construction.
        </p>
      </div>
    </>
  );
}
