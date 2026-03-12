# FunnyFunny Cloud SEO 로드맵 — 100개 서비스, 월 천만 원 수익

## 목표
- **서비스 수**: 100개 도구 유지·확대
- **수익 목표**: 월 1,000만 원 (광고·제휴 등)
- **전략**: 검색 유입 극대화 + 내부 링크 + 도메인 권위

**목차**: [1. 이미 적용된 것](#1-이미-적용된-것-현재-상태) · [2. 단기](#2-단기-12주-즉시-효과) · [3. 중기](#3-중기-13개월-트래픽수익-곡선) · [4. 장기](#4-장기-3개월-도메인-권위100개-서비스) · [5. 체크리스트](#5-체크리스트-배포-전) · [6. 참고](#6-참고)

---

## 1. 이미 적용된 것 (현재 상태)

- **사이트맵**: `/sitemap.xml` — 메인, 가이드, 정책, **모든 /tools/{slug}/** 포함
- **구조화 데이터**: WebSite, Organization, ItemList(핵심 유틸·가이드), **ItemList(전체 도구)** 추가됨, WebApplication(주요 앱), FAQPage
- **robots.txt**: `Allow: /`, Sitemap URL 명시
- **Canonical/OG**: 각 도구 페이지 canonical·og:url을 `https://funnyfunny.cloud/tools/{slug}/` 로 통일 (update-canonic.mjs)
- **trailing slash**: 링크·사이트맵·구조화 데이터 URL 일관되게 `/` 로 끝나도록 통일
- **404 리다이렉트**: `/tools/xxx` → `/tools/xxx/` 로 이동해 디렉터리 인덱스 활용

### 1.1 고도화 적용 (전 페이지 구글 노출 극대화)

- **가이드 페이지**: canonical·og:url을 `https://funnyfunny.cloud/guide/{slug}/` 로 통일(trailing slash), `openGraph.locale`(ko_KR)·alternateLocale(en_US), `robots` 명시
- **정책 페이지**(privacy, terms, copyright, policy): `alternates.canonical`·og:url trailing slash 통일, description 보강, `robots: { index, follow }`
- **메인·레이아웃**: `alternates.canonical`·`openGraph.url` trailing slash, `openGraph.locale: ko_KR`·alternateLocale, `alternates.languages`(ko/en), `<html lang="ko">` 기본
- **가이드 구조화 데이터**: BreadcrumbList(Home → Guides → 가이드명) JSON-LD 추가 → SERP 브레드크럼 노출 가능
- **사이트맵**: Next 규격에 맞게 `lastModified`·`changeFrequency` 사용으로 빌드 시 올바른 `<lastmod>`·`<changefreq>` 출력

### 1.2 롱테일·랜딩·도구→가이드 링크 (적용 완료)

- **금융·세금·건강 도구 메타**: money, tax, house, bit, specific, invest, health, hairloss, bmi, edu, nospend 등에 롱테일 문구 반영 (title 50~60자, description 150~160자, "무료 OOO" 키워드)
- **카테고리 랜딩**: `/calculators/`(계산기 모음), `/tests/`(테스트 모음) 추가 — 사이트맵·푸터 링크 포함
- **도구 푸터 "사용 가이드"**: rest, product, video, dailycheck, money, bit, house, tax, specific, hairloss, cafe, health, bmi, invest, edu, nospend 등에 `https://funnyfunny.cloud/guide/{guide-slug}/` 링크 추가

---

## 2. 단기 (1–2주): 즉시 효과

### 2.1 각 도구 페이지 메타 품질
- **title**: 50–60자, 키워드 포함, 예) `PDF 이미지 변환 | FunnyFunny Cloud`
- **description**: 150–160자, 행동 유도 문구, 예) `브라우저에서 PDF를 PNG/JPEG로 변환. 서버 업로드 없이 로컬 처리.`
- **키워드**: 해당 도구 + 상위 2–3개 검색어 (과하지 않게)
- **OG 이미지**: 가능하면 도구별 1200×630 이미지 (공유 시 클릭률 상승)

→ 이미 대부분 도구에 적용돼 있으면, **누락된 도구만** 점검·보완.

### 2.2 가이드–도구 내부 링크
- **가이드 → 도구**: 가이드 CTA가 같은 도메인 `/tools/{slug}/` 로 연결됨 (GuidePageClient·가이드 인덱스).
- **도구 → 가이드**: 푸터 "사용 가이드" → `https://funnyfunny.cloud/guide/{guide-slug}/` 적용 예: rest, product.
- **효과**: 크롤 효율 + 체류 시간 + 키워드 연관성

### 2.3 Google Search Console
- 도메인/URL 접두어 소유 확인
- sitemap 제출: `https://funnyfunny.cloud/sitemap.xml`
- “색인 생성” 요청으로 중요 URL(메인, 인기 도구, 가이드) 우선 색인

---

## 3. 중기 (1–3개월): 트래픽·수익 곡선

### 3.1 롱테일 키워드
- 서비스별 “무료 OOO”, “OOO 계산기”, “OOO 변환” 등 롱테일 문구를 title/description에 자연스럽게 반영
- `seoTopItems` / `seoApplications` 설명 문구를 검색 의도에 맞게 조정 (클릭 유도)

### 3.2 카테고리/랜딩 페이지 (선택)
- 예: `/tools/`, `/guide/` 외에 `/calculators/`, `/converters/`, `/tests/` 등 집합 페이지
- 각 페이지에서 해당 도구만 나열 + 짧은 설명 → “OOO 계산기 모음” 검색 대응

### 3.3 Core Web Vitals
- LCP: 이미지·폰트 최적화, 필요 시 도구 페이지 스크립트 지연 로딩
- CLS: 레이아웃 고정, 광고 슬롯 크기 고정
- INP: 클릭/입력 반응 개선

### 3.4 수익화와 SEO 균형
- 광고 위치·개수는 사용자 경험 유지 (과하면 이탈·품질 신호 악화)
- 인기 도구 위주로 전환율 높은 위치에 배치, 나머지는 보조

---

## 4. 장기 (3개월+): 도메인 권위·100개 서비스

### 4.1 콘텐츠 확장
- **가이드**: 도구당 1개 가이드 있으면 좋음 (이미 많은 도구에 존재)
- **블로그/아티클**: “PDF 변환 방법”, “N빵 계산 활용법” 등 정보성 글 → 내부 링크로 도구 연결
- 새 서비스 추가 시: sitemap·ItemList·홈 링크에 즉시 반영 (이미 스크립트/데이터 기반이라 자동화 용이)

### 4.2 백링크 (자연스럽게)
- 유용한 도구를 커뮤니티·SNS에서 공유
- “무료 OOO 도구” 리스트에 등재 신청 (품질 높은 디렉터리·리스트형 사이트)

### 4.3 100개 서비스 운영
- **정리**: 비활성/중복 서비스 정리해 품질 유지
- **추가**: 트렌드·검색량 있는 주제로 신규 도구 추가 시, 동일한 메타·구조화·내부 링크 패턴 적용
- **모니터링**: GSC에서 쿼리·노출·클릭 수 추이 확인 후, 상위 노출 도구에 가이드·내부 링크 강화

---

## 5. 체크리스트 (배포 전)

- [ ] `yarn build` 후 `npm run check-deploy` 실행 — 도구 메타(audit-meta) + out/robots.txt·sitemap.xml·sitemap 내 `<loc>`·`<lastmod>`·out/tools/ 개수 자동 점검.
- [ ] (또는 수동) `out/robots.txt`, `out/sitemap.xml` 존재
- [ ] (또는 수동) `out/sitemap.xml` 에 `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>` 포함 여부 확인
- [ ] `out/tools/{slug}/index.html` 에 canonical·og:url 이 `https://funnyfunny.cloud/tools/{slug}/`
- [ ] 메인 페이지 HTML에 ItemList(All Tools), WebApplication, FAQPage 등 구조화 데이터 포함
- [ ] 가이드 페이지에 FAQPage + BreadcrumbList JSON-LD 포함
- [ ] 모든 앱 페이지(/, /guide/*, /privacy/, /terms/, /copyright/, /policy/) canonical·og:url trailing slash 일치
- [ ] GSC에 sitemap 제출: `https://funnyfunny.cloud/sitemap.xml` → “제출됨” 상태 확인
- [ ] GSC “URL 검사”로 메인·인기 도구·가이드 색인 요청

---

## 6. 참고

- **수익**: 월 천만 원은 트래픽 규모·RPM에 따라 다름. 방문자 수·페이지뷰 목표를 세우고, 광고 단가·전환율을 추적해 조정.
- **100개 서비스**: 검색 노출 기회가 100배가 되는 건 아니지만, 롱테일·니치 검색에서 합산 트래픽이 커질 수 있음. 품질(체류 시간, 이탈률)을 유지하는 것이 중요.
- **주간 루틴**: 이번 주 할 일·배포 전 한눈에 보기 → [docs/WEEKLY.md](docs/WEEKLY.md)
