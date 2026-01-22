import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">Projeto não encontrado</h1>
      <p className="text-zinc-600">O link pode estar errado ou o projeto foi removido.</p>
      <Link href="/#projetos" className="text-sm underline hover:text-zinc-900">
        Voltar para projetos
      </Link>
    </div>
  );
}
