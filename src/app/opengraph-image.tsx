import { ImageResponse } from "next/og";

export const alt = "Venomix 2026 — Build. Innovate. Elevate.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#060609",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            left: 300,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.55), rgba(6,6,9,0) 62%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: 160,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(34,211,238,0.4), rgba(6,6,9,0) 60%)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 34,
            letterSpacing: 12,
            color: "#a78bfa",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Nov 21–22, 2026 · Bengaluru
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 700,
            color: "#f2f2f5",
            letterSpacing: -4,
          }}
        >
          VENOMIX
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            marginTop: 18,
            background: "linear-gradient(100deg, #22d3ee, #a78bfa)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Build. Innovate. Elevate.
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#9a9aa8", marginTop: 40 }}>
          500 builders · ₹12L+ prizes · 36 hours · venomix.dev
        </div>
      </div>
    ),
    size,
  );
}
