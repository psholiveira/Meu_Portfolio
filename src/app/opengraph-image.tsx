import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          backgroundColor: "#070A10",
          padding: "64px",
          color: "white",
        }}
      >
        {/* Top: brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
            }}
          >
            {"</>"}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>
              Pedro Santos
            </div>
            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.75)" }}>
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ maxWidth: 920 }}>
          <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.05 }}>
            Portfólio
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 22,
              color: "rgba(255,255,255,0.78)",
              lineHeight: 1.4,
            }}
          >
            Projetos, skills e evolução no desenvolvimento de aplicações completas:
            do backend ao frontend, com foco em produto.
          </div>

          <div style={{ marginTop: 22, display: "flex", gap: 10, flexWrap: "wrap" }}>
            {["Next.js", "React", "TypeScript", "Node.js", "APIs", "DB"].map((t) => (
              <div
                key={t}
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(0,0,0,0.25)",
                  fontSize: 16,
                  color: "rgba(255,255,255,0.86)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: subtle footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            color: "rgba(255,255,255,0.55)",
            borderTop: "1px solid rgba(255,255,255,0.10)",
            paddingTop: 18,
          }}
        >
          <div>pedro santos</div>
          <div>vercel · next.js</div>
        </div>

        {/* Soft background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(900px 500px at 18% 10%, rgba(56,189,248,0.16), transparent 60%), radial-gradient(700px 460px at 82% 12%, rgba(168,85,247,0.14), transparent 60%), radial-gradient(900px 600px at 55% 120%, rgba(34,197,94,0.12), transparent 55%)",
            pointerEvents: "none",
          }}
        />
      </div>
    ),
    size
  );
}
