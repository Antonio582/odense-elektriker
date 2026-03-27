import Link from 'next/link'
import { NAV_LINKS, PHONE, PHONE_LINK, EMAIL, ADDRESS, SERVICE_AREAS, SITE_NAME } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-gray-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg className="w-5 h-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Odense <span className="text-accent">Elektriker</span></span>
            </Link>
            <p className="text-gray-text text-sm leading-relaxed">
              Din autoriserede elektriker i Odense. Vi leverer professionelle el-løsninger til private og erhverv i hele Odense og omegn.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {NAV_LINKS.filter(l => l.href !== '/' && l.href !== '/kontakt').map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-text text-sm hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Områder */}
          <div>
            <h3 className="font-semibold text-white mb-4">Områder vi dækker</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map(area => (
                <li key={area} className="text-gray-text text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_LINK} className="flex items-center gap-2 text-gray-text text-sm hover:text-accent transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-gray-text text-sm hover:text-accent transition-colors">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-text text-sm">
                <svg className="w-4 h-4 text-accent mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-text text-sm">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. Alle rettigheder forbeholdes.</p>
          <p>Autoriseret el-installatør · CVR: 12345678</p>
        </div>
      </div>
    </footer>
  )
}
