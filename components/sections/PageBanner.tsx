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
                'linear-gradient(to top, rgba(45,41,38,0.85) 0%, rgba(45,41,38,0.65) 50%, rgba(45,41,38,0.45) 100%)',
            }}
          />
        </>
      )}
      <FadeUp className="relative">
        <h1
          className={cn(
            'text-3xl font-bold sm:text-4xl lg:text-5xl',
            backgroundImage ? 'text-white' : 'text-brand-dark',
          )}
        >
          {title}
        </h1>
        {subtitle && (
          <p className={cn(
            'mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg',
            backgroundImage ? 'text-white/75' : 'text-brand-muted',
          )}>
            {subtitle}
          </p>
        )}
      </FadeUp>
    </section>
  )
}
