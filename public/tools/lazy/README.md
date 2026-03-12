# 🎯 귀찮음 진단기

**"오늘 나는 왜 아무것도 하기 싫을까?"**

귀찮음은 게으름이 아니라 뇌의 에너지 관리 전략이다. 이 도구는 7가지 과학적 요인으로 당신의 귀찮음 원인을 정확하게 진단하고, 실제로 바로 적용할 수 있는 최소행동을 추천합니다.

## ✨ 특징

- **7가지 과학적 요인 분석**
  1. 에너지 절약 본능 발동 여부
  2. 일의 크기와 명확성
  3. 보상의 거리감
  4. 감정 에너지 고갈 및 스트레스 수준
  5. 결정 피로 및 선택 과부하
  6. 신체적 피로도
  7. 자동화 및 루틴 여부

- **4단계 결과 진단**
  - 🟡 가벼운 귀찮음 (0-7점)
  - 🟠 중간 귀찮음 (8-14점)
  - 🔴 심한 귀찮음 (15-21점)
  - ⚫ 극한 귀찮음 (22-28점)

- **실용적인 최소행동 추천**
  - 각 단계별로 즉시 적용 가능한 구체적인 액션 아이템 제공
  - 1-action (최소 행동) 중심의 실용적 조언

- **광고수익 최적화 구조**
  - AdSense 배치 영역 포함
  - 높은 완료율로 인한 높은 eCPM 기대

## 🚀 빠른 시작

### 로컬에서 실행하기

1. 저장소 클론 또는 다운로드
2. `index.html` 파일을 브라우저에서 열기

```bash
# 간단한 HTTP 서버 실행 (선택사항)
python -m http.server 8000
# 또는
npx serve
```

브라우저에서 `http://localhost:8000` 접속

### GitHub Pages 배포

1. GitHub 저장소 생성
2. `index.html` 파일 업로드
3. 저장소 설정 → Pages → Source를 `main` 브랜치로 설정
4. 몇 분 후 `https://[username].github.io/[repository-name]` 에서 접속 가능

### Vercel 배포 (추천)

```bash
# Vercel CLI 설치
npm i -g vercel

# 프로젝트 디렉토리에서 배포
vercel
```

또는 [Vercel Dashboard](https://vercel.com)에서 GitHub 저장소를 연결하여 자동 배포

### Netlify 배포

1. [Netlify](https://www.netlify.com) 접속
2. "Sites" → "Add new site" → "Deploy manually"
3. `index.html` 파일 드래그 앤 드롭
4. 즉시 배포 완료

## 📱 SEO 및 공유 최적화

- Open Graph 태그 포함 (Facebook, LinkedIn)
- Twitter Card 태그 포함
- 모바일 반응형 디자인
- 한국어 최적화

## 💰 광고 설정 (Google AdSense)

1. [Google AdSense](https://www.google.com/adsense) 가입
2. 광고 단위 생성
3. `index.html` 파일에서 다음 부분을 찾아 AdSense 코드로 교체:

```html
<!-- 광고 영역 (AdSense 코드 삽입) -->
<div class="ad-container ...">
  <!-- 여기에 AdSense 코드 삽입 -->
</div>
```

### 추천 광고 배치

- 결과 페이지 아래 "귀찮음을 줄이는 자동화 툴 추천" 섹션
- 고완료율 → 높은 eCPM 기대

## 🎨 커스터마이징

### 색상 변경

Tailwind CSS 클래스를 수정하여 색상 테마 변경 가능:

- 결과 배지 색상: `text-yellow-600`, `text-orange-600`, `text-red-600`, `text-gray-900`
- 배경: `bg-gradient-to-br from-gray-50 to-gray-100`

### 질문 수정

각 질문의 `select` 옵션 값을 수정하여 맞춤화 가능.

### 결과 메시지 수정

JavaScript의 `recommendations` 배열을 수정하여 추천 내용 변경 가능.

## 📊 바이럴 마케팅 예시 문구

### Threads/Twitter용

```
귀찮음은 게으름이 아니라 뇌의 에너지 관리 전략이다.

근데 매번 찾아오는 이유는 다 다르다.

그래서 만들었다.

👉 오늘 나는 왜 이렇게 귀찮을까? 자동 분석기

7가지 과학적 요인으로 분석해
당신의 귀찮음 원인을 아주 정확하게 말해줌.

[링크]
```

### 인스타그램 스토리용

```
오늘도 아무것도 하기 싫다면?

7가지 과학적 요인으로
당신의 귀찮음 원인을 진단해드립니다.

바로 적용 가능한 해결책까지! 💡
[링크]
```

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **Tailwind CSS**: 유틸리티 기반 스타일링 (CDN)
- **Vanilla JavaScript**: 바닐라 JS로 구현 (의존성 없음)
- **Google Fonts**: Noto Sans KR 폰트

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 기여

버그 리포트, 기능 제안, 개선 사항은 이슈로 등록해주세요!

---

**만든 이유**: 귀찮음은 정당한 감정이다. 하지만 그 원인을 알면 해결할 수 있다.

