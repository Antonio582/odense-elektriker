import type { Metadata } from 'next'
import KontaktContent from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt Elektriker Odense | Få Gratis Tilbud',
  description: 'Kontakt din lokale elektriker i Odense. Gratis og uforpligtende tilbud på al el-arbejde. Ring, mail eller udfyld formularen — svar inden 2 timer!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/kontakt',
    languages: { 'da-DK': 'https://odense-elektriker.dk/kontakt' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt Elektriker Odense | Få Gratis Tilbud',
    description: 'Kontakt din lokale elektriker i Odense. Gratis tilbud på al el-arbejde. Vi svarer inden 2 timer!',
  },
  openGraph: {
    title: 'Kontakt Elektriker Odense | Få Gratis Tilbud',
    description: 'Kontakt din lokale elektriker i Odense. Gratis tilbud på al el-arbejde. Vi svarer inden 2 timer!',
    url: 'https://odense-elektriker.dk/kontakt',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Odense Elektriker',
    images: [{ url: '/images/kontakt-team.jpg', width: 600, height: 400, alt: 'Kontakt Odense Elektriker' }],
  },
}

export default function KontaktPage() {
  return <KontaktContent />
}
