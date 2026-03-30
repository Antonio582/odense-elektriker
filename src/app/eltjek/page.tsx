import type { Metadata } from 'next'
import EltjekContent from './EltjekContent'

export const metadata: Metadata = {
  title: 'Eltjek Odense | Sikringsservice & El-gennemgang',
  description: 'Professionelt eltjek i Odense fra 1.995 kr. Vi gennemgår din el-installation for fejl og mangler. Autoriseret elektriker — ring for tilbud!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/eltjek',
    languages: { 'da-DK': 'https://odense-elektriker.dk/eltjek' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eltjek Odense | Sikringsservice & El-gennemgang',
    description: 'Professionelt eltjek i Odense fra 1.995 kr. Autoriseret elektriker gennemgår din el-installation. Kontakt os for tilbud!',
  },
  openGraph: {
    title: 'Eltjek Odense | Sikringsservice & El-gennemgang',
    description: 'Professionelt eltjek i Odense fra 1.995 kr. Autoriseret elektriker gennemgår din el-installation. Kontakt os for tilbud!',
    url: 'https://odense-elektriker.dk/eltjek',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Odense Elektriker',
    images: [{ url: '/images/eltjek-inspektion.jpg', width: 600, height: 400, alt: 'Eltjek og sikringsservice i Odense' }],
  },
}

export default function EltjekPage() {
  return <EltjekContent />
}
