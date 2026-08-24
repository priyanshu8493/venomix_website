import { ArrowUpRight, Mic } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial absolute inset-0 opacity-70" />
        <div className="animate-drift absolute top-1/2 left-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent),transparent_62%)] opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
            Don&apos;t just watch the future.
            <br />
            <span className="text-gradient">Build it.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            500 seats. Six tracks. One weekend that changes how you think about your own
            ceiling. The only wrong move is sitting this one out.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 font-semibold text-white shadow-[0_12px_44px_-10px_rgba(139,92,246,0.8)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Register now
              <ArrowUpRight className="h-4.5 w-4.5" />
            </a>
            <a
              href="mailto:hello@venomix.dev?subject=I%20want%20to%20host%20a%20session"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-8 py-4 font-semibold backdrop-blur transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <Mic className="h-4.5 w-4.5" />
              Host a session
            </a>
            <a
              href="#partners"
              className="text-sm font-semibold text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Become a partner →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
