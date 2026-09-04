import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Tracks } from "@/components/tracks";
import { Schedule } from "@/components/schedule";
import { Judges } from "@/components/judges";
import { Sponsors } from "@/components/sponsors";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Register } from "@/components/register";
import { CtaBand } from "@/components/cta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Venomix 2026 — India's Premier Speed Hackathon",
  description:
    "A 12-hour speed hackathon in Kolkata with 15 finalist teams of 3 builders each, a ₹20,000 prize pool, world-class mentors and six innovation tracks. Kickoff night Sept 11, one non-stop build sprint on Sept 12.",
  startDate: "2026-09-11T18:00:00+05:30",
  endDate: "2026-09-12T23:59:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "UEM Kolkata, Buddha Auditorium",
    address: {
      "@type": "PostalAddress",
      streetAddress: "UEM Kolkata",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },
  image: ["https://www.venomix.tech/opengraph-image"],
  url: "https://www.venomix.tech",
  offers: {
    "@type": "Offer",
    url: "https://www.venomix.tech/#register",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: "2026-08-25T00:00:00+05:30",
  },
  organizer: {
    "@type": "Organization",
    name: "Venomix",
    url: "https://www.venomix.tech",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Judges />
      <Sponsors />
      <Testimonials />
      <Faq />
      <Register />
      <CtaBand />
    </>
  );
}
