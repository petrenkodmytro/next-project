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
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/app/favicon/favicon-32x32.png" />
      </head>
      <body className="">
        <Header/>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
