import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { DONATE_URL as RAW_DONATE_URL, MONTHLY_DONATE_URL as RAW_MONTHLY_URL } from '@/lib/constants'

const DONATE_URL = RAW_DONATE_URL && RAW_DONATE_URL !== '#' ? RAW_DONATE_URL : '/about/contact'
const MONTHLY_DONATE_URL = RAW_MONTHLY_URL && RAW_MONTHLY_URL !== '#' ? RAW_MONTHLY_URL : '/about/contact'

export const metadata: Metadata = {
  title: 'Donate | Ray of Light Fertility Foundation',
  description:
    'Your generosity helps couples navigating infertility feel supported, informed, and financially strengthened through grants, resources, and community-funded care.',
}

const IMPACT_LEVELS = [
  {
    amount: '$25',
    description:
      'Helps expand resource access and outreach to more couples seeking support',
  },
  {
    amount: '$50',
    description:
      'Helps fund community programming and awareness efforts that reduce stigma',
  },
  {
    amount: '$100',
    description:
      'Helps grow our grant fund\u2014bringing treatment within closer reach',
  },
  {
    amount: '$250+',
    description:
      'Strengthens direct financial assistance and keeps support available year-round',
  },
]

const OTHER_WAYS = [
  {
    title: 'Fundraise With Us',
    description:
      'Host a fundraiser, start a campaign, or rally your community to support couples navigating infertility.',
  },
  {
    title: 'Corporate Partnership',
    description:
      'Align your brand with a mission that matters. We welcome corporate sponsors who want to make a meaningful difference.',
  },
  {
    title: 'In Honor / In Memory',
    description:
      'Make a gift in honor or in memory of someone special. A meaningful way to celebrate or remember a loved one.',
  },
]

export default function DonatePage() {
  return (
    <>
      <PageBanner
        title="Give Hope. Light the Path."
        backgroundImage="/assets/stock/golden-field.jpg"
      />

      {/* Subhead + CTAs */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-lg leading-relaxed text-brand-muted sm:text-xl">
              Your generosity helps couples navigating infertility feel
              supported, informed, and financially strengthened&mdash;through
              grants, resources, and community-funded care.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={DONATE_URL}
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-3.5 text-sm font-bold text-brand-dark shadow-md transition-colors duration-200 hover:bg-brand-secondary hover:text-white"
              >
                Donate Now
              </Link>
              <Link
                href={MONTHLY_DONATE_URL}
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-dark px-8 py-3.5 text-sm font-bold text-brand-dark transition-colors duration-200 hover:bg-brand-dark hover:text-white"
              >
                Give Monthly
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Donate — with image */}
      <section className="bg-brand-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeUp>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/assets/stock/couple-forest-trail.jpg"
                  alt="Couple walking through a sunlit forest trail"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <SectionLabel>Why Donate</SectionLabel>
              <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">
                Your Gift Makes a Difference
              </h2>
              <p className="mt-6 text-base leading-relaxed text-brand-muted">
                Many couples carry two burdens at once: the emotional weight of
                infertility and the financial stress of treatment. Your gift helps
                provide practical relief and compassionate support&mdash;so
                couples can keep moving forward with hope.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="text-center">
              <SectionLabel>Your Impact</SectionLabel>
              <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">
                Every Dollar Counts
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_LEVELS.map((level, i) => (
              <FadeUp key={level.amount} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-brand-cream bg-brand-cream/40 p-6 text-center">
                  <span className="text-3xl font-extrabold text-brand-primary">
                    {level.amount}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {level.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Giving Callout — with background image */}
      <section className="relative overflow-hidden px-6 py-16 sm:py-20">
        <Image
          src="/assets/stock/sunflower-field.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,202,8,0.9) 0%, rgba(248,147,29,0.85) 100%)',
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeUp>
            <SectionLabel>Monthly Giving</SectionLabel>
            <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">
              Steady Hope, Every Month
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-dark/80">
              Monthly giving provides steady hope. Even a small recurring gift
              helps couples count on support when they need it most.
            </p>
            <div className="mt-8">
              <Link
                href={MONTHLY_DONATE_URL}
                className="inline-flex items-center justify-center rounded-full bg-brand-dark px-8 py-3.5 text-sm font-bold text-white shadow-md transition-colors duration-200 hover:bg-brand-text"
              >
                Give Monthly
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="text-center">
              <SectionLabel>Other Ways to Give</SectionLabel>
              <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl">
                More Ways to Support
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {OTHER_WAYS.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-brand-cream bg-brand-cream/40 p-6 text-center">
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {item.description}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + EIN */}
      <section className="bg-brand-cream px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-sm leading-relaxed text-brand-muted">
              We&rsquo;re committed to using donor support with care and
              integrity. Every contribution is directed toward our mission of
              helping couples navigate infertility with dignity, support, and
              hope.
            </p>
            <p className="mt-4 text-xs text-brand-muted/70">
              The Ray of Light Fertility Foundation is a nonprofit organization
              under IRS Tax Code 501(c)3. Identification Number: 41-3096700.
              All donations made to The Ray of Light Fertility Foundation are
              tax deductible in the United States under IRC Section 170.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="text-xl font-semibold text-brand-dark sm:text-2xl">
              Thank you for being someone&rsquo;s ray of light.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
