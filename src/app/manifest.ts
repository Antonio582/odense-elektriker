import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fyn El-Service — Autoriseret El-installatør',
    short_name: 'Fyn El-Service',
    description: 'Din autoriserede elektriker i Odense. El-installation, eltjek, belysning, ladestandere og akut el-service.',
    start_url: '/',
    display: 'standalone',
    theme_color: '#fbbf24',
    background_color: '#0a1628',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
