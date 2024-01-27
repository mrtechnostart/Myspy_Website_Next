"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import NavBar from "../myComponents/NavBar";

export default function PrivateLayout({ children }) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <NavBar />
        {children}
      </>
    );
  } else if (status === "loading") {
    return <>Loading</>;
  } else {
    redirect("/");
  }
}
