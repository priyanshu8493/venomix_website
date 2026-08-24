import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Venomix — Build. Innovate. Elevate.",
    short_name: "Venomix",
    description:
      "India's premier 12-hour speed hackathon. 500 builders, ₹12L+ prizes, six tracks. Sept 11–12, 2026 · Kolkata.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#F97D5F",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
