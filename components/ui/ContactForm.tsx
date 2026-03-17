'use client'

import { FormEvent, useState } from 'react'
import { cn } from '@/lib/utils'

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Grant Questions',
  'Partnership/Sponsorship',
  'Volunteer',
  'Media/Press',
  'Other',
] as const

interface ContactFormProps {
  className?: string
}

export function ContactForm({ className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      )
    }
  }

  if (status === 'success') {
    return (
      <div className={cn('rounded-xl bg-white p-8 text-center', className)}>
        <h3 className="mb-2 text-xl font-semibold text-brand-dark">
          Message sent!
        </h3>
        <p className="text-sm text-brand-muted">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn('space-y-5', className)}
    >
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-sm font-medium text-brand-dark">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-brand-cream bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-sm font-medium text-brand-dark">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-brand-cream bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          placeholder="you@example.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="mb-1 block text-sm font-medium text-brand-dark">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-lg border border-brand-cream bg-white px-4 py-2.5 text-sm text-brand-text focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
        >
          <option value="" disabled>
            Select a topic
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-sm font-medium text-brand-dark">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-brand-cream bg-white px-4 py-2.5 text-sm text-brand-text placeholder:text-brand-muted focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30"
          placeholder="How can we help?"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
