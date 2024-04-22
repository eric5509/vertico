import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import Nav from "../Components/Nav";


const myFont = localFont({ src: '../assets/fonts/Poppins-Medium.ttf' })

export const metadata: Metadata = {
  title: "Vertico",
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
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  );
}
