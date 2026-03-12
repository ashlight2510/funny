# Google Search Console 체크리스트

## 1. 사이트 등록·Sitemap

- **속성 추가**: `https://funnyfunny.cloud` (URL 접두어 또는 도메인)
- **Sitemap 제출**: `https://funnyfunny.cloud/sitemap.xml`
  - Next.js가 빌드 시 생성. 제출 후 "가져올 수 없음"이면 배포 후 재제출.
- **robots.txt**: `https://funnyfunny.cloud/robots.txt` 에 Sitemap URL 포함됨.

## 2. URL 검사

상위 유입·고가치 페이지부터 "URL 검사"로 색인 요청. 아래 URL은 `npm run list-priority-urls` 로 한 줄씩 출력되므로, 터미널 출력을 복사해 GSC URL 검사에 붙여넣기하면 편함.

- `https://funnyfunny.cloud/`
- `https://funnyfunny.cloud/calculators/`
- `https://funnyfunny.cloud/tests/`
- `https://funnyfunny.cloud/guide/`
- `https://funnyfunny.cloud/guide/take-home-pay-how/`
- `https://funnyfunny.cloud/guide/four-insurance-deduction-how/`
- `https://funnyfunny.cloud/guide/nbang-calculator-how/`
- `https://funnyfunny.cloud/guide/year-end-tax-simple/`
- `https://funnyfunny.cloud/guide/tax-calculator-how/`
- `https://funnyfunny.cloud/guide/paystub-read-how/`
- `https://funnyfunny.cloud/tools/tax/`
- `https://funnyfunny.cloud/tools/n/`
- `https://funnyfunny.cloud/tools/rest/`
- `https://funnyfunny.cloud/tools/bmi/`

## 3. 확인 항목

- **색인 생성** → "페이지가 색인 생성됨" 여부.
- **핵심 웹 지표** → LCP·CLS·INP (모바일).
- **모바일 사용 편의성** → 오류 0 유지.
- **보안 이슈** → 0건 유지.

## 4. 주기

- Sitemap은 푸시·배포 시 자동 갱신. GSC은 주 1회 정도 "색인 생성"·"성능" 확인.
- 새 가이드·도구 추가 후 상위 5~10개 URL만 "URL 검사"로 색인 요청하면 됨.
