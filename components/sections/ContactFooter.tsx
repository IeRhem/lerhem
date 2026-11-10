import {
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import CTAButton from "@/components/shared/CTAButton";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/IeRhem", icon: <IconBrandGithubFilled /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/lerhem", icon: <IconBrandLinkedinFilled /> },
  { name: "X", href: "https://x.com/leRhem", icon: <IconBrandX stroke={2} /> },
  { name: "Instagram", href: "https://www.instagram.com/lerhem_01/", icon: <IconBrandInstagramFilled /> },
  { name: "YouTube", href: "https://www.youtube.com/@leRhem.1", icon: <IconBrandYoutubeFilled /> },
];

export default function ContactFooter() {
  return (
    <section className="relative isolate z-20 mt-20 overflow-hidden">
      <div className="z-10 mt-20">
        <div className="my-10 flex flex-col items-end gap-6 font-heading font-medium lg:flex-row lg:justify-between">
          <p
            data-reveal
            className="text-left text-3xl text-foreground lg:max-w-xl"
          >
            Have an idea that needs shipping? or Need a system people can trust
            with their money or data? Let’s make it real.
          </p>
          <div data-reveal>
            <CTAButton />
          </div>
        </div>

        <div className="flex items-center justify-between text-white">
          <div className="flex gap-4">
            {socialLinks
              .filter((link) => link.href.length > 0)
              .map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
          </div>
          <span className="text-xl font-semibold">&copy;2026</span>
        </div>
      </div>
      <p
        aria-hidden="true"
        data-reveal
        className="z-10 mb-[-0.14em] mt-20 text-center font-bitcount text-8xl leading-none text-white lg:mb-[-0.16em] lg:text-[18rem]"
      >
        leRhem
      </p>
    </section>
  );
}
