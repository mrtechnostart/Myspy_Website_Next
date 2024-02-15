"use client";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <div className="flex items-left justify-left h-screen mx-20">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex-1">
            Hey there, it{"'s"}
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
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Divided by Personas, United by Purpose.
          </p>
        </div>
      </div>
    </>
  );
}
