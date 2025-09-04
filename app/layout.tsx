import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Roboto_Serif } from "next/font/google";

const RobotoSerif = Roboto_Serif({
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
        className={`${RobotoSerif} font-serif`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
