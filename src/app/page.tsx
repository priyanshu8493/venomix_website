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
  name: "Venomix 2026 — India's Premier Hackathon",
  description:
    "A 36-hour hackathon in Bengaluru with 500 builders, ₹12L+ in prizes, world-class mentors and six innovation tracks.",
  startDate: "2026-11-21T09:30:00+05:30",
  endDate: "2026-11-22T21:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "KTPO Convention Centre",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Whitefield",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560066",
      addressCountry: "IN",
    },
  },
  image: ["https://venomix.dev/opengraph-image"],
  url: "https://venomix.dev",
  offers: {
    "@type": "Offer",
    url: "https://venomix.dev/#register",
    price: "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    validFrom: "2026-08-25T00:00:00+05:30",
  },
  organizer: {
    "@type": "Organization",
    name: "Venomix",
    url: "https://venomix.dev",
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
