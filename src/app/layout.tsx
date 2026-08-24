import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const siteUrl = "https://venomix.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Venomix 2026 — Build. Innovate. Elevate.",
    template: "%s · Venomix",
  },
  description:
    "Venomix is India's premier 36-hour hackathon. 500 builders, ₹12L+ in prizes, world-class mentors, and six innovation tracks. November 21–22, 2026 · Bengaluru.",
  keywords: [
    "hackathon",
    "Venomix",
    "Bengaluru hackathon",
    "AI hackathon",
    "Web3",
    "FinTech",
    "innovation",
    "student hackathon",
    "India hackathon 2026",
  ],
  authors: [{ name: "Venomix" }],
  creator: "Venomix",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Venomix",
    title: "Venomix 2026 — Build. Innovate. Elevate.",
    description:
      "India's premier 36-hour hackathon. 500 builders. ₹12L+ prizes. Six tracks. One relentless standard. Nov 21–22, Bengaluru.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venomix 2026 — Build. Innovate. Elevate.",
    description:
      "India's premier 36-hour hackathon. 500 builders. ₹12L+ prizes. Six tracks. Nov 21–22, Bengaluru.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#060609" },
    { media: "(prefers-color-scheme: light)", color: "#f7f7f9" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInit = `(function(){try{var t=localStorage.getItem("venomix-theme");if(!t){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";}document.documentElement.classList.remove("light","dark");document.documentElement.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} min-h-screen antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
