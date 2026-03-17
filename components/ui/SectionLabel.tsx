import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-block text-sm font-semibold uppercase tracking-widest text-brand-secondary',
        className
      )}
    >
      {children}
    </span>
  )
}

export default SectionLabel
