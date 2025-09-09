import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Raleway } from "next/font/google";

const RalewayFont = Raleway({
  subsets: ["latin"],
  weight: 'variable',
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
        className={`${RalewayFont} font-serif`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
