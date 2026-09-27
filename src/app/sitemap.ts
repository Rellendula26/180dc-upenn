import type { MetadataRoute } from "next";
import { routes, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.href, site.url).toString(),
    changeFrequency: "monthly",
    priority: route.href === "/" ? 1 : 0.7,
  }));
}
