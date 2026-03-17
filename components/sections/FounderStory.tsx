'use client'

import Image from 'next/image'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import FadeUp from '@/components/animations/FadeUp'

export default function FounderStory() {
  return (
    <section className="py-20 md:py-28 bg-brand-cream/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <FadeUp>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/assets/board/winny-chan.png"
                alt="Winny Chan, Founder of Ray of Light Fertility Foundation"
                width={600}
                height={700}
                className="h-auto w-full object-cover rounded-2xl"
              />
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.2}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Founded From Experience
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-text/80">
              Winny Chan knows the infertility journey firsthand &mdash; the
              emotional weight, the financial strain, and the feeling of facing it
              alone. After navigating her own path to parenthood, she founded Ray
              of Light Fertility Foundation to ensure that other couples in
              Wisconsin would have the support she wished she&rsquo;d had. Today,
              Ray of Light is Wisconsin&rsquo;s first nonprofit dedicated
              exclusively to helping couples facing infertility &mdash; through
              financial grants, trusted resources, and a compassionate community.
            </p>
            <Link
              href="/about/board-members"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md hover:bg-brand-secondary hover:text-white transition-colors duration-200"
            >
              Meet Our Team
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
