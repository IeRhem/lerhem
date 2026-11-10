"use client";

import {
  IconChevronRight,
  IconMenu3,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Journal", href: "/journal" },
];

const indicatorPositions = [
  "translate-x-0",
  "translate-x-full",
  "translate-x-[200%]",
  "translate-x-[300%]",
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeIndex = navLinks.findIndex((link) => link.href === pathname);
  const indicatorIndex = hoveredIndex ?? focusedIndex ?? activeIndex;
  const currentLink = navLinks[activeIndex] ?? navLinks[0];

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileMenuOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed z-100 hidden w-full justify-end p-5 md:flex">
        <div className="flex items-center gap-2">
          <nav
            aria-label="Main navigation"
            className="relative grid w-fit max-w-lg grid-cols-4 rounded-xl bg-secondary p-1 text-lg"
            onMouseLeave={() => setHoveredIndex(null)}
            onBlur={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget instanceof Node
                    ? event.relatedTarget
                    : null,
                )
              ) {
                setFocusedIndex(null);
              }
            }}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-1 left-1 top-1 w-[calc((100%-0.5rem)/4)] rounded-lg bg-background transition-transform duration-300 ease-out motion-reduce:transition-none ${
                indicatorIndex >= 0
                  ? indicatorPositions[indicatorIndex]
                  : "opacity-0"
              }`}
            />
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              const isHighlighted = indicatorIndex === index;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative z-10 flex items-center justify-center rounded-lg p-2 transition-colors duration-200 ${
                    isHighlighted ? "text-secondary" : "text-white"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          <Link href="/contact" className="cta">
            GET IN TOUCH
            <div className="icon">
              <IconChevronRight stroke={2} />
            </div>
          </Link>
        </div>
      </header>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-90 bg-background/20 backdrop-blur-md md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-5 right-5 z-100 flex flex-col gap-2 transition-[width] duration-300 ease-out motion-reduce:transition-none md:hidden ${
          mobileMenuOpen ? "w-[min(20rem,calc(100vw-2.5rem))]" : "w-36"
        }`}
      >
        <div className="overflow-hidden rounded-2xl bg-secondary p-1 text-lg text-white shadow-xl">
          <button
            type="button"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            className="flex min-h-13 w-full items-center justify-between gap-4 rounded-xl px-5"
          >
            <span className="min-w-0 truncate uppercase">
              {mobileMenuOpen ? (
                <span className="text-md text-white/70 capitalize">Menu</span>
              ) : (
                currentLink.name
              )}
            </span>
            {mobileMenuOpen ? (
              <IconPlus
                className="size-6 shrink-0 rotate-45"
                aria-hidden="true"
              />
            ) : (
              <IconMenu3
                className="size-6 shrink-0"
                stroke={2}
                aria-hidden="true"
              />
            )}
          </button>

          <div
            id="mobile-navigation"
            aria-hidden={!mobileMenuOpen}
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none ${
              mobileMenuOpen
                ? "grid-rows-[1fr] opacity-100"
                : "pointer-events-none grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <nav
                aria-label="Main navigation"
                className="flex flex-col gap-1 p-1"
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      tabIndex={mobileMenuOpen ? undefined : -1}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-5 py-3 transition-colors duration-200 ${
                        isActive
                          ? "bg-background text-secondary uppercase"
                          : "text-white hover:bg-background/10"
                      }`}
                    >
                      {link.name}
                      {isActive && <IconPlus aria-hidden="true" />}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <Link
            href="/contact"
            tabIndex={mobileMenuOpen ? undefined : -1}
            className="cta w-full justify-between py-1 pl-20 pr-1 text-md font-medium text-foreground uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get in touch
            <div className="icon bg-background p-2 text-foreground">
              <IconChevronRight stroke={2} />
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
