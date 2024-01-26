"use client";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Typewriter from "typewriter-effect";
export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-around h-screen mx-20">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex-1">
            Hello It{"'s"}:{" "}
            <Typewriter
              options={{
                strings: [
                  "CaptainX",
                  "Madhusudhan Pathak",
                  "MYSPY",
                  "Maneshwar",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
          </p>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="space-y-1 mt-4">
              <h4 className="text-md font-medium leading-none">Socials</h4>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>
                <FaLinkedin size="30" />
              </div>
              <Separator orientation="vertical" />
              <div>
                <FaSquareGithub size="30" />
              </div>
              <Separator orientation="vertical" />
              <div>
                <FaYoutube size="30" />
              </div>
            </div>
          </div>
        </div>
        {/* <Button variant="default">Click Here</Button> */}
      </div>
    </>
  );
}
