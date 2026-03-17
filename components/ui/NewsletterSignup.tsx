'use client'

import { FormEvent, useState } from 'react'
import { cn } from '@/lib/utils'

interface NewsletterSignupProps {
  className?: string
}

export function NewsletterSignup({ className }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: wire up to newsletter platform (Mailchimp, ConvertKit, etc.)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={cn('text-center', className)}>
        <p className="text-sm font-medium text-brand-dark">
          Thank you! We&apos;ll keep you updated.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex w-full max-w-md flex-col gap-3 sm:flex-row', className)}
    >
      <input
        type="email"
        required
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-full border border-brand-cream bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
      />
      <button
        type="submit"
        className="rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary"
      >
        Subscribe
      </button>
    </form>
  )
}
