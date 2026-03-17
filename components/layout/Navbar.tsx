'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SOCIAL_LINKS, DONATE_URL, type NavItem } from '@/lib/constants';

/* ─── Desktop dropdown ──────────────────────────────────────── */
function DesktopNavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-brand-dark hover:text-brand-secondary transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-dark hover:text-brand-secondary transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-1 w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm text-brand-dark hover:bg-brand-cream/50 hover:text-brand-secondary transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile accordion item ─────────────────────────────────── */
function MobileNavItem({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block px-4 py-3 text-base font-medium text-brand-dark hover:text-brand-secondary transition-colors"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-base font-medium text-brand-dark hover:text-brand-secondary transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn(
            'h-5 w-5 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="bg-brand-cream/30 py-1">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={onClose}
                  className="block px-8 py-2.5 text-sm text-brand-dark hover:text-brand-secondary transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Navbar ────────────────────────────────────────────────── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const donateHref =
    DONATE_URL && DONATE_URL !== '#' ? DONATE_URL : '/get-involved/donate';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        scrolled && 'shadow-md'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/logo/ray-of-light-logo.png"
            alt="Ray of Light Fertility Foundation"
            width={320}
            height={100}
            className="h-20 w-auto lg:h-24"
            priority
          />
        </Link>

        {/* Desktop nav + right section */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}

          <div className="ml-4 flex items-center gap-4">
          {/* Social icons */}
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-brand-dark hover:text-brand-secondary transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-brand-dark hover:text-brand-secondary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>

          {/* Donate button */}
          <Link
            href={donateHref}
            className="rounded-full bg-brand-primary px-6 py-2 text-sm font-bold text-brand-dark shadow-sm hover:bg-brand-secondary hover:text-white transition-colors"
          >
            Donate
          </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-brand-dark"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* ─── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
                  <Image
                    src="/assets/logo/ray-of-light-logo.png"
                    alt="Ray of Light Fertility Foundation"
                    width={200}
                    height={66}
                    className="h-14 w-auto"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="p-2 text-brand-dark"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Nav links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {NAV_ITEMS.map((item) => (
                    <MobileNavItem
                      key={item.label}
                      item={item}
                      onClose={() => setMobileOpen(false)}
                    />
                  ))}
                </div>

                {/* Bottom section */}
                <div className="border-t border-gray-100 px-4 py-6">
                  {/* Donate button */}
                  <Link
                    href={donateHref}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full rounded-full bg-brand-primary py-3 text-center text-sm font-bold text-brand-dark shadow-sm hover:bg-brand-secondary hover:text-white transition-colors"
                  >
                    Donate
                  </Link>

                  {/* Social icons */}
                  <div className="mt-4 flex items-center justify-center gap-6">
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="text-brand-dark hover:text-brand-secondary transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-brand-dark hover:text-brand-secondary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
