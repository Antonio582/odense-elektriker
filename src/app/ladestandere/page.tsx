import type { Metadata } from 'next'
import LadestandarderContent from './LadestandarderContent'

export const metadata: Metadata = {
  title: 'Ladestandere Odense | Installation af Elbil-ladestander',
  description: 'Installation af ladestandere til elbiler i Odense fra 4.995 kr. Vi hjælper med valg, tilskud og installation. Autoriseret elektriker — få tilbud!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/ladestandere',
    languages: { 'da-DK': 'https://odense-elektriker.dk/ladestandere' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ladestandere Odense | Installation af Elbil-ladestander',
    description: 'Installation af ladestandere til elbiler i Odense fra 4.995 kr. Autoriseret elektriker — få tilbud i dag!',
  },
  openGraph: {
    title: 'Ladestandere Odense | Installation af Elbil-ladestander',
    description: 'Installation af ladestandere til elbiler i Odense fra 4.995 kr. Autoriseret elektriker — få tilbud i dag!',
    url: 'https://odense-elektriker.dk/ladestandere',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Odense Elektriker',
    images: [{ url: '/images/ladestander-elbil.jpg', width: 600, height: 400, alt: 'Ladestander-installation i Odense' }],
  },
}

export default function LadestandarderPage() {
  return <LadestandarderContent />
}
