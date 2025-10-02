import { useLocale, useTranslations } from "next-intl";

import Profile from "@/components/profile/profile";
import Section from "@/components/section/section";
import Timeline from "@/components/timeline/timeline";
import timeline from "@/data/timeline.json";
import { Link } from "@/i18n/routing";
import { ITimeline } from "@/types/timeline";

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <main id="main-content" className="mx-auto max-w-screen-lg">
      <header className="text-md h-12 w-full font-bold uppercase">
        <nav aria-label={t("nav.languageSelection")} className="flex justify-end gap-2">
          <Link
            href="/"
            locale="en"
            lang="en"
            className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${locale === "en" ? "text-accent" : ""}`}
            aria-current={locale === "en" ? "page" : undefined}
          >
            EN
          </Link>
          <Link
            href="/"
            locale="pt"
            lang="pt"
            className={`focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${locale === "pt" ? "text-accent" : ""}`}
            aria-current={locale === "pt" ? "page" : undefined}
          >
            PT
          </Link>
        </nav>
      </header>

      <div className="flex flex-col gap-6 md:gap-14">
        <Profile />

        <Section title={t("sections.projects")}>
          <div className="flex items-center justify-center">
            <span className="text-secondary text-5xl font-bold">Working on it...</span>
          </div>
        </Section>

        <Section title={t("sections.timeline")}>
          <Timeline items={timeline as ITimeline[]} />
        </Section>
      </div>
    </main>
  );
}
