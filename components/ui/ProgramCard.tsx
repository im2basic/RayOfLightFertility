import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProgramCardProps {
  title: string
  body: string
  cta: string
  href: string
  image?: string
  imageAlt?: string
  className?: string
}

export function ProgramCard({
  title,
  body,
  cta,
  href,
  image,
  imageAlt,
  className,
}: ProgramCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl bg-white shadow-sm border border-brand-cream/60 hover:shadow-md transition-shadow duration-300 overflow-hidden',
        className
      )}
    >
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || ''}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
        <p className="text-brand-text/80 leading-relaxed mb-6 flex-1">{body}</p>
        <Link
          href={href}
          className="inline-flex items-center font-semibold text-brand-secondary hover:text-brand-primary transition-colors"
        >
          {cta}
          <span className="ml-2" aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  )
}

export default ProgramCard
