import { useLocale, useTranslations } from "next-intl";

import Profile from "@/components/profile/profile";
import Projects from "@/components/projects/projects";
import Section from "@/components/section/section";
import Timeline from "@/components/timeline/timeline";
import PROJECTS from "@/data/projects.json";
import TIMELINE from "@/data/timeline.json";
import { Link } from "@/i18n/routing";
import { Project } from "@/types/projects";
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
            className={`focus:ring-primary focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none ${locale === "en" ? "text-accent" : ""}`}
            aria-current={locale === "en" ? "page" : undefined}
          >
            {t("nav.en")}
          </Link>
          <Link
            href="/"
            locale="pt"
            lang="pt"
            className={`focus:ring-primary focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none ${locale === "pt" ? "text-accent" : ""}`}
            aria-current={locale === "pt" ? "page" : undefined}
          >
            {t("nav.pt")}
          </Link>
        </nav>
      </header>

      <div className="flex flex-col gap-6 md:gap-14">
        <Profile />

        <Section title={t("sections.projects")}>
          <Projects projects={PROJECTS as Project[]} />
        </Section>

        <Section title={t("sections.timeline")}>
          <Timeline items={TIMELINE as ITimeline[]} />
        </Section>
      </div>
    </main>
  );
}
