import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AuthProvider from "./myComponents/authProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhusudhan Pathak",
  description: "Get in touch for wisdom",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={cn(inter.className, "dark")}>{children}</body>
      </html>
    </AuthProvider>
  );
}
