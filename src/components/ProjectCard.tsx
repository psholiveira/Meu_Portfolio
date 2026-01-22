import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isWip = project.status === "wip";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/7 hover:shadow-md">
      {/* TOPO */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">
          <Link
            href={`/projetos/${project.slug}`}
            className="inline-flex items-center gap-2"
          >
            {project.title}
            <span className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-200">
              →
            </span>
          </Link>
        </h3>

        {isWip ? (
          <span className="shrink-0 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
            Em desenvolvimento
          </span>
        ) : null}
      </div>

      {/* DESCRIÇÃO */}
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">
        {project.description}
      </p>

      {/* TAGS */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>

      {/* AÇÕES (empurradas para o final) */}
      <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-sm">
        <Link
          href={`/projetos/${project.slug}`}
          className="font-medium text-white underline decoration-white/20 underline-offset-4 hover:decoration-white/60"
        >
          {isWip ? "Em breve" : "Ver detalhes"}
        </Link>

        {!isWip && project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 underline decoration-white/15 underline-offset-4 hover:text-white hover:decoration-white/60"
          >
            Demo
          </a>
        ) : null}

        {!isWip && project.links.repo ? (
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
    </article>
  );
}
