import type { Metadata } from "next";
import './globals.css'

export const metadata: Metadata = {
  title: "Store App",
  description: "site with next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=''>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
