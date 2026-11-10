import type { ProjectCardData } from "@/components/shared/ProjectCard";

export const demoProjects: ProjectCardData[] = [
  {
    id: "sunday-market",
    title: "Sunday Market",
    description:
      "A warm, editorial storefront concept for a small-batch home goods shop, with clear product discovery and a simple shopping flow.",
    details:
      "Sunday Market is a fictional e-commerce concept for home goods made in small batches. The design pairs an editorial storefront with clear product categories and a calm, straightforward path from discovery to checkout.",
    category: "E-commerce",
    image: "/project-demo/sunday-market.svg",
    imageAlt: "Illustrated demo storefront for a home goods shop",
  },
  {
    id: "northstar-finance",
    title: "Northstar Finance",
    description:
      "A sample personal finance dashboard that brings account balances, spending trends, and recent activity into one calm overview.",
    details:
      "Northstar Finance is a fictional personal finance dashboard concept. It brings balances, monthly spending, and recent transactions together, with a quiet visual hierarchy designed to make everyday money decisions easier to scan.",
    category: "Dashboard",
    image: "/project-demo/northstar-finance.svg",
    imageAlt: "Illustrated demo personal finance dashboard",
  },
  {
    id: "open-road",
    title: "Open Road",
    description:
      "A fictional trip-planning experience for discovering places to stay and comparing travel options in one simple search.",
    details:
      "Open Road is a fictional travel discovery concept for planning slower, more considered getaways. It combines destination inspiration with simple accommodation previews to help travelers move from browsing to planning.",
    category: "Travel",
    image: "/project-demo/open-road.svg",
    imageAlt: "Illustrated demo travel search page",
  },
];
