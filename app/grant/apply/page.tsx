import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarDays, ExternalLink } from 'lucide-react'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import { GRANT_APPLICATION_DATES, GRANT_APPLICATION_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply for a Grant - Ray of Light Fertility Foundation',
}

const inlineLinkClass = 'font-semibold text-brand-secondary underline-offset-2 hover:underline'

export default function GrantApplyPage() {
  return (
    <>
      <PageBanner
        title="Fertility Grant Applications Are Now Open!"
        subtitle="Ray of Light Fertility Foundation | 2026–2027 Grant Cycle"
        backgroundImage="/assets/stock/sunlit-path.jpg"
      />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <FadeUp>
          <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
            Your dream of growing a family deserves hope and support.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted">
            At Ray of Light Fertility Foundation, we understand that the journey to
            parenthood isn’t always easy. The emotional and financial challenges of
            fertility treatment can feel overwhelming, and we believe finances
            shouldn’t be another barrier to pursuing your dream of building a family.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Our fertility grant program provides financial assistance to eligible
            individuals and families seeking fertility treatment, helping bring them
            one step closer to their dreams.
          </p>
        </FadeUp>
      </section>

      {/* Timeline */}
      <section className="bg-brand-cream/30 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <h2 className="mb-8 text-2xl font-bold text-brand-dark sm:text-3xl">
              Grant Application Timeline
            </h2>
          </FadeUp>

          <div className="grid gap-6 text-left sm:grid-cols-2">
            {GRANT_APPLICATION_DATES.map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-secondary">
                    <CalendarDays className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-brand-dark">{item.label}</h3>
                    <p className="mt-1 text-base text-brand-muted">{item.date}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p className="mt-8 text-base leading-relaxed text-brand-muted">
              We encourage all applicants to review our{' '}
              <Link href="/grant/faq" className={inlineLinkClass}>
                eligibility requirements
              </Link>{' '}
              and{' '}
              <Link href="/grant/faq" className={inlineLinkClass}>
                Grant FAQs
              </Link>{' '}
              before submitting an application.
            </p>
            <p className="mt-8 text-lg font-semibold leading-relaxed text-brand-dark">
              Every journey is different. Every story matters. And every family deserves
              a ray of hope.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <FadeUp>
          <h2 className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl">
            Ready to Take the Next Step? Apply for a Grant
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-brand-muted">
            Your journey toward growing your family matters. We’re here to help make
            fertility treatment more financially accessible.
          </p>
          <p className="mx-auto mb-8 mt-4 max-w-xl text-base leading-relaxed text-brand-muted">
            Applications are now open for our 2026–2027 grant cycle.
          </p>
          <a
            href={GRANT_APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E8B530] to-[#C4882F] px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Apply for a Grant
            <span className="sr-only"> (opens in a new window)</span>
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </FadeUp>
      </section>
    </>
  )
}
