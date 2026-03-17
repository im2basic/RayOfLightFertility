'use client'

import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/animations/FadeUp'

export default function CallToAction() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/stock/family-sunset.jpg"
        alt=""
        fill
        className="object-cover"
        quality={80}
      />
      {/* Gold overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,202,8,0.88) 0%, rgba(248,147,29,0.82) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Be Someone&rsquo;s Ray of Light
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-brand-dark/80">
            Your support makes the journey to parenthood possible for couples
            across Wisconsin.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center justify-center rounded-full bg-brand-dark px-8 py-3.5 text-sm font-bold text-white shadow-md hover:bg-brand-text transition-colors duration-200"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved/volunteers"
              className="inline-flex items-center justify-center rounded-full border-2 border-brand-dark px-8 py-3.5 text-sm font-bold text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-200"
            >
              Get Involved
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
