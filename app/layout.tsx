import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Provider from "../layouts/provider";
const inter = Lexend({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
export const metadata: Metadata = {
  title: "zirrow",
  description: "zirrow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
