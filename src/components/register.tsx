"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { CalendarDays, CheckCircle2, MapPin, Timer, Zap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { GeoTriangle, PixelSparkle } from "@/components/pixel-art";

const perks = [
  "Free entry — meals, swag and endless caffeine included",
  "₹24,000 prize pool — ₹12K winner, ₹7K second, ₹5K third",
  "40+ mentors cycling through the floor all sprint long",
  "Fast-track interviews with hiring partners",
];

const meta = [
  { icon: CalendarDays, text: "September 11–12, 2026" },
  { icon: MapPin, text: "IEM Research Park, Kolkata" },
  { icon: Timer, text: "12 hours, one non-stop sprint" },
  { icon: Zap, text: "20 finalist teams · 3 members each" },
];

const roles = ["Developer", "Designer", "Product", "Data / ML", "Explorer"];
const experience = ["First-timer", "1–2 hackathons", "Seasoned veteran"];
const teamStatus = ["Ready squad", "Looking for teammates", "Flying solo"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  role: string;
  experienceLevel: string;
  track: string;
  team: string;
  agree: boolean;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  role: "",
  experienceLevel: "",
  track: "",
  team: "",
  agree: false,
};

const inputClass =
  "w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm font-medium outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent focus:bg-white";

export function Register() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormState, value: string | boolean) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address";
    if (form.phone && !/^[+\d][\d\s-]{6,14}$/.test(form.phone))
      next.phone = "Enter a valid phone number";
    if (!form.role) next.role = "Select your primary role";
    if (!form.experienceLevel) next.experienceLevel = "Select your experience";
    if (!form.track) next.track = "Pick a track (you can change later)";
    if (!form.team) next.team = "How are you hacking?";
    if (!form.agree) next.agree = "Please accept the code of conduct";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <section id="register" className="relative scroll-mt-24 overflow-hidden py-28 md:py-40">
      <PixelSparkle
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute top-24 right-[8%] hidden w-12 lg:block"
      />
      <GeoTriangle
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[4%] hidden h-14 w-14 opacity-80 lg:block"
      />
      <div className="mx-auto grid max-w-[1200px] items-start gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Registrations"
            title={
              <>
                Secure your spot
                <br />
                <span className="text-gradient">in the arena.</span>
              </>
            }
            description="Applications take two minutes and are reviewed on a rolling basis. We select 20 finalist teams of 3 members each from across India — early applications stand a better chance."
          />
          <ul className="mt-8 space-y-3.5">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm font-medium leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {perk}
              </li>
            ))}
          </ul>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {meta.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-muted"
              >
                <item.icon className="h-5 w-5 shrink-0 text-accent-strong" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-transparent bg-white p-6 shadow-[0_32px_72px_-40px_rgba(232,90,79,0.55)] md:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight">
                  You&apos;re on the list, {form.name.split(" ")[0]}.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed font-medium text-muted">
                  A confirmation is on its way to{" "}
                  <span className="font-bold text-foreground">{form.email}</span>. Watch your
                  inbox for the Discord invite and team formation details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-8 rounded-xl border-2 border-border px-6 py-3 text-sm font-bold transition-colors duration-200 hover:border-accent hover:text-accent-strong"
                >
                  Register another teammate
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <h3 className="font-display text-xl font-extrabold tracking-tight">
                  Register for Venomix &apos;26
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                      Full name *
                    </span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => update("name", e.target.value)}
                      placeholder="Ada Lovelace"
                      className={inputClass}
                    />
                    {errors.name && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.name}</p>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                      Email *
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => update("email", e.target.value)}
                      placeholder="ada@builds.dev"
                      className={inputClass}
                    />
                    {errors.email && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.email}</p>}
                  </label>
                </div>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                    Phone (optional)
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                  {errors.phone && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.phone}</p>}
                </label>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                      Primary role *
                    </span>
                    <select
                      value={form.role}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) => update("role", e.target.value)}
                      className={`${inputClass} ${form.role ? "" : "text-muted"}`}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {roles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.role && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.role}</p>}
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted">
                      Experience *
                    </span>
                    <select
                      value={form.experienceLevel}
                      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                        update("experienceLevel", e.target.value)
                      }
                      className={`${inputClass} ${form.experienceLevel ? "" : "text-muted"}`}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {experience.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    {errors.experienceLevel && (
                      <p className="mt-1.5 text-xs font-semibold text-berry">{errors.experienceLevel}</p>
                    )}
                  </label>
                </div>

                <fieldset>
                  <legend className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted">
                    Track interest * <span className="font-medium normal-case">(you can switch on-site)</span>
                  </legend>
                  <select
                    value={form.track}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => update("track", e.target.value)}
                    className={`${inputClass} ${form.track ? "" : "text-muted"}`}
                  >
                    <option value="" disabled>
                      Select a track…
                    </option>
                    {[
                      "AI & Machine Learning",
                      "Web3 & Decentralization",
                      "FinTech",
                      "HealthTech",
                      "Climate & Sustainability",
                      "Open Innovation",
                      "Undecided — surprise me",
                    ].map((track) => (
                      <option key={track} value={track}>
                        {track}
                      </option>
                    ))}
                  </select>
                  {errors.track && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.track}</p>}
                </fieldset>

                <fieldset>
                  <legend className="mb-2.5 block text-xs font-bold uppercase tracking-wider text-muted">
                    Team status *
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {teamStatus.map((status) => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => update("team", status)}
                        aria-pressed={form.team === status}
                        className={`rounded-full border-2 px-4 py-2 text-xs font-bold transition-colors duration-200 ${
                          form.team === status
                            ? "border-accent bg-accent text-white"
                            : "border-border text-muted hover:border-accent/60 hover:text-accent-strong"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                  {errors.team && <p className="mt-1.5 text-xs font-semibold text-berry">{errors.team}</p>}
                </fieldset>

                <label className="flex items-start gap-3 text-xs leading-relaxed font-medium text-muted">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => update("agree", e.target.checked)}
                    className="accent-accent mt-0.5 h-4 w-4 shrink-0"
                  />
                  <span>
                    I agree to the Venomix code of conduct — be excellent to each other, build
                    original work, and respect the venue, volunteers and fellow hackers.
                  </span>
                </label>
                {errors.agree && <p className="-mt-3 text-xs font-semibold text-berry">{errors.agree}</p>}

                <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-70">
                  {submitting && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  )}
                  {submitting ? "Securing your spot…" : "Submit application"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
