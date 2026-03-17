import type { Metadata } from 'next'
import PageBanner from '@/components/sections/PageBanner'
import { FadeUp } from '@/components/animations/FadeUp'
import { BoardMemberCard } from '@/components/ui/BoardMemberCard'
import { boardMembers } from '@/lib/boardMembers'

export const metadata: Metadata = {
  title: 'Board of Directors | Ray of Light Fertility Foundation',
  description:
    'Meet the dedicated board members leading Ray of Light Fertility Foundation in its mission to support couples navigating infertility in Wisconsin.',
}

export default function BoardMembersPage() {
  return (
    <>
      <PageBanner
        title="Board of Directors"
        subtitle="Meet the dedicated team behind Ray of Light Fertility Foundation."
        backgroundImage="/assets/stock/community-support.jpg"
      />

      <section className="bg-white px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <BoardMemberCard
                  name={member.name}
                  role={member.role}
                  photo={member.photo}
                  bio={member.bio}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
