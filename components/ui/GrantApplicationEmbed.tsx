'use client'

import { useEffect, useRef } from 'react'
import { GRANT_APPLICATION_EMBED, GRANT_APPLICATION_URL } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface GrantApplicationEmbedProps {
  className?: string
}

export function GrantApplicationEmbed({ className }: GrantApplicationEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Cognito's seamless.js renders the form where its <script> tag sits,
  // so the tag is injected into this container instead of the document head.
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const script = document.createElement('script')
    script.src = GRANT_APPLICATION_EMBED.scriptSrc
    script.dataset.key = GRANT_APPLICATION_EMBED.key
    script.dataset.form = GRANT_APPLICATION_EMBED.form
    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return (
    <div className={cn('mx-auto w-full max-w-3xl', className)}>
      <div ref={containerRef} className="min-h-[400px]" />
      <p className="mt-8 text-center text-sm text-brand-muted">
        Having trouble with the form?{' '}
        <a
          href={GRANT_APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-secondary underline-offset-2 hover:underline"
        >
          Open the application in a new tab
        </a>
      </p>
    </div>
  )
}
