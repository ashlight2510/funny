import { getToolSlugs } from "./lib/services";
import { guides } from "./guide/guides";

const BASE = "https://funnyfunny.cloud";

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { url: `${BASE}/`, lastmod: now, changefreq: "daily", priority: 1 },
    { url: `${BASE}/guide/`, lastmod: now, changefreq: "weekly", priority: 0.9 },
    { url: `${BASE}/privacy/`, lastmod: now, changefreq: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastmod: now, changefreq: "yearly", priority: 0.3 },
    { url: `${BASE}/copyright/`, lastmod: now, changefreq: "yearly", priority: 0.3 },
    { url: `${BASE}/policy/`, lastmod: now, changefreq: "yearly", priority: 0.3 },
  ];

  const guideUrls = guides.map((g) => ({
    url: `${BASE}/guide/${g.slug}/`,
    lastmod: now,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const toolSlugs = getToolSlugs("en");
  const toolUrls = toolSlugs.map((slug) => ({
    url: `${BASE}/tools/${slug}/`,
    lastmod: now,
    changefreq: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...guideUrls, ...toolUrls];
}
