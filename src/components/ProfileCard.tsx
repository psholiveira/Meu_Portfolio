import Image from "next/image";

type Props = {
  name: string;
  role: string;
  location?: string;
  imageSrc: string;
};

export default function ProfileCard({ name, role, location, imageSrc }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-400/25 via-violet-400/20 to-emerald-400/20 p-[1px]">
          <div className="h-full w-full rounded-2xl bg-black/25" />
        </div>

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">{name}</p>
          <p className="truncate text-xs text-zinc-300">{role}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <Image
            src={imageSrc}
            alt={`Foto de ${name}`}
            fill
            priority
            sizes="(max-width: 1024px) 320px, 360px"
            className="object-cover object-[50%_35%]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm text-zinc-200">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
          <span className="text-zinc-400">Stack</span>
          <span className="font-medium text-white">Frontend + Backend</span>
        </div>

        {location ? (
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
            <span className="text-zinc-400">Local</span>
            <span className="font-medium text-white">{location}</span>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-zinc-300">
        Desenvolvedor full stack focado em construir aplicações web bem estruturadas,
        escaláveis e com boa experiência de uso.
      </p>
    </div>
  );
}
