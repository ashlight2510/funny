import fs from "fs";
import path from "path";
import { guides } from "./guide/guides";

const BASE = "https://funnyfunny.cloud";

/** public/tools 하위 index.html 있는 디렉터리만 슬러그로 사용 (배포와 1:1 동기화) */
function getToolSlugsFromFs() {
  try {
    const toolsDir = path.join(process.cwd(), "public", "tools");
    if (!fs.existsSync(toolsDir)) return [];
    return fs
      .readdirSync(toolsDir)
      .filter((name) => {
        const dir = path.join(toolsDir, name);
        return fs.statSync(dir).isDirectory() && fs.existsSync(path.join(dir, "index.html"));
      })
      .sort();
  } catch {
    return [];
  }
}

/**
 * Next.js MetadataRoute.Sitemap — 빌드 시 out/sitemap.xml 생성.
 * GSC 제출: https://funnyfunny.cloud/sitemap.xml
 * 포함: 메인·정책·/guide/·/calculators/·/tests/·모든 가이드·모든 도구(public/tools 기준)
 */
export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/guide/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/calculators/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/tests/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE}/games/`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
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

  const toolSlugs = getToolSlugsFromFs();
  const toolUrls = toolSlugs.map((slug) => ({
    url: `${BASE}/tools/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...guideUrls, ...toolUrls];
}
