"use client";

import { useSyncExternalStore } from "react";

const EVENT_DATE = new Date("2026-11-21T09:30:00+05:30").getTime();

function subscribe(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getSnapshot(): number {
  return Math.max(0, EVENT_DATE - Date.now());
}

function getServerSnapshot(): number {
  return Number.NaN;
}

const units = [
  { label: "Days", ms: 86_400_000 },
  { label: "Hours", ms: 3_600_000 },
  { label: "Minutes", ms: 60_000 },
  { label: "Seconds", ms: 1_000 },
];

export function Countdown() {
  const remaining = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
      {units.map(({ label, ms }, i) => {
        const value = Number.isNaN(remaining)
          ? null
          : Math.floor((remaining / ms) % (i === 2 ? 60 : i === 1 ? 24 : i === 0 ? Infinity : 60));
        return (
          <div
            key={label}
            className="min-w-[70px] rounded-xl border border-white/35 bg-white/15 px-3 py-3 backdrop-blur-sm sm:min-w-[88px] sm:px-5 sm:py-4"
          >
            <div className="font-display text-2xl font-extrabold tabular-nums text-white sm:text-4xl">
              {value === null ? "--" : String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/75">
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
