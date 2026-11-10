"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { ProjectCardData } from "@/components/shared/ProjectCard";

export default function ProjectCards({
  projects,
}: {
  projects?: ProjectCardData[];
}) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  if (!projects?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          {...project}
          isExpanded={expandedProject === project.id}
          onExpand={() => setExpandedProject(project.id)}
          onCollapse={() =>
            setExpandedProject((expanded) =>
              expanded === project.id ? null : expanded,
            )
          }
          onToggle={() =>
            setExpandedProject((expanded) =>
              expanded === project.id ? null : project.id,
            )
          }
        />
      ))}
    </div>
  );
}
