import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbbf24',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://odense-elektriker.dk'),
  title: {
    default: 'Elektriker Odense | Autoriseret El-installatør',
    template: '%s',
  },
  description: 'Din autoriserede elektriker i Odense. Vi tilbyder el-installation, eltjek, belysning, ladestandere og akut el-service. Kontakt os for et gratis tilbud!',
  keywords: ['elektriker odense', 'el-installatør odense', 'autoriseret elektriker odense', 'akut elektriker odense', 'elektriker fyn'],
  alternates: {
    canonical: 'https://odense-elektriker.dk',
  },
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://odense-elektriker.dk',
    siteName: 'Fyn El-Service',
    title: 'Elektriker Odense | Autoriseret El-installatør',
    description: 'Din autoriserede elektriker i Odense. El-installation, eltjek, belysning, ladestandere og akut el-service. Gratis tilbud!',
    images: [{ url: '/images/hero-elektriker-odense.jpg', width: 1200, height: 600, alt: 'Autoriseret elektriker i Odense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektriker Odense | Autoriseret El-installatør',
    description: 'Din autoriserede elektriker i Odense. El-installation, eltjek, belysning, ladestandere og akut el-service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
