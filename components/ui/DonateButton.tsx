import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DONATE_URL as RAW_DONATE_URL } from '@/lib/constants'

const RESOLVED_DONATE_URL = RAW_DONATE_URL && RAW_DONATE_URL !== '#' ? RAW_DONATE_URL : '/get-involved/donate'

interface DonateButtonProps {
  href?: string
  text?: string
  className?: string
}

export function DonateButton({
  href = RESOLVED_DONATE_URL,
  text = 'Donate',
  className,
}: DonateButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-brand-dark transition-colors duration-300 hover:bg-brand-secondary',
        className,
      )}
    >
      {text}
    </Link>
  )
}
