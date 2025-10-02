"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Link } from "@/i18n/routing";
import { JOB_TITLES, SOCIAL_MEDIA } from "@/types/constants";

export default function Profile() {
  const t = useTranslations();
  const typedText = useTypingEffect({ texts: JOB_TITLES });

  return (
    <section className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end" aria-label="Profile">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <Image
          priority
          src="/assets/images/profile.webp"
          alt="Guilherme Guerzoni profile photo"
          width={300}
          height={300}
          className="border-text h-[300px] w-[300px] rounded-full border-2 object-cover"
        />

        <div className="flex flex-col gap-2 text-center md:text-left">
          <h1 className="text-primary text-3xl font-bold">{t("profile.name")}</h1>
          <p className="text-highlight text-xl" aria-live="polite" aria-atomic="true">
            {typedText}
            <span className="inline-block animate-blink" aria-hidden="true">|</span>
          </p>
          <p className="text-lg">{t("profile.education")}</p>
          <p className="text-lg text-accent">{t("profile.experience")}</p>

          <nav className="mt-2 flex justify-center gap-4 md:justify-start" aria-label="Social media links">
            <Link
              href={SOCIAL_MEDIA.GITHUB}
              className="h-8 w-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label={t("social.github")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/icons/github.svg" alt="" width={32} height={32} />
            </Link>
            <Link
              href={SOCIAL_MEDIA.LINKEDIN}
              className="h-8 w-8 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label={t("social.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/assets/icons/linkedin.svg" alt="" width={32} height={32} />
            </Link>
          </nav>
        </div>
      </div>

      <div className="hidden items-end justify-end gap-5 md:flex" aria-hidden="true">
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="-mb-9 text-sm [writing-mode:vertical-lr] md:text-base">{t("profile.exploreWork")}</span>
      </div>
    </section>
  );
}
