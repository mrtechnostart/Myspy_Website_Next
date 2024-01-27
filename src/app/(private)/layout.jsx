"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function PrivateLayout({ children }) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>{children}</>;
  } else if (status === "loading") {
    return <>Loading</>;
  } else {
    redirect("/");
  }
}
