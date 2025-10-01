import { Roboto_Mono } from "next/font/google";
import { notFound } from "next/navigation";

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
    <html lang={locale}>
      <body className={`${robotoMono.variable} p-8 font-mono antialiased`}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
