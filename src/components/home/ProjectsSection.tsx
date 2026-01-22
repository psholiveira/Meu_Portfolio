import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { StaggerInView, StaggerItem } from "@/components/Motion";

export default function ProjectsSection() {
  return (
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
  );
}
