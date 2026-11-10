import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoProjects } from "@/lib/project-card-demo-data";

export function generateStaticParams() {
  return demoProjects.map(({ id }) => ({ id }));
}

export default async function ProjectDetailsPage({
  params,
}: PageProps<"/projects/[id]">) {
  if (process.env.NODE_ENV !== "development") notFound();

  const { id } = await params;
  const project = demoProjects.find((item) => item.id === id);

  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 text-foreground sm:px-10 mt-10">
      <Link
        href="/#selected-projects"
        className="rounded-lg border border-border px-5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        Back to projects
      </Link>
      <header className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{project.category}</p>
          <h1 className="mt-2 text-4xl font-heading font-bold sm:text-6xl">
            {project.title}
          </h1>
        </div>
        <p className="max-w-xl text-lg text-muted-foreground">
          {project.description}
        </p>
      </header>
      <div className="relative mt-10 aspect-video overflow-hidden rounded-3xl bg-secondary/15">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(max-width: 1152px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <section className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-2xl font-heading font-semibold">
          About this concept
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {project.details}
        </p>
      </section>
    </main>
  );
}
