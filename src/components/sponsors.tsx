import { ArrowUpRight, Building2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GeoRing, GeoTriangle, PixelConfetti, PixelFlower } from "@/components/pixel-art";

const anchorPartners = [
  {
    name: "NovaCloud",
    render: (
      <span className="font-display text-3xl font-extrabold tracking-tight">
        Nova<span className="text-gradient">Cloud</span>
      </span>
    ),
  },
  {
    name: "Quantek",
    render: (
      <span className="font-display text-2xl font-extrabold uppercase tracking-[0.3em]">
        Quant<span className="text-berry">ek</span>
        <span className="text-lilac">▪</span>
      </span>
    ),
  },
];

const technicalPartners = [
  {
    name: "DevGrid",
    render: <span className="font-bold lowercase tracking-tight">devgrid_</span>,
  },
  {
    name: "StackForge",
    render: (
      <span className="font-display font-bold tracking-wide">
        <span className="text-accent">▲</span> Stack<span className="text-muted">Forge</span>
      </span>
    ),
  },
  {
    name: "Polybase",
    render: <span className="font-semibold uppercase tracking-[0.25em]">Polybase</span>,
  },
  {
    name: "CirrusAI",
    render: (
      <span className="font-display font-bold italic">
        Cirrus<span className="text-berry">AI</span>
      </span>
    ),
  },
];

type PartnerItem = { name: string; glyph: string; tone: "berry" | "lilac" | "accent" };

const sponsors: PartnerItem[] = [
  { name: "NeonPay", glyph: "◆", tone: "berry" },
  { name: "CloudNest", glyph: "☁", tone: "lilac" },
  { name: "DataLoom", glyph: "◈", tone: "accent" },
  { name: "SecureLayer", glyph: "⬢", tone: "berry" },
  { name: "PixelForge", glyph: "✦", tone: "lilac" },
  { name: "VertexAI", glyph: "△", tone: "berry" },
  { name: "LoopStack", glyph: "◉", tone: "accent" },
  { name: "OrbitBank", glyph: "◍", tone: "lilac" },
];

const community: PartnerItem[] = [
  { name: "DevCircle BLR", glyph: "◎", tone: "lilac" },
  { name: "CampusDAO", glyph: "◇", tone: "berry" },
  { name: "Women Who Build", glyph: "❖", tone: "accent" },
  { name: "StartupSyndicate", glyph: "▲", tone: "lilac" },
  { name: "OpenSource Hub", glyph: "⟠", tone: "berry" },
  { name: "DesignGuild", glyph: "✳", tone: "accent" },
  { name: "ML Collective", glyph: "∞", tone: "lilac" },
  { name: "HackTheNight", glyph: "☾", tone: "berry" },
];

const toneClass = {
  berry: "text-berry",
  lilac: "text-lilac",
  accent: "text-accent-strong",
} as const;

function MarqueeRow({ items, reverse = false }: { items: PartnerItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div
      dir="ltr"
      className={`marquee-container mask-x-fade overflow-hidden py-4 ${reverse ? "marquee-reverse" : ""}`}
    >
      <div
        className="marquee-track gap-14 px-7"
        style={{ "--marquee-duration": reverse ? "38s" : "44s" } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-2.5 text-lg font-bold whitespace-nowrap"
          >
            <span aria-hidden="true" className={toneClass[item.tone]}>
              {item.glyph}
            </span>
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Sponsors() {
  return (
    <section id="partners" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Sponsors & Partners"
          title={
            <>
              Backed by teams <span className="text-gradient">builders trust.</span>
            </>
          }
          description="The companies powering prizes, infrastructure and hiring at Venomix — from anchor partners to grassroots communities."
        />

        <div className="mt-16 space-y-12">
          <Reveal>
            <div>
              <p className="mb-5 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
                Anchor Partners
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
              </p>
              <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
                {anchorPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-28 items-center justify-center rounded-2xl border border-transparent bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_44px_-24px_rgba(232,90,79,0.45)]"
                  >
                    {partner.render}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-5 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
                Technical Partners
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
              </p>
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                {technicalPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-20 items-center justify-center rounded-xl border border-border bg-white px-4 text-center text-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
                  >
                    {partner.render}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="mb-2 flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
                Sponsors & Community Partners
                <span aria-hidden="true" className="h-0.5 w-10 bg-accent/40" />
              </p>
              <MarqueeRow items={sponsors} />
              <MarqueeRow items={community} reverse />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-hero-gradient relative overflow-hidden rounded-3xl p-8 text-white md:p-10">
              <PixelFlower
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -bottom-8 w-32 opacity-80 md:w-40"
              />
              <GeoRing aria-hidden="true" className="absolute top-6 right-1/3 hidden h-12 w-12 opacity-70 lg:block" />
              <GeoTriangle aria-hidden="true" className="absolute bottom-8 left-[42%] hidden h-10 w-10 opacity-70 lg:block" />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-white/85">
                    <Building2 className="h-4 w-4" /> Partnerships open
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                    Put your brand in front of India&apos;s sharpest builders.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed font-medium text-white/85 md:text-base">
                    Sponsor a track, host a workshop, or run the hiring lounge. Custom tiers from
                    community shoutouts to anchor partnership.
                  </p>
                  <PixelConfetti aria-hidden="true" className="mt-5 opacity-90" />
                </div>
                <a
                  href="mailto:partners@venomix.dev?subject=Sponsorship%20Prospectus%20Request"
                  className="btn-secondary relative shrink-0"
                >
                  Get the prospectus
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
