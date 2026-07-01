import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vaksa Studio",
    short_name: "Vaksa",
    description:
      "Independent creative agency for brand identity, digital experience, and motion design.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0D0C",
    theme_color: "#0E0D0C",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
