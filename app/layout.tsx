import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Store App",
  description: "site with next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
        <footer className="text-center italic mb-2">
          Developed by{" "}
          <a href="https://github.com/petrenkodmytro" title="GitHub" className="underline underline-offset-4 hover:text-blue-600">
            Dmytro Petrnko
          </a>{" "}
        </footer>
      </body>
    </html>
  );
}
