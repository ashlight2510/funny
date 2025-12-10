# FunnyFunny Cloud 포털 메인

세상에서 제일 웃기고 유익한 계산기 포털 메인 페이지입니다.

## 📁 파일 구조

- `index.html` - 포털 메인 페이지 (Tailwind CSS CDN 사용)
- `sitemap.xml` - SEO용 사이트맵
- `robots.txt` - 검색엔진 크롤러 설정

## 🚀 배포 방법

### GitHub Pages 배포

1. 이 저장소를 GitHub에 푸시
2. Settings > Pages에서 소스 브랜치 선택 (보통 `main` 또는 `gh-pages`)
3. 루트 디렉토리(`/`) 선택
4. 저장 후 `https://[username].github.io/funnyfunny-cloud/` 또는 커스텀 도메인 연결

### 커스텀 도메인 연결 (funnyfunny.cloud)

1. DNS 설정에서 `funnyfunny.cloud`를 GitHub Pages IP로 연결
   - A 레코드: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 또는 CNAME: `[username].github.io`

2. GitHub Pages 설정에서 Custom domain에 `funnyfunny.cloud` 입력
3. Enforce HTTPS 체크

## ⚙️ 설정 필요 사항

### Google Analytics

`index.html`의 다음 부분을 실제 GA 추적 ID로 변경:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
```

`G-XXXXXXX`를 실제 추적 ID로 교체하세요.

### sitemap.xml 업데이트

새 서비스를 추가하거나 변경 시 `sitemap.xml`의 `<lastmod>` 날짜를 업데이트하세요.

## 📋 포함된 서비스 (14개)

1. ☕ 커피 중독도 테스트 (`coffee.funnyfunny.cloud`)
2. 💄 꾸밈비 파산 테스트 (`beauty.funnyfunny.cloud`)
3. ⚡ 내 삶의 에너지 배분 테스트 (`energy.funnyfunny.cloud`)
4. 🛡️ 내 자산 방탄 지수 테스트 (`money.funnyfunny.cloud`)
5. 💸 비트코인 안 산 죄 계산기 (`bit.funnyfunny.cloud`)
6. 🏠 집값 못 산 죄 계산기 (`house.funnyfunny.cloud`)
7. ⏰ 인생 남은 시간 대시보드 (`life.funnyfunny.cloud`)
8. 🎓 우리 집 사교육 지옥도 계산기 (`edu.funnyfunny.cloud`)
9. 🩺 건강수명 예측 & 노후 준비 대시보드 (`health.funnyfunny.cloud`)
10. 🤣 오늘의 아재개그 (`joke.funnyfunny.cloud`)
11. 🧠 오늘의 마음챙김 (`mind.funnyfunny.cloud`)
12. ☕ 카페 지출 총자산 역전 계산기 (`cafe.funnyfunny.cloud`)
13. 🥁 드럼 비트 연습기 (`beat.funnyfunny.cloud`)
14. 📅 SenseYear (준비중) (`senseyear.funnyfunny.cloud`)

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **Tailwind CSS**: CDN 버전 사용으로 별도 빌드 불필요
- **SEO 최적화**: 메타 태그, Open Graph, Twitter Card 포함
- **카드 기반 레이아웃**: 그리드 시스템으로 서비스 카드 표시

## 📝 향후 개선 사항

- [ ] 카테고리 탭 추가 (테스트 / 돈 / 건강 / 시간 / 유머)
- [ ] 검색 기능 추가
- [ ] 인기 서비스 정렬 기능
- [ ] 다크 모드 지원

## 📄 라이선스

© FunnyFunny Cloud by AshLight

