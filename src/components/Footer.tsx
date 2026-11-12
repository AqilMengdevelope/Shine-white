import Image from "next/image";
import Link from "next/link";
import { footerBlurb, site } from "@/lib/site";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center bg-white">
              <Image src="/logo.png" alt="" width={38} height={38} />
            </span>
            <p className="font-display text-xl font-bold text-white">Cleaning Is Our Priority</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{footerBlurb}</p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} rel="noopener" className="inline-flex min-h-11 items-center border border-white/20 px-4 hover:bg-white/10">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Contact</h2>
          <p className="mt-4 text-sm font-semibold text-white">
            {site.legalName.toUpperCase()}
            <span className="block font-normal text-white/60">({site.registration})</span>
          </p>
          <p className="mt-3 text-sm font-semibold text-white">Headquarter</p>
          <address className="text-sm not-italic leading-relaxed">
            {site.address.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </address>
          <a href={site.address.mapsUrl} rel="noopener" className="mt-2 inline-flex items-center gap-1.5 text-sm text-white underline underline-offset-4">
            Open in Google Maps <Icon name="external" width={14} height={14} />
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Branches</h2>
          <p className="mt-4 text-sm">{site.branch}</p>
          <h2 className="mt-6 text-sm font-bold uppercase tracking-widest text-gold">Operating Hours</h2>
          <dl className="mt-4 space-y-1 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt>{h.days}</dt>
                <dd className="text-white">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 text-white hover:underline">
                <Icon name="phone" width={16} height={16} /> {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-white hover:underline">
                <Icon name="mail" width={16} height={16} /> {site.email}
              </a>
            </li>
          </ul>
          <Link href="/team#join" className="btn btn-ghost-dark mt-5 w-full">Join Our Team</Link>
          <a href={site.bookingUrl} className="btn btn-white mt-2 w-full">Book Now</a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>© {site.legalName}. Proudly created by Shine White Cleaning Services.™</p>
          <p>
            <Link href="/faq#policies" className="hover:text-white">Payment &amp; cancellation policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
