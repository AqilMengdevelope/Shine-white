import type { Metadata } from "next";
import { CheckList, CtaBand, PageHero } from "@/components/Bits";
import { about } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Professional cleaning services provided to offices, residential houses and property owners in Putrajaya, Cyberjaya, Taman Equine Seri Kembangan and Puchong South.",
  alternates: { canonical: "/about-us" },
};

function ServiceBlock({ block }: { block: typeof about.house & { footnote?: string } }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div>
        <h2 className="text-3xl font-bold">{block.title}</h2>
        <div className="mt-5 space-y-4 text-muted">
          {block.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="card bg-paper p-6 sm:p-8">
        <h3 className="text-xl font-bold">{block.packageTitle}</h3>
        <div className="mt-3 space-y-2 text-muted">
          {block.packageIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <h4 className="mt-6 font-display text-lg font-semibold text-brand">{block.listTitle}</h4>
        <p className="mb-3 mt-1 text-sm text-muted">Our cleaning range includes the following:</p>
        <CheckList items={block.list} />
        {block.footnote && <p className="mt-5 text-sm font-medium">{block.footnote}</p>}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title={about.headline} />

      <section className="py-14 sm:py-20">
        <div className="container-page max-w-3xl space-y-5 text-lg leading-relaxed">
          {about.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-14 sm:py-20">
        <div className="container-page">
          <ServiceBlock block={about.office} />
        </div>
      </section>

      <section className="border-t border-line py-14 sm:py-20">
        <div className="container-page">
          <ServiceBlock block={about.house} />
        </div>
      </section>

      <section className="border-t border-line bg-paper py-14 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Everything we clean</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {about.catalogue.map((group) => (
              <div key={group.title} className="card p-6">
                <h3 className="text-xl font-bold">{group.title}</h3>
                <div className="mt-4">
                  <CheckList items={group.items} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
