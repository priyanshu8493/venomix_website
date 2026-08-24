import { Globe } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { IconGitHub, IconLinkedIn, IconX } from "@/components/social-icons";

const judges = [
  {
    name: "Ananya Rao",
    role: "Staff ML Engineer",
    company: "DeepGrid",
    bio: "Builds evaluation infrastructure for frontier LLMs. Previously shipped ranking systems serving 40M daily users.",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
  },
  {
    name: "Vikram Shah",
    role: "VP Engineering",
    company: "NovaCloud",
    bio: "Scales platforms for 200M+ users. Obsessed with systems that survive their first traffic spike.",
    gradient: "linear-gradient(135deg,#a855f7,#6366f1)",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Chief Scientist",
    company: "Quantek Labs",
    bio: "20 years across quantum computing and ML research. Published author, patent holder, mentor to hundreds.",
    gradient: "linear-gradient(135deg,#f472b6,#8b5cf6)",
  },
  {
    name: "Rohan Iyer",
    role: "Founding Engineer",
    company: "Hexon · YC W24",
    bio: "Third-time founder. Went from hackathon table to YC batch in 18 months — he judges like an investor.",
    gradient: "linear-gradient(135deg,#34d399,#22d3ee)",
  },
  {
    name: "Sara Thomas",
    role: "Principal Designer",
    company: "DesignGuild",
    bio: "Designs interfaces used by millions. Believes demos are won in the last 10% of polish.",
    gradient: "linear-gradient(135deg,#fbbf24,#f472b6)",
  },
  {
    name: "Arjun Nair",
    role: "Head of Developer Platform",
    company: "LoopStack",
    bio: "Built APIs loved by 80k developers. Judges architecture decisions and developer empathy.",
    gradient: "linear-gradient(135deg,#60a5fa,#a78bfa)",
  },
  {
    name: "Priya Deshmukh",
    role: "Security Researcher",
    company: "SecureLayer",
    bio: "Breaks things professionally so they don't break in production. Runs the security track reviews.",
    gradient: "linear-gradient(135deg,#f87171,#fb923c)",
  },
  {
    name: "Kabir Malhotra",
    role: "Principal",
    company: "Bloom Ventures",
    bio: "Funds early-stage builders. Looks for the pitch behind the project — clarity, market, momentum.",
    gradient: "linear-gradient(135deg,#2dd4bf,#818cf8)",
  },
];

export function Judges() {
  return (
    <section id="judges" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Judges & Mentors"
          title={
            <>
              Judged by people <span className="text-gradient">who&apos;ve shipped.</span>
            </>
          }
          description="Engineers, researchers, designers and investors who decide with their reputations — and sometimes their checkbooks."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {judges.map((person, i) => (
            <Reveal key={person.name} delay={(i % 4) * 0.07}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                    style={{ background: person.gradient }}
                  >
                    {person.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-base font-semibold">{person.name}</h3>
                    <p className="truncate text-sm text-muted">{person.role}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {person.company}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted transition-opacity duration-300 group-hover:opacity-0 lg:block">
                  Hover to meet them
                </p>

                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-surface-2 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0">
                  <p className="text-sm leading-relaxed text-muted">{person.bio}</p>
                  <div className="mt-4 flex items-center gap-3 text-muted">
                    <a href="#" aria-label={`${person.name} on LinkedIn`} className="transition-colors hover:text-accent">
                      <IconLinkedIn className="h-4.5 w-4.5" />
                    </a>
                    <a href="#" aria-label={`${person.name} on GitHub`} className="transition-colors hover:text-accent">
                      <IconGitHub className="h-4.5 w-4.5" />
                    </a>
                    <a href="#" aria-label={`${person.name} on X`} className="transition-colors hover:text-accent">
                      <IconX className="h-4 w-4" />
                    </a>
                    <a href="#" aria-label={`${person.name}'s website`} className="transition-colors hover:text-accent">
                      <Globe className="h-4.5 w-4.5" />
                    </a>
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-transparent via-accent to-transparent"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
