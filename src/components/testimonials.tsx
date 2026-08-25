"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const metrics = [
  { end: 500, suffix: "", label: "Seats on the line" },
  { end: 24, prefix: "₹", suffix: "K", label: "Prize pool on the table" },
  { end: 40, suffix: "+", label: "Mentors & judges" },
  { end: 6, suffix: "", label: "Tracks, one sprint" },
];

const testimonials = [
  {
    quote:
      "The team behind Venomix has run the sharpest student build-events in eastern India for years. If anyone can make a 12-hour sprint feel effortless, it's them.",
    name: "Ritika Banerjee",
    role: "Organizer · DevCircle Kolkata",
    initials: "RB",
    gradient: "linear-gradient(135deg,#FFB3C7,#E85A4F)",
  },
  {
    quote:
      "A 12-hour format forces the one skill most hackathons never teach: ruthless scoping. That's exactly why I said yes when they asked me to judge.",
    name: "Ananya Rao",
    role: "Staff ML Engineer, DeepGrid · Venomix Judge",
    initials: "AR",
    gradient: "linear-gradient(135deg,#FF8C42,#E85A4F)",
  },
  {
    quote:
      "Kolkata's builder scene has been waiting for a flagship event of its own. First edition or not — the mentor bench and track design set the bar seriously high.",
    name: "Sourav Dutta",
    role: "Founder · CampusDAO",
    initials: "SD",
    gradient: "linear-gradient(135deg,#C4B0E4,#FF8C42)",
  },
  {
    quote:
      "We signed on as a partner before a single demo existed. The track lineup, the judging rubric, the hiring lounge plan — this is designed like an event that's been running for years.",
    name: "Nikhil Verma",
    role: "Developer Relations · Anchor Partner",
    initials: "NV",
    gradient: "linear-gradient(135deg,#FFD9C2,#F97D5F)",
  },
];

function CountUp({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, end, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.round(value).toLocaleString("en-IN")}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, end, prefix, suffix]);

  return (
    <span
      ref={ref}
      className="text-gradient font-display text-4xl font-extrabold tracking-tight md:text-5xl"
    >
      {`${prefix}0${suffix}`}
    </span>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [index]);

  const current = testimonials[index];

  return (
    <section id="stories" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Reveal key={metric.label} className="flex flex-col items-center gap-2 text-center">
              <CountUp end={metric.end} prefix={metric.prefix} suffix={metric.suffix} />
              <span className="text-sm font-medium text-muted">{metric.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Community Voices"
            title={
              <>
                First edition energy. <span className="text-gradient">Already loud.</span>
              </>
            }
          />

          <Reveal delay={0.15}>
            <div className="relative mx-auto mt-14 max-w-4xl rounded-3xl border border-transparent bg-white p-8 shadow-[0_28px_64px_-36px_rgba(232,90,79,0.45)] md:p-12">
              <Quote
                aria-hidden="true"
                className="bg-accent absolute -top-6 left-8 h-12 w-12 rounded-xl p-2.5 text-white shadow-[0_14px_30px_-12px_rgba(230,109,78,0.7)]"
              />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                >
                  <p className="font-display text-xl leading-relaxed font-bold tracking-tight md:text-2xl">
                    “{current.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full font-display text-xs font-bold text-white"
                      style={{ background: current.gradient }}
                    >
                      {current.initials}
                    </span>
                    <span>
                      <span className="block font-bold">{current.name}</span>
                      <span className="block text-sm font-medium text-muted">{current.role}</span>
                    </span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>

              <div className="mt-9 flex items-center justify-between">
                <div className="flex gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === index ? "w-7 bg-accent" : "w-2 bg-accent/25 hover:bg-accent/50"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-border font-bold transition-colors duration-200 hover:border-accent hover:text-accent-strong"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => setIndex((index + 1) % testimonials.length)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-border font-bold transition-colors duration-200 hover:border-accent hover:text-accent-strong"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
