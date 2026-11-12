// All copy below is carried over from the existing i1cleaner.com site.
// Only typos, casing and contradictions were corrected (see docs/website-audit.md).

export const site = {
  name: "Shine White Cleaning",
  legalName: "Shine White Cleaning Services",
  registration: "002865559-A",
  url: "https://www.i1cleaner.com",
  tagline: "Shine Your Property, Our Priority.",
  phoneDisplay: "011-2128 3866",
  phoneHref: "tel:+601121283866",
  email: "info@i1cleaner.com",
  bookingUrl: "https://shinewhite.setmore.com",
  cleanerUrl: (id: string) => `https://shinewhite.setmore.com/team/${id}`,
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=601121283866&text=Hello%20i%20would%20like%20to%20try%20your%20service%21",
  address: {
    lines: ["4-06, Level 4, Primera Suites, Block 3520,", "Jalan Teknokrat 6, Cyber 5,", "63000 Cyberjaya, Selangor Darul Ehsan"],
    oneLine: "4-06, Level 4, Primera Suites, Block 3520, Jalan Teknokrat 6, Cyber 5, 63000 Cyberjaya, Selangor",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=4-06%2C+Level+4%2C+Primera+Suites%2C+Block+3520%2C+Jalan+Teknokrat+6%2C+Cyber+5%2C+Cyberjaya%2C+Selangor%2C+63000",
    embedUrl:
      "https://www.google.com/maps?q=Primera+Suites%2C+Jalan+Teknokrat+6%2C+Cyber+5%2C+Cyberjaya&output=embed",
  },
  branch: "Equine Park, Seri Kembangan",
  hours: [
    { days: "Mon – Fri", time: "8am – 6pm" },
    { days: "Saturday", time: "8am – 6pm" },
    { days: "Sunday", time: "8am – 6pm" },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/i1cleaner" },
    { label: "Instagram", href: "https://www.instagram.com/shinewhite88/" },
    { label: "Yelp", href: "https://en.yelp.my/biz/shine-white-cleaning-seri-kembangan-3" },
  ],
};

export const serviceAreas = [
  "Cyberjaya",
  "Putrajaya",
  "Bukit Jalil",
  "Equine Park",
  "Puchong",
  "Seri Kembangan",
  "Kota Warisan",
  "Nilai",
  "Sepang",
  "Kajang",
  "Semenyih",
];

// The four titles are from the old site. The one-line notes restate facts from its FAQ and booking page.
export const whyChooseUs = [
  { title: "Professional Cleaners", note: "Trained before they handle any home or office job.", icon: "badge" },
  { title: "SMS & Email Notification", note: "Your booking is confirmed and you are reminded before the visit.", icon: "bell" },
  { title: "100% Satisfaction Guaranteed", note: "You pay after the cleaning service is done.", icon: "shield" },
  { title: "Available Evenings & Weekends", note: "Open every day, with 6pm slots on request.", icon: "moon" },
] as const;

/**
 * Homepage counters.
 * PLACEHOLDER numbers are invented for the mock-up and must be replaced with
 * real figures from Shine White before the site goes live.
 */
export const stats = [
  { value: 12500, suffix: "+", label: "Homes and offices cleaned" }, // PLACEHOLDER
  { value: 26, suffix: "", label: "Trained cleaners" }, // real: Setmore roster, Nov 2026
  { value: 8, suffix: " yrs", label: "Trusted since 2018" }, // real: established 2018
  { value: 98, suffix: "%", label: "Customers who book again" }, // PLACEHOLDER
];

export const homeServices = [
  { title: "Office Cleaning", image: "office", href: "/cleaning-service/cyberjaya/office-cleaning", text: "A clean workplace for employees, customers and visitors, for businesses of different sizes." },
  { title: "House Cleaning", image: "house", href: "/cleaning-service/cyberjaya/house-cleaning", text: "Dusting, vacuuming, mopping, kitchen cleaning, bathroom cleaning and tidying." },
  { title: "Curtain Cleaning", image: "curtain", href: "/cleaning-service/cyberjaya/curtain-cleaning", text: "Refresh curtains that have collected dust, dirt and odours over time." },
  { title: "Commercial Cleaning", image: "commercial", href: "/cleaning-service", text: "Cleaning solutions for commercial premises and businesses." },
  { title: "Move-In/Out Cleaning", image: "move", href: "/cleaning-service/cyberjaya/move-in-move-out-cleaning", text: "Prepare a property for its next stage, for tenants, owners, landlords and agents." },
  { title: "Carpet Cleaning", image: "carpet", href: "/cleaning-service", text: "Carpet vacuuming and cleaning for homes and offices." },
];

export const testimonial = {
  name: "Datin Chua",
  quote:
    "I had never experienced a cleaner that can clean my bungalow by using tape to stick the dust after mopping the floor. They are really trained by professionals and I am very satisfied with the service provided.",
};

export const clients = [
  { name: "UEM Sunrise", file: "uem-sunrise" },
  { name: "S P Setia", file: "sp-setia" },
  { name: "Binastra Land", file: "binastra-land" },
  { name: "Mah Sing Group", file: "mah-sing" },
  { name: "Glomac", file: "glomac" },
  { name: "Cyberview", file: "cyberview" },
  { name: "Emkay Group", file: "emkay" },
  { name: "OSK Property", file: "osk-property" },
  { name: "Paramount Property", file: "paramount-property" },
];

export const bookingSteps = [
  "Click “Book Now”",
  "Choose Package",
  "Select Date & Time",
  "Fill In Your Details",
  "Your booking is confirmed by our admin",
];

export const beforeAfter = [
  { slug: "toilet", title: "Bathroom deep clean", alt: "tiled bathroom with toilet and basin" },
  { slug: "room", title: "Move-out clean", alt: "empty bedroom with tiled floor" },
  { slug: "office", title: "Office clean", alt: "open-plan office with desks and bins" },
];

/* ---------- Location + service pages ---------- */

export const locations = [
  { slug: "cyberjaya", name: "Cyberjaya" },
  { slug: "putrajaya", name: "Putrajaya" },
] as const;

export type ServicePage = {
  slug: string;
  title: string;
  icon: string;
  body: (place: string) => string[];
  listTitle?: string;
  list?: string[];
  description: (place: string) => string;
};

export const services: ServicePage[] = [
  {
    slug: "house-cleaning",
    title: "House Cleaning",
    icon: "house",
    body: () => [
      "Keep your home clean and comfortable without spending your valuable free time on household cleaning. Our professional cleaners can assist with general dusting, vacuuming, mopping, kitchen cleaning, bathroom cleaning and tidying.",
    ],
    listTitle: "Suitable for",
    list: ["Terraced houses", "Semi-detached houses", "Bungalows", "Apartments", "Condominiums", "SOHO and serviced residences"],
    description: (p) =>
      `Looking for a reliable cleaning service in ${p}? Shine White provides professional house, office, deep, move-in, move-out and commercial cleaning services.`,
  },
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    icon: "office",
    body: (p) => [
      `A clean workplace creates a more comfortable and professional environment for employees, customers and visitors. Our office cleaning services in ${p} are suitable for businesses of different sizes and cleaning requirements.`,
    ],
    listTitle: "Services may include",
    list: ["Office floor cleaning", "Dusting and wiping", "Pantry cleaning", "Restroom sanitisation", "Common-area cleaning", "General workplace cleaning"],
    description: () =>
      "Professional commercial and office cleaning services across Cyberjaya, Putrajaya, and Seri Kembangan. Get a free quote today!",
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: "sparkle",
    body: (p) => [
      `When regular cleaning isn't enough, our deep cleaning service in ${p} provides more detailed attention to areas that are often overlooked during routine cleaning.`,
      "Deep cleaning is suitable for homes and offices that require a more thorough refresh.",
    ],
    description: (p) =>
      `Professional deep cleaning for homes & offices in ${p}. Complete dirt, grime & hard-to-reach area removal with full equipment included. Book today!`,
  },
  {
    slug: "move-in-move-out-cleaning",
    title: "Move-In & Move-Out Cleaning",
    icon: "box",
    body: (p) => [
      "Moving into a new property or preparing a property for handover?",
      `Our move-in and move-out cleaning services in ${p} help prepare the property for its next stage, whether you are a tenant, homeowner, landlord, property agent or property manager.`,
    ],
    description: (p) =>
      `Professional move-in and move-out deep cleaning in ${p}. Full equipment included, complete tenancy handover prep for full deposit recovery. Book online today!`,
  },
  {
    slug: "curtain-cleaning",
    title: "Curtain Cleaning",
    icon: "curtain",
    body: () => [
      "Curtains can collect dust, dirt and odours over time. Our professional curtain cleaning service helps refresh your curtains and maintain a cleaner indoor environment.",
    ],
    description: (p) =>
      `Professional curtain and drapery cleaning in ${p}. Onsite steam cleaning & offsite deep washing options. Remove dust mites, stains & odor. Get a free quote!`,
  },
];

export const overview = {
  heading: "Professional Cleaning Services",
  paragraphs: (place?: string) => [
    `Looking for a reliable cleaning service${place ? ` in ${place}` : ""}? Shine White Cleaning Services provides professional residential and commercial cleaning solutions for homes, offices, condominiums, apartments, commercial premises and businesses${place ? ` throughout ${place}` : ""}.`,
    "Our experienced and professionally trained cleaning team is committed to delivering consistent, detailed and dependable cleaning services, helping you maintain a cleaner, healthier and more comfortable environment.",
    "Whether you need a regular house cleaning, office cleaning, deep cleaning or a one-time cleaning service, we can provide a cleaning solution based on your property and requirements.",
  ],
};

export const areaMatrix = {
  areas: ["Cyberjaya", "Putrajaya", "Kota Warisan", "Bukit Jalil", "Equine Park", "Puchong", "Seri Kembangan", "Nilai", "Sepang", "Kajang", "Semenyih", "16 Sierra"],
  services: ["House Cleaning", "Office Cleaning", "Deep Cleaning", "Move in Move out Cleaning", "Curtain Cleaning"],
};

/* ---------- About ---------- */

export const about = {
  headline: "Committed to Keeping Your Office, House and Property Squeaky Clean",
  intro: [
    "Shine White Cleaning was established in 2018 and provides professional cleaning services for corporate offices, residential homes and property owners across Malaysia.",
    "We have a team of experienced and well-trained cleaners with the knowledge and skills to clean, sanitize and maintain workplaces and properties across different industries.",
    "We understand that you have more important things to focus on than cleaning. Let us take care of it for you! Our professional cleaning team is committed to providing reliable, trustworthy and high-quality cleaning services, giving you confidence and peace of mind when choosing Shine White Cleaning.",
  ],
  office: {
    title: "Professional Office Cleaning Services",
    paragraphs: [
      "Shine White Cleaning has a team of experienced and well-trained cleaners who have knowledge in cleaning, sanitising and tidying workplaces across all industries.",
      "Our office cleaning services are offered in the areas of Putrajaya, Cyberjaya, Taman Equine, Seri Kembangan and Puchong South.",
      "Whether it is an office building, SOHO office, factory office or office event, our cleaners are capable of cleaning up with the support of modern equipment.",
    ],
    packageTitle: "Customised Office Cleaning Package",
    packageIntro: [
      "At Shine White Cleaning, we offer customised office cleaning packages to suit every client’s needs.",
      "We have 2 main options: during working hours and after working hours.",
    ],
    listTitle: "4 Hours Cleaning During Working Hours",
    list: [
      "Cleaning and wiping your desk",
      "Sanitising your office phones, printer and office devices",
      "Tidying up reception area, meeting rooms and lounge area",
      "Kitchen, cafeteria and pantry cleaning",
      "Toilet and sink cleaning, disinfecting and deodorising",
      "Carpet vacuuming, window cleaning and floor cleaning",
      "Office event cleaning / office move-in or move-out cleaning",
    ],
    footnote: "For cleaning services after working hours, please contact us for more details.",
  },
  house: {
    title: "High Quality House Cleaning Services",
    paragraphs: [
      "Shine White Cleaning has a team of experienced and well-trained cleaners who have knowledge in cleaning, sanitising and tidying houses across all property types.",
      "Our house cleaning services are offered in the areas of Putrajaya, Cyberjaya, Taman Equine, Seri Kembangan and Puchong South.",
      "Whether it is a bungalow, semi-detached house, SOHO, apartment, condominium or link house, our cleaners are capable of cleaning up with the support of modern equipment.",
    ],
    packageTitle: "Customised House Cleaning Package",
    packageIntro: [
      "At Shine White Cleaning, we offer customised house cleaning packages to suit every client’s needs.",
      "We have 2 main options: weekday cleaning slots and weekend cleaning slots.",
    ],
    listTitle: "4 Hours House Cleaning Services",
    list: [
      "Sweeping, mopping or vacuuming floors",
      "Tidying up the living room",
      "Dusting and wiping clean all surfaces including cupboards and tables",
      "Kitchen cleaning — washing plates and utensils, wiping kitchen equipment and cupboards, cleaning the sink and throwing away rubbish",
      "Window cleaning",
      "Toilet and sink cleaning",
      "Bedroom cleaning",
      "Party / after-event cleaning",
    ],
  },
  catalogue: [
    {
      title: "Residential and Home Cleaning",
      items: ["House Cleaning", "Deep Cleaning", "Move-In Cleaning", "Move-Out Cleaning", "Party & After-Event Cleaning", "Curtain Cleaning", "Carpet Cleaning"],
    },
    {
      title: "Commercial & Business Cleaning",
      items: ["Office Cleaning", "Commercial Cleaning", "Factory / Industrial Cleaning", "Office Event Cleaning", "Office Move-In / Move-Out Cleaning"],
    },
    {
      title: "Specialist Cleaning",
      items: ["Air Conditioner Filter Cleaning", "Disinfectant Fogging / Sanitisation"],
    },
  ],
};

export const footerBlurb =
  "Shine White Cleaning provides professional cleaning services to corporate offices, residential houses and property owners in Malaysia. We have a team of experienced and well-trained cleaners who have knowledge in cleaning, sanitising and tidying properties.";

/* ---------- Team ---------- */
// Photos come from the old i1cleaner.com/team page (public/team/<photo>.webp).

export const management = [
  { name: "Mr. Teng", photo: "teng", role: "Managing Director", blurb: "Leads the company, setting strategic goals and ensuring we deliver outstanding janitorial services." },
  { name: "Ms. Vani", photo: "vani", role: "Administrative", blurb: "Handles a variety of tasks to ensure our office runs smoothly and efficiently." },
  { name: "Mr. Nicky", photo: "nicky", role: "Operation Manager (AirCond)", blurb: "Good management consists in showing average people how to do the work of superior people." },
  { name: "Mr. Vincent", photo: "vincent", role: "Assistant Operation Manager (AirCond)", blurb: "Success is walking from failure to failure with no loss of enthusiasm." },
  { name: "Ms. How", photo: "how", role: "Finance Director", blurb: "A number is not just a number, it is a piece of code that shows you all the information you need." },
  { name: "Mr. Lee", photo: "lee", role: "Operation Manager (Cleaning)", blurb: "Oversees all operations, ensuring our team delivers top-notch janitorial services efficiently and effectively." },
  { name: "Mr. Thomas", photo: "thomas", role: "Transporter", blurb: "Ensures timely delivery of equipment and supplies, supporting our janitorial teams in their work." },
  { name: "Mr. Brian", photo: "brian", role: "Marketing Director", blurb: "Develops and implements marketing strategies to promote our cleaning services and attract new clients." },
  { name: "Mr. Zhun", photo: "zhun", role: "Transporter", blurb: "Supports the manager in daily operations, helping to oversee staff and ensure quality service." },
  { name: "Ms. Shikin", photo: "shikin", role: "Sales Executive", blurb: "Connects with potential clients, showcasing the benefits of our janitorial services and driving business growth." },
];

/* ---------- FAQ ---------- */

export const faqs = [
  { q: "Are your cleaners trained for home and office cleaning?", a: "Yes. Our cleaners are trained before they handle office cleaning and house cleaning jobs." },
  { q: "Do you provide cleaning tools and detergent?", a: "Yes. We can prepare the cleaning tools and detergent. Just tell us and we will happily upgrade your package to include cleaning tools and detergents." },
  { q: "Do you accept credit card / bank transfer?", a: "We accept cash or bank transfer after the cleaning service is provided. All transactions are in Ringgit Malaysia." },
  { q: "Do I need to collect the cleaner from your office?", a: "No. Our cleaner will go to your home or office. You just need to share the address and the cleaning details." },
  { q: "Can you arrange regular cleaning on a fixed schedule?", a: "Yes. You can arrange long-term cleaning for your home or office on a fixed schedule." },
  { q: "Can I request the same cleaner for every service?", a: "We advise customers to rotate cleaners so that no single cleaner becomes too familiar with the inside of the house. However, we will try our best to send the same cleaner if the customer insists." },
  { q: "Do I need to stay on site during the cleaning?", a: "No, not always. If you cannot be there, please make sure we have access to the property and any needed instructions before the cleaner starts." },
  { q: "What should I prepare before the cleaner arrives?", a: "Please clear personal valuables and let us know any special instructions. If needed, make sure water and electricity are available for the cleaning work." },
  { q: "How long does a cleaning session usually take?", a: "The time depends on the property size and the type of cleaning you choose. We can advise the estimated duration when you book." },
  { q: "Is a deposit required before booking?", a: "For most bookings, payment is made after the cleaning service is completed. If any special arrangement is needed, we will inform you in advance." },
];

export const policies = [
  {
    title: "Payments Accepted",
    body: [
      "We only accept cash / bank transfer after the cleaning service is done. This is to ensure our homeowners pay us upon satisfaction with the service given by our well-trained cleaners. Kindly make the payment immediately after the service is done.",
    ],
  },
  {
    title: "Cancellation Policy",
    body: [
      "For cancellations, please contact us at least 24 hours in advance. This is to ensure that our admin is able to arrange the timetable for all homeowners.",
      "The Company reserves the right to claim 50% of the full service fee from a customer who has confirmed a booking and cancels within 120 minutes before the job starts.",
    ],
  },
  {
    title: "Satisfaction Guarantee",
    body: ["Customers pay the cleaning service fee after receiving the service given by our well-trained cleaners."],
  },
];
