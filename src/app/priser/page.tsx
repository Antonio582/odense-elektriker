import type { Metadata } from 'next'
import PriserContent from './PriserContent'

export const metadata: Metadata = {
  title: 'Priser Elektriker Odense | Gennemsigtige El-priser',
  description: 'Gennemsigtige priser for el-arbejde i Odense. Timepriser fra 495 kr. Se faste pakkepriser og akuttillæg. Ingen skjulte gebyrer — få tilbud nu!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/priser',
    languages: { 'da-DK': 'https://odense-elektriker.dk/priser' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priser Elektriker Odense | Gennemsigtige El-priser',
    description: 'Gennemsigtige priser for el-arbejde i Odense. Timepriser fra 495 kr. Ingen skjulte gebyrer!',
  },
  openGraph: {
    title: 'Priser Elektriker Odense | Gennemsigtige El-priser',
    description: 'Gennemsigtige priser for el-arbejde i Odense. Timepriser fra 495 kr. Ingen skjulte gebyrer!',
    url: 'https://odense-elektriker.dk/priser',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Fyn El-Service',
    images: [{ url: '/images/priser-tilbud.jpg', width: 1000, height: 500, alt: 'Gennemsigtige el-priser i Odense' }],
  },
}

export default function PriserPage() {
  return <PriserContent />
}
