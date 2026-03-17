import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Grant Information — Ray of Light Fertility Foundation',
}

export default function GrantInformationPage() {
  return (
    <PlaceholderPage
      title="Grant Information"
      copy="Grant information coming soon — check back or contact us for details about eligibility, application process, and timelines."
      image="/assets/stock/sunrise-road.jpg"
      cta={{ label: 'Contact Us', href: '/about/contact' }}
    />
  )
}
