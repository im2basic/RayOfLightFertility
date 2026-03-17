'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/stock/hero-couple.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={85}
      />
      {/* Warm golden overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(229,222,219,0.85) 0%, rgba(245,230,200,0.75) 30%, rgba(255,202,8,0.55) 100%)',
        }}
      />
      {/* Dark overlay from bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(57,48,42,0.6) 0%, rgba(57,48,42,0.2) 40%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl"
        >
          Lighting The Path To Parenthood
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow sm:text-xl"
        >
          Infertility can feel overwhelming&mdash;and isolating. Ray of Light
          Fertility Foundation exists to bring comfort, trusted resources, and
          financial hope to couples navigating the infertility journey across
          Wisconsin.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/grant"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md hover:bg-brand-secondary hover:text-white transition-colors duration-200"
          >
            Learn About Grants
          </Link>
          <Link
            href="/get-involved/donate"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white hover:bg-white hover:text-brand-dark transition-colors duration-200"
          >
            Donate Today
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
