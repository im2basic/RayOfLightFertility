import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Sponsors & Donors | Ray of Light Fertility Foundation',
  description:
    'We are grateful for the organizations and individuals who believe in our mission. Interested in partnering with us? Reach out.',
}

export default function SponsorsPage() {
  return (
    <PlaceholderPage
      title="Sponsors & Donors"
      copy="We're grateful for the organizations and individuals who believe in our mission. Our sponsors and donors page is coming soon. Interested in partnering with us? Reach out."
      image="/assets/stock/warm-embrace.jpg"
      cta={{ label: 'Partner With Us', href: '/about/contact' }}
    />
  )
}
