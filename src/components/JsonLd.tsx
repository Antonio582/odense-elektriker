import { LOCAL_BUSINESS_JSONLD, SITE_URL } from '@/lib/constants'

interface FAQItem {
  question: string
  answer: string
}

interface JsonLdProps {
  page: string
  breadcrumbItems: { name: string; url: string }[]
  faqItems?: FAQItem[]
}

export default function JsonLd({ page, breadcrumbItems, faqItems }: JsonLdProps) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Forside', item: SITE_URL },
      ...breadcrumbItems.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    ],
  }

  const faqJsonLd = faqItems
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  const pageTitles: Record<string, string> = {
    home: 'Elektriker Odense — Autoriseret El-installatør',
    akut: 'Akut Elektriker Odense — 24/7 Nødservice',
    belysning: 'Belysning Odense — Professionel Belysningsinstallation',
    'el-installation': 'El-installation Odense — Autoriseret El-installatør',
    eltjek: 'Eltjek Odense — Sikringsservice & El-gennemgang',
    kontakt: 'Kontakt Elektriker Odense — Få Gratis Tilbud',
    ladestandere: 'Ladestandere Odense — Installation af Elbil-ladestander',
    priser: 'Priser Elektriker Odense — Gennemsigtige El-priser',
  }

  const pageUrls: Record<string, string> = {
    home: SITE_URL,
    akut: `${SITE_URL}/akut`,
    belysning: `${SITE_URL}/belysning`,
    'el-installation': `${SITE_URL}/el-installation`,
    eltjek: `${SITE_URL}/eltjek`,
    kontakt: `${SITE_URL}/kontakt`,
    ladestandere: `${SITE_URL}/ladestandere`,
    priser: `${SITE_URL}/priser`,
  }

  const articleJsonLd = page !== 'home' && page !== 'kontakt'
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: pageTitles[page] || '',
        url: pageUrls[page] || '',
        datePublished: '2025-09-15',
        dateModified: '2026-03-27',
        author: {
          '@type': 'Person',
          name: 'Odense Elektriker Team',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Odense Elektriker',
          url: SITE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrls[page] || '',
        },
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
    </>
  )
}
