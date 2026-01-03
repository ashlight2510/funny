import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://funnyfunny.cloud"),
  title: {
    default: "FunnyFunny Cloud",
    template: "%s | FunnyFunny Cloud",
  },
  description: "하루를 더 똑똑하게 만드는 서비스",
  keywords: [
    "퍼니퍼니",
    "퍼니퍼니 클라우드",
    "FunnyFunny",
    "테스트",
    "생산성 테스트",
    "계산기",
    "재테크",
    "라이프스타일",
    "심리테스트",
    "커피 중독 테스트",
    "꾸밈비 파산 테스트",
    "자산 방탄 지수",
    "비트코인 안 산 죄",
    "하루 생산성 체크",
    "하루 정신 체력 지수",
    "인생 에너지 누수",
    "대한민국 평균 vs 나",
    "카페 지출 역전 계산",
    "내가 안 산 것들의 총자산",
    "집 못 산 죄",
    "사교육 지옥도",
    "귀찮음 진단기",
    "주량 MBTI",
    "나는 몇 년생 감성인가",
    "나를 힘들게 하는 인간 유형",
    "오늘 뭐 볼까 OTT",
    "오늘 뭐 먹지",
    "오늘의 안주",
    "Simple Audio Editor",
    "EmojiCon Studio",
    "SnapTrail",
    "D-day 계산기",
    "달리기",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://funnyfunny.cloud",
    siteName: "FunnyFunny Cloud",
    title: "FunnyFunny Cloud — 하루를 더 똑똑하게 만드는 서비스",
    description:
      "재미와 통찰을 주는 테스트, 계산기, 유틸리티 서비스 모음. 커피, 재테크, 건강, 성향 테스트까지 한 곳에서 즐겨보세요.",
    images: [
      {
        url: "https://dummyimage.com/1200x630/0f172a/ffffff&text=FunnyFunny+Cloud",
        width: 1200,
        height: 630,
        alt: "FunnyFunny Cloud 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FunnyFunny Cloud — 하루를 더 똑똑하게 만드는 서비스",
    description: "재미와 통찰을 주는 테스트, 계산기, 유틸리티 서비스 모음",
    images: [
      "https://dummyimage.com/1200x630/0f172a/ffffff&text=FunnyFunny+Cloud",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1204894220949193" />
        <meta
          property="og:image"
          content="https://dummyimage.com/1200x630/0f172a/ffffff&text=FunnyFunny+Cloud"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1204894220949193" crossOrigin="anonymous"></script>
</head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7M2HQVQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-M7M2HQVQ');`,
          }}
        />

        <Script
          src="https://cdn.amplitude.com/libs/analytics-browser-2.11.1-min.js.gz"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.25.0-min.js.gz"
          strategy="afterInteractive"
        />
        <Script src="/amplitude-user.js" strategy="beforeInteractive" />
        <Script
          id="amplitude-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
    (function initAmplitude() {
      if (window.__ffAmplitudeInitialized) return;
      if (!window.amplitude || !window.sessionReplay || !window.sessionReplay.plugin) {
        setTimeout(initAmplitude, 50);
        return;
      }
      try {
        window.amplitude.add(window.sessionReplay.plugin({ sampleRate: 1 }));
        window.amplitude.init('e26892cbcb10d35acb0486cf0d0e9c55', window.ffAmplitudeUserId, {
          autocapture: { elementInteractions: true }
        });
        window.__ffAmplitudeInitialized = true;
      } catch (error) {
        console.error('Amplitude init failed', error);
      }
    })();`,
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17728893473"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17728893473');`,
          }}
        />
      </body>
    </html>
  );
}
