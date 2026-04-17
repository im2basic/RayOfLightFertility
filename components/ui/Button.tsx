import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50 disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-[#E8B530] to-[#C4882F] text-white shadow-md hover:-translate-y-0.5 hover:shadow-lg',
        secondary: 'bg-brand-dark text-white hover:bg-brand-dark/90 hover:-translate-y-0.5',
        outline:
          'border-2 border-brand-dark text-brand-dark bg-transparent hover:bg-brand-dark hover:text-white hover:-translate-y-0.5',
      },
      size: {
        sm: 'px-4 py-2 text-xs',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
