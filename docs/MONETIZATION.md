# 월 수익 올리기 체크리스트 (월천만원 목표)

## 현황 요약

| 구분 | 상태 | 비고 |
|------|------|------|
| **문서·도구** | ✅ 정리됨 | WEEKLY, SEO-checklist, DEPLOY_CHECK, check-deploy, list-priority-urls, audit-meta CI |
| **기술 SEO** | ✅ 적용됨 | sitemap, robots, canonical, trailing slash, 구조화 데이터, 도구 메타 점검 |
| **고가치 가이드·메타** | ✅ 반영됨 | 실수령액·4대보험·tax-calculator-how 등, 진입·가이드 인덱스 키워드 |
| **이번 주 할 일 (실행)** | ⬜ 직접 진행 | Amplitude 유입 URL 확인, GSC Sitemap 제출·색인 요청, 상위 5개 페이지 메타 보강 |

→ **문서/기술 준비는 된 상태.** 이제 **실제 SEO 실행**(GSC 제출, Amplitude 확인, 상위 페이지 메타 다듬기)을 하는 게 효과 큼.

---

## 이번 주 할 일 (3가지)

- [ ] **Amplitude** → 유입 URL 상위 10개 확인 후 이 문서 "상위 페이지 후보"와 비교.
- [ ] **Google Search Console** → Sitemap 제출(`https://funnyfunny.cloud/sitemap.xml`), 상위 5개 URL 검사·색인 요청. (`npm run list-priority-urls` 로 URL 목록 출력 가능.)
- [ ] **상위 5개 페이지** → 메타(title/description)에 검색 키워드 1개씩 자연스럽게 보강. (진입 4페이지 + 가이드 인덱스에 실수령액·4대보험·휴식 체크 등 키워드 반영 완료.)

**다음 주**: Amplitude에서 `guide_helpful`(👍/👎)·`guide_cta_click` 비율 확인 → 만족도·전환 높은 가이드에 광고·내부 링크 우선 배치 검토.

### 이번 주 할 일 — 직접 진행 가이드

**1. Amplitude 유입 URL 확인**

1. [Amplitude](https://analytics.amplitude.com) 로그인 → 해당 프로젝트 선택.
2. **Analytics** → **Events** 또는 **User Composition** 등에서 **페이지/URL 기준** 보고서 선택.
3. 이벤트 `page_view`(또는 메인 페이지뷰 이벤트) 기준으로 **속성: URL 또는 path** 로 그룹핑.
4. 상위 10개 URL·path 확인 후 아래 "상위 페이지 후보" 표와 비교 → 유입 많은데 메타·CTA가 약한 페이지부터 보강.

**2. GSC Sitemap 제출·색인 요청**

1. [Google Search Console](https://search.google.com/search-console) → 속성 `https://funnyfunny.cloud` 선택.
2. **Sitemaps** 메뉴 → "새 사이트맵 추가"에 `sitemap.xml` 입력 후 제출. (전체 URL은 `https://funnyfunny.cloud/sitemap.xml`)
3. 상위 URL 색인 요청: **URL 검사** 상단에 아래에서 복사한 URL 붙여넣기 → "색인 생성 요청".  
   터미널에서 `npm run list-priority-urls` 실행하면 GSC·Amplitude용 우선 URL이 한 줄씩 출력됨. 상위 5~10개만 해도 됨.
4. 자세한 절차·확인 항목: `docs/SEARCH_CONSOLE.md` 참고.

---

## 1. 트래픽 = 광고 노출

- **수익 공식**: 방문자 수 × 페이지뷰/방문 × RPM(천 노출당 수익) ≈ 월 수익
- AdSense 이미 적용: 메인(layout), 각 도구 페이지. **고CPM 페이지**에 광고가 잘 보이게 두는 게 우선.
- **할 일**: Amplitude에서 상위 유입 페이지 확인 → 해당 페이지에 광고/CTA가 있는지 점검.

## 2. 고가치 키워드 (검색 유입 늘리기)

검색량·의도 높은 키워드 위주로 가이드·메타 보강하면 유입 증가에 유리함.

| 키워드 예시 | 의도 | 현재 도구/가이드 |
|-------------|------|-------------------|
| 연말정산 계산, 실수령액 계산 | 금융·세금 | tax, year-end-tax-simple |
| N빵 계산기, 1인당 비용 | 모임·비용 | n, nbang-calculator-how |
| 평수 계산기, 제곱미터 변환 | 부동산 | space, pyeong-calculator-how |
| BMI 계산, 비만도 | 건강 | bmi, bmi-calculator-how |
| 휴식 체크, 쉬어도 될까 | 라이프 | rest, rest-check-how |
| 자산 방탄 지수, 재테크 | 금융 | money, asset-shield-index |
| 안 산 것 총자산, 절약 시뮬레이션 | 절약 | nospend, nospend-wealth |
| 사교육비 계산, 사교육 지옥도 | 교육·가계 | edu, edu-hell |
| 출퇴근 비용, 교통비 계산 | 라이프 | commute, commute-cost-time |
| 카페 지출 역전, 커피값 | 절약 | cafe, cafe-cost |
| 4대보험 공제, 건강보험 공제 | 금융·급여 | tax, take-home-pay-how, four-insurance-deduction-how |
| 급여명세서 보는법, 급여명세서 읽는법 | 금융·급여 | paystub-read-how, take-home-pay-how |

→ 이 키워드로 **롱테일 가이드** 추가·보강하고, 메타 title/description에 자연스럽게 넣기.

## 3. 광고 배치 점검

- **메인**: layout에 1블록 (유동). 상단/중간 노출 확인.
- **도구**: 각 툴 index.html에 AdSense 있는지 확인. **결과 페이지**(rest/result, money/result 등)에도 있으면 페이지뷰당 노출 증가.
- **가이드**: layout 하단 1블록 + 본문 중간 1블록 적용됨 (GuidePageClient.jsx, §3.1 참고).

### 3.1 가이드 페이지 광고 1블록 (정책 확인 후 검토)

- **정책 요약**: AdSense는 본문 근처 배치 허용. 단, "클릭 유도 문구·화살표·애니메이션 금지", "콘텐츠와 광고 구분 가능해야 함", "다운로드·재생 버튼 옆 배치 금지" 등 준수 필요. ([Ad placement policies](https://support.google.com/adsense/answer/1346295))
- **권장 위치**: 가이드 본문 **섹션 1~2 다음**(본문 중간) 또는 **CTA 버튼 위** 1블록. layout에 이미 하단 1블록이 있으므로, 가이드 전용 추가분은 "본문 중간" 1블록만 두는 구성 권장.
- **적용 완료**: `GuidePageClient.jsx`에 본문 섹션 직후·disclaimer 전 1블록 추가(슬롯 7300458753). 배치 후 육안으로 "콘텐츠 가리지 않음·클릭 유도 없음" 확인 권장.

### 3.2 광고 배치 현황 (참고)

| 위치 | 슬롯 | 비고 |
|------|------|------|
| 메인 (layout) | 1블록 fluid | body 중간 |
| 도구 (일부) | 7300458753 / 5145068706 / 6458150379 등 | tax, bmi, rest, money, alcohol, bit, time, house, run, tet, video, audio, cook, average, today, next, file, mental, music, joke, snaptrail, dailycheck, ego, drain, miracle 등 |
| 도구 결과페이지 | rest/result, money/result, ego/result, dailycheck/result, drain/result, miracle/result 등 | 본문 중간 adContainer |
| 가이드 (funnyfunny.cloud) | layout 하단 1블록 + 본문 중간 1블록 | 슬롯 7300458753 (위 3.1 참고) |

## 4. 제휴·추가 수익 (선택)

- **금융**: 세금·연말정산·N빵·자산 관련 가이드 끝에 "○○ 서비스 더 알아보기" 등 제휴 링크 (카드/대출/펀드 등 가입 시 과금 모델) 검토.
- **도구 연동**: "이 계산기로 대략 확인한 뒤, 정확한 건 ○○에서" 식 CTA로 유료 서비스 연결 (정책·노출 위치 확인).
- **후원**: "커피 한 잔 후원하기" 등 링크는 정책만 지키면 부담 적음.

## 5. 전환·재방문

- **가이드 → 도구**: `guide_cta_click` 비율 높이기 (가이드 문구·CTA 위치 다듬기).
- **공유**: 가이드/도구에 "공유하기" 버튼 → 링크 복사·SNS 공유로 유입 확대.
- **도움됐어요**: 피드백 수집 후 만족도 높은 페이지에 광고/CTA 강화.

## 6. 우선순위 요약

1. **Amplitude**에서 상위 유입 URL·키워드 확인.
2. 그 페이지 **메타·내부 링크·CTA** 다듬기.
3. **고가치 키워드**로 롱테일 가이드 1~2개 추가.
4. **광고** 노출 구간 점검 (가리지 않게, 클릭 유도하지 않게).
5. **공유·피드백**으로 확산·만족도 파악 후 반복 개선.

---

## 7. 다음 액션 (주간 체크)

한눈에 보기: [WEEKLY.md](./WEEKLY.md)

1. **Amplitude** → 이벤트 `page_view` 또는 유입 URL 상위 10개 확인. (필요 시 User Path로 가이드→도구 전환 구간 확인.)
2. **상위 URL** 해당 페이지 메타(title/description)에 검색 키워드 1~2개 자연스럽게 보강.
3. **Google Search Console** → Sitemap 제출: `https://funnyfunny.cloud/sitemap.xml` 등록·색인 요청.
4. **광고** → 상위 페이지에서 AdSense 블록이 가리지 않게·클릭 유도 문구 없이 노출되는지 육안 점검.

### 상위 페이지 후보 (Amplitude·GSC 확인용)

유입·수익이 나올 가능성이 높은 URL. Amplitude에서 유입 URL 순위 확인 시 참고.

| 구분 | URL 예시 | 메타 보강 키워드(선택) |
|------|----------|------------------------|
| 진입 | `/`, `/calculators/`, `/tests/`, `/guide/` | 무료 실수령액·휴식 체크 / 출퇴근·카페 / 쉬어도 될까·자산 방탄 / 급여명세서·연말정산 |
| 고가치 가이드 | `/guide/take-home-pay-how/`, `/guide/four-insurance-deduction-how/`, `/guide/tax-calculator-how/`, `/guide/paystub-read-how/`, `/guide/nbang-calculator-how/`, `/guide/year-end-tax-simple/`, `/guide/rest-check-how/`, `/guide/bmi-calculator-how/`, `/guide/asset-shield-index/`, `/guide/nospend-wealth/` | 이미 반영됨. 유입 상위만 title/desc 1개씩 추가 검토 |
| 고가치 도구 | `/tools/tax/`, `/tools/n/`, `/tools/rest/`, `/tools/bmi/`, `/tools/money/`, `/tools/cafe/`, `/tools/space/`, `/tools/commute/` | sync-meta·audit-meta로 점검 후 부족 시 보강 |

→ 상위 10~20개 URL 메타·CTA·광고 노출만 다듬어도 수익에 도움됨. (자세한 GSC 절차는 `docs/SEARCH_CONSOLE.md` 참고.)
