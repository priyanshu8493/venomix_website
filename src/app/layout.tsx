import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
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
    "Venomix is India's premier 12-hour speed hackathon. 500 builders, a ₹24,000 prize pool, world-class mentors, and six innovation tracks. September 11–12, 2026 · Kolkata.",
  keywords: [
    "hackathon",
    "Venomix",
    "Kolkata hackathon",
    "speed hackathon",
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
      "India's premier 12-hour speed hackathon. 500 builders. ₹24K prize pool. Six tracks. One relentless standard. Sept 11–12, Kolkata.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venomix 2026 — Build. Innovate. Elevate.",
    description:
      "India's premier 12-hour speed hackathon. 500 builders. ₹24K prize pool. Six tracks. Sept 11–12, Kolkata.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#F97D5F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} min-h-screen antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
