import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Resources | Ray of Light Fertility Foundation',
  description:
    'Launching soon to bring trustworthy guidance, financial support, and genuine community to people navigating fertility challenges.',
}

export default function ResourcesPage() {
  return (
    <PlaceholderPage
      title="Resources"
      copy="We're almost here. Launching soon to bring trustworthy guidance, financial support, and genuine community to people navigating fertility challenges — because no one should face this alone. Check back soon."
      image="/assets/stock/sunlit-path.jpg"
      showNewsletter
    />
  )
}
