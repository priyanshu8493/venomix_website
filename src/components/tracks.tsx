import {
  ArrowUpRight,
  Blocks,
  Brain,
  HeartPulse,
  Landmark,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const tracks = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Agents, RAG pipelines, on-device inference — build the intelligent systems everyone else only demos.",
    prize: "₹2,50,000",
    tags: ["LLM APIs", "GPU credits", "Vector DBs"],
  },
  {
    icon: Blocks,
    title: "Web3 & Decentralization",
    description:
      "Protocols, DAOs and on-chain tooling. Ship something the decentralized internet actually needs.",
    prize: "₹2,00,000",
    tags: ["Testnet faucets", "Smart contract audits", "Wallet SDKs"],
  },
  {
    icon: Landmark,
    title: "FinTech",
    description:
      "Reimagine payments, lending and insurance for the next billion users — with sandbox access to real rails.",
    prize: "₹2,00,000",
    tags: ["UPI sandboxes", "KYC APIs", "Ledger infra"],
  },
  {
    icon: HeartPulse,
    title: "HealthTech",
    description:
      "From diagnostics to mental health — technology that measurably improves lives, judged by clinicians.",
    prize: "₹1,50,000",
    tags: ["Health datasets", "Wearable SDKs", "Clinical mentors"],
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    description:
      "Energy, agriculture, waste — build for the planet with partners working on decarbonization at scale.",
    prize: "₹1,50,000",
    tags: ["Satellite data", "Sensor kits", "Impact mentors"],
  },
  {
    icon: Sparkles,
    title: "Open Innovation",
    description:
      "No guardrails. Bring the idea nobody has a category for yet and make the judges argue about it.",
    prize: "₹2,50,000",
    tags: ["Any stack", "Wildcard slots", "Everything goes"],
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="relative scroll-mt-20 py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-2),transparent_60%)] opacity-10 blur-3xl"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Tracks & Challenges"
          title={
            <>
              Six arenas. <span className="text-gradient">One relentless standard.</span>
            </>
          }
          description="Pick a lane or blur them together. Every track ships with dedicated mentors, curated resources, and a prize pool worth fighting for."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, i) => (
            <Reveal key={track.title} delay={(i % 3) * 0.08}>
              <article className="premium-border group flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.35)]">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-accent-soft text-accent">
                    <track.icon className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:text-accent group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                  {track.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {track.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs uppercase tracking-wider text-muted">Prize pool</span>
                  <span className="text-gradient font-display text-lg font-bold">{track.prize}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm text-muted">
            Every winning team also receives ₹50,000 in cloud credits, fast-track interviews with
            hiring partners, and a direct slot to showcase at demo day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
