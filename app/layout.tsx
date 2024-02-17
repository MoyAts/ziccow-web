import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Provider from "../layouts/provider"
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
        <Provider >
          {children}
        </Provider>
      </body>
    </html>
  );
}
