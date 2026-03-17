'use client'

import SectionLabel from '@/components/ui/SectionLabel'
import ProgramCard from '@/components/ui/ProgramCard'
import FadeUp from '@/components/animations/FadeUp'

const programs = [
  {
    title: 'Fertility Grants',
    body: 'Financial assistance to help cover the cost of fertility treatments — because money should never stand between you and your family.',
    cta: 'Learn About Grants',
    href: '/grant',
    image: '/assets/stock/couple-lake-golden.jpg',
    imageAlt: 'Couple by a lake during golden hour',
  },
  {
    title: 'Resources & Guidance',
    body: 'Curated information, support tools, and guidance to help you navigate the fertility journey with confidence and clarity.',
    cta: 'Browse Resources',
    href: '/resources',
    image: '/assets/stock/sunlit-path.jpg',
    imageAlt: 'Sunlit forest path in golden light',
  },
  {
    title: 'Community Support',
    body: 'A network of people who understand. Events, volunteer programs, and a growing community of hope and encouragement.',
    cta: 'Get Involved',
    href: '/get-involved/donate',
    image: '/assets/stock/hands-together.jpg',
    imageAlt: 'Friends stacking hands together in support',
  },
]

export default function HowWeHelp() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark sm:text-4xl">
            How We Help
          </h2>
        </FadeUp>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <FadeUp key={program.title} delay={i * 0.15}>
              <ProgramCard
                title={program.title}
                body={program.body}
                cta={program.cta}
                href={program.href}
                image={program.image}
                imageAlt={program.imageAlt}
              />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
