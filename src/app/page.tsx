import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { BeforeAfterSection, CheckList, CtaBand, SectionHead, StatsStrip } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { bookingSteps, clients, homeServices, serviceAreas, site, testimonial, whyChooseUs } from "@/lib/site";

const heroPoints = [
  "Trained, professional cleaners",
  "Homes, offices and commercial spaces",
  "Pay only after the clean is done",
  "Evening and weekend slots",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container-page grid items-center gap-12 pb-24 pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-32 lg:pt-20">
          <div>
            <p className="tag">Professional cleaners since 2018</p>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.06] sm:text-6xl xl:text-[4.25rem]">
              Give Your House <span className="hl whitespace-nowrap">Shine &amp; White</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg">
              Reliable <strong>professional house cleaning service</strong> in {serviceAreas.slice(0, -1).join(", ")} &amp;{" "}
              {serviceAreas.at(-1)}.
            </p>
            <div className="mt-8 max-w-xl">
              <CheckList items={heroPoints} columns />
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={site.bookingUrl} className="btn btn-primary">
                Book Now <Icon name="arrow" width={18} height={18} />
              </a>
              <a href={site.whatsappUrl} rel="noopener" className="btn btn-whatsapp">
                <Icon name="chat" width={18} height={18} /> WhatsApp Us
              </a>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
              <Icon name="phone" width={15} height={15} className="text-brand" />
              Or call{" "}
              <a href={site.phoneHref} className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                {site.phoneDisplay}
              </a>
              , open daily 8am to 6pm
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -right-3 -top-3 hidden h-full w-full border-2 border-gold lg:block" aria-hidden="true" />
            <div className="relative">
              <BeforeAfter
                title="Move-out clean"
                alt="empty bedroom with tiled floor"
                before="/before-after/room-before.webp"
                after="/before-after/room-after.webp"
                caption={false}
                priority
                intro
              />
              <p className="tag tag-solid absolute -bottom-4 left-4">Move across the photo to clean it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <div className="container-page relative z-10 -mt-14">
        <StatsStrip />
      </div>

      {/* Clients */}
      <section className="section pb-0 lg:pb-0" aria-labelledby="clients-title">
        <div className="container-page">
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
            <h2 id="clients-title" className="text-center text-sm font-bold uppercase tracking-[0.14em] text-muted">
              Trusted by businesses &amp; property professionals
            </h2>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-5 xl:grid-cols-9">
            {clients.map((c) => (
              <li key={c.file} className="card lift group flex flex-col">
                <div className="grid h-24 place-items-center p-3">
                  <Image src={`/clients/${c.file}.png`} alt={c.name} width={140} height={70} className="max-h-14 w-auto object-contain opacity-80 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0" />
                </div>
                <p className="border-t border-line px-2 py-2 text-center font-display text-[0.7rem] font-semibold leading-tight text-ink">
                  {c.name}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center">
            We are happy to see positive feedback and no complaints from our well-known clientele. Every piece of positive
            feedback is always credited to our cleaners.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section" aria-labelledby="why-title">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="tag">Our cleaning specialists</p>
            <h2 id="why-title" className="mt-5 text-3xl font-extrabold sm:text-[2.6rem]">
              Why <span className="hl">Choose Us?</span>
            </h2>
            <ul className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center bg-tint text-brand">
                    <Icon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-[1.05rem] font-bold leading-snug">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <figure className="relative col-span-2 border border-line bg-white p-1.5 shadow-card">
              <div className="relative aspect-[16/10]">
                <Image src="/before-after/office-after.webp" alt="Clean open-plan office with tidy desks" fill sizes="(min-width: 1024px) 36rem, 92vw" className="object-cover object-[center_30%]" />
              </div>
              <figcaption className="tag tag-solid absolute left-1.5 top-1.5">Office cleaning</figcaption>
            </figure>
            {[
              { src: "toilet-after", alt: "Spotless bathroom with white toilet and basin", label: "Bathroom care" },
              { src: "room-after", alt: "Clean empty room with shining tiled floor", label: "Move-out ready" },
            ].map((img) => (
              <figure key={img.src} className="relative border border-line bg-white p-1.5 shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image src={`/before-after/${img.src}.webp`} alt={img.alt} fill sizes="(min-width: 1024px) 18rem, 46vw" className="object-cover" />
                </div>
                <figcaption className="absolute bottom-1.5 left-1.5 bg-ink/85 px-3 py-1.5 font-display text-xs font-bold text-white">
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section border-t border-line bg-paper" aria-labelledby="services-title">
        <div className="container-page">
          <SectionHead tag="Full service range" title="Our Cleaning |Services|" center>
            <p>
              Professional residential and commercial cleaning for homes, offices, condominiums, apartments and commercial
              premises. Tap any service for the details.
            </p>
          </SectionHead>

          <div className="mt-14 grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-12">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="tag tag-solid">Shine White Clean</p>
              <h3 id="services-title" className="mt-5 border-l-[6px] border-brand pl-4 text-2xl font-extrabold">
                Home, Office &amp; Commercial Cleaning
              </h3>
              <p className="mt-5">
                Whether you need regular house cleaning, office cleaning, deep cleaning or a one-time service, we provide a
                cleaning solution based on your property and requirements.
              </p>
              <p className="mt-6 flex gap-3 border border-line border-l-[3px] border-l-brand bg-white p-4 text-sm">
                <Icon name="badge" width={20} height={20} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  <strong>Best for:</strong> bungalows, condominiums, SOHO units, offices and shoplots.
                </span>
              </p>
              <Link href="/cleaning-service" className="btn btn-primary mt-7">
                All services and areas <Icon name="arrow" width={18} height={18} />
              </Link>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {homeServices.map((s, i) => (
                <li key={s.title}>
                  <Link href={s.href} className="group relative flex aspect-[5/6] flex-col justify-end overflow-hidden bg-brand-deep p-6">
                    <Image
                      src={`/services/${s.image}.webp`}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 18rem, (min-width: 640px) 45vw, 92vw"
                      className="object-cover object-right opacity-70 grayscale transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-brand-deep via-brand-dark/85 to-brand/35 transition-opacity duration-500 group-hover:opacity-80" aria-hidden="true" />
                    <span className="absolute left-0 top-0 bg-gold px-3 py-1.5 font-display text-sm font-extrabold text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="relative">
                      <h4 className="text-xl font-bold text-white">{s.title}</h4>
                      <span className="mt-3 block h-0.5 w-8 bg-gold transition-all duration-300 group-hover:w-16" aria-hidden="true" />
                      <span className="mt-3 block text-sm leading-relaxed text-white/85">{s.text}</span>
                      <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-bold text-white">
                        Learn more <Icon name="arrow" width={16} height={16} className="text-gold transition group-hover:translate-x-1" />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      {/* Testimonial */}
      <section className="band section" aria-labelledby="review-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="tag">Customer review</p>
            <h2 id="review-title" className="mt-5 text-3xl font-extrabold sm:text-[2.6rem]">
              What Our <span className="hl-light">Customers Say</span>
            </h2>
            <p className="mt-5 text-lg">
              Customers pay the cleaning service fee after receiving the service given by our well-trained cleaners.
            </p>
          </div>
          <figure className="relative">
            <svg viewBox="0 0 48 36" className="h-12 w-16 text-gold" fill="currentColor" aria-hidden="true">
              <path d="M0 36V21.6C0 9.7 6.6 2.3 19 0l2 5.4C14.3 7.2 11 10.8 10.6 16H20v20H0Zm27 0V21.6C27 9.7 33.6 2.3 46 0l2 5.4C41.3 7.2 38 10.8 37.6 16H47v20H27Z" />
            </svg>
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-white sm:text-[1.9rem]">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
              <span className="grid size-12 place-items-center bg-white font-display font-extrabold text-brand" aria-hidden="true">DC</span>
              <span>
                <span className="block font-display text-lg font-bold text-white">{testimonial.name}</span>
                <span className="block text-sm text-white/75">Bungalow cleaning customer</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* How to book */}
      <section className="section" aria-labelledby="book-title">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="tag">5 simple steps</p>
            <h2 id="book-title" className="mt-5 text-3xl font-extrabold sm:text-[2.6rem]">
              How to <span className="hl">Book</span>
            </h2>
          </div>
          <ol className="relative mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            <span className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-line lg:block" aria-hidden="true" />
            {bookingSteps.map((step, i) => (
              <li key={step} className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                <span
                  className={`relative grid size-14 shrink-0 place-items-center font-display text-lg font-extrabold ${
                    i === bookingSteps.length - 1 ? "bg-gold text-ink" : "bg-brand text-white"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="self-center font-display text-[1.05rem] font-bold leading-snug text-ink lg:mt-5 lg:max-w-[11rem]">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href={site.bookingUrl} className="btn btn-primary">
              Book Now <Icon name="arrow" width={18} height={18} />
            </a>
            <Link href="/cleaners" className="btn btn-ghost">Choose your cleaner first</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
