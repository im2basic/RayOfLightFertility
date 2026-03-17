'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';
import { useState } from 'react';

const FOOTER_LINKS = {
  About: [
    { label: 'About Us', href: '/about' },
    { label: 'Board Members', href: '/about/board-members' },
    { label: 'Events in the News', href: '/about/events-in-the-news' },
    { label: 'Contact Us', href: '/about/contact' },
  ],
  Grant: [
    { label: 'Grant Hub', href: '/grant' },
    { label: 'Grant Information', href: '/grant/information' },
    { label: 'Grant FAQ', href: '/grant/faq' },
    { label: 'Grant Recipients', href: '/grant/recipients' },
  ],
  'Get Involved': [
    { label: 'Donate', href: '/get-involved/donate' },
    { label: 'Events', href: '/get-involved/events' },
    { label: 'Volunteers', href: '/get-involved/volunteers' },
    { label: 'Sponsors & Donors', href: '/get-involved/sponsors' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Logo & tagline */}
          <div className="lg:col-span-4">
            <Link href="/">
              <Image
                src="/assets/logo/ray-of-light-logo.png"
                alt="Ray of Light Fertility Foundation"
                width={200}
                height={66}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-lg font-medium text-brand-primary">
              Lighting the Path to Parenthood
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Providing financial assistance to individuals and couples
              struggling with the high cost of fertility treatments.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-primary hover:text-brand-dark transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-brand-primary hover:text-brand-dark transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Subscribe to our newsletter for the latest news and updates.
            </p>

            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-brand-primary">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-4">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                />
                <button
                  type="submit"
                  className="mt-3 w-full rounded-lg bg-brand-primary px-4 py-2.5 text-sm font-bold text-brand-dark hover:bg-brand-secondary hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-gray-400">
            <p>
              &copy; 2026 Ray of Light Fertility Foundation. All rights
              reserved.
            </p>
            <p>
              Ray of Light Fertility Foundation is a 501(c)(3) nonprofit
              organization. EIN: [Pending]
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
