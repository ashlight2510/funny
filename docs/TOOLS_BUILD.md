# 도구 100개 빌드·복사 요약

**현재**: 110개 모두 `public/tools/{slug}/`에 `index.html` 있음. 공유 버튼 적용됨.

**수익·금융 관련 정적 도구 (6개)**  
| slug | 설명 |
|------|------|
| loancalc | 대출 이자·상환 (원리금/원금 균등) |
| electric | 전기요금 (kWh·누진제) |
| platformfee | 크몽·숨고 수수료·실수령 |
| severance | 퇴직금 (평균임금·근속연수) |
| vat | 부가세 (공급가·10%/간이 1.5%) |
| gas | 가스요금 (㎥·주택용) |

**추가 정적 도구 (3개)**  
| slug | 설명 |
|------|------|
| charcount | 글자 수·단어 수·바이트 세기. 공백 포함/제외, 목표 글자 수. 가이드: charcount-how |
| qrcode | QR 코드 생성(URL·텍스트 → PNG 다운로드). 가이드: qrcode-how |
| datecalc | 날짜 차이, 며칠째, D-day 계산. 가이드: datecalc-how. day(D-day 계산기)와 보완 |

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
