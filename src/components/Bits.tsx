import Link from "next/link";
import { beforeAfter, site, stats } from "@/lib/site";
import { BeforeAfter } from "./BeforeAfter";
import { Counter } from "./Counter";
import { Icon } from "./Icon";

/** Heading helper: wraps the part of a title after `|` in the accent style. */
export function Accent({ text, light = false }: { text: string; light?: boolean }) {
  const [a, b, c] = text.split("|");
  return (
    <>
      {a}
      {b && <span className={light ? "hl-light" : "hl"}>{b}</span>}
      {c}
    </>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="band">
      <div className="container-page py-14 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm font-medium text-white/70">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page" className="text-gold">{eyebrow}</li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-4xl font-extrabold sm:text-[3.25rem]">
          <Accent text={title} light />
        </h1>
        {children && <div className="mt-6 max-w-2xl text-lg">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHead({ tag, title, children, center = false }: { tag: string; title: string; children?: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="tag">{tag}</p>
      <h2 className="mt-5 text-3xl font-extrabold sm:text-[2.6rem]">
        <Accent text={title} />
      </h2>
      {children && <div className="mt-5 text-lg">{children}</div>}
    </div>
  );
}

export function CheckList({ items, columns = false }: { items: string[]; columns?: boolean }) {
  return (
    <ul className={`grid gap-3 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-1 grid size-5 shrink-0 place-items-center bg-brand text-white">
            <Icon name="check" width={13} height={13} strokeWidth={3} />
          </span>
          <span className="font-medium text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BookingActions({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={site.bookingUrl} className={`btn ${dark ? "btn-white" : "btn-primary"}`}>
        Book Now <Icon name="arrow" width={18} height={18} />
      </a>
      <a href={site.phoneHref} className={`btn ${dark ? "btn-ghost-dark" : "btn-ghost"}`}>
        <Icon name="phone" width={18} height={18} /> Call Now {site.phoneDisplay}
      </a>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-page">
        <div className="band flex flex-col items-start justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="flex items-start gap-5">
            <span className="hidden size-14 shrink-0 place-items-center border border-white/30 bg-white/10 text-white sm:grid">
              <Icon name="sparkle" width={26} height={26} />
            </span>
            <div>
              <h2 className="text-3xl font-extrabold">{site.tagline}</h2>
              <p className="mt-2 max-w-xl">Pick a package and a time online. Our admin confirms your booking.</p>
            </div>
          </div>
          <BookingActions dark />
        </div>
      </div>
    </section>
  );
}

export function StatsStrip() {
  return (
    <dl className="band grid grid-cols-2 border-t-[3px] border-t-gold shadow-card lg:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`flex flex-col-reverse px-5 py-7 text-center sm:px-8 ${i % 2 ? "border-l border-white/15" : ""} ${i > 1 ? "border-t border-white/15 lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
        >
          <dt className="mt-2 text-sm font-medium text-white/75">{s.label}</dt>
          <dd className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-[3.25rem]">
            <Counter value={s.value} suffix={s.suffix} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function BeforeAfterSection() {
  return (
    <section className="section border-y border-line bg-paper" aria-labelledby="results-title">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tag">See the difference</p>
          <h2 id="results-title" className="mt-5 text-3xl font-extrabold sm:text-[2.6rem]">
            Before and after a <span className="hl">Shine White clean</span>
          </h2>
          <p className="mt-5 text-lg">
            Move across each photo to wipe it clean. On a phone, drag the handle left and right.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beforeAfter.map((item) => (
            <BeforeAfter
              key={item.slug}
              title={item.title}
              alt={item.alt}
              before={`/before-after/${item.slug}-before.webp`}
              after={`/before-after/${item.slug}-after.webp`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={site.whatsappUrl}
      rel="noopener"
      className="fixed bottom-4 right-4 z-30 inline-flex min-h-13 items-center gap-2.5 rounded-full bg-whatsapp p-2 sm:pr-5 font-display text-sm font-bold text-white shadow-card hover:bg-whatsapp-dark"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/20">
        <Icon name="chat" width={18} height={18} />
      </span>
      <span className="sr-only sm:not-sr-only">WhatsApp us</span>
    </a>
  );
}
