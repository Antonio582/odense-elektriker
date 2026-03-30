import type { Metadata } from 'next'
import ElInstallationContent from './ElInstallationContent'

export const metadata: Metadata = {
  title: 'El-installation Odense | Autoriseret El-installatør',
  description: 'Professionel el-installation i Odense. Nye installationer, renovering og udvidelse af el-anlæg. Autoriseret elektriker — få gratis tilbud i dag!',
  alternates: {
    canonical: 'https://odense-elektriker.dk/el-installation',
    languages: { 'da-DK': 'https://odense-elektriker.dk/el-installation' },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El-installation Odense | Autoriseret El-installatør',
    description: 'Professionel el-installation i Odense. Nye installationer, renovering og udvidelse af el-anlæg. Gratis tilbud!',
  },
  openGraph: {
    title: 'El-installation Odense | Autoriseret El-installatør',
    description: 'Professionel el-installation i Odense. Nye installationer, renovering og udvidelse af el-anlæg. Gratis tilbud!',
    url: 'https://odense-elektriker.dk/el-installation',
    type: 'website',
    locale: 'da_DK',
    siteName: 'Fyn El-Service',
    images: [{ url: '/images/el-installation-stikkontakt.jpg', width: 600, height: 400, alt: 'El-installation i Odense' }],
  },
}

export default function ElInstallationPage() {
  return <ElInstallationContent />
}
