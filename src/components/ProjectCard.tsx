import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 hover:shadow-md">
      <div className="space-y-4">
        <div className="space-y-1">
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-white"
          >
            {project.title}
            <span className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-200">
              →
            </span>
          </Link>

          <p className="text-sm leading-relaxed text-zinc-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1 text-sm">
          <Link
            href={`/projetos/${project.slug}`}
            className="font-medium text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
          >
            Ver detalhes
          </Link>

          {project.links.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white hover:decoration-white/60"
            >
              Demo
            </a>
          ) : null}

          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white hover:decoration-white/60"
            >
              Repositório
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
