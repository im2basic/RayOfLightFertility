import type { Metadata } from 'next'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import { VolunteerEmbed } from '@/components/ui/VolunteerEmbed'

export const metadata: Metadata = {
  title: 'Volunteer With Us | Ray of Light Fertility Foundation',
  description:
    'Interested in supporting our mission? Fill out the form and we will be in touch about how you can make an impact.',
}

export default function VolunteersPage() {
  return (
    <>
      <PageBanner
        title="Volunteer With Us"
        subtitle="Lend your time and talents to support couples on their path to parenthood."
        backgroundImage="/assets/stock/couple-walking.jpg"
      />

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <p className="mb-12 text-center text-lg leading-relaxed text-brand-muted">
              Interested in supporting our mission? We&rsquo;d love to have
              you. Fill out the form below and we&rsquo;ll be in touch about
              how you can make an impact.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <VolunteerEmbed />
          </FadeUp>
        </div>
      </section>
    </>
  )
}
