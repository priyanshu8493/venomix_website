import { Handshake, Brain, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PixelDiamond, PixelSparkle } from "@/components/pixel-art";

const features = [
  {
    icon: Handshake,
    title: "Community first",
    text: "Built by hackers, for hackers. Every decision starts with one question: does this make the experience better for builders?",
  },
  {
    icon: Brain,
    title: "Learn from the best",
      text: "Mentors and judges from frontier labs, unicorns and YC startups — revealing soon.",
  },
  {
    icon: Rocket,
    title: "Launch real products",
    text: "Cloud credits, APIs and infra from our partners so your prototype doesn't die at hello world.",
  },
  {
    icon: ShieldCheck,
    title: "Fair, transparent judging",
    text: "Published rubrics, blind first-round reviews, and deliberations you can watch. No politics. Just craft.",
  },
];

const milestones = [
  { value: "01", label: "The first edition" },
  { value: "12+", label: "Partner companies" },
  { value: "TBA", label: "Mentors & judges" },
  { value: "15", label: "Finalist teams" },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Venomix"
            title={
              <>
                Not another hackathon.
                <br />
                <span className="text-gradient">A rite of passage.</span>
              </>
            }
          />
          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-muted">
              Venomix began with a simple conviction: extraordinary products are born when
              ambitious people are given room — and a deadline — to experiment wildly. No fluff,
              no participation trophies. Just a room full of people who care too much about
              building things that matter.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-4 leading-relaxed text-muted">
              The format is deliberately intense: twelve hours, one team, one problem worth
              solving. You&apos;ll scope ruthlessly, get pushed by mentors who&apos;ve shipped at
              scale, and pitch to judges who decide with their checkbooks — all before midnight.
              Whether it&apos;s your first hackathon or your fifteenth, you leave with something
              real: a product, a network, and proof of what you can do under pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={0.1 + i * 0.07}>
                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold">{feature.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {feature.text}
                    </span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <Reveal delay={0.15}>
            <figure className="relative overflow-hidden rounded-3xl border-2 border-accent/25 bg-white p-8 transition-all duration-300 hover:border-accent/60 md:p-9">
              <PixelDiamond
                aria-hidden="true"
                className="pointer-events-none absolute top-6 right-6 w-10 opacity-90"
              />
              <blockquote className="font-display text-xl leading-relaxed font-bold tracking-tight md:text-2xl">
                “We don&apos;t want you to just attend an event. We want you to leave having built
                something you&apos;re proud of — surrounded by people who push you further than
                you thought you could go.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="bg-gradient-brand inline-flex h-12 w-12 items-center justify-center rounded-full font-display text-sm font-bold text-white">
                  AM
                </span>
                <span>
                  <span className="block font-bold">Aarav Mehta</span>
                  <span className="block text-sm font-medium text-muted">
                    Founder & Lead Organizer, Venomix
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {milestones.map((item, i) => (
              <Reveal key={item.label} delay={0.2 + i * 0.08}>
                <div className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_36px_-20px_rgba(232,90,79,0.4)]">
                  <div className="text-gradient font-display text-3xl font-extrabold tracking-tight md:text-4xl">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-muted">{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="flex justify-end pr-4">
            <PixelSparkle aria-hidden="true" className="pixel-hover w-8 opacity-80" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
