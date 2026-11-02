import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, FileText } from 'lucide-react'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'
import { GRANTS_EMAIL, GRANT_TIMELINE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Grant Information - Ray of Light Fertility Foundation',
}

export default function GrantInformationPage() {
  return (
    <>
      <PageBanner
        title="Grant Information"
        subtitle="Resources and key dates for the upcoming grant cycle."
        backgroundImage="/assets/stock/sunrise-road.jpg"
      />

      {/* Grant Cycle Timeline */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <FadeUp>
          <SectionLabel>Key Dates</SectionLabel>
          <h2 className="mt-3 mb-10 text-2xl font-bold text-brand-dark sm:text-3xl">
            Grant Cycle Timeline
          </h2>
        </FadeUp>

        <ol className="relative space-y-8 border-l-2 border-brand-primary/40 pl-8">
          {GRANT_TIMELINE.map((step, i) => (
            <FadeUp key={step.label} delay={i * 0.1}>
              <li className="relative">
                <span className="absolute -left-[45px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-brand-primary text-white">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-brand-dark">{step.label}</h3>
                <p className="mt-1 text-base text-brand-muted">{step.date}</p>
              </li>
            </FadeUp>
          ))}
        </ol>
      </section>

      {/* Resources */}
      <section className="bg-brand-cream/30 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <SectionLabel>Resources</SectionLabel>
            <h2 className="mt-3 mb-8 text-2xl font-bold text-brand-dark sm:text-3xl">
              Grant Documents
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-secondary">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">
                  Request for Proposals (RFP)
                </h3>
                <p className="mt-1 text-base text-brand-muted">Updated version forthcoming.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <FadeUp>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-brand-muted">
            If you have any specific questions about grant, please email{' '}
            <a
              href={`mailto:${GRANTS_EMAIL}`}
              className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
            >
              {GRANTS_EMAIL}
            </a>
            .
          </p>
          <Link
            href="/grant/apply"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8B530] to-[#C4882F] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply for a Grant
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

      {/* Newsletter */}
      <section className="bg-brand-cream/30 px-6 py-16 text-center">
        <FadeUp>
          <p className="mb-3 text-sm font-medium text-brand-dark">
            Stay in the loop
          </p>
          <NewsletterSignup className="mx-auto" />
        </FadeUp>
      </section>
    </>
  )
}
