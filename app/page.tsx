import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MissionStatement from '@/components/sections/MissionStatement'
import VisionSection from '@/components/sections/VisionSection'
import HowWeHelp from '@/components/sections/HowWeHelp'
import HomeFeatures from '@/components/sections/HomeFeatures'
import FounderStory from '@/components/sections/FounderStory'
import CallToAction from '@/components/sections/CallToAction'

export const metadata: Metadata = {
  title: 'Ray of Light Fertility Foundation — Lighting the Path to Parenthood',
  description:
    "Wisconsin's first nonprofit dedicated exclusively to supporting couples navigating infertility. Financial grants, resources, and community support.",
  openGraph: {
    title: 'Ray of Light Fertility Foundation',
    description: 'Lighting the Path to Parenthood',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <MissionStatement />
      <VisionSection />
      <HowWeHelp />
      <HomeFeatures />
      <FounderStory />
      <CallToAction />
    </>
  )
}
