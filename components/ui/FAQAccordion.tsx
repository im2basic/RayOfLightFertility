'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  return (
    <Accordion.Root
      type="multiple"
      value={openItems}
      onValueChange={setOpenItems}
      className={cn('w-full divide-y divide-brand-cream', className)}
    >
      {items.map((item, index) => {
        const value = `faq-${index}`
        const isOpen = openItems.includes(value)

        return (
          <Accordion.Item key={value} value={value} className="py-4">
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between text-left">
                <span className="text-base font-semibold text-brand-dark pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-brand-secondary transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                />
              </Accordion.Trigger>
            </Accordion.Header>

            <AnimatePresence initial={false}>
              {isOpen && (
                <Accordion.Content forceMount asChild>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <p className="pt-3 text-sm leading-relaxed text-brand-muted">
                      {item.answer}
                    </p>
                  </motion.div>
                </Accordion.Content>
              )}
            </AnimatePresence>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
