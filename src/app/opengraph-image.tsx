import { ImageResponse } from "next/og";

export const alt = "Venomix 2026 — Build. Innovate. Elevate.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pixel = (x: number, y: number, color: string, s: number) => (
  <div
    key={`${x}-${y}`}
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: s,
      height: s,
      backgroundColor: color,
    }}
  />
);

const flowerSquares = [
  [40, 40, "#FFB3C7"],
  [80, 40, "#E85A4F"],
  [40, 80, "#E85A4F"],
  [80, 80, "#E66D4E"],
  [0, 80, "#FFB3C7"],
  [80, 0, "#FFB3C7"],
  [0, 40, "#FFD9C2"],
] as const;

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
          backgroundImage: "linear-gradient(135deg, #F97D5F 0%, #F5956A 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "48px solid rgba(255,255,255,0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -190,
            left: -140,
            width: 560,
            height: 560,
            borderRadius: 9999,
            backgroundColor: "rgba(232,90,79,0.35)",
          }}
        />
        {...flowerSquares.map(([x, y, c]) => pixel(x, y, c, 38))}
        {pixel(1040, 480, "#C4B0E4", 44)}
        {pixel(1104, 480, "#FFB3C7", 44)}
        {pixel(1040, 544, "#FFB3C7", 44)}
        {pixel(1104, 544, "#FFFFFF", 44)}
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 10,
            color: "#FFFFFF",
            opacity: 0.9,
            marginBottom: 20,
          }}
        >
          SEPT 11–12, 2026 · KOLKATA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 148,
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: -6,
          }}
        >
          VENOMIX
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 42,
            marginTop: 14,
            color: "#FFFFFF",
            fontWeight: 700,
          }}
        >
          Build. Innovate. Elevate.
        </div>
        <div
          style={{
            display: "flex",
            padding: "14px 36px",
            marginTop: 42,
            borderRadius: 12,
            backgroundColor: "#FF8C42",
            color: "#FFFFFF",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          20 teams · ₹24K prize pool · venomix.dev
        </div>
      </div>
    ),
    size,
  );
}
