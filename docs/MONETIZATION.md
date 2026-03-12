# 월 수익 올리기 체크리스트 (월천만원 목표)

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

→ 이 키워드로 **롱테일 가이드** 추가·보강하고, 메타 title/description에 자연스럽게 넣기.

## 3. 광고 배치 점검

- **메인**: layout에 1블록 (유동). 상단/중간 노출 확인.
- **도구**: 각 툴 index.html에 AdSense 있는지 확인. **결과 페이지**(rest/result, money/result 등)에도 있으면 페이지뷰당 노출 증가.
- **가이드**: funnyfunny.cloud 도메인 가이드 페이지는 현재 광고 없음. 메인·도구에서 이득이 나오면, 가이드 하단에 1블록 추가 검토(정책 확인 후).

### 3.1 광고 배치 현황 (참고)

| 위치 | 슬롯 | 비고 |
|------|------|------|
| 메인 (layout) | 1블록 fluid | body 중간 |
| 도구 (일부) | 7300458753 / 5145068706 / 6458150379 등 | tax, bmi, rest, money, alcohol, bit, time, house, run, tet, video, audio, cook, average, today, next, file, mental, music, joke, snaptrail, dailycheck, ego, drain, miracle 등 |
| 도구 결과페이지 | rest/result, money/result, ego/result, dailycheck/result, drain/result, miracle/result 등 | 본문 중간 adContainer |
| 가이드 (funnyfunny.cloud) | 없음 | 정책 확인 후 검토 |

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

1. **Amplitude** → 이벤트 `page_view` 또는 유입 URL 상위 10개 확인. (필요 시 User Path로 가이드→도구 전환 구간 확인.)
2. **상위 URL** 해당 페이지 메타(title/description)에 검색 키워드 1~2개 자연스럽게 보강.
3. **Google Search Console** → Sitemap 제출: `https://funnyfunny.cloud/sitemap.xml` 등록·색인 요청.
4. **광고** → 상위 페이지에서 AdSense 블록이 가리지 않게·클릭 유도 문구 없이 노출되는지 육안 점검.

### 상위 페이지 후보 (Amplitude·GSC 확인용)

유입·수익이 나올 가능성이 높은 URL. Amplitude에서 유입 URL 순위 확인 시 참고.

| 구분 | URL 예시 |
|------|----------|
| 진입 | `/`, `/calculators/`, `/tests/`, `/guide/` |
| 고가치 가이드 | `/guide/take-home-pay-how/`, `/guide/four-insurance-deduction-how/`, `/guide/nbang-calculator-how/`, `/guide/year-end-tax-simple/`, `/guide/rest-check-how/`, `/guide/bmi-calculator-how/`, `/guide/asset-shield-index/`, `/guide/nospend-wealth/` |
| 고가치 도구 | `/tools/tax/`, `/tools/n/`, `/tools/rest/`, `/tools/bmi/`, `/tools/money/`, `/tools/cafe/`, `/tools/space/`, `/tools/commute/` |

→ 상위 10~20개 URL 메타·CTA·광고 노출만 다듬어도 수익에 도움됨. (자세한 GSC 절차는 `docs/SEARCH_CONSOLE.md` 참고.)
