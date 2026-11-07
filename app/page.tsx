import GradientASCII from "@/components/ui/GradientASCII";
import { ServiceCards } from "@/components/web/ServiceCard";

export default function Home() {
  return (
    <main className="relative flex flex-col gap-10 isolate min-h-screen bg-background px-6 py-24 sm:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-dvh">
        <GradientASCII shape="horizon" cellSize={18} density={0.8} />
      </div>
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/60 via-transparent to-background"
      /> */}
      <section className="relative flex flex-col text-foreground">
        <p className="mt-6 lg:mt-40 max-w-2xl text-3xl font-heading font-medium">
          For startups and established businesses alike: I turn messy
          requirements — payments, verification, trust — into systems that run
          in production. Hand me an idea; I’ll give it life
        </p>
        <div className="mt-5 flex flex-col lg:items-center lg:flex-row gap-3 text-lg font-light">
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
        <h1 className="mt-40 text-right font-bitcount text-8xl leading-none text-secondary lg:text-[12rem]">
          leRhem
        </h1>
      </section>
      <section className="mt-20">
        <h1 id="heading">Services</h1>
        <div className="flex flex-col gap-6 mt-10">
          <ServiceCards />
        </div>
      </section>
    </main>
  );
}
