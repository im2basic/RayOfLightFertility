'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const images = [
  {
    src: '/assets/stock/baby-hands.jpg',
    alt: 'Tiny baby hands',
  },
  {
    src: '/assets/stock/couple-holding-hands.jpg',
    alt: 'Couple holding hands',
  },
  {
    src: '/assets/stock/couple-sunset-silhouette.jpg',
    alt: 'Couple silhouette at sunset',
  },
  {
    src: '/assets/stock/family-sunset.jpg',
    alt: 'Family enjoying sunset together',
  },
]

export default function ImageStrip() {
  return (
    <section className="py-16 bg-brand-cream/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
