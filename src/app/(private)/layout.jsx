"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import NavBar from "../myComponents/NavBar";
import Cursor from "../myComponents/cursor";

export default function PrivateLayout({ children }) {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <NavBar />
        <Cursor />
        {children}
      </>
    );
  } else if (status === "loading") {
    return <>Loading</>;
  } else {
    redirect("/api/auth/signin");
  }
}
