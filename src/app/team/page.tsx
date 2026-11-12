import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { cleaners } from "@/lib/cleaners";
import { management } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Shine White Cleaning management team and cleaners, or apply to join us now.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Team" title="Our Team Members">
        <p>The people who plan, manage and deliver every Shine White clean.</p>
      </PageHero>

      <section className="py-14 sm:py-20" aria-labelledby="mgmt-title">
        <div className="container-page">
          <h2 id="mgmt-title" className="text-3xl font-bold">Management Team</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((m) => (
              <li key={m.name} className="card flex gap-4 p-5">
                <span className="grid size-14 shrink-0 place-items-center bg-brand font-display text-xl font-bold text-white" aria-hidden="true">
                  {m.name.split(" ")[1][0]}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="text-sm font-semibold text-brand">{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{m.blurb}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-paper py-14">
        <div className="container-page flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">Cleaners</h2>
            <p className="mt-2 text-muted">{cleaners.length} trained cleaners, each with their own online booking page.</p>
          </div>
          <Link href="/cleaners" className="btn btn-primary">
            Meet the cleaners <Icon name="arrow" width={18} height={18} />
          </Link>
        </div>
      </section>

      <section id="join" className="py-14 sm:py-20" aria-labelledby="join-title">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="tag">Join our team</p>
            <h2 id="join-title" className="mt-3 text-3xl font-bold sm:text-4xl">Come Work With Us</h2>
            <p className="mt-4 text-muted">Fill in your details and we will call you as soon as possible.</p>
          </div>
          <ApplyForm />
        </div>
      </section>
    </>
  );
}
