# 주간·배포 루틴 요약

한 곳에서 "이번 주 할 일"과 "배포 전"을 빠르게 확인할 수 있는 요약입니다.

## 이번 주 할 일 (3가지)

**실행 순서 (체크하며 진행)**

- [ ] **1. GSC Sitemap** — [Search Console](https://search.google.com/search-console) → Sitemaps → `sitemap.xml` 제출
- [ ] **2. GSC URL 검사** — 터미널에서 `npm run list-priority-urls` 실행 → 출력 URL 복사 → URL 검사에 붙여넣기 → 색인 생성 요청 (상위 5~10개)
- [ ] **3. Amplitude** — 유입 URL 상위 10개 확인 후 [MONETIZATION.md](./MONETIZATION.md) "상위 페이지 후보"와 비교
- [ ] **4. 상위 5개 메타 보강** — 유입 많은 페이지부터 title/description에 검색 키워드 1개씩 자연스럽게 추가

| 순서 | 할 일 | 참고 |
|------|--------|------|
| 1 | **Amplitude** — 유입 URL 상위 10개 확인 후 "상위 페이지 후보"와 비교 | [MONETIZATION.md §직접 진행 가이드](./MONETIZATION.md) |
| 2 | **GSC** — Sitemap 제출, 상위 5~10개 URL 검사·색인 요청 | `npm run list-priority-urls`, [SEARCH_CONSOLE.md](./SEARCH_CONSOLE.md) |
| 3 | **상위 5개 페이지** — 메타에 키워드 1개씩 보강 | [MONETIZATION.md](./MONETIZATION.md) 상위 페이지 후보 표 |

## 다음 주

- Amplitude에서 `guide_helpful`(👍/👎)·`guide_cta_click` 비율 확인 → 만족도·전환 높은 가이드에 광고·내부 링크 우선 배치 검토. (이벤트 정의: [ANALYTICS.md](./ANALYTICS.md), 전략: [MONETIZATION.md](./MONETIZATION.md))

## 배포 전

- `yarn build && npm run check-deploy` — 도구 메타(audit-meta) + out/robots.txt·sitemap.xml·out/tools/ 검사.
- 상세: [DEPLOY_CHECK.md](../DEPLOY_CHECK.md), [SEO-checklist.md](./SEO-checklist.md), [SEO_ROADMAP.md](../SEO_ROADMAP.md) §5.

## 콘텐츠 추가 시

- **새 도구**: `add-guide-links.mjs`·`sync-meta` → `audit-meta`. **새 가이드**: guides.js → getSeoGuides(services.js) → (선택) list-priority-urls. 자세한 단계: [SEO-checklist.md](./SEO-checklist.md).
