import Section from "@/components/Section";
import SubCard from "@/components/SubCard";
import { FadeInView } from "@/components/Motion";
import { Code, GraduationCap, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
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
  );
}
