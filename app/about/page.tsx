import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'About Us | Ray of Light Fertility Foundation',
  description:
    "Learn about Ray of Light Fertility Foundation - Wisconsin's first nonprofit dedicated exclusively to supporting couples navigating infertility.",
}

const values = [
  {
    name: 'Compassion',
    description:
      'We lead with empathy, understanding the emotional weight of infertility and meeting every individual with care.',
  },
  {
    name: 'Accessibility',
    description:
      'We work to remove financial barriers so that fertility treatment is within reach for every couple.',
  },
  {
    name: 'Community',
    description:
      'We foster connection and support, ensuring no one faces the infertility journey alone.',
  },
  {
    name: 'Transparency',
    description:
      'We operate with openness and accountability in every grant, dollar, and decision.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        backgroundImage="/assets/stock/couple-walking.jpg"
      />

      {/* Mission */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeUp>
              <SectionLabel>Our Mission</SectionLabel>
              <p className="mt-4 text-base leading-relaxed text-brand-text sm:text-lg">
                Ray of Light Fertility Foundation is a 501(c)(3) nonprofit dedicated
                exclusively to supporting couples navigating infertility. We are
                Wisconsin&apos;s first organization of our kind created to fill a
                critical gap in financial assistance, emotional support, and accessible
                resources for those on the path to parenthood.
              </p>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/assets/stock/supportive-hands.jpg"
                  alt="Supportive hand holding, comfort and connection"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="bg-brand-cream/40 px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <SectionLabel>Our Purpose</SectionLabel>
            <p className="mt-4 text-base leading-relaxed text-brand-text sm:text-lg">
              Our purpose is simple but urgent: reduce the financial barriers to
              fertility treatment and ensure that every couple has access to the
              support they need. Infertility affects approximately 1 in 8 couples,
              yet resources remain limited and costs are overwhelming. Ray of Light
              exists to change that.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-brand-dark px-6 py-16 sm:py-20 overflow-hidden">
        <Image
          src="/assets/stock/sunflower-sunset.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-3xl">
          <FadeUp>
            <SectionLabel>Our Vision</SectionLabel>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              In Wisconsin where every couple facing infertility has access to
              financial assistance, compassionate resources, and a supportive
              community where the dream of parenthood is never out of
              reach.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <SectionLabel>Our Values</SectionLabel>
          </FadeUp>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <FadeUp key={value.name} delay={i * 0.1}>
                <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="mb-3 h-1 w-8 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary" />
                  <h3 className="mb-2 text-lg font-semibold text-brand-dark">
                    {value.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-text/80">
                    {value.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-cream/40 px-6 py-16 text-center sm:py-20">
        <FadeUp>
          <Link
            href="/about/board-members"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8B530] to-[#C4882F] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Meet Our Board
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
      </section>
    </>
  )
}
