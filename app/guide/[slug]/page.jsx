import { notFound } from "next/navigation";
import { GuidePageClient } from "./GuidePageClient";
import { guides, guideMap } from "../guides";

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

const BASE = "https://funnyfunny.cloud";

export function generateMetadata({ params }) {
  const guide = guideMap[params.slug];
  if (!guide) return {};

  const title = `${guide.title} | FunnyFunny Cloud`;
  const canonicalPath = `/guide/${guide.slug}/`;
  const url = `${BASE}${canonicalPath}`;

  return {
    title,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      title,
      description: guide.metaDescription,
      url,
      siteName: "FunnyFunny Cloud",
      locale: "ko_KR",
      alternateLocale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: guide.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

export default function GuidePage({ params }) {
  const guide = guideMap[params.slug];

  if (!guide) {
    notFound();
  }

  return <GuidePageClient guide={guide} />;
}
