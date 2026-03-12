# 분석·유입 정리

## Amplitude 이벤트

| 이벤트 | 설명 | 속성 |
|--------|------|------|
| `service_click` | 서비스(도구) 링크 클릭 | `service`, `section`, `href` |
| `guide_cta_click` | 가이드 페이지에서 "서비스 열기" CTA 클릭 (전환) | `guide_slug`, `cta_url` |
| `share_click` | 가이드 공유 (링크 복사·트위터) | `method`, `guide_slug` |
| `guide_helpful` | 가이드 "도움이 되었나요?" 👍/👎 | `guide_slug`, `helpful` (true/false) |
| `client_error` | 클라이언트 JS 런타임 에러 (window.onerror) | `message`, `filename`, `lineno`, `colno` |

- `section`: `search` | `featured` | `all` | `guides` | `game` 등 노출 구역.
- autocapture로 버튼·폼 등 상호작용도 수집 가능(설정에 따라).

## 전환 퍼널 참고

1. **유입** → 메인/계산기/테스트/가이드
2. **탐색** → `service_click` (어떤 도구 링크를 눌렀는지)
3. **전환** → `guide_cta_click` (가이드 읽은 뒤 해당 도구로 이동)

Amplitude에서 `guide_cta_click` 비율을 보면 가이드 → 도구 전환을 추적할 수 있음.

## 상위 페이지 CTA

- 메인: 계산기·테스트·가이드 링크, 인기 도구 카드
- /calculators/, /tests/: 인기 추천 + 전체 목록 + "자주 찾는 가이드" 링크
- /guide/: 가이드별 카드 + "서비스 열기" CTA

유입 보고서에서 상위 URL을 확인한 뒤, 해당 페이지 메타·CTA 문구를 다듬으면 유입 대비 전환 개선에 도움됨.
