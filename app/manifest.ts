import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Victor Castro — Portfólio",
    short_name: "Victor Castro",
    description: "Portfólio de Victor Castro em software, dados, machine learning e inteligência artificial aplicada.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1014",
    theme_color: "#0b1014",
    icons: [
      { src: "/favicons-brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/favicons-brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
