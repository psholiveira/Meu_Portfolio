import type { Metadata } from "next";

import { PageEnter } from "@/components/Motion";

import Hero from "@/components/home/Hero";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import SeoPerson from "@/components/SeoPerson";


export const metadata: Metadata = {
  title: "Pedro Santos | Full Stack Developer",
  description:
    "Portfólio de Pedro Santos. Desenvolvimento full stack com foco em produto, APIs bem definidas e interfaces modernas.",
};

export default function Home() {
  return (
    <PageEnter className="space-y-16">
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
      <SeoPerson />
    </PageEnter>
  );
}
