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
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg">
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
              Winny Chan&rsquo;s experience with infertility began through more
              than five years of fertility treatment, including IUI, IVF,
              pregnancy loss, and multiple failed IVF cycles. Through this
              experience, she identified gaps in fertility care, particularly
              limited access to supportive services that address mental,
              emotional, and overall well-being during treatment.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-text/80">
              Ray of Light Fertility Foundation was established to address these
              unmet needs and is named in honor of the three sons Winny lost,
              each of whom she would have named Ray.
            </p>
            <Link
              href="/about/board-members"
              className="group mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8B530] to-[#C4882F] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Meet Our Team
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
