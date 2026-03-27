export const SITE_NAME = 'Odense Elektriker'
export const SITE_URL = 'https://odense-elektriker.dk'
export const PHONE = '65 12 34 56'
export const PHONE_LINK = 'tel:+4565123456'
export const EMAIL = 'kontakt@odense-elektriker.dk'
export const ADDRESS = {
  street: 'Vestergade 42',
  city: 'Odense C',
  zip: '5000',
  region: 'Fyn',
  country: 'DK',
}

export const NAV_LINKS = [
  { href: '/', label: 'Forside' },
  { href: '/eltjek', label: 'Eltjek' },
  { href: '/el-installation', label: 'El-installation' },
  { href: '/belysning', label: 'Belysning' },
  { href: '/ladestandere', label: 'Ladestandere' },
  { href: '/akut', label: 'Akut' },
  { href: '/priser', label: 'Priser' },
  { href: '/kontakt', label: 'Kontakt' },
]

export const SERVICE_AREAS = [
  'Odense C', 'Odense SØ', 'Odense NV', 'Bellinge', 'Dalum', 'Bolbro', 'Skt. Klemens'
]

export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: SITE_NAME,
  url: SITE_URL,
  telephone: '+4565123456',
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.zip,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.3959,
    longitude: 10.3883,
  },
  areaServed: SERVICE_AREAS.map(area => ({
    '@type': 'City',
    name: area,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  priceRange: '$$',
  image: `${SITE_URL}/logo.svg`,
}
