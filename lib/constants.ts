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
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@rayoflightfertilityfoundation.com";

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
