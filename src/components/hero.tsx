"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import { Countdown } from "@/components/countdown";
import { PixelBolt, PixelDiamond, PixelFlower, PixelSparkle } from "@/components/pixel-art";

const stats = [
  { value: "20", label: "Finalist teams" },
  { value: "60", label: "Builders across India" },
  { value: "₹24K+", label: "Prize pool" },
  { value: "12hrs", label: "One non-stop sprint" },
];

const headline = ["Build boldly.", "Ship fearlessly.", "Rise together."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const decorY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="bg-hero-gradient relative flex min-h-screen flex-col overflow-hidden"
    >
      <motion.div style={{ y: decorY }} className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <PixelFlower className="pixel-hover animate-float absolute -top-10 -left-12 w-44 sm:w-60 md:-left-6 md:w-72" />
        <PixelDiamond className="pixel-hover animate-float-slow absolute top-24 right-[6%] hidden w-20 sm:block md:w-28" />
        <PixelSparkle className="animate-float-slow absolute top-[16%] right-[22%] w-10 md:w-14" />
        <PixelSparkle className="animate-float absolute top-[42%] left-[7%] hidden w-9 lg:block" />
        <PixelBolt className="pixel-hover animate-float absolute bottom-36 left-[4%] w-16 md:w-24" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-black/5" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-5 pt-40 pb-16 text-center sm:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2.5 rounded-xl border border-white/35 bg-white/15 px-4 py-2 text-xs font-bold tracking-wide text-white backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          First edition · Sept 11–12, 2026 · Kolkata
        </motion.div>

        <h1 className="mt-8 font-display text-[clamp(4rem,9vw,7.5rem)] leading-[1.06] font-extrabold tracking-[-0.02em] text-white">
          {headline.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, delay: 0.18 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                className={`block ${i === 2 ? "drop-shadow-[0_6px_24px_rgba(230,109,78,0.45)]" : ""}`}
              >
                {line}
                {i === 2 && (
                  <PixelSparkle className="ml-3 mb-2 inline-block h-[0.42em] w-[0.42em] align-baseline" />
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.65 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed font-medium text-white/90 md:text-2xl md:leading-relaxed"
        >
          Venomix is where India&apos;s 20 finalist teams — 60 of the sharpest builders, designers
          and dreamers — collide for a single 12-hour sprint. World-class mentors, serious prizes,
          and zero tolerance for thinking small. Speed is the whole point.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8 }}
          className="mt-11 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#register" className="btn-primary ring-2 ring-white/60 hover:ring-white">
            Register now
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#tracks"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/95 px-8 py-4 text-base font-bold text-accent-strong shadow-[0_10px_30px_-14px_rgba(26,26,26,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            Explore tracks
            <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.95 }}
          className="mt-14"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white/80">
            Kickoff in
          </p>
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-11 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-white/85"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Biswa Bangla Convention Centre, New Town
          </span>
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" /> September 11–12
          </span>
          <span className="inline-flex items-center gap-2">
            <Users className="h-4 w-4" /> 20 teams · 3 members each
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10 border-t border-white/25 bg-white/10 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 divide-x divide-white/20 px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 py-6">
              <span className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white/75">{stat.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
