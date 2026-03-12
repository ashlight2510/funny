# 도구 100개 빌드·복사 요약

**현재**: 101개 모두 `public/tools/{slug}/`에 `index.html` 있음. 공유 버튼 적용됨.

**이미지 번역기 (imtranslate)**  
- 정적 HTML 도구. `public/tools/imtranslate/index.html` 단일 파일. OCR(Tesseract.js) + 번역(MyMemory API). 가이드: `image-translate-how`.

**6개 복사·빌드 반영 (완료)**  
| slug | 출처 | 비고 |
|------|------|------|
| beauty | Beauty/out/ | Next `output: 'export'` 추가 후 빌드·복사 |
| chat | chat/frontend/ | 정적 파일 그대로 복사 |
| coffee | coffee/out/ | Next `output: 'export'` 추가 후 빌드·복사 |
| news | news/frontend/ | 정적 파일 그대로 복사 |
| pick | pick/out/ | next.config.js + output export 추가 후 빌드·복사 |
| soul | SoulPrint/out/ | Next `output: 'export'` 추가 후 빌드·복사 |

**4개 (이전 반영)**: day(D-day), drink(DrinkCost), maldives(MaldivesMatch out/), mind(Mindful).

**재빌드 시**: web 쪽에서 해당 프로젝트 `yarn build` 후 `out/*`(또는 frontend/*)를 `funny/public/tools/{slug}/`에 덮어쓴 뒤 `node scripts/add-share-to-tools.mjs` 실행.
