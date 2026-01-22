export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  role?: string;
  year?: string;
  tags:  readonly string[];
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
      demo: "https://seu-demo.vercel.app",
      repo: "https://github.com/seuusuario/task-board",
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
      demo: "https://seu-demo.vercel.app",
      repo: "https://github.com/seuusuario/landing-page",
    },
  },
];
