'use client'

import { cn } from '@/lib/utils'

const MONDAY_FORM_URL =
  'https://forms.monday.com/forms/embed/fe64e53b39b6a9618cae8ccdd4f6cf0b?r=use1'

interface VolunteerEmbedProps {
  className?: string
}

export function VolunteerEmbed({ className }: VolunteerEmbedProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[650px]', className)}>
      {/* Desktop / tablet embed */}
      <div className="hidden sm:block">
        <iframe
          src={MONDAY_FORM_URL}
          title="Volunteer Application Form"
          className="h-[800px] w-full rounded-xl border-0"
          allow="clipboard-write"
        />
      </div>

      {/* Mobile fallback */}
      <div className="flex flex-col items-center gap-4 sm:hidden">
        <p className="text-center text-sm text-brand-muted">
          For the best experience, open the volunteer form in your browser.
        </p>
        <a
          href={MONDAY_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary"
        >
          Open Volunteer Form
        </a>
      </div>
    </div>
  )
}
