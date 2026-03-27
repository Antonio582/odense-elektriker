'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { PHONE, PHONE_LINK } from '@/lib/constants'

interface CTABannerProps {
  title?: string
  subtitle?: string
}

export default function CTABanner({
  title = 'Klar til at komme i gang?',
  subtitle = 'Kontakt os i dag for et uforpligtende tilbud på dit el-projekt. Vi svarer inden for 2 timer.',
}: CTABannerProps) {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-dark-light to-dark border border-gray-border/30 p-10 sm:p-14 text-center"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl glow-btn text-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ring {PHONE}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 border border-accent/50 text-accent font-semibold rounded-xl hover:bg-accent/10 transition-colors text-lg"
              >
                Få et tilbud
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
