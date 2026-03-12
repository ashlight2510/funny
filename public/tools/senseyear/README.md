# 🎵 나는 몇 년생 감성인가? 테스트

SNS에서 공유되는 재미있는 감성 테스트입니다!

## 📋 기능

- ✅ 8가지 질문으로 나의 감성 알아보기
- ✅ 90s / 00s / 10s / MZ 믹스 감성 결과 제공
- ✅ 결과 이미지 자동 생성
- ✅ 인스타 스토리 공유
- ✅ 카카오톡 공유
- ✅ 링크 복사

## 🚀 GitHub Pages 배포 방법

1. 이 저장소를 GitHub에 업로드합니다
2. Settings > Pages로 이동
3. Source를 `main` 브랜치로 설정
4. `/ (root)` 선택
5. Save 클릭
6. 몇 분 후 `https://[사용자명].github.io/SenseYear/` 에서 확인 가능

## ⚙️ 카카오톡 공유 설정

카카오톡 공유 기능을 사용하려면:

1. [Kakao Developers](https://developers.kakao.com/)에서 앱 등록
2. `index.html` 파일의 다음 부분을 수정:
   ```javascript
   Kakao.init('YOUR_KAKAO_APP_KEY'); // 여기에 발급받은 키 입력
   ```
3. 플랫폼 설정에서 도메인 등록 (예: `https://[사용자명].github.io`)

## 📱 사용 방법

1. 질문에 답변하기
2. 결과 확인하기
3. 공유 버튼으로 친구들에게 공유하기!

## 🎨 커스터마이징

- 색상 변경: CSS의 `#667eea`, `#764ba2` 부분 수정
- 질문/선택지 수정: HTML의 질문 영역 수정
- 점수 계산 로직: JavaScript의 `data-score` 값 수정

## 📄 라이선스

자유롭게 사용 및 수정 가능합니다!

