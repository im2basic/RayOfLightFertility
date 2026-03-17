import type { Metadata } from 'next'
import { PlaceholderPage } from '@/components/ui/PlaceholderPage'

export const metadata: Metadata = {
  title: 'Grant Recipients — Ray of Light Fertility Foundation',
}

export default function GrantRecipientsPage() {
  return (
    <PlaceholderPage
      title="Grant Recipients"
      copy="Grant recipients will be announced here. We look forward to celebrating the families we've been able to support. Check back soon."
      image="/assets/stock/couple-lake-golden.jpg"
    />
  )
}
