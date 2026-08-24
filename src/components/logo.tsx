export function LogoMark({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const uid = variant === "light" ? "vxw" : "vxd";
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${uid}-grad`} x1="6" y1="8" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          {variant === "light" ? (
            <>
              <stop stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#FFD9C2" />
            </>
          ) : (
            <>
              <stop stopColor="#E66D4E" />
              <stop offset="1" stopColor="#FFB3C7" />
            </>
          )}
        </linearGradient>
      </defs>
      <path
        d="M16 1.5 29.5 9.25v13.5L16 30.5 2.5 22.75V9.25L16 1.5Z"
        stroke={variant === "light" ? "#FFFFFF" : "currentColor"}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10Q14 19.5 16 24.5Q18 19.5 22.5 10"
        stroke={`url(#${uid}-grad)`}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${
        variant === "light" ? "text-white" : "text-foreground"
      } ${className ?? ""}`}
    >
      <LogoMark variant={variant} className="h-8 w-8" />
      <span className="font-display text-lg font-bold uppercase tracking-[0.18em]">Venomix</span>
    </span>
  );
}
