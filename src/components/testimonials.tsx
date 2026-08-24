"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const metrics = [
  { end: 3200, suffix: "+", label: "Applications received" },
  { end: 500, suffix: "+", label: "Hackers on-site" },
  { end: 12, prefix: "₹", suffix: "L+", label: "Prizes awarded" },
  { end: 96, suffix: "%", label: "Would return" },
];

const testimonials = [
  {
    quote:
      "We came in as four strangers from different colleges and left as a team with a funded prototype. The mentor rounds at 2 AM changed how we think about shipping.",
    name: "Ishita Kulkarni",
    role: "Team Sisyphus · Winners, AI Track '25",
    initials: "IK",
  },
  {
    quote:
      "Venomix is the only hackathon where I've seen judges argue over a rubric in public. You know exactly why you won or lost — that's rare and it made us better.",
    name: "Devansh Gupta",
    role: "Team Kernel Panic · Finalist '25",
    initials: "DG",
  },
  {
    quote:
      "I joined solo, terrified, with a half-baked idea. I left with a team, two job interviews, and a working product demo. Best 36 hours of my degree.",
    name: "Fatima Sheikh",
    role: "Solo hacker · Open Innovation '25",
    initials: "FS",
  },
  {
    quote:
      "The production quality rivals any conference I've attended. As a sponsor, we hired three interns out of that weekend. The ROI was embarrassingly good.",
    name: "Nikhil Verma",
    role: "Developer Relations · Anchor Partner",
    initials: "NV",
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
    <span ref={ref} className="text-gradient font-display text-4xl font-bold tracking-tight md:text-5xl">
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
    <section id="stories" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Reveal key={metric.label} className="flex flex-col items-center gap-2 text-center">
              <CountUp end={metric.end} prefix={metric.prefix} suffix={metric.suffix} />
              <span className="text-sm text-muted">{metric.label}</span>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading
            eyebrow="Success Stories"
            title={
              <>
                Proof, not promises. <span className="text-gradient">In their words.</span>
              </>
            }
          />

          <Reveal delay={0.15}>
            <div className="relative mx-auto mt-14 max-w-4xl rounded-3xl border border-border bg-surface p-8 md:p-12">
              <Quote aria-hidden="true" className="absolute -top-5 left-8 h-10 w-10 rounded-2xl border border-border bg-background p-2 text-accent" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, x: 32 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -32 }}
                  transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                >
                  <p className="font-display text-xl leading-relaxed font-medium md:text-2xl">
                    “{current.quote}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-xs font-bold text-white"
                    >
                      {current.initials}
                    </span>
                    <span>
                      <span className="block font-semibold">{current.name}</span>
                      <span className="block text-sm text-muted">{current.role}</span>
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
                        i === index ? "w-7 bg-gradient-brand" : "w-2 bg-surface-2 hover:bg-accent/40"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronLeft className="h-4.5 w-4.5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => setIndex((index + 1) % testimonials.length)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronRight className="h-4.5 w-4.5" />
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
