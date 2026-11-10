"use client";

import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { IconChevronRight, IconClick } from "@tabler/icons-react";
import { useState } from "react";

export interface JournalEntryData {
  id: string;
  title: string;
  date: string;
  image: ImageProps["src"];
  imageAlt: string;
  href?: string;
}

export default function JournalCard({
  title,
  date,
  image,
  imageAlt,
  href,
}: JournalEntryData) {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const content = (
    <>
      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary/20 sm:size-20">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="flex w-full items-center justify-between gap-2 lg:gap-4">
        <h3 className="max-w-50 min-w-0 w-full truncate text-lg font-medium md:max-w-md lg:max-w-lg">
          {title}
        </h3>

        <div>
          <time
            dateTime={date}
            className="hidden shrink-0 text-sm text-muted-foreground lg:block lg:text-base"
          >
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>

        <span className="icon shrink-0" aria-hidden="true">
          <IconChevronRight size={30} stroke={2.5} />
        </span>
      </div>
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
    </>
  );
  const className =
    "flex items-center gap-2 rounded-xl bg-background p-2 pr-2 text-foreground md:pr-6 lg:gap-4 lg:pr-6";

  if (!href) {
    return <article className={className}>{content}</article>;
  }

  return (
    <Link
      href={href}
      aria-label={`Read ${title}`}
      className={`${className} cursor-none`}
      onPointerMove={(event) => {
        if (event.pointerType === "mouse") {
          setCursorPosition({ x: event.clientX, y: event.clientY });
        }
      }}
      onPointerLeave={() => setCursorPosition(null)}
    >
      {content}
    </Link>
  );
}
