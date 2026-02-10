import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#fff",
          backgroundColor: "#070A10",
          backgroundImage:
            "radial-gradient(900px 600px at 20% 0%, rgba(56,189,248,0.20), transparent 60%)," +
            "radial-gradient(700px 480px at 80% 10%, rgba(168,85,247,0.18), transparent 55%)," +
            "radial-gradient(900px 600px at 50% 120%, rgba(34,197,94,0.14), transparent 55%)",
        }}
      >
        {/* Topo */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.1 }}>
              Pedro Santos
            </div>
            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.75)" }}>
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Meio */}
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.05 }}>
            Portfólio
          </div>
          <div style={{ marginTop: 16, fontSize: 22, color: "rgba(255,255,255,0.80)", lineHeight: 1.4 }}>
            Projetos, skills e evolução no desenvolvimento de aplicações completas:
            do backend ao frontend, com foco em produto.
          </div>

          <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Next.js", "React", "TypeScript", "Node.js", "APIs", "Banco de Dados"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.14)",
                  backgroundColor: "rgba(0,0,0,0.22)",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.88)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 18,
          }}
        >
          <div>pedrosantos.dev (em breve)</div>
          <div>vercel · next.js</div>
        </div>
      </div>
    ),
    size
  );
}