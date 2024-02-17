"use client";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <div className="flex h-screen mx-20">
        <div className="flex h-80 items-center">
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row">
              <h1 className="scroll-m-20  md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1">
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

            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Divided by Personas, United by Purpose.
              Keep Calm, Website is Under Construction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
