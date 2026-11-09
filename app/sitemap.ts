import type { MetadataRoute } from "next";

// Tells search engines which pages exist.
const base = "https://anadedios.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work/vix-micro", "/work/confibud", "/about"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
