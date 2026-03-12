# SEO 체크리스트

## 사이트맵·인덱싱
- **robots.txt**: `https://funnyfunny.cloud/robots.txt` — Sitemap URL 포함됨
- **sitemap.xml**: `https://funnyfunny.cloud/sitemap.xml` (Next.js `app/sitemap.js`에서 생성)
  - 메인, /guide/, /calculators/, /tests/, 정책 페이지, 모든 가이드·도구 URL 포함
- **Google Search Console**: [Search Console](https://search.google.com/search-console) → 사이트 등록 후 **Sitemap**에 `https://funnyfunny.cloud/sitemap.xml` 제출 권장. 상세 절차는 [SEARCH_CONSOLE.md](./SEARCH_CONSOLE.md) 참고.

## 메타·구조
- **도구 페이지**: og:title, description, title 10자 이상·description 50자 이상 권장. 부족 시 `npm run sync-meta`로 services 기준 동기화.
- **진입·가이드 페이지**: 고가치 키워드(실수령액, 4대보험, 휴식 체크 등)를 keywords·description에 자연스럽게 포함. (반영 완료.)

## 스크립트 (npm run)
| 스크립트 | 설명 |
|----------|------|
| `audit-meta` | 도구 메타 점검(og:title, description, 길이). 실패 시 exit 1 |
| `check-deploy` | 배포 전 점검: audit-meta + out/robots.txt·sitemap.xml·out/tools/ (yarn build 후 실행) |
| `sync-meta` | 도구 HTML 메타를 services.js 기준으로 덮어쓰기(길이 보강 포함) |
| `list-priority-urls` | GSC·Amplitude용 우선순위 URL 목록 한 줄씩 출력 |
| `add-og-meta.mjs` | OG 없는 도구에 메타 일괄 추가 (직접 실행) |
| `add-missing-description.mjs` | description 없는 도구에만 description 추가 (직접 실행) |
| `add-guide-links.mjs` | 가이드 있는 도구 푸터에 "사용 가이드"(·추가 가이드) 링크 추가 (직접 실행) |
| `add-share-to-tools.mjs` | 도구 index.html에 "링크 복사" 공유 버튼 추가 (직접 실행, --dry-run 지원) |

## 다음 액션
1. GSC에서 Sitemap 제출·상위 URL 색인 요청 (`npm run list-priority-urls` 로 URL 복사)
2. Amplitude에서 유입 URL 상위 확인 후 [MONETIZATION.md](./MONETIZATION.md) 상위 페이지 후보와 비교
3. **새 도구** 추가 시: `add-guide-links.mjs`·`sync-meta` 실행 후 `audit-meta`로 점검. **새 가이드** 추가 시: `app/guide/guides.js`에 가이드 추가 → `app/lib/services.js`의 `getSeoGuides`에 slug·title·desc 추가(가이드 인덱스 노출용) → (선택) `scripts/list-priority-urls.mjs`에 `/guide/{slug}/` 추가. 배포 직전: `yarn build && npm run check-deploy` 권장.

**CI**: `main` 푸시 시 `.github/workflows/audit-meta.yml`에서 `audit-meta` 자동 실행. 배포 전 로컬에서도 `npm run audit-meta` 실행 권장.
