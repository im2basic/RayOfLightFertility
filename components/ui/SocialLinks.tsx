import { Facebook, Instagram } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-dark transition-colors duration-200 hover:bg-brand-primary/20 hover:text-brand-secondary"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="flex h-9 w-9 items-center justify-center rounded-full text-brand-dark transition-colors duration-200 hover:bg-brand-primary/20 hover:text-brand-secondary"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  )
}
