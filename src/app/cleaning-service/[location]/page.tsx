import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingActions, CtaBand, PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { locations, overview, services, site } from "@/lib/site";

type Props = { params: Promise<{ location: string }> };

// Every valid URL is listed in generateStaticParams, so these pages are fully prerendered.
export const instant = false;

export function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  if (!loc) return {};
  return {
    title: `Cleaning Service ${loc.name}`,
    description: `Looking for a reliable cleaning service in ${loc.name}? Shine White provides professional house, office, deep, move-in, move-out and commercial cleaning services.`,
    alternates: { canonical: `/cleaning-service/${loc.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location } = await params;
  const loc = locations.find((l) => l.slug === location);
  if (!loc) notFound();
  const paragraphs = overview.paragraphs(loc.name);

  return (
    <>
      <PageHero eyebrow={`Cleaning service ${loc.name}`} title={`${overview.heading} in ${loc.name}`}>
        <p>{paragraphs[0]}</p>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-page max-w-3xl space-y-5 text-lg leading-relaxed">
          {paragraphs.slice(1).map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-display text-2xl font-bold text-brand">{site.tagline}</p>
          <BookingActions />
        </div>
      </section>

      <section className="border-t border-line bg-paper py-14 sm:py-20" aria-labelledby="loc-services">
        <div className="container-page">
          <h2 id="loc-services" className="text-3xl font-bold sm:text-4xl">Our Cleaning Services in {loc.name}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/cleaning-service/${loc.slug}/${s.slug}`}
                  className="card lift group flex h-full flex-col p-6"
                >
                  <span className="grid size-12 place-items-center rounded-sm bg-brand text-white">
                    <Icon name={s.icon} />
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.body(loc.name)[0]}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
                    Learn more <Icon name="arrow" width={16} height={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
