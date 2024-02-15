import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import ApollowLayout from "./_components/layout"
const inter = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ziccow",
  description: "ziccow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApollowLayout children={children} />
      </body>
    </html>
  );
}
