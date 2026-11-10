import GradientASCII from "@/components/ui/GradientASCII";
import ProjectCards from "@/components/sections/ProjectCards";
import { ServiceCards } from "@/components/web/ServiceCard";
import { demoProjects } from "@/lib/project-card-demo-data";
import { demoJournalEntries } from "@/lib/journal-demo-data";

import TechStackLoop from "@/components/sections/TechStackLoop";
import ScrollReveal from "@/components/sections/ScrollReveal";
import AboutSection from "@/components/sections/AboutSection";
import JournalSection from "@/components/sections/JournalSection";
import ContactFooter from "@/components/sections/ContactFooter";

export default function Home() {
  const projects =
    process.env.NODE_ENV === "development" ? demoProjects : [];
  const journalEntries =
    process.env.NODE_ENV === "development" ? demoJournalEntries : [];

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
        <div className="mt-5 flex flex-col lg:items-center lg:flex-row gap-3 text-lg font-light">
          <div data-reveal className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="size-2 rounded-full bg-foreground"
            />
            <span>Freelance Developer</span>
          </div>
          <div data-reveal className="flex items-center gap-2">
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
        <h2 data-reveal id="services-heading" className="section-heading">
          Services
        </h2>
        <div className="mt-10">
          <ServiceCards />
        </div>
      </section>
      <div data-reveal className="relative mt-8 w-full">
        <TechStackLoop className="w-full" />
      </div>

      {projects.length > 0 && (
        <section id="selected-projects" className="mt-20">
          <h2 data-reveal id="heading" className="section-heading">
            Selected Projects
          </h2>
          <div className="mt-10">
            <ProjectCards projects={projects} />
          </div>
        </section>
      )}

      <AboutSection />
      <JournalSection entries={journalEntries} />
      <ContactFooter />
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
