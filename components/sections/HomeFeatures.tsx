'use client'

import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/animations/FadeUp'

export default function HomeFeatures() {
  return (
    <>
      {/* Education and Resources Support */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Text */}
            <FadeUp>
              <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                Education and Resources Support
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-text/80 sm:text-lg">
                Educational programming and workshops focused on fertility
                health, mental wellness, and patient self-advocacy to support
                informed and empowered decision-making.
              </p>
              <Link
                href="/resources"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-brand-dark shadow-md hover:bg-brand-secondary hover:text-white transition-colors duration-200"
              >
                View Resources
              </Link>
            </FadeUp>

            {/* Image */}
            <FadeUp delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/stock/couple-sunset-silhouette.jpg"
                  alt="Couple making a heart shape with their hands at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="bg-brand-dark px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            {/* Image */}
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/stock/golden-field.jpg"
                  alt="Golden sunrise over a lush green field"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>

            {/* Text */}
            <FadeUp delay={0.2}>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Financial Assistance
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Through our Ray of Light Fertility Grant, we help ease the
                financial burden of fertility treatments for women who need
                support.
              </p>
              <Link
                href="/grant"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md hover:bg-brand-secondary hover:text-white transition-colors duration-200"
              >
                Learn More
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}
