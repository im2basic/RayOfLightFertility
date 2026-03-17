'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BoardMemberCardProps {
  name: string
  role: string
  photo: string | null
  bio: string
  className?: string
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function BoardMemberCard({
  name,
  role,
  photo,
  bio,
  className,
}: BoardMemberCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={cn(
        'flex flex-col items-center text-center',
        className,
      )}
    >
      {/* Photo / Placeholder */}
      {photo ? (
        <div className="relative mb-4 h-[120px] w-[120px] overflow-hidden rounded-full">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="120px"
          />
        </div>
      ) : (
        <div className="mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-brand-primary">
          <span className="text-2xl font-bold text-white">
            {getInitials(name)}
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-brand-dark">{name}</h3>
      <p className="mb-2 text-sm text-brand-muted">{role}</p>

      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="text-sm font-medium text-brand-secondary transition-colors hover:text-brand-primary"
        aria-expanded={expanded}
      >
        {expanded ? 'Read less' : 'Read bio'}
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="bio"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-sm leading-relaxed text-brand-text">
              {bio}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
