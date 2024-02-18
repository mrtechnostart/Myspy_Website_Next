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
      <div className="-z-10 absolute w-full">
        <Image
          src={theme === "light" ? backgroudLight : backgroudDark}
          className="h-[90vh] bg-cover opacity-50"
        />
      </div>
      <div
        className={`flex flex-col h-screen items-center text-center justify-center my-36`}
      >
        <div className="flex h-40 items-end mb-0">
          <div className="flex flex-col md:flex-row">
            <h1 className="scroll-m-20 md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1 font-serif">
              Hey there, it{"'s"}
            </h1>
            <h1 className="ml-0 md:ml-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
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
        <p className="text-3xl italic font-serif font-">
          Divided by Personas, United by Purpose.
        </p>
        <p className="mt-3 text-center text-wrap mx-52">
          Keep Calm, Website is Under Construction. I have logically organised{" "}
          {`"myself"`} into Five Specific seta of traits and skills, mainly for
          self-management and efficiency. All of my Work/Creations are
          categorised accordingly {"(aka Persona-Wise)"}.
        </p>
      </div>
    </>
  );
}
