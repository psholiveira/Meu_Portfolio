// src/data/projects.ts

export type ProjectTag = string;

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  role?: string;
  year?: string;
  tags: readonly ProjectTag[];
  highlights: string[];
  links: {
    demo?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "task-board",
    title: "Task Board",
    description: "Quadro de tarefas estilo Kanban com persistência local.",
    longDescription:
      "Projeto focado em componentização, estado e UX. Permite criar colunas e cartões, mover tarefas e manter os dados persistidos no navegador. Construído pensando em responsividade e acessibilidade.",
    role: "Frontend",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    highlights: [
      "Arquitetura de componentes reutilizáveis",
      "Persistência com localStorage",
      "UI responsiva e acessível",
    ],
    links: {
      // Recomendo preencher apenas com links reais
      // demo: "https://...",
      // repo: "https://github.com/...",
    },
  },
  {
    slug: "landing-page",
    title: "Landing Page SaaS",
    description: "Landing page responsiva com foco em conversão.",
    longDescription:
      "Landing page moderna com seções bem definidas, layout responsivo e CTA claros. O objetivo foi treinar hierarquia visual, espaçamento e consistência de design com Tailwind.",
    role: "Frontend",
    year: "2026",
    tags: ["React", "Tailwind", "UI"],
    highlights: [
      "Layout mobile-first",
      "Seções reutilizáveis",
      "Performance e boas práticas de UI",
    ],
    links: {
      // demo: "https://...",
      // repo: "https://github.com/...",
    },
  },
];

// Helpers (fonte única)
export const projectSlugs = projects.map((p) => p.slug);

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null;
}

// Validações em DEV (evita bug silencioso)
if (process.env.NODE_ENV !== "production") {
  const seen = new Set<string>();
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  for (const p of projects) {
    // slug único
    if (seen.has(p.slug)) {
      throw new Error(`Slug duplicado em projects.ts: "${p.slug}"`);
    }
    seen.add(p.slug);

    // slug válido (kebab-case)
    if (!slugRegex.test(p.slug)) {
      throw new Error(
        `Slug inválido em projects.ts: "${p.slug}". Use kebab-case (ex: "meu-projeto").`
      );
    }

    // campos essenciais
    if (!p.title?.trim()) {
      throw new Error(`Projeto "${p.slug}" está sem title.`);
    }

    if (!p.description?.trim()) {
      throw new Error(`Projeto "${p.slug}" está sem description.`);
    }

    if (!p.longDescription?.trim()) {
      throw new Error(`Projeto "${p.slug}" está sem longDescription.`);
    }

    // highlights não vazio (melhora página de detalhe)
    if (!Array.isArray(p.highlights) || p.highlights.length === 0) {
      throw new Error(`Projeto "${p.slug}" precisa de pelo menos 1 highlight.`);
    }

    // tags não vazio (opcional mas recomendado)
    if (!Array.isArray(p.tags) || p.tags.length === 0) {
      throw new Error(`Projeto "${p.slug}" precisa de pelo menos 1 tag.`);
    }

    // links válidos (se existirem)
    if (p.links.demo && !p.links.demo.startsWith("http")) {
      throw new Error(
        `Link demo inválido no projeto "${p.slug}". Deve começar com http/https.`
      );
    }
    if (p.links.repo && !p.links.repo.startsWith("http")) {
      throw new Error(
        `Link repo inválido no projeto "${p.slug}". Deve começar com http/https.`
      );
    }
  }
}
