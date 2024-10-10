import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import dbConnect from "../lib/mongodb";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal portfolio",
  description: "portfolio of Rejo Thomas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
      <Header />
      <main>{children}</main>
    </div></body>
    </html>
  );
}
