import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { FAQAccordion } from '@/components/ui/FAQAccordion'
import { grantFaqs } from '@/lib/grantFaq'

export const metadata: Metadata = {
  title: 'Grant FAQ — Ray of Light Fertility Foundation',
}

export default function GrantFaqPage() {
  return (
    <>
      <PageBanner
        title="Grant FAQ"
        subtitle="Find answers to the most common questions about our fertility grant program."
        backgroundImage="/assets/stock/sunflower-sunset.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <FadeUp>
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h2 className="mt-3 mb-8 text-2xl font-bold text-brand-dark sm:text-3xl">
            Everything You Need to Know
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <FAQAccordion items={grantFaqs} />
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <div className="mt-16 text-center">
            <p className="mb-4 text-base text-brand-muted">
              Still have questions?{' '}
              <Link
                href="/about/contact"
                className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </FadeUp>
      </section>
    </>
  )
}
