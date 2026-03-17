import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import ProgramCard from '@/components/ui/ProgramCard'
import { DONATE_URL } from '@/lib/constants'

const applyHref =
  DONATE_URL && DONATE_URL !== '#' ? DONATE_URL : '/grant/information'

export const metadata: Metadata = {
  title: 'Fertility Grant — Ray of Light Fertility Foundation',
}

const cards = [
  {
    title: 'Grant Information',
    body: 'Learn about eligibility requirements, the application process, and important timelines.',
    cta: 'View Details',
    href: '/grant/information',
    image: '/assets/stock/sunrise-road.jpg',
    imageAlt: 'Scenic road at sunrise with golden light',
  },
  {
    title: 'Grant FAQ',
    body: 'Find answers to the most common questions about our fertility grant program.',
    cta: 'Read FAQs',
    href: '/grant/faq',
    image: '/assets/stock/couple-forest-trail.jpg',
    imageAlt: 'Couple walking through a sunlit forest trail',
  },
  {
    title: 'Grant Recipients',
    body: 'Meet the families whose lives have been changed through the support of our grants.',
    cta: 'See Recipients',
    href: '/grant/recipients',
    image: '/assets/stock/warm-embrace.jpg',
    imageAlt: 'Couple embracing on a beach at sunset',
  },
]

export default function GrantHubPage() {
  return (
    <>
      <PageBanner
        title="Ray of Light Fertility Grant"
        backgroundImage="/assets/stock/couple-holding-hands.jpg"
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <FadeUp>
          <SectionLabel>Our Grant Program</SectionLabel>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
            Through our Ray of Light Fertility Grant, we help ease the financial
            burden of fertility treatments for women who need support. The
            Foundation seeks to reduce financial barriers, expand access to care,
            and provide comprehensive support throughout the infertility journey.
          </p>
        </FadeUp>
      </section>

      {/* Cards */}
      <section className="bg-brand-cream px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.1}>
              <ProgramCard
                title={card.title}
                body={card.body}
                cta={card.cta}
                href={card.href}
                image={card.image}
                imageAlt={card.imageAlt}
              />
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <FadeUp>
          <h2 className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-brand-muted">
            If you or someone you know could benefit from our fertility grant,
            we encourage you to apply today.
          </p>
          <Link
            href={applyHref}
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary hover:text-white"
          >
            Apply for a Grant
          </Link>
        </FadeUp>
      </section>
    </>
  )
}
