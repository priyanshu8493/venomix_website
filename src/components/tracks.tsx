import {
  ArrowUpRight,
  Award,
  Blocks,
  Brain,
  HeartPulse,
  Landmark,
  Leaf,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PixelBolt } from "@/components/pixel-art";

const tracks = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Agents, RAG pipelines, on-device inference — build the intelligent systems everyone else only demos.",
    tags: ["LLM APIs", "GPU credits", "Vector DBs"],
  },
  {
    icon: Blocks,
    title: "Web3 & Decentralization",
    description:
      "Protocols, DAOs and on-chain tooling. Ship something the decentralized internet actually needs.",
    tags: ["Testnet faucets", "Smart contract audits", "Wallet SDKs"],
  },
  {
    icon: Landmark,
    title: "FinTech",
    description:
      "Reimagine payments, lending and insurance for the next billion users — with sandbox access to real rails.",
    tags: ["UPI sandboxes", "KYC APIs", "Ledger infra"],
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description:
      "From diagnostics to mental health — technology that measurably improves lives, judged by clinicians.",
    tags: ["Health datasets", "Wearable SDKs", "Clinical mentors"],
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    description:
      "Energy, agriculture, waste — build for the planet with partners working on decarbonization at scale.",
    tags: ["Satellite data", "Sensor kits", "Impact mentors"],
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    description:
      "No guardrails. Bring the idea nobody has a category for yet and make the judges argue about it.",
    tags: ["Any stack", "Wildcard slots", "Everything goes"],
  },
];

const podium = [
  { icon: Trophy, rank: "Winner", amount: "₹12,000" },
  { icon: Award, rank: "Second place", amount: "₹7,000" },
  { icon: Sparkles, rank: "Third place", amount: "₹5,000" },
];

export function Tracks() {
  return (
    <section id="tracks" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tracks & Challenges"
          title={
            <>
              Six arenas. <span className="text-gradient">One relentless standard.</span>
            </>
          }
          description="Pick a lane or blur them together. Every track ships with dedicated mentors, curated resources, and one podium worth fighting for."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <Reveal key={track.title} delay={(i % 3) * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-transparent bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_24px_48px_-24px_rgba(232,90,79,0.45)]">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <track.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:text-accent-strong group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                  {track.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed font-medium text-muted">
                  {track.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="bg-hero-gradient relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl p-8 text-white md:p-10">
            <PixelBolt aria-hidden="true" className="animate-float-slow absolute -bottom-4 right-6 w-16 opacity-80" />
            <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-white/85">
              The podium — awarded the same night
            </p>
            <div className="relative mt-7 grid gap-4 sm:grid-cols-3">
              {podium.map((prize, i) => (
                <div
                  key={prize.rank}
                  className={`flex flex-col items-center gap-1 rounded-2xl border border-white/30 bg-white/15 px-4 py-5 backdrop-blur-sm ${
                    i === 0 ? "sm:-translate-y-2 sm:bg-white/25" : ""
                  }`}
                >
                  <prize.icon className="h-6 w-6" />
                  <span className="mt-1 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                    {prize.amount}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    {prize.rank}
                  </span>
                </div>
              ))}
            </div>
            <p className="relative mt-7 text-center text-sm font-medium text-white/85">
              Plus fast-track interviews with hiring partners and partner credits for winning teams.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
