'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link href={href} className="block group">
        <div className="card-hover bg-dark-light border border-gray-border/30 rounded-2xl p-8 h-full">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5 group-hover:bg-accent/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-gray-text text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
            Læs mere
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
