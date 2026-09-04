import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PixelSparkle } from "@/components/pixel-art";

export function Judges() {
  return (
    <section id="judges" className="scroll-mt-24 bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Judges & Mentors"
          title={
            <>
              Judged by people <span className="text-gradient">who&apos;ve shipped.</span>
            </>
          }
          description="Our lineup of engineers, researchers, designers and investors is being finalized. Stay tuned — we&apos;re revealing soon."
        />

        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-accent/30 bg-white/60 px-8 py-20 text-center">
            <PixelSparkle className="mb-6 h-10 w-10 text-accent-strong opacity-80" />
            <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
              Mentors & Judges
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed font-medium text-muted">
              Our panel of industry leaders, founders and technical experts will be revealed soon.
              Stay tuned for the full lineup.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-accent/40 bg-accent-soft px-5 py-2.5 text-sm font-bold text-accent-strong">
              Revealing soon
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
