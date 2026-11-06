<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

Instructions for any AI coding agent (Claude Code, Cursor, etc.) working in this repo.

## Project

leRhem (Rhema Joseph) — personal portfolio for a freelance full-stack developer
based in Taraba, Nigeria. Audience: potential clients (booking work) and
employers. Primary goal of every page: get the visitor to either understand
what's built, or click "Get in touch."

## Stack

- Next.js (App Router), TypeScript
- Tailwind CSS v4 — theme lives entirely in `globals.css` as CSS variables
  (`--primary`, `--secondary`, `--muted`, `--radius`, etc.). Do not introduce
  a second color system, hardcoded hex values, or inline styles — use the
  existing variables so the theme stays swappable from one file.
- All components are hand-built — no component library (no shadcn/ui, no
  Radix, no MUI). Base primitives (Button, Badge, Accordion, etc.) and
  page-specific sections (Hero, Services, SelectedProjects, About, Journal,
  ContactCTA) are all written from scratch against the design.
- Because there's no library underneath, accessibility for interactive
  components is on us, not free: any disclosure/accordion pattern (e.g. the
  Services section) needs keyboard support (Enter/Space toggles, Tab reaches
  each trigger) and `aria-expanded` on the trigger button. Don't skip this
  because it "looks right" visually with just a mouse.

## Conventions

- **Components**: PascalCase filenames, one component per file.
  - `/components/ui` — hand-built primitives (Button, Badge, Accordion, etc.)
  - `/components/sections` — page sections (Hero, Services, etc.)
  - `/components/shared` — anything reused across sections (buttons with
    icons, logo mark, etc.)
- **Server vs Client**: default to Server Components. Add `"use client"`
  only where real interactivity is needed (the Services accordion, any form,
  anything with `useState`/`useEffect`).
- **Images**: always `next/image`, never a raw `<img>` tag.
- **Fonts**: `--font-sans`, `--font-mono`, `--font-heading` in `globals.css`
  are references, not definitions — they must be wired up via `next/font` in
  `app/layout.tsx` (applied as `variable` classNames on `<body>`). If a
  heading renders in the wrong font with no error, check this first.

## Content rules (non-negotiable)

- **Never commit placeholder content.** No Lorem ipsum, no Figma-ipsum, no
  duplicate dummy entries (e.g. the same project screenshot repeated, three
  identical journal posts). Treat this as a build-blocking issue, not a TODO
  — a visitor seeing filler text on a portfolio that pitches "I ship
  production, not demos" undermines the entire pitch.
- If real content (a project screenshot, a testimonial, a blog post) isn't
  ready yet, remove the section or component entirely rather than shipping
  it empty or fake. A shorter, fully real page beats a longer page with gaps.

## Commands

- `pnpm dev` — local dev server
- `pnpm build` — production build; run this before calling any section done
- `pnpm lint` — lint check

Package manager is pnpm — don't run `npm install` or commit a `package-lock.json` alongside `pnpm-lock.yaml`.

## Suggested structure

```
/app
  page.tsx           # composition only — imports section components
  layout.tsx         # font setup, metadata
/components
  /ui                # hand-built primitives (Button, Badge, Accordion, etc.)
  /sections           # Hero, Services, SelectedProjects, About, Journal, ContactCTA
  /shared
/lib
  utils.ts           # cn() and other helpers
```

## Out of scope for now

- Comments / testimonials section — not yet designed. Do not scaffold a
  component or route for it until real content exists.