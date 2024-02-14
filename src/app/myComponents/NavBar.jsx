"use client";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./DarkMode";
import { MainNav } from "./MainNav";
export default function NavBar() {
  const { data, status } = useSession();

  console.log(data, status);
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
