import type { Metadata } from "next";
import Link from "next/link";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cloud Corp | Host the Future",
  description: "Cloud Corp Industries, LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Link href="/">Home</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/scale">Scale</Link>
          <Link href="/reliability">Reliability</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
