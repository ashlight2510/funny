import { notFound } from "next/navigation";
import { FooterSimple } from "../../components/FooterSimple";
import { HeaderSimple } from "../../components/HeaderSimple";
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

  const otherGuides = guides.filter(({ slug }) => slug !== guide.slug);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      <HeaderSimple />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100">
              <span>{guide.heroEmoji}</span>
              <span>{guide.category}</span>
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600">Guide</span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight">
            {guide.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
            {guide.subtitle}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {guide.keywords.slice(0, 4).map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold border border-slate-200"
              >
                #{keyword}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={guide.serviceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              {guide.ctaLabel}
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold shadow-sm hover:border-blue-400 hover:text-blue-700 transition"
            >
              홈으로 돌아가기
            </a>
          </div>
        </section>

        <section className="space-y-8">
          {guide.sections.map((section) => (
            <article
              key={section.heading}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-7"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </section>

        {guide.disclaimer && (
          <section className="bg-amber-50 text-amber-900 border border-amber-200 rounded-3xl p-5 sm:p-6 shadow-sm">
            <p className="text-sm font-semibold">주의</p>
            <p className="mt-1 text-sm sm:text-base leading-relaxed">
              {guide.disclaimer}
            </p>
          </section>
        )}

        <section
          id="faq"
          className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">❓</span>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                FAQ
              </p>
              <h3 className="text-xl font-bold">자주 묻는 질문</h3>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {guide.faq.map((item) => (
              <details key={item.question} className="py-3 group">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm font-semibold text-slate-800 group-hover:text-blue-700">
                    {item.question}
                  </span>
                  <span className="text-slate-400 text-lg group-open:rotate-45 transition">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-lg">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                더 읽어보기
              </p>
              <h4 className="text-xl font-bold mt-1">다른 가이드도 확인하기</h4>
            </div>
            <a
              href="/"
              className="hidden sm:inline-flex px-3 py-2 rounded-full bg-white/10 border border-white/20 text-xs font-semibold hover:bg-white/20 transition"
            >
              FunnyFunny 홈
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {otherGuides.map((item) => (
              <a
                key={item.slug}
                href={`/guide/${item.slug}`}
                className="block rounded-2xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-2 text-sm text-blue-100">
                  <span>{item.heroEmoji}</span>
                  <span className="uppercase tracking-[0.2em]">
                    {item.category}
                  </span>
                </div>
                <p className="mt-2 font-semibold">{item.title}</p>
                <p className="mt-1 text-xs text-blue-100/80">
                  {item.metaDescription}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <FooterSimple />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </div>
  );
}
