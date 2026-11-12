import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { cleaners } from "@/lib/cleaners";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Cleaners",
  description:
    "Meet the Shine White cleaners. Choose a cleaner and book them directly online for house, office and deep cleaning in Cyberjaya, Putrajaya and nearby.",
  alternates: { canonical: "/cleaners" },
};

export default function CleanersPage() {
  return (
    <>
      <PageHero eyebrow="Cleaners" title="Meet our cleaners and book the one you like">
        <p>
          Tap a cleaner to open their booking page, where you can choose a package, date and time. We have{" "}
          {cleaners.length} trained cleaners on the team.
        </p>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {cleaners.map((c) => (
              <li key={c.id}>
                <a
                  href={site.cleanerUrl(c.id)}
                  rel="noopener"
                  aria-label={`Book ${c.name} on Setmore`}
                  className="card lift group flex h-full flex-col overflow-hidden"
                >
                  <div className="relative aspect-square bg-tint">
                    {c.photo ? (
                      <Image
                        src={`/cleaners/${c.name.toLowerCase()}.webp`}
                        alt={`Portrait of ${c.name}`}
                        fill
                        sizes="(min-width: 1280px) 13rem, (min-width: 640px) 30vw, 46vw"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <span className="grid h-full place-items-center font-display text-6xl font-bold text-brand/40" aria-hidden="true">
                        {c.name[0]}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <h2 className="text-xl font-bold">{c.name}</h2>
                    <p className="mt-1 text-sm text-muted">{c.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand">
                      Book {c.name} <Icon name="arrow" width={16} height={16} className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="card mt-12 flex flex-col items-start justify-between gap-5 bg-paper p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-2xl font-bold">No preference?</h2>
              <p className="mt-1 text-muted">Book any available cleaner and our admin will assign one for you.</p>
            </div>
            <a href={site.bookingUrl} className="btn btn-primary">
              Book any cleaner <Icon name="arrow" width={18} height={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
