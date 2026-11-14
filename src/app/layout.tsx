import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

// Set the portfolio page title and description.
export const metadata: Metadata = {
  title: "prachod kakatur",
  description: "software engineer & creative developer",
};

// Render the shared portfolio navigation, privacy link, and analytics.
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
        <footer className="site-footer">
          <div className="container">
            <Link href="/privacy">privacy</Link>
          </div>
        </footer>
        {process.env.VERCEL_ENV === "production" && (
          <Script
            src="https://analytics.azurlaneecgc.com/script.js"
            strategy="afterInteractive"
            data-website-id="199735cb-0348-47e8-83da-4b5cf4368e96"
            data-domains="portfolio-prachods-projects.vercel.app"
            data-do-not-track="true"
            data-exclude-search="true"
            data-exclude-hash="true"
          />
        )}
      </body>
    </html>
  );
}
