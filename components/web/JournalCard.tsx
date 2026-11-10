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
}

function JournalCard({ id, title, date, image, imageAlt }: JournalEntryData) {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <Link
      href={`/journal/${id}`}
      aria-label={`Read ${title}`}
      className="flex items-center gap-2 lg:gap-4 rounded-xl bg-background p-2 pr-2 md:pr-6 lg:pr-6 text-foreground cursor-none"
      onPointerMove={(event) => {
        if (event.pointerType === "mouse") {
          setCursorPosition({ x: event.clientX, y: event.clientY });
        }
      }}
      onPointerLeave={() => setCursorPosition(null)}
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary/20 sm:size-20">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="flex justify-between gap-2 lg:gap-4 w-full items-center">
        <h3 className="max-w-50 min-w-0 md:max-w-md lg:max-w-lg w-full truncate font-medium text-lg">
          {title}
        </h3>

        <div>
          <time
            dateTime={date}
            className="shrink-0 text-sm text-muted-foreground hidden lg:block lg:text-base"
          >
            {new Date(date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
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
    </Link>
  );
}

export default function JournalCards({
  entries,
}: {
  entries?: JournalEntryData[];
}) {
  if (!entries?.length) return null;

  return (
    <div className="mt-10 flex flex-col gap-3 w-full">
      {entries.map((entry) => (
        <JournalCard key={entry.id} {...entry} />
      ))}
    </div>
  );
}
