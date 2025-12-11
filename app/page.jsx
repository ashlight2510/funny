import { HomeContent } from './components/HomeContent';

export const metadata = {
  title: 'FunnyFunny Cloud — 세상에서 제일 웃기고 유익한 계산기 포털',
  description:
    '세상에서 가장 웃기고 유익한 계산기 포털 FunnyFunny Cloud. 커피 중독, 꾸밈비, 집값, 비트코인, 건강수명, 사교육 등 모든 테스트 모음.',
  keywords: [
    '커피 중독 테스트',
    '꾸밈비 파산',
    '집값 계산기',
    '비트코인 계산기',
    '건강수명',
    '사교육 지옥도',
    '인생 시간',
    '아재개그',
    '마음챙김'
  ],
  openGraph: {
    type: 'website',
    url: 'https://funnyfunny.cloud/',
    title: 'FunnyFunny Cloud — 세상에서 제일 웃기고 유익한 계산기 포털',
    description: '세상에서 가장 웃기고 유익한 계산기 포털 FunnyFunny Cloud. 커피 중독, 꾸밈비, 집값, 비트코인, 건강수명, 사교육 등 모든 테스트 모음.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FunnyFunny Cloud — 세상에서 제일 웃기고 유익한 계산기 포털',
    description: '세상에서 가장 웃기고 유익한 계산기 포털 FunnyFunny Cloud. 커피 중독, 꾸밈비, 집값, 비트코인, 건강수명, 사교육 등 모든 테스트 모음.'
  }
};

export default function HomePage() {
  return <HomeContent />;
}
