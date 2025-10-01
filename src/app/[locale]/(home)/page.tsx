import Image from "next/image";
import Link from "next/link";

import Section from "@/components/section/section";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-md">
      <header className="text-md h-12 w-full font-bold uppercase">
        <nav aria-label="Language selection" className="flex justify-end gap-2">
          <Link href="/en" lang="en">
            EN
          </Link>
          <Link href="/pt" lang="pt">
            PT
          </Link>
        </nav>
      </header>

      <div className="flex flex-col gap-6 md:gap-12">
        <section className="flex flex-col items-center justify-between gap-4 md:flex-row" aria-label="Profile">
          <Image
            priority
            src="/assets/images/profile.webp"
            alt="Guilherme Guerzoni profile photo"
            width={300}
            height={300}
            className="border-text h-[300px] w-[300px] rounded-full border-2 object-cover"
          />

          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="text-primary text-3xl font-bold">Guilherme Guerzoni</h1>
            <p className="text-highlight text-xl">Senior Full Stack Engineer</p>
            <p className="text-lg">Bachelor in Computer Science</p>
            <p className="text-lg">+9 years of experience</p>

            <nav className="mt-2 flex justify-center gap-4 md:justify-start" aria-label="Social media links">
              <Link href="https://github.com/guerzoni" className="h-8 w-8" aria-label="GitHub profile">
                <Image src="/assets/icons/github.svg" alt="" width={32} height={32} />
              </Link>
              <Link href="https://linkedin.com/in/guerzoni" className="h-8 w-8" aria-label="LinkedIn profile">
                <Image src="/assets/icons/linkedin.svg" alt="" width={32} height={32} />
              </Link>
            </nav>
          </div>

          <div className="hidden items-center justify-end gap-5 pt-14 md:flex" aria-hidden="true">
            <div className="arrow mt-11">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text-sm [writing-mode:vertical-lr] md:text-base">Explore my work</span>
          </div>
        </section>

        <Section title="Projects">
          <div className="flex items-center justify-center">
            <span className="text-secondary text-8xl font-bold">SOON</span>
          </div>
        </Section>

        <Section title="Timeline">
          <div className="flex items-center justify-center">
            <span className="text-secondary text-8xl font-bold">SOON</span>
          </div>
        </Section>
      </div>
    </main>
  );
}
