"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const milestones = [
  { date: "Aug 25", title: "Registrations open" },
  { date: "Rolling", title: "Team registrations close" },
  { date: "Sept 9", title: "Finalist briefing" },
  { date: "Sept 11–12", title: "12-hour sprint in Kolkata" },
  { date: "Sept 12", title: "Winners crowned same night" },
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
    date: "Sept 8 · Online",
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
          "Speed-matching on Discord for solo hackers looking to build their dream squad before event day.",
      },
      {
        time: "20:30",
        title: "Rules & judging rubric briefing",
        kind: "Essential",
        detail:
          "How submissions are scored, what judges look for, and how to pace a 12-hour sprint without burning out.",
      },
    ],
  },
  {
    id: "day1",
    label: "Kickoff Night",
    date: "Sept 11 · Fri · 5 PM onwards",
    sessions: [
      {
        time: "17:00",
        title: "Reporting & Registration",
        kind: "Logistics",
        detail: "Doors open at 5 PM. Complete your check-in, collect badges, and settle in.",
      },
      {
        time: "17:30",
        title: "Inauguration Ceremony",
        kind: "Ceremony",
        detail: "Official launch with partners, organizers, and a keynote on building through uncertainty.",
      },
      {
        time: "19:00",
        title: "Hackathon begins",
        kind: "Build",
        detail: "The clock starts. Form your squads, scope your problem, and start building.",
      },
      {
        time: "21:00",
        title: "Dinner",
        kind: "Break",
        detail: "Fuel up — the night is long. Take a breather, recharge, and sync with your team.",
      },
    ],
  },
  {
    id: "day2",
    label: "Overnight Sprint",
    date: "Sept 11 night – Sept 12 · 12 AM – 8 AM",
    sessions: [
      {
        time: "00:00",
        title: "Midnight Snacks",
        kind: "Break",
        detail: "Late-night fuel drop to keep the momentum going through the small hours.",
      },
      {
        time: "01:00",
        title: "Open Mentoring & Guidance Sessions",
        kind: "Mentorship",
        detail: "Drop-in mentors available for technical guidance, architecture reviews, and unblocking.",
      },
      {
        time: "04:00",
        title: "Final Sprint",
        kind: "Build",
        detail: "Last stretch — polish, demo prep, and ship. No new features, just finish what you started.",
      },
      {
        time: "07:00",
        title: "Hackathon ends — Code freeze",
        kind: "Deadline",
        detail: "Repos lock. What's shipped is what's judged.",
      },
      {
        time: "07:00",
        title: "Closing Ceremony & Prize Distribution",
        kind: "Ceremony",
        detail: "Top teams pitch, winners crowned, and prizes awarded — ₹10,000 / ₹6,000 / ₹4,000.",
      },
    ],
  },
];

export function Schedule() {
  const [activeDay, setActiveDay] = useState("day1");
  const [openSession, setOpenSession] = useState<string | null>(null);

  const day = days.find((d) => d.id === activeDay) ?? days[0];

  return (
    <section id="schedule" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Schedule"
          title={
            <>
              One weekend. <span className="text-gradient">Twelve relentless hours.</span>
            </>
          }
          description="An overnight sprint format: kickoff on Friday evening, build through the night with mentors available, and ship by 7 AM — closing ceremony and prizes on the same morning."
        />

        <Reveal delay={0.15}>
          <ol className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
            <span
              aria-hidden="true"
              className="absolute top-[7px] right-4 left-4 hidden border-t-2 border-dashed border-accent/35 md:block"
            />
            {milestones.map((m) => (
              <li key={m.title} className="relative flex flex-col gap-2 md:items-center md:text-center">
                <span className="h-3.5 w-3.5 shrink-0 rounded-[3px] border-2 border-accent bg-white" />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-strong">
                  {m.date}
                </span>
                <span className="-mt-1 text-sm leading-snug font-bold">{m.title}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-1 rounded-2xl border border-border bg-white p-1.5 shadow-[0_10px_30px_-18px_rgba(26,26,26,0.3)]">
              {days.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    setActiveDay(d.id);
                    setOpenSession(null);
                  }}
                  className={`relative rounded-xl px-5 py-2 text-sm font-bold transition-colors duration-300 ${
                    activeDay === d.id ? "text-white" : "text-muted hover:text-accent-strong"
                  }`}
                >
                  {activeDay === d.id && (
                    <motion.span
                      layoutId="day-pill"
                      className="bg-accent absolute inset-0 rounded-xl"
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
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_56px_-28px_rgba(232,90,79,0.35)] sm:p-9">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-muted">{day.date}</p>
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
                      <span className="w-14 shrink-0 font-display text-sm font-bold tabular-nums text-accent-strong">
                        {session.time}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-bold group-hover:text-accent-strong">
                          {session.title}
                        </span>
                        <span className="mt-0.5 block text-xs font-semibold text-muted">
                          {session.kind}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-accent-strong" : ""
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
                          <p className="pb-5 pl-[4.5rem] text-sm leading-relaxed font-medium text-muted sm:pl-[5.5rem]">
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
          <p className="mt-8 text-center text-sm font-medium text-muted">
            Full agenda with speaker lineups drops one week before the event.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
