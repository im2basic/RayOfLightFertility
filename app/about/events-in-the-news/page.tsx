import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Events in the News | Ray of Light Fertility Foundation',
  description:
    'Stories, events, and press coverage from Ray of Light Fertility Foundation.',
}

export default function EventsInTheNewsPage() {
  return (
    <PlaceholderPage
      title="Events in the News"
      copy="Stories, events, and press coverage coming soon. Follow us on social media to stay up to date."
      image="/assets/stock/supportive-hands.jpg"
      showNewsletter={true}
    />
  )
}
