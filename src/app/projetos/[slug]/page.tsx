// src/app/projetos/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { FadeInView, PageEnter } from "@/components/Motion";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projeto não encontrado | Pedro Santos" };

  return {
    title: `${project.title} | Pedro Santos`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <PageEnter className="space-y-10">
      <FadeInView>
        <header className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-200">
            {project.year ? (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {project.year}
              </span>
            ) : null}
            {project.role ? (
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {project.role}
              </span>
            ) : null}
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-200">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/#projetos"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              Voltar para projetos
            </Link>

            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100"
              >
                Ver demo
              </a>
            ) : null}

            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Ver repositório
              </a>
            ) : null}
          </div>
        </header>
      </FadeInView>

      <FadeInView>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Destaques
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      </FadeInView>
    </PageEnter>
  );
}
