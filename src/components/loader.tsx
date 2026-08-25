"use client";

import { useEffect, useState } from "react";

const letters = ["V", "E", "N", "O", "M", "I", "X"];

export function Loader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.body.style.overflow = "";
    }, 3300);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={`loader-root${mounted ? " loaded" : ""}`} aria-hidden="true">
      <div className="loader-bg" />

      <div className="loader-content">
        <div className="loader-logo">
          <svg viewBox="0 0 32 32" fill="none" className="loader-hex" aria-hidden="true">
            <path
              d="M16 1.5 29.5 9.25v13.5L16 30.5 2.5 22.75V9.25L16 1.5Z"
              stroke="#FFFFFF"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
          <svg viewBox="0 0 32 32" fill="none" className="loader-v" aria-hidden="true">
            <path
              d="M9.5 10Q14 19.5 16 24.5Q18 19.5 22.5 10"
              stroke="url(#loader-v-grad)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="loader-v-grad" x1="6" y1="8" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#FFD9C2" />
              </linearGradient>
            </defs>
          </svg>
          <div className="loader-glow" />
        </div>

        <div className="loader-text">
          {letters.map((char, i) => (
            <span key={`${char}-${i}`} className="loader-letter" style={{ animationDelay: `${1.0 + i * 0.07}s` }}>
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
