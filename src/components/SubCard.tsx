import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
};

function IconFallback() {
  return <div className="h-4 w-4 rounded bg-white/20" aria-hidden="true" />;
}

export default function SubCard({ title, icon: Icon, children }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {Icon ? (
            <Icon className="h-4 w-4 text-zinc-200" aria-hidden="true" />
          ) : (
            <IconFallback />
          )}
        </div>

        <h3 className="text-sm font-semibold tracking-tight text-white">{title}</h3>
      </div>

      <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mt-3 max-w-prose text-sm leading-relaxed text-zinc-200">
        {children}
      </div>
    </div>
  );
}
