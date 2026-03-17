# Ray of Light Fertility Foundation

A custom Next.js website for **Ray of Light Fertility Foundation** — Wisconsin's first 501(c)(3) nonprofit dedicated exclusively to supporting couples navigating infertility through grants, resources, and community support.

This site replaces an existing Squarespace site with a modern, performant, and fully custom web experience.

## Overview

Ray of Light Fertility Foundation provides:

- **Fertility Grants** — Financial assistance to help cover the cost of fertility treatments
- **Resources & Guidance** — Curated information and support tools for the fertility journey
- **Community Support** — Events, volunteer programs, and a growing network of encouragement

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** (App Router) | Framework |
| **TypeScript** | Language |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations (scroll-triggered fade-ups) |
| **Radix UI** | Accessible accordion, dialog, navigation |
| **Resend** | Contact form email delivery |
| **Poppins** | Primary typeface (via `next/font/google`) |

## Site Structure

```
/                           Homepage
/about                      About the foundation
/about/board-members        Board of Directors
/about/contact              Contact form + info
/about/events-in-the-news   Press & events (placeholder)
/resources                  Resources hub (placeholder)
/grant                      Grant program hub
/grant/information          Grant details (placeholder)
/grant/faq                  14-item FAQ with accordion
/grant/recipients           Grant recipients (placeholder)
/get-involved               Ways to help overview
/get-involved/donate        Donation page with impact levels
/get-involved/events        Upcoming events (placeholder)
/get-involved/volunteers    Volunteer form (Monday.com embed)
/get-involved/sponsors      Sponsors & donors (placeholder)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_BUTTER_DONATE_URL=       # Butter donation page URL
NEXT_PUBLIC_BUTTER_MONTHLY_DONATE_URL= # Butter monthly giving URL
RESEND_API_KEY=                       # Resend.com API key for contact form
CONTACT_EMAIL=                        # Destination email for contact submissions
```

## Project Architecture

```
app/                    Next.js App Router pages & API routes
components/
  layout/               Navbar, Footer (present on every page)
  sections/             Page-level sections (Hero, HowWeHelp, etc.)
  ui/                   Reusable UI (cards, forms, accordion, buttons)
  animations/           FadeUp wrapper for Framer Motion scroll reveals
lib/
  constants.ts          URLs, nav structure, social links
  boardMembers.ts       Board member data (7 entries)
  grantFaq.ts           Grant FAQ data (14 entries)
  utils.ts              Utility functions (cn)
public/assets/          Images (logo, stock photos, board headshots)
```

## Deployment

Designed for deployment on **Vercel**. Connect the GitHub repository and Vercel will auto-deploy on push to `main`.

## License

Private. All rights reserved by Ray of Light Fertility Foundation.
