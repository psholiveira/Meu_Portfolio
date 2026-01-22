import Section from "@/components/Section";
import Skills from "@/components/Skills";
import { FadeInView } from "@/components/Motion";

export default function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Resumo do que eu aplico no dia a dia para construir aplicações completas."
    >
      <FadeInView>
        <Skills />
      </FadeInView>
    </Section>
  );
}
