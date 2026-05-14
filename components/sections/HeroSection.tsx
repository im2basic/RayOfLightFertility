'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.4, 0, 0.2, 1] as const

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end overflow-hidden bg-brand-dark">
      {/* Background image with Ken Burns slow zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 25, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0"
      >
        <Image
          src="/assets/stock/hero-couple.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </motion.div>

      {/* Clean dark gradient - no gold wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(45,41,38,0.88) 0%, rgba(45,41,38,0.55) 35%, rgba(45,41,38,0.25) 60%, rgba(45,41,38,0.15) 100%)',
        }}
      />

      {/* Subtle radial glow behind text area */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 25% 80%, rgba(212,160,36,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-primary" />
              Wisconsin&rsquo;s First Fertility Nonprofit
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Lighting The Path
            <br />
            To{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Parenthood
            </span>
          </motion.h1>

          {/* Gold accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
            className="mt-6 h-1 w-16 origin-left rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
          />

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-relaxed"
          >
            Infertility can feel overwhelming and isolating. Ray of Light
            Fertility Foundation exists to bring comfort, trusted resources, and
            financial hope to couples navigating the infertility journey across
            Wisconsin.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/grant"
              className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8B530] to-[#C4882F] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-amber-900/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-900/35"
            >
              Learn About Grants
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/25 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-brand-dark hover:-translate-y-0.5"
            >
              Donate Today
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge fade for seamless section transition */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}
