// ── Social Links ──────────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook:
    "https://www.facebook.com/people/Ray-of-Light-Fertility-Foundation/61587022237443/",
  instagram: "https://www.instagram.com/ray_of_light_fertility",
};

// ── External / Env URLs ──────────────────────────────────────
export const DONATE_URL =
  process.env.NEXT_PUBLIC_BUTTER_DONATE_URL || "#";

export const MONTHLY_DONATE_URL =
  process.env.NEXT_PUBLIC_BUTTER_MONTHLY_DONATE_URL || "#";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "sales@rayoflightfertilityfoundation.com";

// ── Grant Program ────────────────────────────────────────────
// Every email shown in the Grant section uses this address.
export const GRANTS_EMAIL = "grants@rayoflightfertilityfoundation.com";

export const GRANT_APPLICATION_URL =
  "https://www.cognitoforms.com/RayOfLightFertilityFoundation/RayOfLightFertilityFoundationGrantApplication";

export const GRANT_APPLICATION_EMBED = {
  scriptSrc: "https://www.cognitoforms.com/f/seamless.js",
  key: "cc4YJd4HDUKKUR0Y62UclA",
  form: "1",
};

export const GRANT_TIMELINE = [
  {
    label: "Application Period",
    date: "November 9, 2026 – February 8, 2027, at 5:00 PM CT",
  },
  { label: "Application Review", date: "February – March 2027" },
  { label: "Grant Recipient Announcement", date: "April 1, 2027" },
];

// ── Navigation ───────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Board Members", href: "/about/board-members" },
      { label: "Events in the News", href: "/about/events-in-the-news" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Grant",
    href: "/grant",
    children: [
      { label: "Grant Hub", href: "/grant" },
      { label: "Grant Information", href: "/grant/information" },
      { label: "Grant FAQ", href: "/grant/faq" },
      { label: "Apply for a Grant", href: "/grant/apply" },
      { label: "Grant Recipients", href: "/grant/recipients" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Donate", href: "/get-involved/donate" },
      { label: "Events", href: "/get-involved/events" },
      { label: "Volunteers", href: "/get-involved/volunteers" },
      { label: "Sponsors & Donors", href: "/get-involved/sponsors" },
    ],
  },
];
