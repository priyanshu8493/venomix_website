"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const categories = ["General", "Registration", "Teams", "Event Day", "Prizes", "Post-Hackathon"] as const;

type Faq = { category: (typeof categories)[number]; question: string; answer: string };

const faqs: Faq[] = [
  {
    category: "General",
    question: "What exactly is Venomix?",
    answer:
      "A 36-hour hackathon in Bengaluru where 500 builders team up to ship working products across six tracks — judged by engineers, founders and investors, with ₹12L+ in prizes.",
  },
  {
    category: "General",
    question: "Who can participate?",
    answer:
      "Anyone 18+ who builds: students, professionals, designers, data scientists, indie hackers. You don't need to be from a top college or company — you need to build.",
  },
  {
    category: "General",
    question: "Is there a participation fee?",
    answer:
      "No. Venomix is completely free — meals, snacks, swag and workspace are covered by our partners. We only ask for your best effort for 36 hours.",
  },
  {
    category: "Registration",
    question: "How do I register, and when do applications close?",
    answer:
      "Use the registration form on this page. Applications are reviewed on a rolling basis and close October 15 or when we hit capacity — whichever comes first. Last year we were full three weeks early.",
  },
  {
    category: "Registration",
    question: "Do I need a team before applying?",
    answer:
      "Not at all. Around 40% of hackers apply solo. We run a Discord-based team formation mixer two weeks before the event, plus an on-site matching session at check-in.",
  },
  {
    category: "Registration",
    question: "Can I attend just to learn without competing?",
    answer:
      "Yes — a limited number of explorer passes give you access to workshops, the expo floor and networking areas. Select “Explorer” when registering if that's you.",
  },
  {
    category: "Teams",
    question: "What's the maximum team size?",
    answer:
      "Teams can have 2–4 members. Solo hacking is allowed but statistically less fun. Cross-college and cross-company teams are encouraged.",
  },
  {
    category: "Teams",
    question: "I don't code. Is Venomix still for me?",
    answer:
      "Absolutely. Designers, PMs, domain experts and storytellers routinely end up on winning teams. Products are won on polish and narrative as much as architecture.",
  },
  {
    category: "Event Day",
    question: "What should I bring?",
    answer:
      "Laptop, charger, any hardware you plan to hack on, and a government ID for check-in. We provide food, caffeine, WiFi, sleeping pods, showers and enough stickers to redecorate your laptop twice.",
  },
  {
    category: "Event Day",
    question: "Can I start building before the event?",
    answer:
      "No — all code, designs and pitch material must be created during the 36 hours. Open-source libraries, APIs and public datasets are fair game. Teams declare their starting point at kickoff.",
  },
  {
    category: "Prizes",
    question: "How does judging work?",
    answer:
      "First round is a demo-expo walkthrough against a published rubric (problem, execution, technical depth, design, impact). Top teams pitch on the main stage, and deliberation happens live-streamed and in public.",
  },
  {
    category: "Prizes",
    question: "How is the ₹12L+ prize pool split?",
    answer:
      "Each of the six tracks awards its own pool, plus a grand prize, a best-first-hackathon award, and sponsor special categories. Track pools range from ₹1.5L to ₹2.5L.",
  },
  {
    category: "Post-Hackathon",
    question: "What happens to projects after the event?",
    answer:
      "Winning teams get introductions to partner accelerators and investors, fast-track interviews with hiring partners, and continued Discord access. Several past projects went on to raise pre-seed rounds.",
  },
  {
    category: "Post-Hackathon",
    question: "Will sessions be recorded?",
    answer:
      "Keynotes and finalist pitches are recorded and published on our YouTube channel within two weeks. Workshops are mentor-dependent; most opt in to recording.",
  },
];

export function Faq() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | (typeof categories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchesCategory = category === "All" || faq.category === category;
      const matchesQuery =
        q.length === 0 ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Everything else, <span className="text-gradient">answered.</span>
            </>
          }
          description="Search below or browse by category. Can't find it? Ask us directly at hello@venomix.dev."
        />

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-12 max-w-xl">
            <Search className="pointer-events-none absolute top-1/2 left-5 h-4.5 w-4.5 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions…"
              aria-label="Search frequently asked questions"
              className="w-full rounded-full border border-border bg-surface py-3.5 pr-5 pl-12 text-sm outline-none transition-colors placeholder:text-muted focus:border-accent"
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {(["All", ...categories] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-colors duration-300 ${
                  category === cat
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 rounded-3xl border border-border bg-surface px-6 sm:px-8">
            {filtered.length === 0 ? (
              <p className="py-12 text-center text-sm text-muted">
                No answers match “{query}”. Try another search or write to us at{" "}
                <a href="mailto:hello@venomix.dev" className="text-accent underline underline-offset-4">
                  hello@venomix.dev
                </a>
              </p>
            ) : (
              <ul className="divide-y divide-border">
                {filtered.map((faq) => {
                  const id = `${faq.category}-${faq.question}`;
                  const isOpen = openId === id;
                  return (
                    <li key={id}>
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      >
                        <span>
                          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                            {faq.category}
                          </span>
                          <span className="font-medium">{faq.question}</span>
                        </span>
                        <ChevronDown
                          className={`h-4.5 w-4.5 shrink-0 text-muted transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 pr-8 text-sm leading-relaxed text-muted">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
