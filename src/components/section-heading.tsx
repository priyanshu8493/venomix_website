import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className={`mt-5 text-base leading-relaxed text-muted md:text-lg ${centered ? "mx-auto max-w-2xl" : ""}`}>
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
