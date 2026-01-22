import Section from "@/components/Section";
import { FadeInView } from "@/components/Motion";

export default function ContactSection() {
  return (
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
              href="mailto:pedroholiveira15@gmail.com"
            >
              pedroholiveira15@gmail.com
            </a>

            <a
              className="w-fit rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              href="https://github.com/psholiveira"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="w-fit rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
              href="https://www.linkedin.com/in/pedro-oliveira-052516279/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeInView>
    </Section>
  );
}
