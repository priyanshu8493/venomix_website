type SpriteProps = { className?: string };

const PALETTE: Record<string, string> = {
  p: "#FFB3C7",
  r: "#E85A4F",
  v: "#C4B0E4",
  o: "#FFD9C2",
  e: "#E66D4E",
  w: "#FFFFFF",
};

function PixelSprite({
  map,
  palette = PALETTE,
  className,
}: {
  map: string[];
  palette?: Record<string, string>;
  className?: string;
}) {
  const rows = map.length;
  const cols = Math.max(...map.map((row) => row.length));
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={className}
    >
      {map.flatMap((row, y) =>
        row.split("").map((char, x) =>
          char === "." ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width={1.02} height={1.02} fill={palette[char]} />
          )
        )
      )}
    </svg>
  );
}

const FLOWER = [
  "..pppppp..",
  ".pppppppp.",
  "ppprrrrppp",
  "pprreeerrp",
  "pprreeerrp",
  "ppprrrrppp",
  ".pppppppp.",
  "..pppppp..",
  "....vv....",
  "...vvv....",
];

export function PixelFlower({ className }: SpriteProps) {
  return <PixelSprite map={FLOWER} className={className} />;
}

const DIAMOND = [
  "...r...",
  "..rpr..",
  ".rpopr.",
  "rpppppr",
  ".rpopr.",
  "..rpr..",
  "...r...",
];

export function PixelDiamond({ className }: SpriteProps) {
  return <PixelSprite map={DIAMOND} className={className} />;
}

const SPARKLE = [
  "...w...",
  "...p...",
  "...p...",
  "pppeppp",
  "...p...",
  "...p...",
  "...w...",
];

export function PixelSparkle({ className }: SpriteProps) {
  return <PixelSprite map={SPARKLE} className={className} />;
}

const BOLT = [
  ".....vvv",
  "....vvv.",
  "...vvv..",
  "..vvvvv.",
  ".pppvv..",
  "..ppp...",
  ".ppp....",
  "pp......",
];

export function PixelBolt({ className }: SpriteProps) {
  return <PixelSprite map={BOLT} className={className} />;
}

export function PixelConfetti({ className }: SpriteProps) {
  return (
    <div aria-hidden="true" className={`flex gap-3 ${className ?? ""}`}>
      {["p", "o", "v", "r", "w", "e"].map((color, i) => (
        <span
          key={`${color}-${i}`}
          className="h-3 w-3 rounded-[2px]"
          style={{ backgroundColor: PALETTE[color] }}
        />
      ))}
    </div>
  );
}

export function GeoRing({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <circle cx="20" cy="20" r="16" stroke="#FFB3C7" strokeWidth="6" />
    </svg>
  );
}

export function GeoTriangle({ className }: SpriteProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <path d="M20 4 38 36H2L20 4Z" fill="#C4B0E4" />
    </svg>
  );
}
