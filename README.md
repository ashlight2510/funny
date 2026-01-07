# FunnyFunny Cloud 포털 메인

세상에서 제일 웃기고 유익한 계산기 포털 메인 페이지입니다. 이제 Next.js + App Router 기반으로 전환되었으며, 레거시 정적 템플릿/빌드 파일은 제거되었습니다.

## 📁 파일 구조

- `app/` - Next.js App Router 페이지 및 공통 컴포넌트
- `public/` - 정적 자산(ads.txt, robots.txt, sitemap.xml, favicon.svg, amplitude-user.js 등)
- `next.config.js` - 정적 Export 설정(`output: 'export'`)
- `package.json` - 스크립트 정의 (`yarn dev`, `yarn build`, `yarn export`)

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

### Google Tag Manager

현재 GTM ID: `GTM-M7M2HQVQ` (모든 페이지에 포함됨)

Google Tag Manager에서 다음 태그를 설정하세요:

- Google Analytics 4
- Google AdSense (승인 후)

### 개인정보처리방침 연락처

`privacy.html`의 개인정보 보호책임자 이메일을 실제 연락처로 변경하세요:

- 현재: `contact@funnyfunny.cloud`

### sitemap.xml 업데이트

새 서비스를 추가하거나 변경 시 `sitemap.xml`의 `<lastmod>` 날짜를 업데이트하세요.

## 🎨 디자인 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- **Tailwind CSS**: Next.js 빌드 연동 (PostCSS/Autoprefixer)
- **SEO 최적화**: 메타 태그, Open Graph, Twitter Card, Schema.org 포함
- **카드 기반 레이아웃**: 그리드 시스템으로 서비스 카드 표시
- **AdSense 준비**: 개인정보처리방침, 이용약관, 구조화된 데이터 포함

## 🎯 Google AdSense 승인 준비

AdSense 승인을 위한 필수 요소가 모두 포함되어 있습니다:

✅ 개인정보처리방침 페이지  
✅ 이용약관 페이지  
✅ SEO 최적화 (sitemap, robots.txt, 메타 태그)  
✅ 구조화된 데이터 (Schema.org)  
✅ Google Tag Manager 연동

자세한 체크리스트는 `ADSENSE_CHECKLIST.md`를 참고하세요.

## 🛠️ 개발/빌드/배포 (Next.js)

1. 개발 서버: `yarn dev` (http://localhost:3000)
2. 프로덕션 빌드: `yarn build`
3. 정적 배포 산출물: `yarn export` → `out/` 생성 (GitHub Pages/정적 호스팅에 업로드)
4. 페이지 경로: `/` (메인), `/privacy`, `/terms`, `/policy`, `/copyright`

## 📝 향후 개선 사항

- [ ] 카테고리 탭 추가 (테스트 / 돈 / 건강 / 시간 / 유머)
- [ ] 검색 기능 추가
- [ ] 인기 서비스 정렬 기능
- [ ] 다크 모드 지원

## 📄 라이선스

© FunnyFunny Cloud by AshLight
