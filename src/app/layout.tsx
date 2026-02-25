import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "prachod kakatur",
  description: "software engineer & creative developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">prachod</Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">home</Link>
              <Link href="/experience" className="nav-link">experience</Link>
              <Link href="/gallery" className="nav-link">gallery</Link>
              <Link href="/contact" className="nav-link">contact</Link>
            </div>
          </div>
        </nav>
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
