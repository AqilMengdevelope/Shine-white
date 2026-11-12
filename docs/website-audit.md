# Shine White Cleaning: website audit and rebuild

**Old site:** https://www.i1cleaner.com (Wix)
**New site:** this repository (Next.js 16, App Router, Tailwind CSS 4)
**Audit date:** 12 November 2026

Every finding below was checked against the live site on the audit date. All existing sections and copy were carried over; wording was only changed to fix typos, grammar and contradictions, and each of those changes is listed here.

---

## Summary

| Area | Old site | New site |
| --- | --- | --- |
| Platform | Wix page builder | Next.js, statically prerendered |
| HTML per page | 650 KB to 1.09 MB | 42 KB to 125 KB |
| `<script>` tags on the homepage | 68 | 31 |
| Pages with a proper `<h1>` | 4 of 15 | all |
| Proof of results | none | before/after swipe section |
| Choose your own cleaner | not possible on the site | new Cleaners page, 26 cleaners |
| Old URLs | long, inconsistent, one named `copy-of-…` | clean URLs, old ones redirect |

---

## 1. Content mistakes

| # | Mistake on the old site | Fix |
| --- | --- | --- |
| 1.1 | Homepage headline is typed as "Give Your HoUSE Shine & WHITE". | "Give Your House Shine & White". |
| 1.2 | The Putrajaya page (`/putrajaya`) is headed "Cleaning Service CYBERJAYA" and its text talks about Cyberjaya. It is a copy of the Cyberjaya page that was never edited. | Location pages are generated from one template, so the place name is always right. |
| 1.3 | A leftover duplicate page is live at `/copy-of-house-cleaning-service-cyberjaya`. | Removed. The URL redirects to the Cyberjaya page. |
| 1.4 | The service-area list has copy-paste errors: the Nilai column lists Puchong services, "Move in Move out Nilai" appears twice, and 16 Sierra lists Office Cleaning twice and has no Deep Cleaning. | The list is generated from one set of areas and one set of services, so every area shows the same five services once. |
| 1.5 | The FAQ says "We only accept cash", but the policy section on the same page says "cash/bank transfer". | FAQ answer now says cash or bank transfer. **Please confirm this is correct.** |
| 1.6 | The footer shows `info@i1cleaner.com`, but the email link opens `shinewhite88@outlook.com`. | One address everywhere: `info@i1cleaner.com`. **Please confirm which inbox you want.** |
| 1.7 | Grammar and typos: "Your Booking will Confirmed by our Admin", "Whatapps Us Now!!!", "Customise d House Cleaning Package", "famous clientele", "i had never experienced…", "we are happily help you", "Can i request…". | Corrected. Meaning is unchanged. |
| 1.8 | Team blurbs are inconsistent (some start lowercase, some are missing full stops) and each card has a "Read More" button that leads nowhere useful. | Blurbs tidied; dead buttons removed. |
| 1.9 | Footer still links to Google+, which shut down in 2019. | Removed. Facebook, Instagram and Yelp kept. |
| 1.10 | Three different Facebook addresses are used across the page and its hidden data. | One: `facebook.com/i1cleaner`. |

## 2. Structure and navigation

| # | Mistake on the old site | Fix |
| --- | --- | --- |
| 2.1 | URLs are hard to read and inconsistent: `/cleaningservicecyberjaya`, `/cleaning-service-cyberjaya` (two different pages), `/move-inmove-outcleaningcyberjaya`. | One pattern: `/cleaning-service/<location>/<service>`. |
| 2.2 | Putrajaya only has a House Cleaning page, although the site says all five services are offered there. | Both Cyberjaya and Putrajaya have all five service pages. |
| 2.3 | 11 of the 15 pages have no `<h1>` at all. The Contact page's `<h1>` is "HEADQUARTER" and the Blog's is "All Posts". | Every page has one descriptive `<h1>` and ordered headings below it. |
| 2.4 | The Team page lists "Cleaners" but there is no way to see or book one. | New **Cleaners** page (see section 5). |
| 2.5 | Service pages are dead ends: one paragraph and a button. | Each service page has a breadcrumb, links to the other services in that location, the before/after section and both booking options. |
| 2.6 | The phone number and booking button are easy to lose on a phone. | Sticky header with Book a Cleaner, a tap-to-call number, and a WhatsApp button fixed at the bottom of every page. |

## 3. Search (SEO)

| # | Mistake on the old site | Fix |
| --- | --- | --- |
| 3.1 | Page titles are keyword lists, e.g. Contact: "Contact Us \| Shine White Cleaning \| Malaysia \| 16 sierra \| presint \| precint"; Team: "Vacancy of cleaning company \| top cleaning company \| cleaner company application". | Clear titles: "Contact Us \| Shine White Cleaning Services". |
| 3.2 | The Curtain Cleaning page is titled "Cleaning Service Cyberjaya", the same as two other pages. | Unique title per page: "Curtain Cleaning Cyberjaya". |
| 3.3 | Team page description is just "Join us now." The Blog description is three alternative drafts pasted together. | One written description per page. |
| 3.4 | The homepage has three overlapping blocks of business data for Google. One points to `logo.png` and `hero-image.jpg`, which do not exist on the site. Other pages have none. | One correct LocalBusiness block on every page (address, phone, hours, areas served), plus FAQ data on the FAQ page. |
| 3.5 | Image descriptions are stuffed with keywords ("move in move out relocation relocate cleaning service", "part time maid cleaning"); five client logos are all described as "customer cleaning"; 3 to 7 images per page have no description. | Every image has a plain description. Client logos use the client's name. |
| 3.6 | A `keywords` meta tag is used. Google has ignored it for years. | Dropped. |
| 3.7 | No redirects plan for a rebuild. | All nine old service/location URLs permanently redirect to their new page (`next.config.ts`), so existing rankings and shared links carry over. A sitemap and robots file are generated. |

## 4. Design, speed and accessibility

| # | Mistake on the old site | Fix |
| --- | --- | --- |
| 4.1 | Each page sends 650 KB to 1.09 MB of HTML and 65+ scripts before any image loads. | Pages are prerendered: 42 KB to 125 KB of HTML. Images are served as WebP at the size each screen needs. |
| 4.2 | Service tiles use stock photos on clashing pink, lime and red blocks that have nothing to do with the brand. | One palette taken from the logo: brand blue with a gold accent. The same photos are reused in black and white under a blue overlay, so all six tiles match. |
| 4.3 | Nothing shows what a clean actually looks like. | New "Before and after" section using your three photos (see section 5). |
| 4.4 | The FAQ is a script-heavy widget (the FAQ page is the heaviest at 1.09 MB). | Native expand/collapse that works without JavaScript. |
| 4.5 | Links and buttons have weak keyboard focus styles. | Visible focus ring on everything, a "Skip to content" link, 44 px minimum tap targets, and reduced-motion support. |
| 4.6 | Booking links mix `http://` and `https://`. | All `https://`. |

## 5. What was added

**Cleaners page (`/cleaners`).** Shows the 26 cleaners from your Setmore account with photo, name and tagline. Tapping a cleaner opens their Setmore booking page, for example Desi goes to `https://shinewhite.setmore.com/team/cyfI0H9WGkgGKSlKCtng1eMYlkyFThfD`. The roster is in `src/lib/cleaners.ts`.

**Before/after swipe (`src/components/BeforeAfter.tsx`).** Your three side-by-side photos were split into separate before and after images. Moving the mouse left and right across a photo wipes between dirty and clean. On a phone you drag; on a keyboard the arrow keys work. It appears on the homepage, the services overview and every service page.

**Join Our Team form.** The old form relied on Wix. The new one needs no server: it opens WhatsApp with the applicant's answers ready to send to the office number.

**Number counter.** A strip under the homepage hero counts up when it scrolls into view. Two figures are real (26 cleaners, 8 years since 2018). Two are **invented placeholders** for the mock-up: "12,500+ homes and offices cleaned" and "98% customers who book again". They are marked `PLACEHOLDER` in `src/lib/site.ts` and must be replaced with real figures before launch.

**Navigation.** The menu went from eight items in a row to seven with more spacing; About and Services open dropdowns. The layout direction (square corners, label tags, underlined accent words, photo service cards) follows the Ultra Cleaning reference site, in Shine White's own colours.

## 6. How it was built

1. Downloaded all 15 pages of the old site and extracted every heading, paragraph, link and image.
2. Put all copy in one file (`src/lib/site.ts`) so text is edited in one place and pages cannot drift apart again.
3. Rebuilt each page as a prerendered Next.js route; location and service pages come from a single template.
4. Reused the existing logo and client logos; resized and converted all images to WebP.
5. Checked in a browser on desktop and phone widths: no console errors, no horizontal scrolling, slider responds to hover, cleaner links and old-URL redirects work. Lint, type check and production build pass.

Run it locally with `npm install` then `npm run dev`, and open http://localhost:3000.

## 7. Not done yet / please check

- **Counter figures** "12,500+" and "98%" are made up. Replace them with real numbers or remove them.
- **Malay and Chinese versions** (`/ms`, `/zh`) are not rebuilt. The new site is English only for now.
- **Blog articles** are listed (latest 20) but each card still links to the article on the current site. The article bodies need migrating before the old site is switched off.
- **Privacy Statement** tab on the old FAQ page was not carried over; its text was not available to copy.
- **"SW" and "SW3"** in Setmore look like placeholder staff, so they are left off the Cleaners page. Kina has no photo and shows an initial instead.
- **Job positions** in the application form (Cleaner, Supervisor, Transporter, Admin / Sales) are a guess; the old dropdown options could not be read.
- **Cancellation policy** says both "at least 24 hours" and "within 120 minutes". Both sentences are kept as written; you may want to state one clear rule.
- **Not measured:** Lighthouse / Core Web Vitals scores. The size figures above are HTML only.
- **Not deployed.** The site runs locally; nothing has been published.
