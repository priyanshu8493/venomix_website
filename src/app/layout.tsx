import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";

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

const siteUrl = "https://www.venomix.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Venomix 2026 — Venomix Hackathon at UEM Kolkata",
    template: "%s · Venomix",
  },
  description:
    "Join Venomix Hackathon at UEM Kolkata, Buddha Auditorium — India's premier 12-hour speed hackathon. 15 finalist teams, ₹20,000 prize pool, world-class mentors and six innovation tracks. Sept 11–12, 2026.",
  keywords: [
    "Venomix",
    "Venomix hackathon",
    "Venomix hackathon UEM",
    "UEM hackathon",
    "UEM Kolkata hackathon",
    "Kolkata hackathon",
    "hackathon in Kolkata",
    "speed hackathon",
    "AI hackathon",
    "student hackathon",
    "hackathon 2026",
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
    title: "Venomix 2026 — Venomix Hackathon at UEM Kolkata",
    description:
      "India's premier 12-hour speed hackathon at UEM Kolkata, Buddha Auditorium. 15 finalist teams. ₹20K prize pool. Six tracks. Sept 11–12.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venomix 2026 — Venomix Hackathon at UEM Kolkata",
    description:
      "India's premier 12-hour speed hackathon at UEM Kolkata, Buddha Auditorium. 15 finalist teams. ₹20K prize pool. Six tracks. Sept 11–12.",
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
        <Loader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
