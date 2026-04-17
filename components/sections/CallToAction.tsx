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
      {/* Rich warm gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(212,160,36,0.9) 0%, rgba(196,136,47,0.88) 50%, rgba(248,147,29,0.85) 100%)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Be Someone&rsquo;s Ray of Light
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            Your support makes the journey to parenthood possible for couples
            across Wisconsin.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/get-involved/donate"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved/volunteers"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-brand-dark hover:-translate-y-0.5"
            >
              Get Involved
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
