import { ArrowUpRight, Mic } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PixelBolt, PixelFlower, PixelHeart, PixelSparkle } from "@/components/pixel-art";

export function CtaBand() {
  return (
    <section className="bg-hero-gradient relative overflow-hidden py-32 md:py-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        <PixelFlower className="animate-float absolute -top-12 -right-10 w-40 md:w-52" />
        <PixelBolt className="animate-float-slow absolute bottom-16 left-[6%] w-14 md:w-20" />
        <PixelHeart className="pixel-hover absolute top-1/4 left-[10%] hidden w-12 md:block" />
        <PixelSparkle className="animate-float absolute right-[18%] bottom-24 w-9" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.08] font-extrabold tracking-[-0.02em] text-white">
            Don&apos;t just watch the future.
            <br />
            Build it.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed font-medium text-white/90">
            500 seats. Six tracks. One weekend that changes how you think about your own
            ceiling. The only wrong move is sitting this one out.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#register"
              className="btn-secondary group ring-2 ring-white/50 hover:ring-white"
            >
              Register now
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:hello@venomix.dev?subject=I%20want%20to%20host%20a%20session"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 px-8 py-4 text-base font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white/15"
            >
              <Mic className="h-5 w-5" />
              Host a session
            </a>
            <a
              href="#partners"
              className="text-sm font-bold text-white/85 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline"
            >
              Become a partner →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
