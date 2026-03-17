import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Events | Ray of Light Fertility Foundation',
  description:
    'Events and fundraisers coming soon. We are planning meaningful ways to connect, celebrate, and support families navigating infertility.',
}

export default function EventsPage() {
  return (
    <PlaceholderPage
      title="Events"
      copy="Events and fundraisers coming soon. We're planning meaningful ways to connect, celebrate, and support families navigating infertility. Check back for updates."
      image="/assets/stock/flower-field-sunrise.jpg"
      showNewsletter
    />
  )
}
