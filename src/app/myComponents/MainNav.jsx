import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      > Home
      </Link>

      <Link
        href="https://dhnz.short.gy/discussion"
        className="text-sm font-medium transition-colors hover:text-primary"
      > Discussion Topics
      </Link>

      <Link
        href="https://dhnz.short.gy/about"
        className="text-sm font-medium transition-colors hover:text-primary"
      > About & Contact Me
      </Link>

      
    </nav>
  );
}
