import { notFound } from "next/navigation";
import { GuidePageClient } from "./GuidePageClient";
import { guides, guideMap } from "../guides";

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const guide = guideMap[params.slug];
  if (!guide) return {};

  const title = `${guide.title} | FunnyFunny Cloud`;
  const url = `https://funnyfunny.cloud/guide/${guide.slug}`;

  return {
    title,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: {
      canonical: `/guide/${guide.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description: guide.metaDescription,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: guide.metaDescription,
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
