'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
  y?: number
}

export function FadeUp({
  children,
  delay = 0,
  duration = 0.6,
  className,
  y = 20,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export default FadeUp
