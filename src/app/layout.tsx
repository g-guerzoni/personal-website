import type { Metadata } from "next";

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
    siteName: "Guilherme Guerzoni Personal Website",
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
  return children;
}
