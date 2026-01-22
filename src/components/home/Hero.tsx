import ProfileCard from "@/components/ProfileCard";
import { FadeInView } from "@/components/Motion";

export default function Hero() {
  return (
    <FadeInView>
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm sm:p-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Coluna texto */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Disponível para oportunidades
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Construo aplicações completas, do backend ao frontend, com foco em produto.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
                Sou <span className="font-medium text-white">Pedro Santos</span>, desenvolvedor{" "}
                <span className="font-medium text-white">Full Stack</span>, com foco em criar aplicações
                escaláveis, APIs bem definidas e interfaces modernas, cuidando da lógica do backend até a experiência final do usuário.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projetos"
                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100"
              >
                Ver projetos
              </a>

              <a
                href="#contato"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Entrar em contato
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-200">
              {["React", "Next.js", "TypeScript", "Node.js", "APIs", "Banco de Dados"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/20 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Coluna foto */}
          <div className="lg:col-span-5 lg:flex lg:items-start lg:justify-end">
            <ProfileCard name="Pedro Santos" role="Full Stack Developer" location="Brasil" imageSrc="/me.png" />
          </div>
        </div>
      </section>
    </FadeInView>
  );
}
