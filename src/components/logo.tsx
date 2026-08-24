export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="vx-grad" x1="6" y1="8" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <path
        d="M16 1.5 29.5 9.25v13.5L16 30.5 2.5 22.75V9.25L16 1.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10Q14 19.5 16 24.5Q18 19.5 22.5 10"
        stroke="url(#vx-grad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-8 w-8 text-foreground" />
      <span className="font-display text-lg font-bold tracking-[0.18em] uppercase">Venomix</span>
    </span>
  );
}
