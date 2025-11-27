import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Raleway, Lato } from "next/font/google";

const RalewayFont = Raleway({
  subsets: ["latin"],
  weight: 'variable',
});

const LatoFont = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Seen By Liz",
  description: "Seen By Liz Photography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${LatoFont.className} font-serif`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
