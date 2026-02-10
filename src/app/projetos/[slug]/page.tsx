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

  const title = `${project.title} — Pedro Santos`;

  return {
    title,
    description: project.description,
    alternates: {
      canonical: `/projetos/${project.slug}`,
    },
    openGraph: {
      title,
      description: project.description,
      url: `/projetos/${project.slug}`,
      type: "article",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 text-white">
      <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
      <p className="mt-2 text-zinc-300">
        Slug recebido: <b>{params.slug}</b>
      </p>

      <p className="mt-6 text-zinc-300">Slugs disponíveis no deploy:</p>
      <ul className="mt-2 list-disc pl-5 text-zinc-300">
        {projectSlugs.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <Link
        href="/#projetos"
        className="mt-8 inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
      >
        Voltar para projetos
      </Link>
    </div>
  );
}


  const isWip = project.status === "wip";
  const cs = project.caseStudy;

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

            {isWip ? (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-amber-200">
                Em desenvolvimento
              </span>
            ) : null}
          </div>

          {isWip ? (
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4 text-sm text-amber-100">
              Este projeto ainda está em desenvolvimento. A página será atualizada com
              detalhes técnicos, demo e repositório assim que estiver finalizado.
            </div>
          ) : null}

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-zinc-300">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-200">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
              >
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

            {!isWip && project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100"
              >
                Ver demo
              </a>
            ) : null}

            {!isWip && project.links.repo ? (
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
      {cs ? (
  <FadeInView>
    <section className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-10">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        Case Study
      </h2>

      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">Problema</h3>
        <p className="text-sm leading-relaxed text-zinc-300">{cs.problem}</p>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-semibold text-white">Solução</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
          {cs.solution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {cs.features?.length ? (
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">Features</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {cs.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {cs.stack?.length ? (
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">Stack</h3>
          <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-200">
            {cs.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {cs.technicalDecisions?.length ? (
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">Decisões técnicas</h3>
          <div className="space-y-3">
            {cs.technicalDecisions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <p className="font-medium text-white">{d.title}</p>
                <p className="mt-1 text-sm text-zinc-300">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {cs.nextSteps?.length ? (
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-white">Próximos passos</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-300">
            {cs.nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  </FadeInView>
) : null}

    </PageEnter>
  );
}
