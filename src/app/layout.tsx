import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";


import "@/css/globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Guerzoni - Senior Full Stack Engineer",
  description: "Guilherme Guerzoni - Senior Full Stack Engineer - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-mono antialiased p-8`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
