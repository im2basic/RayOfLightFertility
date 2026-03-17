import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Get Involved | Ray of Light Fertility Foundation',
  description:
    'Discover ways to support couples navigating infertility. Donate, volunteer, attend events, or partner with Ray of Light Fertility Foundation.',
}

const CARDS = [
  {
    title: 'Donate',
    description:
      'Give directly to help fund grants, resources, and community support for couples navigating infertility.',
    href: '/get-involved/donate',
    image: '/assets/stock/family-sunset.jpg',
    imageAlt: 'Family enjoying sunset together',
  },
  {
    title: 'Events',
    description:
      'Join us at upcoming events and fundraisers to connect with our community and support our mission.',
    href: '/get-involved/events',
    image: '/assets/stock/flower-field-sunrise.jpg',
    imageAlt: 'Flower field at sunrise',
  },
  {
    title: 'Volunteer',
    description:
      'Lend your time and talents. We welcome volunteers who want to make a meaningful impact.',
    href: '/get-involved/volunteers',
    image: '/assets/stock/community-support.jpg',
    imageAlt: 'Group of friends laughing together',
  },
  {
    title: 'Sponsors & Donors',
    description:
      'Partner with us as a corporate sponsor or major donor and help expand our reach and resources.',
    href: '/get-involved/sponsors',
    image: '/assets/stock/sunrise-road.jpg',
    imageAlt: 'Scenic road at sunrise with golden light',
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageBanner
        title="Get Involved"
        backgroundImage="/assets/stock/hands-together.jpg"
      />

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>Make a Difference</SectionLabel>
              <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                There are many ways to support couples navigating infertility.
                Whether you give, volunteer, or spread the word, your support
                helps light the path to parenthood.
              </p>
            </div>
          </FadeUp>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {CARDS.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.1}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-brand-cream bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-secondary">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                      {card.description}
                    </p>
                    <span className="mt-auto pt-4 text-sm font-semibold text-brand-primary">
                      Learn more &rarr;
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
