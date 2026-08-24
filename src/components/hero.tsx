"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Countdown } from "@/components/countdown";

const stats = [
  { value: "500+", label: "Hackers on-site" },
  { value: "₹12L+", label: "Prize pool" },
  { value: "40+", label: "Mentors & judges" },
  { value: "36hrs", label: "Of relentless building" },
];

const headline = ["Build boldly.", "Ship fearlessly.", "Rise together."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-screen flex-col overflow-hidden">
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid mask-radial absolute inset-0" />
        <div className="animate-drift absolute -top-48 left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_62%)] opacity-25 blur-3xl" />
        <div className="animate-drift-slow absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,var(--accent-2),transparent_60%)] opacity-20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-background" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pt-36 pb-16 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-medium tracking-wide text-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Third edition · Nov 21–22, 2026 · Bengaluru
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(2.9rem,8vw,6.5rem)] font-bold leading-[1.02] tracking-tight">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? "text-gradient" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          Venomix is where 500 of India&apos;s sharpest builders, designers and dreamers collide
          for 36 hours — with world-class mentors, serious prizes, and zero tolerance for
          thinking small.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#register"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-semibold text-white shadow-[0_12px_44px_-10px_rgba(139,92,246,0.8)] transition-all duration-300 hover:scale-[1.04]"
          >
            Register now
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#tracks"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Explore tracks
            <ArrowDown className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-12"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
            Hacking begins in
          </p>
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> KTPO Convention Centre, Whitefield
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-accent" /> November 21–22
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4 text-accent" /> Limited to 500 seats
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.35 }}
        className="relative z-10 border-t border-border bg-surface/50 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-6">
              <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
