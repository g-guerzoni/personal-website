import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import type { Metadata } from "next";


import "@/css/arrow.css";
import "@/css/globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Guerzoni - Senior Full Stack Engineer",
  description:
    "Guilherme Guerzoni is a Senior Full Stack Engineer with over 9 years of experience. Bachelor in Computer Science specializing in modern web technologies.",
  keywords: [
    "Guilherme Guerzoni",
    "Full Stack Engineer",
    "Frontend Engineer",
    "Senior Frontend Engineer",
    "Backend Engineer",
    "Senior Backend Engineer",
    "Senior Developer",
    "Software Engineer",
    "Senior Software Engineer",
    "Web Development",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Redux",
  ],
  authors: [{ name: "Guilherme Guerzoni", url: "https://guerzoni.dev" }],
  creator: "Guilherme Guerzoni",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guerzoni.dev",
    title: "Guilherme Guerzoni - Senior Full Stack Engineer",
    description:
      "Guilherme Guerzoni is a Senior Full Stack Engineer with over 9 years of experience. Bachelor in Computer Science specializing in modern web technologies.",
    siteName: "Guilherme Guerzoni Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
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
