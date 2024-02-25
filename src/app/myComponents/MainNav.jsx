"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useScreenSize } from "../customHooks/useScreenSize";

export function MainNav({ className, ...props }) {
  const currentWidth = useScreenSize();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        {" "}
        Home
      </Link>
      {currentWidth > 700 && (
        <>
          {" "}
          <Link
            target="_blank"
            href="https://dhnz.short.gy/discussion"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {" "}
            For Discussion
          </Link>
          <Link
            href="https://dhnz.short.gy/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {" "}
            Who am I?
          </Link>
          <Link
            href="https://dhnz.short.gy/zeal"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {" "}
            Zany Zeal
          </Link>
          <Link
            href="https://dhnz.short.gy/connect"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {" "}
            Wanna Connect?
          </Link>
        </>
      )}
    </nav>
  );
}
