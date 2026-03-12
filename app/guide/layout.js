const BASE = "https://funnyfunny.cloud";

export const metadata = {
  title: "사용 가이드 모음 | 계산기·테스트·도구 사용법",
  description:
    "세금·N빵·평수·D-day 계산기, 휴식 체크·BMI·자산 방탄 지수 등 FunnyFunny Cloud 서비스 사용법 가이드. 각 도구의 핵심 흐름, FAQ, 주의사항을 요약했습니다.",
  keywords: [
    "FunnyFunny 가이드",
    "계산기 사용법",
    "세금 계산기 사용법",
    "N빵 계산기 사용법",
    "휴식 체크 방법",
    "BMI 계산 방법",
  ],
  alternates: { canonical: "/guide/" },
  openGraph: {
    type: "website",
    url: `${BASE}/guide/`,
    title: "사용 가이드 모음 | 계산기·테스트 사용법",
    description:
      "세금·N빵·평수·휴식 체크·BMI 등 서비스 사용법 가이드. 핵심 흐름과 FAQ 요약.",
    siteName: "FunnyFunny Cloud",
  },
  robots: { index: true, follow: true },
};

export default function GuideLayout({ children }) {
  return children;
}
