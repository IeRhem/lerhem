"use client";

import { IconClick } from "@tabler/icons-react";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface ProjectCardData {
  id: string;
  title: string;
  description: string;
  details: string;
  category: string;
  image: ImageProps["src"];
  imageAlt: string;
}

interface ProjectCardProps extends ProjectCardData {
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  onToggle: () => void;
}

export function ProjectCard({
  id,
  title,
  description,
  category,
  image,
  imageAlt,
  isExpanded,
  onExpand,
  onCollapse,
  onToggle,
}: ProjectCardProps) {
  const detailsId = `project-details-${id}`;
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <article
      data-expanded={isExpanded}
      className="project-card group relative flex aspect-square w-full flex-col overflow-hidden rounded-3xl bg-secondary/15 p-2 text-left text-foreground"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onExpand();
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") {
          setCursorPosition(null);
          onCollapse();
        }
      }}
      onPointerMove={(event) => {
        if (event.pointerType === "mouse") {
          setCursorPosition({ x: event.clientX, y: event.clientY });
        }
      }}
    >
      <button
        type="button"
        className="project-mobile-toggle focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title} preview`}
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={onToggle}
      />
      <span
        className={`relative block w-full shrink-0 overflow-hidden rounded-2xl transition-[height] duration-500 ease-in-out motion-reduce:transition-none ${
          isExpanded ? "h-[62%]" : "h-full"
        }`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out motion-reduce:transition-none"
        />
      </span>
      <div
        id={detailsId}
        aria-hidden={!isExpanded}
        className={`flex min-h-0 flex-1 flex-col overflow-hidden p-2 pt-4 transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-xl font-medium">{title}</h3>
          <span className="shrink-0 rounded-full bg-secondary px-4 py-1 text-sm text-secondary-foreground">
            {category}
          </span>
        </div>
        <p className="mt-2 line-clamp-3 text-left text-sm text-muted-foreground sm:text-base">
          {description}
        </p>
        <Link
          href={`/projects/${id}`}
          tabIndex={isExpanded ? 0 : -1}
          className="project-mobile-read-more mt-auto self-start rounded-full bg-secondary px-5 py-2 text-sm font-medium text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Read more
        </Link>
      </div>
      <Link
        href={`/projects/${id}`}
        aria-label={`View ${title} project details`}
        className="project-desktop-link focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      />
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
    </article>
  );
}
