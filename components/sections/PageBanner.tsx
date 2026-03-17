import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { cn } from '@/lib/utils'

interface PageBannerProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

export default function PageBanner({
  title,
  subtitle,
  backgroundImage,
  className,
}: PageBannerProps) {
  return (
    <section
      className={cn(
        'relative px-6 py-20 text-center sm:py-24',
        backgroundImage ? 'min-h-[280px] flex items-center justify-center' : 'bg-brand-cream',
        className,
      )}
    >
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(229,222,219,0.92) 0%, rgba(245,230,200,0.85) 50%, rgba(255,202,8,0.65) 100%)',
            }}
          />
        </>
      )}
      <FadeUp className="relative">
        <h1
          className={cn(
            'text-3xl font-bold sm:text-4xl lg:text-5xl',
            backgroundImage ? 'text-brand-dark drop-shadow-sm' : 'text-brand-dark',
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {subtitle}
          </p>
        )}
      </FadeUp>
    </section>
  )
}
