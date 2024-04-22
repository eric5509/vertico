import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "../Components/Nav";

const myFont = localFont({ src: "../assets/fonts/Poppins-Medium.ttf" });

export const metadata: Metadata = {
  title: "Reputable",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={myFont.className}>
        <div className="fixed top-0 left-0 w-screen z-[5000000000] h-20">
          <Nav />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
