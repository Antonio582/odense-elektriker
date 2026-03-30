import type { Metadata } from 'next'
import AkutContent from './AkutContent'

export const metadata: Metadata = {
  title: 'Akut Elektriker Odense | 24/7 Nødservice',
  description: 'Akut elektriker i Odense med 24/7 nødservice. Hurtig udrykning inden for 30-60 min til hele Odense. Kontakt os for øjeblikkelig hjælp!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/akut',
    languages: { 'da-DK': 'https://odense-elektriker.dk/akut' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akut Elektriker Odense | 24/7 Nødservice',
    description: 'Akut elektriker i Odense med 24/7 nødservice. Hurtig udrykning inden for 30-60 min. Kontakt os nu!',
  },
  openGraph: {
    title: 'Akut Elektriker Odense | 24/7 Nødservice',
    description: 'Akut elektriker i Odense med 24/7 nødservice. Hurtig udrykning inden for 30-60 min. Kontakt os nu!',
    url: 'https://odense-elektriker.dk/akut',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Odense Elektriker',
    images: [{ url: '/images/akut-elektriker.jpg', width: 1000, height: 500, alt: 'Akut elektriker i Odense' }],
  },
}

export default function AkutPage() {
  return <AkutContent />
}
