import type { Metadata } from 'next'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { GrantApplicationEmbed } from '@/components/ui/GrantApplicationEmbed'
import { GRANTS_EMAIL, GRANT_TIMELINE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply for a Grant - Ray of Light Fertility Foundation',
}

const applicationPeriod = GRANT_TIMELINE[0]

export default function GrantApplyPage() {
  return (
    <>
      <PageBanner
        title="Apply for a Grant"
        subtitle={`${applicationPeriod.label}: ${applicationPeriod.date}`}
        backgroundImage="/assets/stock/sunlit-path.jpg"
      />

      <section className="mx-auto max-w-3xl px-6 pt-20 text-center">
        <FadeUp>
          <SectionLabel>Grant Application</SectionLabel>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            Before you apply, please review the{' '}
            <Link
              href="/grant/information"
              className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
            >
              Grant Information
            </Link>{' '}
            and{' '}
            <Link
              href="/grant/faq"
              className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
            >
              Grant FAQ
            </Link>
            . Questions? Email{' '}
            <a
              href={`mailto:${GRANTS_EMAIL}`}
              className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
            >
              {GRANTS_EMAIL}
            </a>
            .
          </p>
        </FadeUp>
      </section>

      <section className="px-6 py-16">
        <GrantApplicationEmbed />
      </section>
    </>
  )
}
