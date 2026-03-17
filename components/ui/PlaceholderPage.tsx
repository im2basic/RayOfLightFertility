import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { NewsletterSignup } from '@/components/ui/NewsletterSignup'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface PlaceholderPageProps {
  title: string
  copy: string
  showNewsletter?: boolean
  cta?: { label: string; href: string }
  image?: string
  className?: string
}

export function PlaceholderPage({
  title,
  copy,
  showNewsletter = true,
  cta,
  image,
  className,
}: PlaceholderPageProps) {
  return (
    <>
      {/* Banner with image */}
      <section className="relative px-6 py-20 text-center sm:py-24 bg-brand-cream overflow-hidden">
        {image && (
          <>
            <Image
              src={image}
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
                  'linear-gradient(135deg, rgba(229,222,219,0.92) 0%, rgba(245,230,200,0.85) 50%, rgba(255,202,8,0.65) 100%)',
              }}
            />
          </>
        )}
        <FadeUp className="relative">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </FadeUp>
      </section>

      {/* Content */}
      <section
        className={cn(
          'flex min-h-[40vh] items-center justify-center bg-white px-6 py-20',
          className,
        )}
      >
        <div className="mx-auto max-w-lg text-center">
          <FadeUp>
            <p className="mb-8 text-base leading-relaxed text-brand-muted">
              {copy}
            </p>

            {cta && (
              <Link
                href={cta.href}
                className="mb-8 inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary"
              >
                {cta.label}
              </Link>
            )}
          </FadeUp>

          {showNewsletter && (
            <FadeUp delay={0.2}>
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-brand-dark">
                  Stay in the loop
                </p>
                <NewsletterSignup className="mx-auto" />
              </div>
            </FadeUp>
          )}
        </div>
      </section>
    </>
  )
}
