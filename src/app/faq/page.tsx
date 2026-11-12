import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { faqs, policies } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions that most customers want to know about our office cleaning and house cleaning services.",
  alternates: { canonical: "/faq" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" />

      <section className="py-14 sm:py-20" aria-labelledby="general-title">
        <div className="container-page max-w-3xl">
          <h2 id="general-title" className="text-2xl font-bold">General Questions</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold hover:text-brand">
                  {f.q}
                  <Icon name="chevron" className="shrink-0 text-brand transition group-open:rotate-180" />
                </summary>
                <p className="pb-5 pr-10 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="policies" className="border-t border-line bg-paper py-14 sm:py-20" aria-labelledby="policy-title">
        <div className="container-page">
          <p className="tag">The ins and outs of how we do business</p>
          <h2 id="policy-title" className="mt-3 text-3xl font-bold sm:text-4xl">Payment Method &amp; Cancellation Policy</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {policies.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                  {p.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
