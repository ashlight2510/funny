# SEO 체크리스트

## 사이트맵·인덱싱
- **robots.txt**: `https://funnyfunny.cloud/robots.txt` — Sitemap URL 포함됨
- **sitemap.xml**: `https://funnyfunny.cloud/sitemap.xml` (Next.js `app/sitemap.js`에서 생성)
  - 메인, /guide/, /calculators/, /tests/, 정책 페이지, 모든 가이드·도구 URL 포함
- **Google Search Console**: [Search Console](https://search.google.com/search-console) → 사이트 등록 후 **Sitemap**에 `https://funnyfunny.cloud/sitemap.xml` 제출 권장

## 스크립트
- `node scripts/audit-tool-meta.mjs` — 도구별 메타(og:title, description) 점검
- `node scripts/add-og-meta.mjs` — OG 없는 도구에 메타 일괄 보강
- `node scripts/add-guide-links.mjs` — 가이드 있는 도구에 "사용 가이드" 푸터 추가
