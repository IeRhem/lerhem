"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: ReactNode;
  className: string;
}

export default function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  const mainRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = mainRef.current;
      if (!root) return;

      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>("[data-reveal]", root)
          .forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 24,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
            });
          });
      });

      return () => media.revert();
    },
    { scope: mainRef },
  );

  return (
    <main ref={mainRef} className={className}>
      {children}
    </main>
  );
}
