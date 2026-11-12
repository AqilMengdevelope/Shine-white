import type { MetadataRoute } from "next";
import { locations, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about-us",
    "/cleaning-service",
    ...locations.flatMap((l) => [`/cleaning-service/${l.slug}`, ...services.map((s) => `/cleaning-service/${l.slug}/${s.slug}`)]),
    "/cleaners",
    "/team",
    "/faq",
    "/blog",
    "/contact-us",
  ];
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
