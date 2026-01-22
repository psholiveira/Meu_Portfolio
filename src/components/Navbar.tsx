import Link from "next/link";
import { Code } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
        {/* Logo / Nome */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Code className="h-4 w-4 text-zinc-200" aria-hidden="true" />
          </span>

          <span>Pedro Santos</span>
        </Link>

        {/* Navegação */}
        <nav className="flex items-center gap-2 text-sm">
          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-medium text-white hover:bg-white/10"
            href="/#projetos"
          >
            Projetos
          </a>
          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-medium text-white hover:bg-white/10"
            href="/#skills"
          >
            Skills
          </a>
          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-medium text-white hover:bg-white/10"
            href="/#sobre"
          >
            Sobre
          </a>
          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-medium text-white hover:bg-white/10"
            href="/#contato"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
