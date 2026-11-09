import type { MetadataRoute } from "next";

// Lets search engines crawl the whole site and points them to the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://anadedios.vercel.app/sitemap.xml",
  };
}
