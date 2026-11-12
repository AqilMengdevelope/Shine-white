import type { Metadata } from "next";
import { PageHero } from "@/components/Bits";
import { Icon } from "@/components/Icon";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Learn professional cleaning tips, office hygiene advice, deep cleaning guides, and property care insights from Shine White Cleaning Services.",
  alternates: { canonical: "/blog" },
};

const fmt = new Intl.DateTimeFormat("en-MY", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kuala_Lumpur" });

export default function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Blog" title="All Posts">
        <p>Cleaning tips, office hygiene advice, deep cleaning guides and property care insights.</p>
      </PageHero>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.url}>
                <a href={p.url} className="card lift group flex h-full flex-col p-6">
                  <time dateTime={p.date} className="text-sm font-medium text-muted">
                    {fmt.format(new Date(`${p.date}T12:00:00+08:00`))}
                  </time>
                  <h2 className="mt-2 text-xl font-bold leading-snug group-hover:text-brand">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.excerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand">
                    Read article <Icon name="arrow" width={16} height={16} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
