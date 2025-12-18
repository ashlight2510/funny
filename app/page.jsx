import { HomeContent } from "./components/HomeContent";

export const metadata = {
  title: "FunnyFunny Cloud — 하루를 더 똑똑하게 만드는 서비스",
  description:
    "funnyfunny.cloud는 일상의 소비, 시간, 습관과 같은 데이터를 테스트와 계산기로 쉽게 점검·비교해 볼 수 있는 정보 서비스입니다.",
  keywords: [
    "하루 생산성 체크 테스트",
    "커피 중독 테스트",
    "꾸밈비 파산",
    "집값 계산기",
    "비트코인 계산기",
    "건강수명",
    "사교육 지옥도",
    "인생 시간",
    "아재개그",
    "마음챙김",
    "오늘 뭐 먹지",
    "오늘의 안주",
    "나를 힘들게 하는 인간 유형 테스트",
    "SoulPrint",
    "출생 정보 성향 분석",
    "대한민국 평균 vs 나",
  ],
};

export default function HomePage() {
  return <HomeContent />;
}
