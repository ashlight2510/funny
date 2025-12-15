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
    "FunnyFunny",
    "테스트",
    "계산기",
    "재테크",
    "라이프스타일",
    "심리테스트",
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
    description:
      "재미와 통찰을 주는 테스트, 계산기, 유틸리티 서비스 모음",
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
      </body>
    </html>
  );
}
