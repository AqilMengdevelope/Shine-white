import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  badge: (<><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" /><path d="m10 9 1.5 1.5L14.5 7.5" /></>),
  bell: (<><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>),
  shield: (<><path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></>),
  moon: (<><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" /><path d="M16 4v3M14.5 5.5h3" /></>),
  office: (<><rect x="4" y="3" width="11" height="18" rx="1" /><path d="M15 9h5v12h-5M8 7h3M8 11h3M8 15h3" /></>),
  house: (<><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>),
  curtain: (<><path d="M3 4h18" /><path d="M5 4c0 7-1 11-1 16h5c0-6 3-9 3-16M19 4c0 7 1 11 1 16h-5c0-6-3-9-3-16" /></>),
  building: (<><path d="M3 21h18" /><path d="M5 21V8l7-4 7 4v13" /><path d="M9 21v-5h6v5M9 11h.01M15 11h.01M12 11h.01" /></>),
  box: (<><path d="m3 8 9-5 9 5v8l-9 5-9-5V8Z" /><path d="m3 8 9 5 9-5M12 13v8" /></>),
  carpet: (<><rect x="4" y="5" width="16" height="14" rx="1" /><rect x="7.5" y="8.5" width="9" height="7" rx=".5" /><path d="M2 7v2M2 11v2M2 15v2M22 7v2M22 11v2M22 15v2" /></>),
  sparkle: (<><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8c.5 2.5 1.5 3.5 4 4-2.5.5-3.5 1.5-4 4-.5-2.5-1.5-3.5-4-4 2.5-.5 3.5-1.5 4-4Z" /></>),
  phone: (<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  pin: (<><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  arrow: (<path d="M5 12h14M13 6l6 6-6 6" />),
  check: (<path d="m5 12.5 4.5 4.5L19 7.5" />),
  chevron: (<path d="m6 9 6 6 6-6" />),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6 6 18" />),
  external: (<path d="M14 5h5v5M19 5l-8 8M11 7H6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" />),
  chat: (<path d="M4 5h16v11H9l-5 4V5Z" />),
};

export function Icon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? paths.sparkle}
    </svg>
  );
}
