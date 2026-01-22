import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import SubCard from "@/components/SubCard";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";

import { projects } from "@/data/projects";
import { FadeInView, PageEnter, StaggerInView, StaggerItem } from "@/components/Motion";
import { Code, GraduationCap, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <PageEnter className="space-y-16">
      {/* HERO */}
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
                  <span className="font-medium text-white">Full Stack</span> em formação, com foco em criar aplicações
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
              <ProfileCard
                name="Pedro Santos"
                role="Full Stack Developer"
                location="Brasil"
                imageSrc="/me.jpeg"
              />
            </div>
          </div>
        </section>
      </FadeInView>

      {/* PROJETOS */}
      <Section
        id="projetos"
        title="Projetos"
        subtitle="Projetos que demonstram minha evolução no desenvolvimento de aplicações full stack."
      >
        <StaggerInView className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard project={p} />
            </StaggerItem>
          ))}
        </StaggerInView>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Resumo do que eu aplico no dia a dia para construir aplicações completas."
      >
        <FadeInView>
          <Skills />
        </FadeInView>
      </Section>

      {/* SOBRE */}
      <Section
        id="sobre"
        title="Sobre"
        subtitle="Como eu penso, o que eu estudo e o que eu valorizo ao construir aplicações."
      >
        <FadeInView className="grid gap-4 lg:grid-cols-3">
          <SubCard title="O que eu faço" icon={Code}>
            Desenvolvo aplicações web completas, integrando interfaces modernas com backends organizados,
            APIs bem definidas e bancos de dados, buscando código limpo, escalável e de fácil manutenção.
          </SubCard>

          <SubCard title="O que eu estudo" icon={GraduationCap}>
            Arquitetura de aplicações, APIs REST, autenticação, bancos de dados relacionais e não relacionais,
            além de boas práticas de frontend com React e Next.js.
          </SubCard>

          <SubCard title="Como eu trabalho" icon={Sparkles}>
            Entendo o problema antes da solução, organizo bem a lógica do backend, estruturo componentes reutilizáveis
            no frontend e faço refinamentos contínuos para melhorar performance, usabilidade e qualidade do produto.
          </SubCard>
        </FadeInView>
      </Section>

      {/* CONTATO */}
      <Section
        id="contato"
        title="Contato"
        subtitle="Aberto a oportunidades full stack, estágios, freelas e projetos colaborativos."
      >
        <FadeInView className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-sm text-zinc-300">
              Melhor canal: <span className="font-medium text-white">email</span>. Respondo o quanto antes.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="w-fit rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-100"
                href="mailto:seuemail@exemplo.com"
              >
                seuemail@exemplo.com
              </a>

              <a
                className="w-fit rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                href="https://github.com/seuusuario"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="w-fit rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                href="https://www.linkedin.com/in/seuusuario"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </FadeInView>
      </Section>
    </PageEnter>
  );
}
