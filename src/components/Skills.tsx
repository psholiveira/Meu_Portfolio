import SubCard from "@/components/SubCard";
import { Braces, Database, GitBranch, Globe, Lock, Server, Settings } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const groups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Globe,
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Componentização e Design System",
      "Acessibilidade (a11y) e responsividade",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      "Node.js",
      "APIs REST",
      "Validação e tratamento de erros",
      "Arquitetura por camadas (service/repository)",
      "Boas práticas de organização de código",
    ],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    items: [
      "Modelagem de dados",
      "SQL (PostgreSQL / MySQL)",
      "NoSQL (conceitos e uso em projetos)",
      "Relacionamentos, índices e queries",
    ],
  },
  {
    title: "Autenticação e Segurança",
    icon: Lock,
    items: [
      "Auth (conceitos: sessão/JWT)",
      "Controle de acesso (roles/permissões)",
      "Boas práticas de segurança em APIs",
    ],
  },
  {
    title: "Ferramentas e Dev Workflow",
    icon: Settings,
    items: [
      "Git e GitHub",
      "Conventional Commits (quando aplicável)",
      "ESLint / Prettier",
      "Ambientes e variáveis (env)",
    ],
  },
  {
    title: "Conceitos que aplico",
    icon: Braces,
    items: [
      "Reuso e consistência de UI",
      "Separação de responsabilidades",
      "Manutenibilidade e legibilidade",
      "Performance (noções e boas práticas)",
    ],
  },
];

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
      {text}
    </span>
  );
}

export default function Skills() {
  return (
    <div className="space-y-6">
      {/* Destaques rápidos */}
      <div className="flex flex-wrap gap-2">
        {["Full Stack", "APIs", "Banco de Dados", "Auth", "UI/UX na prática", "Clean Code"].map((t) => (
          <Pill key={t} text={t} />
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 lg:grid-cols-2">
        {groups.map((g) => (
          <SubCard key={g.title} title={g.title} icon={g.icon}>
            <ul className="mt-1 space-y-2">
              {g.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-white/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SubCard>
        ))}
      </div>

      {/* Próximos focos */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <GitBranch className="h-4 w-4 text-zinc-200" aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">Próximos focos</p>
            <div className="mt-2 text-sm leading-relaxed text-zinc-200">
              Aprofundar testes, observabilidade básica (logs/monitoramento) e padrões de arquitetura
              para evoluir projetos full stack com mais robustez.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
