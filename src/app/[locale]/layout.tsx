import { Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/css/arrow.css";
import "@/css/globals.css";
import { routing } from "@/i18n/routing";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guilherme Guerzoni - Senior Frontend Engineer | Full Stack Developer",
  description:
    "Senior Frontend Engineer with 10+ years of experience in TypeScript, React, Next.js, Node.js, and modern web technologies. Specialized in building scalable web applications, payment systems, and banking platforms.",
  keywords: [
    "Guilherme Guerzoni",
    "Senior Frontend Engineer",
    "Full Stack Developer",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Angular",
    "AngularJS",
    "Redux",
    "Redux-Saga",
    "Context API",
    "NgRx",
    "RxJS",
    "Tailwind CSS",
    "Material-UI",
    "Ant Design",
    "Styled Components",
    "CSS Modules",
    "SASS",
    "Jest",
    "Cypress",
    "React Testing Library",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
    "Express",
    "NestJS",
    "Fastify",
    "Laravel",
    "PHP",
    "WordPress",
    "Payment Systems",
    "KYC",
    "Banking Solutions",
    "Web Development",
    "Frontend Architecture",
    "Micro-Frontend",
    "SEO",
    "Accessibility",
    "a11y",
    "Performance Optimization",
  ],
  authors: [{ name: "Guilherme Guerzoni" }],
  creator: "Guilherme Guerzoni",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Guilherme Guerzoni - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 10+ years of experience building scalable web applications and banking platforms.",
    siteName: "Guilherme Guerzoni Personal Website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilherme Guerzoni - Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer with 10+ years of experience building scalable web applications and banking platforms.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr">
      <body className={`${robotoMono.variable} p-8 font-mono antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-background focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
