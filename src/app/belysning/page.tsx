import type { Metadata } from 'next'
import BelysningContent from './BelysningContent'

export const metadata: Metadata = {
  title: 'Belysning Odense | Professionel Belysningsinstallation',
  description: 'Professionel belysningsinstallation i Odense. LED, indendørs, udendørs og erhvervsbelysning. Spar 85% på energi — kontakt os for gratis tilbud!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/belysning',
    languages: { 'da-DK': 'https://odense-elektriker.dk/belysning' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Belysning Odense | Professionel Belysningsinstallation',
    description: 'Professionel belysningsinstallation i Odense. LED, indendørs, udendørs og erhvervsbelysning. Gratis tilbud!',
  },
  openGraph: {
    title: 'Belysning Odense | Professionel Belysningsinstallation',
    description: 'Professionel belysningsinstallation i Odense. LED, indendørs, udendørs og erhvervsbelysning. Gratis tilbud!',
    url: 'https://odense-elektriker.dk/belysning',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Fyn El-Service',
    images: [{ url: '/images/belysning-indendors.jpg', width: 600, height: 400, alt: 'Professionel belysningsinstallation i Odense' }],
  },
}

export default function BelysningPage() {
  return <BelysningContent />
}
