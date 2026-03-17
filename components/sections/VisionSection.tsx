'use client'

import FadeUp from '@/components/animations/FadeUp'

export default function VisionSection() {
  return (
    <section className="bg-brand-cream/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Heading */}
          <FadeUp>
            <h2 className="text-3xl font-extrabold leading-tight text-brand-dark sm:text-4xl md:text-5xl">
              Wisconsin Nonprofit Dedicated to Infertility Support
            </h2>
          </FadeUp>

          {/* Text + Vision Quote */}
          <FadeUp delay={0.2}>
            <p className="text-base leading-relaxed text-brand-text/80 sm:text-lg">
              We lift up stories, grow awareness, offer supportive resources, and
              provide financial assistance through grants and
              fundraisers&mdash;so couples can move forward with clarity,
              confidence, and care.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
              <blockquote className="text-base italic leading-relaxed text-brand-dark/90 sm:text-lg">
                &ldquo;We envision a world where no one walks the infertility
                journey alone&mdash;where compassion replaces stigma, community
                replaces isolation, and financial barriers no longer prevent
                couples from building the families they dream of.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold tracking-wide text-brand-secondary">
                &mdash; Our Vision
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
