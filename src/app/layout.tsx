import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "http://localhost:3000";

const siteName = "Pedro Santos";
const siteTitle = "Pedro Santos — Portfólio";
const siteDescription =
  "Portfólio de desenvolvedor full stack com projetos, habilidades e contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,

  applicationName: siteTitle,
  authors: [{ name: siteName }],
  creator: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Pedro Santos — Portfólio",
      },
    ],
    locale: "pt_BR",
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen text-zinc-100 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl px-4">
          <div className="py-12 sm:py-16">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
