import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfterSection, BookingActions, CtaBand, PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { areaMatrix, locations, overview, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cleaning Service",
  description:
    "Looking for a reliable cleaning service? Shine White provides professional house, office, deep, move-in, move-out and commercial cleaning services.",
  alternates: { canonical: "/cleaning-service" },
};

const linked = new Map<string, string>(locations.map((l) => [l.name, l.slug]));

export default function CleaningServicePage() {
  return (
    <>
      <PageHero eyebrow="Cleaning service" title={overview.heading}>
        <p>{overview.paragraphs()[0]}</p>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-5 text-lg leading-relaxed">
            {overview.paragraphs().slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="font-display text-2xl font-bold text-brand">{site.tagline}</p>
            <BookingActions />
          </div>
          <ul className="grid gap-3 self-start">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/cleaning-service/cyberjaya/${s.slug}`} className="card group flex items-center gap-4 p-4 hover:border-brand">
                  <span className="grid size-11 place-items-center rounded-sm bg-tint text-brand">
                    <Icon name={s.icon} />
                  </span>
                  <span className="font-display text-lg font-semibold">{s.title}</span>
                  <Icon name="arrow" className="ml-auto text-line group-hover:text-brand" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-14 sm:py-20" aria-labelledby="areas-title">
        <div className="container-page">
          <p className="tag">Where we work</p>
          <h2 id="areas-title" className="mt-3 text-3xl font-bold sm:text-4xl">Service areas</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Every area below is covered for {areaMatrix.services.join(", ").toLowerCase()} services.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areaMatrix.areas.map((area) => {
              const slug = linked.get(area);
              return (
                <li key={area} className="card p-5">
                  <h3 className="flex items-center gap-2 text-xl font-bold">
                    <Icon name="pin" width={20} height={20} className="text-brand" />
                    {slug ? (
                      <Link href={`/cleaning-service/${slug}`} className="hover:text-brand hover:underline">{area}</Link>
                    ) : (
                      area
                    )}
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {areaMatrix.services.map((svc, i) => (
                      <li key={svc}>
                        {slug ? (
                          <Link href={`/cleaning-service/${slug}/${services[i].slug}`} className="hover:text-brand hover:underline">
                            {svc} Services {area}
                          </Link>
                        ) : (
                          `${svc} Services ${area}`
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <BeforeAfterSection />
      <CtaBand />
    </>
  );
}
