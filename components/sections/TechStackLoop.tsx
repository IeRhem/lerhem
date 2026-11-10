import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import {
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const defaultTechLogos: LogoItem[] = [
  {
    node: <SiNextdotjs />,
    title: "Next.js",
    href: "https://nextjs.org",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiReact />,
    title: "React",
    href: "https://react.dev",
    hoverColor: "var(--secondary)",
  },
  {
    node: <TbBrandReactNative />,
    title: "React Native",
    href: "https://reactnative.dev",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiNodedotjs />,
    title: "Node.js",
    href: "https://nodejs.org",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiPostgresql />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiSupabase />,
    title: "Supabase",
    href: "https://supabase.com",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiPrisma />,
    title: "Prisma",
    href: "https://www.prisma.io",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiDocker />,
    title: "Docker",
    href: "https://www.docker.com",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
    hoverColor: "var(--secondary)",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
    hoverColor: "var(--secondary)",
  },
];

interface TechStackLoopProps {
  logos?: LogoItem[];
  speed?: number;
  className?: string;
}

export default function TechStackLoop({
  logos = defaultTechLogos,
  speed = 50,
  className,
}: TechStackLoopProps) {
  return (
    <section
      aria-label="Technology Stack"
      className={className ?? "relative w-full py-6"}
    >
      <LogoLoop
        logos={logos}
        speed={speed}
        direction="left"
        logoHeight={50}
        gap={48}
        hoverSpeed={0}
        scaleOnHover
        labels="hover"
        ariaLabel="Technology stack"
        className="text-secondary/30"
      />
    </section>
  );
}
