export default function SeoPerson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pedro Santos",
    jobTitle: "Full Stack Developer",
    url: "https://meu-portfolio-eta-five.vercel.app",
    sameAs: [
      "https://github.com/psholiveira",
      "https://www.linkedin.com/in/pedro-oliveira-052516279/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
