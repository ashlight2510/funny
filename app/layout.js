import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "FunnyFunny Cloud",
  description: "하루를 더 똑똑하게 만드는 서비스",
  metadataBase: new URL("https://funnyfunny.cloud"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1204894220949193" />
        <meta
          property="og:image"
          content="https://dummyimage.com/1200x630/000/fff&text=FunnyFunny+Cloud"
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
