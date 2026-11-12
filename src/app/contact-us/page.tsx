import type { Metadata } from "next";
import { PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact us to know more about house and office cleaning.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Talk to Shine White Cleaning">
        <p>Call, WhatsApp or book online. We are open every day, 8am to 6pm.</p>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Icon name="pin" className="text-brand" /> Headquarter
              </h2>
              <address className="mt-3 not-italic leading-relaxed text-muted">
                {site.address.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </address>
              <a href={site.address.mapsUrl} rel="noopener" className="mt-3 inline-flex items-center gap-1.5 font-semibold text-brand hover:underline">
                Get directions <Icon name="external" width={16} height={16} />
              </a>
              <p className="mt-4 text-sm text-muted">
                <span className="font-semibold text-ink">Branch:</span> {site.branch}
              </p>
            </div>

            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Icon name="phone" className="text-brand" /> H/P
              </h2>
              <a href={site.phoneHref} className="mt-2 block font-display text-3xl font-bold text-brand hover:underline">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-2 inline-flex items-center gap-2 text-muted hover:text-brand">
                <Icon name="mail" width={18} height={18} /> {site.email}
              </a>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={site.bookingUrl} className="btn btn-primary">Book Now</a>
                <a href={site.whatsappUrl} rel="noopener" className="btn btn-ghost">
                  <Icon name="chat" width={18} height={18} /> WhatsApp
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="flex items-center gap-2 text-xl font-bold">
                <Icon name="clock" className="text-brand" /> Operating Hours
              </h2>
              <dl className="mt-3 divide-y divide-line">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between py-2">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className="font-semibold">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="card min-h-[24rem] overflow-hidden">
            <iframe
              title="Map showing Shine White Cleaning headquarter at Primera Suites, Cyberjaya"
              src={site.address.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[24rem] w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
