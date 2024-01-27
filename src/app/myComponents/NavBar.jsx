"use client";
import { useSession } from "next-auth/react";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./DarkMode";
export default function NavBar() {
  const { data, status } = useSession();

  console.log(data, status);
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          {status === "authenticated" ? (
            <UserNav data={data.user} />
          ) : (
            <Button variant="outline" asChild>
              <Link href="/api/auth/signin">Login</Link>
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
