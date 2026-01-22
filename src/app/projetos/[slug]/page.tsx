import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="space-y-8">
      <h1 className="text-3xl font-semibold text-white">
        {project.title}
      </h1>

      <p className="text-zinc-300">
        {project.description}
      </p>

      <div className="flex gap-3">
        {project.links.demo && (
          <a href={project.links.demo} target="_blank">Demo</a>
        )}
        {project.links.repo && (
          <a href={project.links.repo} target="_blank">Repositório</a>
        )}
      </div>
    </main>
  );
}
