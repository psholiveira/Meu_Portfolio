import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pedro Santos — Portfólio",
  description: "Portfólio de desenvolvedor full stack com projetos, habilidades e contato.",
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
