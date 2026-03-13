import { getToolSlugs } from "./lib/services";
import { guides } from "./guide/guides";

const BASE = "https://funnyfunny.cloud";

/**
 * Next.js MetadataRoute.Sitemap — 빌드 시 out/sitemap.xml 생성.
 * GSC 제출: https://funnyfunny.cloud/sitemap.xml
 * 포함: 메인·정책·/guide/·/calculators/·/tests/·모든 가이드·모든 도구(tools/{slug}/)
 */
export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/guide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/calculators/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/tests/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/privacy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/copyright/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/policy/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const guideUrls = guides.map((g) => ({
    url: `${BASE}/guide/${g.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const toolSlugs = getToolSlugs("en");
  const toolUrls = toolSlugs.map((slug) => ({
    url: `${BASE}/tools/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...guideUrls, ...toolUrls];
}
