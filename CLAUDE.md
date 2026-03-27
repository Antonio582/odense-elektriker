# CLAUDE.md — odense-elektriker.dk

## Projekt
Byg en premium lead generation website for en elektriker i Odense.
Teknologi: Next.js 14+ (App Router), Tailwind CSS v4, TypeScript, Framer Motion. Deploy til Vercel.

## Design Inspiration
**Stil: "Electric Precision"** — Inspireret af Apple.com's produktsider og https://www.awwwards.com/sites/linear (Linear.app)
- Stram, geometrisk grid med asymmetrisk layout
- Store typografiske hero-sektioner med scroll-triggered reveals
- Mørkeblå (#0a1628) + elektrisk gul (#fbbf24) + hvid
- Font: Inter (headings 700) + Inter (body 400)
- Subtle glow effects på CTAs (box-shadow animation)

## Motion & Animationer (OBLIGATORISK)
Brug **Framer Motion** (`npm install framer-motion`):

### Scroll-triggered animations
```tsx
// Brug til ALLE sektioner — fade up + slide fra venstre/højre
import { motion, useInView } from "framer-motion";
// Fade in fra bunden med stagger på children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
```

### Apple-lignende effekter
1. **Hero text reveal** — Overskrift fader ind ord-for-ord (split text animation)
2. **Parallax scroll** — Baggrundselementer bevæger sig langsommere end forgrund
3. **Counter animation** — Tal tæller op ved scroll (fx "500+ kunder", "24/7 service")
4. **Card hover** — Services-kort løfter sig med subtle shadow + scale(1.02)
5. **Sticky scroll sections** — Apple-stil hvor indhold skifter mens billede er pinned
6. **Smooth page transitions** — Fade mellem sider
7. **CTA pulse** — "Ring nu" knap har subtle pulse-animation
8. **Gradient text** — Hero overskrift med animated gradient

### Specifik implementation
- ALLE sektioner skal animate ind ved scroll (Intersection Observer via framer-motion useInView)
- Services grid: staggered entry (0.1s delay mellem kort)
- Testimonials: horizontal scroll carousel med drag
- FAQ: smooth accordion med AnimatePresence
- Kontaktformular: input fields slide ind sekventielt
- Telefonnummer i header: subtle glow pulse

## SEO
- Primært keyword: **"elektriker odense"** (590 søgninger/md, CPC 5,43 kr)
- Sekundære: elektriker odense akut, el-installatør odense, autoriseret elektriker odense, billig elektriker odense, elektriker fyn
- Alle sider: unik title, meta description, H1, FAQ med JSON-LD FAQPage schema
- BreadcrumbList JSON-LD på alle undersider
- LocalBusiness JSON-LD schema (type: Electrician, areaServed: Odense)
- Min 3 interne links per side
- Dansk sprog (da), korrekte æøå

## Sider (min 8)
1. **Forside** — Animated hero med split-text reveal, services grid med stagger, counter sektion, testimonials carousel, FAQ accordion
2. **Eltjek & Sikringsservice** — Sticky scroll sektion med step-by-step process
3. **El-installation** — Before/after slider, animated timeline
4. **Belysning** — Image gallery med lightbox, parallax baggrund
5. **Ladestandere** — Prissammenligning med animated bars, tilskudsberegner
6. **Akut Elektriker** — Pulserende "Ring NU" CTA, animated clock/24-7 ikon
7. **Priser** — Animated pricing cards, "Få gratis tilbud" med form animation
8. **Kontakt** — Map embed, form med sequential field reveals, animated success state

## Layout
- Sticky header med blur-backdrop, telefon + CTA
- Full-width hero (100vh) med gradient overlay
- Asymmetrisk 2-kolonne layout på servicesider
- Footer med animated wave separator
- INGEN emojis — brug animated SVG ikoner

## Indhold
- Skriv som en lokal elektriker i Odense
- Lokale områder: Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro, Skt. Klemens
- Min 800 ord per side
- NLP-termer: autoriseret, el-attest, stærkstrøm, svagstrøm, sikringstavle, jordfejl, kortslutning

## Teknisk
- `@import "tailwindcss"` + `@theme {}` i globals.css (Tailwind v4)
- `framer-motion` for ALLE animationer
- Responsive images med next/image
- Sitemap.xml + robots.txt
- Open Graph meta tags
- Brug danske tegn direkte — ALDRIG unicode escapes
- Ingen `encodeURIComponent()` på danske URLs

## Pladsholderinfo
- Firmanavn: [FIRMA NAVN]
- Telefon: [TELEFON]
- Adresse: [ADRESSE, ODENSE]
- CVR: [CVR-NUMMER]
