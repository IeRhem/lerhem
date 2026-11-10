import GradientASCII from "@/components/ui/GradientASCII";
import Image from "next/image";
import ProjectCards from "@/components/web/ProjectCard";
import { ServiceCards } from "@/components/web/ServiceCard";
import { demoProjects } from "@/lib/project-card-demo-data";
import Link from "next/link";
import {
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import CTAButton from "@/components/shared/cta";
import JournalCards from "@/components/web/JournalCard";
import { demoJournalEntries } from "@/lib/journal-demo-data";

import TechStackLoop from "@/components/sections/TechStackLoop";
import ScrollReveal from "@/components/sections/ScrollReveal";

const socialLinks = [
  {
    name: "GitHub",
    href: "",
    icon: <IconBrandGithubFilled />,
  },
  {
    name: "LinkedIn",
    href: "",
    icon: <IconBrandLinkedinFilled />,
  },
  {
    name: "X",
    href: "",
    icon: <IconBrandX stroke={2} />,
  },
  {
    name: "Instagram",
    href: "",
    icon: <IconBrandInstagramFilled />,
  },
  {
    name: "YouTube",
    href: "",
    icon: <IconBrandYoutubeFilled />,
  },
];

export default function Home() {
  return (
    <ScrollReveal className="relative flex flex-col gap-10 isolate min-h-screen bg-background px-6 pt-24 pb-0 sm:px-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-dvh"
      >
        <GradientASCII shape="horizon" cellSize={18} density={0.8} />
      </div>
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/60 via-transparent to-background"
      /> */}
      <section className="relative flex flex-col text-foreground">
        <p data-reveal className="mt-6 lg:mt-40 max-w-2xl text-3xl font-heading font-medium">
          For startups and established businesses alike: I turn messy
          requirements into systems that run in production. Hand me an idea;
          I’ll give it life
        </p>
        <div data-reveal className="mt-5 flex flex-col lg:items-center lg:flex-row gap-3 text-lg font-light">
          <div className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="size-2 rounded-full bg-foreground"
            />
            <span>Freelance Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="size-2 rounded-full bg-foreground"
            />
            <span>Taraba, Nigeria 🇳🇬</span>
          </div>
        </div>
        <h1 data-reveal className="mt-40 text-right font-bitcount text-8xl leading-none text-secondary lg:text-[12rem]">
          leRhem
        </h1>
      </section>

      <section className="mt-20">
        <h2 data-reveal id="heading">Services</h2>
        <div data-reveal className="mt-10">
          <ServiceCards />
        </div>
      </section>
      <div data-reveal className="relative mt-8 w-full">
        <TechStackLoop className="w-full" />
      </div>

      <section className="mt-20">
        <h2 data-reveal id="heading">Selected Projects</h2>
        <div data-reveal className="mt-10">
          <ProjectCards
            projects={
              process.env.NODE_ENV === "development" ? demoProjects : []
            }
          />
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative mt-20 overflow-hidden bg-background z-0 lg:aspect-[1.75]"
      >
        <div data-reveal className="relative z-20 px-2 pt-2 sm:px-6 lg:absolute lg:inset-x-0 lg:top-0 lg:flex lg:flex-col lg:items-start lg:px-0 lg:pt-12">
          <h2 className="text-foreground" id="heading">
            About me
          </h2>
          <div className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
            <p>
              I’m leRhem
              <span className="text-muted-foreground">
                {" "}
                &lt;Rhema Joseph&gt;
              </span>
              , a full-stack developer based in Taraba, Nigeria 🇳🇬
            </p>
            <p>
              I build the systems startups and businesses actually need to trust
              — auth, payments, and data that doesn’t break when it matters.
            </p>
            <p>
              During the week, I’m building production web apps in Next.js,
              React, and TypeScript — wiring up everything from Paystack
              payments to secure file storage, so clients get something that
              ships, not a prototype.
            </p>
            <p>
              On weekends, I’m usually deep in Bible study, a good book, or
              picking up some new skill.
            </p>
          </div>
        </div>
        <Image
          src="/About bg.png"
          alt="Portrait of Rhema Joseph"
          width={1440}
          height={821}
          sizes="(max-width: 1023px) 100vw, 90vw"
          data-reveal
          className="relative z-0 mt-6 block h-auto w-full object-contain object-bottom-right lg:absolute lg:inset-0 lg:mt-0 lg:h-full"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-linear-to-t from-background via-background/0 to-transparent lg:inset-0 lg:h-auto"
        />
      </section>

      <section className="relative isolate z-20 mt-20 overflow-hidden">
        <section className="">
          <h2 data-reveal id="heading">Journal</h2>
          <div data-reveal>
          <JournalCards
            entries={
              process.env.NODE_ENV === "development" ? demoJournalEntries : []
            }
          />
          </div>
        </section>
        <div className="z-10 mt-20">
          <div className="my-10 flex flex-col lg:flex-row lg:justify-between items-end gap-6 font-medium font-heading">
            <p data-reveal className="text-3xl text-foreground text-left lg:max-w-xl">
              Have an idea that needs shipping? or Need a system people can
              trust with their money or data? Let’s make it real.
            </p>

            <div data-reveal>
              <CTAButton />
            </div>
          </div>

          <div data-reveal className="flex items-center justify-between text-white">
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <Link href={link.href} key={index}>
                  {link.icon}
                </Link>
              ))}
            </div>

            <span className="text-xl font-semibold">&copy;2026</span>
          </div>
        </div>
        <h1
          data-reveal
          className="z-10 mt-20 text-center font-bitcount text-8xl leading-none text-white lg:text-[18rem] mb-[-0.14em] lg:mb-[-0.16em]"
        >
          leRhem
        </h1>
      </section>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-svw"
      >
        <GradientASCII
          shape="horizon"
          cellSize={18}
          density={0.8}
          className="scale-y-[-1]"
        />
      </div>
    </ScrollReveal>
  );
}
