export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-10 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pedro Santos. Todos os direitos reservados.</p>
        <p className="text-zinc-500">Feito com Next.js, TypeScript e Tailwind.</p>
      </div>
    </footer>
  );
}
