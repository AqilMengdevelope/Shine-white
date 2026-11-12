import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFab } from "@/components/Bits";
import { site } from "@/lib/site";
import "./globals.css";

const display = Sora({ variable: "--ff-display", subsets: ["latin"], display: "swap" });
const body = Inter({ variable: "--ff-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Office Cleaning | Shine White Cleaning | House Cleaning | Deep Cleaning",
    template: "%s | Shine White Cleaning Services",
  },
  description:
    "Shine White Cleaning offers expert residential and commercial cleaning services in Cyberjaya, Selangor and nearby. Trust us for spotless spaces and satisfaction.",
  openGraph: { siteName: "Shine White Cleaning", type: "website", locale: "en_MY", images: ["/before-after/office-after.webp"] },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = { themeColor: "#1b4e9b" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HouseCleaningService"],
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/before-after/office-after.webp`,
  telephone: "+601121283866",
  email: site.email,
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4-06, Level 4, Primera Suites, Block 3520, Jalan Teknokrat 6, Cyber 5",
    addressLocality: "Cyberjaya",
    addressRegion: "Selangor",
    postalCode: "63000",
    addressCountry: "MY",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: ["Cyberjaya", "Putrajaya", "Bukit Jalil", "Equine Park", "Puchong", "Seri Kembangan", "Kota Warisan", "Nilai", "Sepang", "Kajang", "Semenyih"],
  sameAs: [site.bookingUrl, ...site.social.map((s) => s.href)],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-MY" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
