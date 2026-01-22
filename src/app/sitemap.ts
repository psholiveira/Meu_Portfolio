import { MetadataRoute } from "next";
import { projectSlugs } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://meu-portfolio-eta-five.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...projectSlugs.map((slug) => ({
      url: `${baseUrl}/projetos/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
