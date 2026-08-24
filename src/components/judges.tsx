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
    gradient: "linear-gradient(135deg,#FFB3C7,#E85A4F)",
  },
  {
    name: "Vikram Shah",
    role: "VP Engineering",
    company: "NovaCloud",
    bio: "Scales platforms for 200M+ users. Obsessed with systems that survive their first traffic spike.",
    gradient: "linear-gradient(135deg,#FF8C42,#E85A4F)",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Chief Scientist",
    company: "Quantek Labs",
    bio: "20 years across quantum computing and ML research. Published author, patent holder, mentor to hundreds.",
    gradient: "linear-gradient(135deg,#C4B0E4,#FF8C42)",
  },
  {
    name: "Rohan Iyer",
    role: "Founding Engineer",
    company: "Hexon · YC W24",
    bio: "Third-time founder. Went from hackathon table to YC batch in 18 months — he judges like an investor.",
    gradient: "linear-gradient(135deg,#FFD9C2,#F97D5F)",
  },
  {
    name: "Sara Thomas",
    role: "Principal Designer",
    company: "DesignGuild",
    bio: "Designs interfaces used by millions. Believes demos are won in the last 10% of polish.",
    gradient: "linear-gradient(135deg,#FFB3C7,#C4B0E4)",
  },
  {
    name: "Arjun Nair",
    role: "Head of Developer Platform",
    company: "LoopStack",
    bio: "Built APIs loved by 80k developers. Judges architecture decisions and developer empathy.",
    gradient: "linear-gradient(135deg,#F97D5F,#FFB3C7)",
  },
  {
    name: "Priya Deshmukh",
    role: "Security Researcher",
    company: "SecureLayer",
    bio: "Breaks things professionally so they don't break in production. Runs the security track reviews.",
    gradient: "linear-gradient(135deg,#E85A4F,#FF8C42)",
  },
  {
    name: "Kabir Malhotra",
    role: "Principal",
    company: "Bloom Ventures",
    bio: "Funds early-stage builders. Looks for the pitch behind the project — clarity, market, momentum.",
    gradient: "linear-gradient(135deg,#FFD9C2,#C4B0E4)",
  },
];

export function Judges() {
  return (
    <section id="judges" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
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
              <article className="group flex h-full flex-col rounded-2xl border border-transparent bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_24px_48px_-24px_rgba(232,90,79,0.45)]">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3"
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
                    <h3 className="truncate font-display text-base font-bold tracking-tight">
                      {person.name}
                    </h3>
                    <p className="truncate text-sm font-medium text-muted">{person.role}</p>
                    <p className="text-xs font-bold uppercase tracking-wider text-accent-strong">
                      {person.company}
                    </p>
                  </div>
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed font-medium text-muted">
                  {person.bio}
                </p>

                <div className="mt-5 flex items-center gap-3 border-t-2 border-cream pt-4 text-muted">
                  <a
                    href="#"
                    aria-label={`${person.name} on LinkedIn`}
                    className="transition-colors duration-200 hover:text-accent-strong"
                  >
                    <IconLinkedIn className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on GitHub`}
                    className="transition-colors duration-200 hover:text-accent-strong"
                  >
                    <IconGitHub className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on X`}
                    className="transition-colors duration-200 hover:text-accent-strong"
                  >
                    <IconX className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name}'s website`}
                    className="transition-colors duration-200 hover:text-accent-strong"
                  >
                    <Globe className="h-4.5 w-4.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
