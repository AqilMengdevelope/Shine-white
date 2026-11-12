import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfterSection, BookingActions, CheckList } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { locations, services } from "@/lib/site";

type Props = { params: Promise<{ location: string; service: string }> };

// Every valid URL is listed in generateStaticParams, so these pages are fully prerendered.
export const instant = false;

export function generateStaticParams() {
  return locations.flatMap((l) => services.map((s) => ({ location: l.slug, service: s.slug })));
}

function find(location: string, service: string) {
  const loc = locations.find((l) => l.slug === location);
  const svc = services.find((s) => s.slug === service);
  return loc && svc ? { loc, svc } : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location, service } = await params;
  const hit = find(location, service);
  if (!hit) return {};
  return {
    title: `${hit.svc.title} ${hit.loc.name}`,
    description: hit.svc.description(hit.loc.name),
    alternates: { canonical: `/cleaning-service/${hit.loc.slug}/${hit.svc.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { location, service } = await params;
  const hit = find(location, service);
  if (!hit) notFound();
  const { loc, svc } = hit;

  return (
    <>
      <section className="band">
        <div className="container-page py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-sm font-medium text-white/70">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/cleaning-service" className="hover:text-white hover:underline">Cleaning service</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={`/cleaning-service/${loc.slug}`} className="hover:text-white hover:underline">{loc.name}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-gold">{svc.title}</li>
            </ol>
          </nav>
          <div className="mt-6 flex items-start gap-5">
            <span className="hidden size-16 shrink-0 place-items-center border border-white/30 bg-white/10 text-white sm:grid">
              <Icon name={svc.icon} width={32} height={32} />
            </span>
            <div>
              <p className="tag">Our Cleaning Services in {loc.name}</p>
              <h1 className="mt-4 text-4xl font-extrabold sm:text-[3.25rem]">{svc.title} {loc.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="space-y-5 text-lg leading-relaxed">
              {svc.body(loc.name).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            {svc.list && (
              <div className="mt-8">
                <h2 className="mb-4 text-2xl font-bold">{svc.listTitle}</h2>
                <CheckList items={svc.list} columns />
              </div>
            )}
            <div className="mt-10">
              <BookingActions />
            </div>
          </div>

          <aside className="card self-start bg-paper p-6">
            <h2 className="text-xl font-bold">Other services in {loc.name}</h2>
            <ul className="mt-4 grid gap-1">
              {services.filter((s) => s.slug !== svc.slug).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/cleaning-service/${loc.slug}/${s.slug}`}
                    className="flex items-center gap-3 rounded-sm px-2 py-2.5 hover:bg-white hover:text-brand"
                  >
                    <Icon name={s.icon} width={20} height={20} className="text-brand" /> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <BeforeAfterSection />
    </>
  );
}
