import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://odense-elektriker.dk'
  const lastModified = new Date()

  return [
    { url: baseUrl, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/eltjek`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/el-installation`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/belysning`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/ladestandere`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/akut`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/priser`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
