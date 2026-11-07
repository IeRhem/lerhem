"use client";

import { IconClick, IconCode, IconDeviceMobileCode } from "@tabler/icons-react";
import { useId, useState, type ReactNode } from "react";

interface ServiceType {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ServiceCardProps extends ServiceType {
  isExpanded: boolean;
  onToggle: () => void;
}

const services = [
  {
    title: "Full-stack",
    description:
      "End-to-end web apps — schema to deployed UI, auth to payments. I handle the whole build, not just one layer.",
    icon: <IconCode stroke={2.2} />,
  },
  {
    title: "Front-end",
    description:
      "Fast, accessible interfaces built from real design systems — not just Figma turned into code.",
    icon: <IconCode stroke={2.2} />,
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform apps, built with the same production discipline as my web work. Taking select projects as this practice grows.",
    icon: <IconDeviceMobileCode stroke={2} />,
  },
];

export default function ServiceCard({
  icon,
  title,
  description,
  isExpanded,
  onToggle,
}: ServiceCardProps) {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number } | null>(null);
  const descriptionId = useId();

  return (
    <div className="bg-secondary/10 text-card-foreground shadow-sm rounded-xl p-6 w-full">
      <h3>
        <button
          type="button"
          className="w-full cursor-none text-left"
          aria-expanded={isExpanded}
          aria-controls={descriptionId}
          onClick={onToggle}
          onPointerMove={(event) => {
            if (event.pointerType === "mouse") {
              setCursorPosition({ x: event.clientX, y: event.clientY });
            }
          }}
          onPointerLeave={() => setCursorPosition(null)}
        >
          <span className="flex w-full items-center justify-between">
            <span className="flex items-center justify-start gap-2">
              <span className="icon bg-secondary">{icon}</span>
              <span className="text-3xl">{title}</span>
            </span>
            <span className="relative grid size-10 shrink-0 place-items-center" aria-hidden="true">
              <span className="absolute h-0.75 w-7 rounded-full bg-current" />
              <span
                className={`absolute h-0.75 w-7 rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
                  isExpanded ? "rotate-0" : "rotate-90"
                }`}
              />
            </span>
          </span>
        </button>
      </h3>
      {cursorPosition && (
        <span
          aria-hidden="true"
          className="pointer-events-none fixed z-50 flex -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] items-center gap-1 rounded-full bg-foreground px-3 py-2 text-xl text-background"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        >
          <IconClick size={30} stroke={2} />
          Click me
        </span>
      )}
      <div
        id={descriptionId}
        aria-hidden={!isExpanded}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground text-2xl mt-6">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function ServiceCards() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          {...service}
          isExpanded={expandedService === service.title}
          onToggle={() =>
            setExpandedService((expanded) =>
              expanded === service.title ? null : service.title,
            )
          }
        />
      ))}
    </div>
  );
}
