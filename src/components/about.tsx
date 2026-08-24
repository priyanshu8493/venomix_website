import { Brain, Handshake, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: Handshake,
    title: "Community first",
    text: "Built by hackers, for hackers. Every decision starts with one question: does this make the experience better for builders?",
  },
  {
    icon: Brain,
    title: "Learn from the best",
    text: "40+ mentors and judges from frontier labs, unicorns and YC startups — on call around the clock.",
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
  { value: "03", label: "Editions strong" },
  { value: "12+", label: "Partner companies" },
  { value: "2100+", label: "Alumni builders" },
  { value: "96%", label: "Would return" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
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
              Over 36 hours you&apos;ll form a team around a problem worth solving, get pushed by
              mentors who&apos;ve shipped at scale, and pitch to judges who decide with their
              checkbooks. Whether it&apos;s your first hackathon or your fifteenth, you leave
              with something real — a product, a network, and proof of what you can do under
              pressure.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={0.1 + i * 0.07}>
                <div className="flex gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-accent-soft text-accent">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-semibold">{feature.title}</span>
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
            <figure className="premium-border relative overflow-hidden rounded-3xl border border-border bg-surface p-8 md:p-9">
              <blockquote className="font-display text-xl font-medium leading-relaxed md:text-2xl">
                “We don&apos;t want you to just attend an event. We want you to leave having built
                something you&apos;re proud of — surrounded by people who push you further than
                you thought you could go.”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-white">
                  AM
                </span>
                <span>
                  <span className="block font-semibold">Aarav Mehta</span>
                  <span className="block text-sm text-muted">Founder & Lead Organizer, Venomix</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid grid-cols-2 gap-5">
            {milestones.map((item, i) => (
              <Reveal key={item.label} delay={0.2 + i * 0.08}>
                <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50">
                  <div className="text-gradient font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {item.value}
                  </div>
                  <div className="mt-1.5 text-sm text-muted">{item.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
