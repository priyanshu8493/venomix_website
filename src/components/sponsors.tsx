import { ArrowUpRight, Building2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const anchorPartners = [
  {
    name: "NovaCloud",
    render: (
      <span className="font-display text-3xl font-bold tracking-tight">
        Nova<span className="text-gradient">Cloud</span>
      </span>
    ),
  },
  {
    name: "Quantek",
    render: (
      <span className="font-display text-2xl font-bold uppercase tracking-[0.35em]">
        Quant<span className="text-accent-2">ek</span>
        <span className="text-accent">▪</span>
      </span>
    ),
  },
];

const technicalPartners = [
  {
    name: "DevGrid",
    render: <span className="font-semibold lowercase tracking-tight">devgrid_</span>,
  },
  {
    name: "StackForge",
    render: (
      <span className="font-display font-bold tracking-wide">
        ▲ Stack<span className="text-muted">Forge</span>
      </span>
    ),
  },
  {
    name: "Polybase",
    render: <span className="uppercase tracking-[0.25em] font-medium">Polybase</span>,
  },
  {
    name: "CirrusAI",
    render: (
      <span className="font-display italic font-semibold">
        Cirrus<span className="text-accent-2">AI</span>
      </span>
    ),
  },
];

const sponsors = [
  { name: "NeonPay", glyph: "◆", accent: true },
  { name: "CloudNest", glyph: "☁", accent: false },
  { name: "DataLoom", glyph: "◈", accent: false },
  { name: "SecureLayer", glyph: "⬢", accent: true },
  { name: "PixelForge", glyph: "✦", accent: false },
  { name: "VertexAI", glyph: "△", accent: false },
  { name: "LoopStack", glyph: "◉", accent: true },
  { name: "OrbitBank", glyph: "◍", accent: false },
];

const community = [
  { name: "DevCircle BLR", glyph: "◎" },
  { name: "CampusDAO", glyph: "◇" },
  { name: "Women Who Build", glyph: "❖" },
  { name: "StartupSyndicate", glyph: "▲" },
  { name: "OpenSource Hub", glyph: "⟠" },
  { name: "DesignGuild", glyph: "✳" },
  { name: "ML Collective", glyph: "∞" },
  { name: "HackTheNight", glyph: "☾" },
];

type PartnerItem = { name: string; glyph: string; accent?: boolean };

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
            className="flex shrink-0 items-center gap-2.5 text-lg font-semibold whitespace-nowrap"
          >
            <span aria-hidden="true" className={item.accent ? "text-accent" : "text-accent-2"}>
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
    <section id="partners" className="relative scroll-mt-20 bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
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
              <p className="mb-5 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-px w-10 bg-border" />
                Anchor Partners
                <span aria-hidden="true" className="h-px w-10 bg-border" />
              </p>
              <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
                {anchorPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="premium-border flex h-28 items-center justify-center rounded-3xl border border-border bg-surface text-foreground transition-all duration-300 hover:-translate-y-1"
                  >
                    {partner.render}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <p className="mb-5 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-px w-10 bg-border" />
                Technical Partners
                <span aria-hidden="true" className="h-px w-10 bg-border" />
              </p>
              <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                {technicalPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-20 items-center justify-center rounded-2xl border border-border bg-surface px-4 text-center text-sm transition-colors duration-300 hover:border-accent/50"
                  >
                    {partner.render}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <p className="mb-2 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                <span aria-hidden="true" className="h-px w-10 bg-border" />
                Sponsors & Community Partners
                <span aria-hidden="true" className="h-px w-10 bg-border" />
              </p>
              <MarqueeRow items={sponsors} />
              <MarqueeRow items={community} reverse />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="premium-border relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    <Building2 className="h-4 w-4" /> Partnerships open
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    Put your brand in front of India&apos;s sharpest builders.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    Sponsor a track, host a workshop, or run the hiring lounge. Custom tiers from
                    community shoutouts to anchor partnership.
                  </p>
                </div>
                <a
                  href="mailto:partners@venomix.dev?subject=Sponsorship%20Prospectus%20Request"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 font-semibold text-white shadow-[0_10px_36px_-10px_rgba(139,92,246,0.7)] transition-transform duration-300 hover:scale-[1.04]"
                >
                  Get the prospectus
                  <ArrowUpRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
