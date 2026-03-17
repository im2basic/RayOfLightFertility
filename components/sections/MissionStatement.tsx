'use client'

import FadeUp from '@/components/animations/FadeUp'

export default function MissionStatement() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <FadeUp>
          <p className="text-2xl font-semibold italic leading-relaxed text-brand-dark sm:text-3xl md:text-4xl">
            To provide support to couples struggling in their journey to create
            or expand their families by helping them share their stories,
            spreading infertility awareness, offering support resources, and
            providing financial assistance through grants and fundraisers
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
