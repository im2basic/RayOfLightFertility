import type { Metadata } from 'next'
import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Resources | Ray of Light Fertility Foundation',
  description:
    'Trustworthy guidance, recommended reading, and support resources for people navigating fertility challenges.',
}

export default function ResourcesPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative px-6 py-20 text-center sm:py-24 bg-brand-cream overflow-hidden">
        <Image
          src="/assets/stock/sunlit-path.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(45,41,38,0.85) 0%, rgba(45,41,38,0.65) 50%, rgba(45,41,38,0.45) 100%)',
          }}
        />
        <FadeUp className="relative">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Resources
          </h1>
        </FadeUp>
      </section>

      {/* Recommended Reading */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
              Recommended Reading
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-text/70">
              Books and resources recommended by our community.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <a
              href="https://lanamanikowski.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-secondary transition-colors sm:text-xl">
                &ldquo;So Now What?&rdquo; Create a Life You Love Without the
                Children You Always Dreamed Of
              </h3>
              <p className="mt-2 text-sm text-brand-muted">
                By Lana Manikowski
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-brand-primary group-hover:text-brand-secondary transition-colors">
                Learn More
                <svg
                  className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="px-6 py-16 bg-brand-cream/30">
        <div className="mx-auto max-w-lg text-center">
          <FadeUp>
            <p className="text-base leading-relaxed text-brand-muted">
              More resources coming soon — trustworthy guidance, financial
              support information, and genuine community for people navigating
              fertility challenges. Check back soon.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-brand-dark">
                Stay in the loop
              </p>
              <NewsletterSignup className="mx-auto" />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
