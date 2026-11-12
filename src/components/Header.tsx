"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { locations, services, site } from "@/lib/site";
import { Icon } from "./Icon";

const aboutMenu = [
  { href: "/about-us", label: "About Us", hint: "Our story since 2018" },
  { href: "/team", label: "Team", hint: "Management and careers" },
  { href: "/contact-us", label: "Contact Us", hint: "Headquarter and enquiries" },
];

const plain = [
  { href: "/cleaners", label: "Cleaners" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact" },
];

const panel =
  "invisible absolute top-full z-10 translate-y-1 pt-4 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link href="/" onClick={close} className="flex shrink-0 items-center gap-3" aria-label="Shine White Cleaning, home">
          <Image src="/logo.png" alt="" width={46} height={46} priority />
          <span className="font-display leading-none">
            <span className="block text-[1.15rem] font-extrabold tracking-tight text-ink">
              SHINE <span className="text-brand">WHITE</span>
            </span>
            <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted">
              Cleaning Services
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
          <Link href="/" className="nav-link">Home</Link>

          <div className="group relative">
            <Link href="/about-us" className="nav-link">
              About <Icon name="chevron" width={14} height={14} strokeWidth={2.4} />
            </Link>
            <div className={`${panel} left-0 w-72`}>
              <ul className="card border-t-2 border-t-gold p-2 shadow-card">
                {aboutMenu.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block px-4 py-3 hover:bg-tint">
                      <span className="block font-display text-[0.95rem] font-semibold text-ink">{item.label}</span>
                      <span className="block text-sm text-muted">{item.hint}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="group relative">
            <Link href="/cleaning-service" className="nav-link">
              Services <Icon name="chevron" width={14} height={14} strokeWidth={2.4} />
            </Link>
            <div className={`${panel} left-1/2 w-[40rem] -translate-x-1/2`}>
              <div className="card border-t-2 border-t-gold shadow-card">
                <div className="grid grid-cols-2 gap-8 p-7">
                  {locations.map((loc) => (
                    <div key={loc.slug}>
                      <Link href={`/cleaning-service/${loc.slug}`} className="tag hover:bg-brand hover:text-white">
                        {loc.name}
                      </Link>
                      <ul className="mt-3">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/cleaning-service/${loc.slug}/${s.slug}`}
                              className="flex items-center gap-3 px-2 py-2.5 text-[0.95rem] font-medium text-ink hover:bg-tint hover:text-brand"
                            >
                              <Icon name={s.icon} width={18} height={18} className="text-brand" /> {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/cleaning-service"
                  className="flex items-center justify-between border-t border-line bg-paper px-7 py-4 font-display text-sm font-bold text-brand hover:bg-tint"
                >
                  All services and service areas <Icon name="arrow" width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>

          {plain.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a href={site.phoneHref} className="hidden text-right leading-tight md:block">
            <span className="block text-xs font-medium text-muted">Open daily · 8am to 6pm</span>
            <span className="block font-display text-[1.05rem] font-extrabold text-brand">{site.phoneDisplay}</span>
          </a>
          <span className="hidden h-9 w-px bg-line md:block" aria-hidden="true" />
          <a href={site.bookingUrl} className="btn btn-primary hidden sm:inline-flex">Book a Cleaner</a>
          <button
            type="button"
            className="grid size-12 place-items-center border border-line text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <div className="container-page py-4 font-display">
            <ul className="divide-y divide-line">
              <li><Link href="/" onClick={close} className="block py-4 text-lg font-semibold text-ink">Home</Link></li>
              <li>
                <details>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-ink">
                    About <Icon name="chevron" width={18} height={18} />
                  </summary>
                  <ul className="pb-3 pl-4">
                    {aboutMenu.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={close} className="block py-2.5 font-medium text-body">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-semibold text-ink">
                    Services <Icon name="chevron" width={18} height={18} />
                  </summary>
                  <div className="grid gap-5 pb-4 pl-4 sm:grid-cols-2">
                    {locations.map((loc) => (
                      <div key={loc.slug}>
                        <Link href={`/cleaning-service/${loc.slug}`} onClick={close} className="tag">{loc.name}</Link>
                        <ul className="mt-2">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link href={`/cleaning-service/${loc.slug}/${s.slug}`} onClick={close} className="block py-2.5 font-medium text-body">
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              </li>
              {plain.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={close} className="block py-4 text-lg font-semibold text-ink">{l.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href={site.bookingUrl} className="btn btn-primary">Book a Cleaner</a>
              <a href={site.phoneHref} className="btn btn-ghost">
                <Icon name="phone" width={18} height={18} /> Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
