"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const milestones = [
  { date: "Aug 25", title: "Registrations open" },
  { date: "Oct 15", title: "Team registrations close" },
  { date: "Nov 18", title: "Finalist reveal & briefing" },
  { date: "Nov 21–22", title: "36-hour hackathon" },
  { date: "Nov 23", title: "Winners announced" },
];

type Session = {
  time: string;
  title: string;
  kind: string;
  detail?: string;
};

const days: { id: string; label: string; date: string; sessions: Session[] }[] = [
  {
    id: "pre",
    label: "Pre-Event",
    date: "Nov 14 · Online",
    sessions: [
      {
        time: "18:00",
        title: "Virtual kickoff stream",
        kind: "Ceremony",
        detail:
          "Meet the organizers, walk through the rules, and get your first look at the problem statements.",
      },
      {
        time: "19:30",
        title: "Team formation mixer",
        kind: "Community",
        detail:
          "Speed-matching on Discord for solo hackers looking to build their dream squad before the event.",
      },
      {
        time: "20:30",
        title: "Rules & judging rubric briefing",
        kind: "Essential",
        detail:
          "How submissions are scored, what judges look for, and how to avoid the mistakes teams make every year.",
      },
    ],
  },
  {
    id: "day1",
    label: "Day 01",
    date: "Nov 21 · On-site",
    sessions: [
      {
        time: "09:00",
        title: "Check-in, badges & breakfast",
        kind: "Logistics",
        detail: "Collect your kit, grab coffee, find your squad's table. Doors open sharp.",
      },
      {
        time: "10:00",
        title: "Opening ceremony & keynote",
        kind: "Ceremony",
        detail: "Official launch, partner addresses, and a keynote on building through uncertainty.",
      },
      {
        time: "11:00",
        title: "Hacking begins",
        kind: "Build",
        detail: "The clock starts. 26 hours on this clock. Choose your problem wisely.",
      },
      {
        time: "15:00",
        title: "Workshop: Shipping AI agents that don't embarrass you",
        kind: "Workshop",
        detail: "Hands-on session on evals, guardrails and latency budgets with Ananya Rao (DeepGrid).",
      },
      {
        time: "21:00",
        title: "Midnight mentor rounds",
        kind: "Mentorship",
        detail: "Book 15-minute slots with mentors from NovaCloud, Quantek and Hexon.",
      },
    ],
  },
  {
    id: "day2",
    label: "Day 02",
    date: "Nov 22 · On-site",
    sessions: [
      {
        time: "08:00",
        title: "Sunrise standup & breakfast",
        kind: "Ritual",
        detail: "Quick round-the-table status check. Coffee is not optional.",
      },
      {
        time: "10:00",
        title: "Workshop: From prototype to pitch",
        kind: "Workshop",
        detail: "Storytelling frameworks that make judges lean in — by Vikram Shah (NovaCloud).",
      },
      {
        time: "13:00",
        title: "Code freeze",
        kind: "Deadline",
        detail: "Repos lock. What's shipped is what's judged. Submit your repo and demo video.",
      },
      {
        time: "14:00",
        title: "Demo expo & first-round judging",
        kind: "Judging",
        detail: "Walk the floor, show your build, answer hard questions. Top teams advance.",
      },
      {
        time: "17:30",
        title: "Finalist pitches on main stage",
        kind: "Finale",
        detail: "Five minutes per team in front of the full judging panel and the entire event.",
      },
    ],
  },
  {
    id: "finale",
    label: "Finale",
    date: "Nov 23 · Hybrid",
    sessions: [
      {
        time: "11:00",
        title: "Judging deliberation",
        kind: "Behind the scenes",
        detail: "Streamed live. Watch how winners are actually decided against the public rubric.",
      },
      {
        time: "12:30",
        title: "Closing keynote",
        kind: "Keynote",
        detail: "Dr. Meera Krishnan on what the next decade of builders will be judged by.",
      },
      {
        time: "13:30",
        title: "Awards ceremony",
        kind: "Ceremony",
        detail: "₹12L+ across track prizes, special categories and the grand prize. Plus glory.",
      },
      {
        time: "15:00",
        title: "Afterparty & hiring lounge",
        kind: "Networking",
        detail: "Demos unwind into conversations. Hiring partners host on-site interviews.",
      },
    ],
  },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");
  const [openSession, setOpenSession] = useState<string | null>(null);

  const day = days.find((d) => d.id === activeDay) ?? days[0];

  return (
    <section id="schedule" className="relative scroll-mt-20 bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Schedule"
          title={
            <>
              Two days. <span className="text-gradient">Zero wasted minutes.</span>
            </>
          }
          description="From kickoff stream to awards stage, every hour is engineered. Expand any session for details."
        />

        <Reveal delay={0.15}>
          <ol className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
            <span
              aria-hidden="true"
              className="absolute top-[7px] right-4 left-4 hidden border-t border-dashed border-border md:block"
            />
            {milestones.map((m) => (
              <li key={m.title} className="relative flex flex-col gap-2 md:items-center md:text-center">
                <span className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-background" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {m.date}
                </span>
                <span className="-mt-1 text-sm font-medium leading-snug">{m.title}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-border bg-surface p-1.5">
              {days.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setActiveDay(d.id);
                    setOpenSession(null);
                  }}
                  className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                    activeDay === d.id ? "text-white" : "text-muted hover:text-foreground"
                  }`}
                >
                  {activeDay === d.id && (
                    <motion.span
                      layoutId="day-pill"
                      className="absolute inset-0 rounded-full bg-gradient-brand"
                      transition={{ type: "spring", stiffness: 350, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{d.label}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface p-6 sm:p-9">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {day.date}
            </p>
            <ul className="divide-y divide-border">
              {day.sessions.map((session) => {
                const key = `${day.id}-${session.time}`;
                const isOpen = openSession === key;
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onClick={() => setOpenSession(isOpen ? null : key)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-4 py-4 text-left sm:gap-6"
                    >
                      <span className="w-14 shrink-0 font-display text-sm font-semibold tabular-nums text-accent">
                        {session.time}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-medium transition-colors group-hover:text-accent">
                          {session.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted">{session.kind}</span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
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
                          <p className="pb-5 pl-[4.5rem] text-sm leading-relaxed text-muted sm:pl-[5.5rem]">
                            {session.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-8 text-center text-sm text-muted">
            Full agenda with speaker lineups drops two weeks before the event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
