import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative z-0 mt-20 overflow-hidden bg-background lg:aspect-[1.75]"
    >
      <div className="relative z-20 px-2 pt-2 sm:px-6 lg:absolute lg:inset-x-0 lg:top-0 lg:flex lg:flex-col lg:items-start lg:px-0 lg:pt-12">
        <h2
          data-reveal
          className="section-heading text-foreground"
          id="about-heading"
        >
          About me
        </h2>
        <div className="mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
          <p data-reveal>
            I’m leRhem
            <span className="text-muted-foreground"> &lt;Rhema Joseph&gt;</span>
            , a full-stack developer based in Taraba, Nigeria 🇳🇬
          </p>
          <p data-reveal>
            I build the systems startups and businesses actually need to trust
            — auth, payments, and data that doesn’t break when it matters.
          </p>
          <p data-reveal>
            During the week, I’m building production web apps in Next.js, React,
            and TypeScript — wiring up everything from Paystack payments to
            secure file storage, so clients get something that ships, not a
            prototype.
          </p>
          <p data-reveal>
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
  );
}
