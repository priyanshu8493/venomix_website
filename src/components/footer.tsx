"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Logo } from "@/components/logo";
import { PixelConfetti } from "@/components/pixel-art";
import {
  IconDiscord,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconX,
  IconYouTube,
} from "@/components/social-icons";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Judges & Mentors", href: "#judges" },
  { label: "Partners", href: "#partners" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { label: "X (Twitter)", href: "https://x.com/venomixhq", Icon: IconX },
  { label: "Instagram", href: "https://instagram.com/venomixhq", Icon: IconInstagram },
  { label: "LinkedIn", href: "https://linkedin.com/company/venomixhq", Icon: IconLinkedIn },
  { label: "GitHub", href: "https://github.com/venomixhq", Icon: IconGitHub },
  { label: "Discord", href: "https://discord.gg/venomix", Icon: IconDiscord },
  { label: "YouTube", href: "https://youtube.com/@venomixhq", Icon: IconYouTube },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function subscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <footer className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed font-medium text-muted">
            India&apos;s premier hackathon for builders who refuse the ordinary. Build boldly.
            Ship fearlessly. Rise together.
          </p>
          <PixelConfetti aria-hidden="true" className="mt-6 opacity-90" />
          <div className="mt-5 flex flex-wrap gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Quick links">
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Quick links</h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors duration-200 hover:text-accent-strong">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Resources">
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Resources</h3>
          <ul className="mt-5 space-y-3 text-sm font-semibold">
            <li>
              <a
                href="mailto:hello@venomix.dev?subject=Sponsorship%20Prospectus%20Request"
                className="transition-colors duration-200 hover:text-accent-strong"
              >
                Sponsorship prospectus
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors duration-200 hover:text-accent-strong">
                Code of conduct
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@venomix.dev?subject=Press%20%26%20Media"
                className="transition-colors duration-200 hover:text-accent-strong"
              >
                Press & media
              </a>
            </li>
            <li>
              <a href="mailto:hello@venomix.dev" className="transition-colors duration-200 hover:text-accent-strong">
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Stay in the loop</h3>
          <p className="mt-5 text-sm leading-relaxed font-medium text-muted">
            One email a month — announcements, deadlines and builder stories. No spam, ever.
          </p>
          {status === "success" ? (
            <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent-soft px-4 py-3 text-sm font-bold text-accent-strong">
              <CheckCircle2 className="h-5 w-5" />
              You&apos;re subscribed. See you in the inbox.
            </p>
          ) : (
            <>
              <form onSubmit={subscribe} noValidate className="mt-4 flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  placeholder="you@builds.dev"
                  aria-label="Email address for newsletter"
                  className={`w-full min-w-0 rounded-xl border bg-white px-4 py-3 text-sm font-medium outline-none transition-colors duration-200 placeholder:text-muted focus:border-accent ${
                    status === "error" ? "border-berry" : "border-border"
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="inline-flex h-[46px] shrink-0 items-center justify-center gap-2 rounded-xl bg-accent px-4 font-bold text-white shadow-[0_10px_26px_-12px_rgba(230,109,78,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-strong"
                >
                  <Send className="h-4.5 w-4.5" />
                </button>
              </form>
              {status === "error" && (
                <p className="mt-2 text-xs font-semibold text-berry">Please enter a valid email address.</p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs font-medium text-muted sm:flex-row sm:px-8">
          <p>© 2026 Venomix. All rights reserved.</p>
          <p className="max-w-xl text-center text-[11px] leading-relaxed text-muted sm:text-right">
            Organized by Department of Computer Applications (CA), in association with Institution&apos;s Innovation Council (IIC), University of Engineering and Management (UEM), Kolkata.
          </p>
          <p className="flex gap-5">
            <a href="#" className="font-semibold transition-colors duration-200 hover:text-accent-strong">
              Privacy
            </a>
            <a href="#" className="font-semibold transition-colors duration-200 hover:text-accent-strong">
              Terms
            </a>
            <a href="#" className="font-semibold transition-colors duration-200 hover:text-accent-strong">
              Code of Conduct
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
