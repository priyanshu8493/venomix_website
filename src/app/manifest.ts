import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Venomix — Build. Innovate. Elevate.",
    short_name: "Venomix",
    description:
      "India's premier 36-hour hackathon. 500 builders, ₹12L+ prizes, six tracks. Nov 21–22, 2026 · Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#060609",
    theme_color: "#060609",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
