import { HomeContent } from "./components/HomeContent";

export const metadata = {
  title: "FunnyFunny Cloud — 하루를 더 똑똑하게 만드는 서비스",
  description:
    "하루를 더 똑똑하게 만드는 서비스 FunnyFunny Cloud. 커피 중독, 꾸밈비, 집값, 비트코인, 건강수명, 사교육 등 모든 테스트 모음.",
  keywords: [
    "커피 중독 테스트",
    "꾸밈비 파산",
    "집값 계산기",
    "비트코인 계산기",
    "건강수명",
    "사교육 지옥도",
    "인생 시간",
    "아재개그",
    "마음챙김",
  ],
};

export default function HomePage() {
  return <HomeContent />;
}
