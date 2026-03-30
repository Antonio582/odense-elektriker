'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Counter from '@/components/Counter'
import ServiceCard from '@/components/ServiceCard'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { SERVICE_AREAS } from '@/lib/constants'

const services = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>,
    title: 'Eltjek & Sikring',
    description: 'Komplet gennemgang af din el-installation. Vi sikrer at alt er lovligt og sikkert i dit hjem.',
    href: '/eltjek',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.31-3.06A2 2 0 004 14v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2.11-2L12.58 15.17a2 2 0 01-1.16 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6" /></svg>,
    title: 'El-installation',
    description: 'Fra nye stikkontakter til komplet renovering af el-anlæg. Professionel installation hver gang.',
    href: '/el-installation',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>,
    title: 'Belysning',
    description: 'Professionel belysningsdesign til bolig og erhverv. LED-løsninger der sparer energi og ser fantastiske ud.',
    href: '/belysning',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'Ladestandere',
    description: 'Installation af ladestandere til elbiler. Vi hjælper med alt fra valg af model til tilskudsansøgning.',
    href: '/ladestandere',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
    title: 'Akut Elektriker',
    description: 'El-problemer der ikke kan vente? Vi er klar 24/7 med hurtig udrykning i hele Odense-området.',
    href: '/akut',
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
    title: 'Priser',
    description: 'Gennemsigtige priser uden overraskelser. Se vores timepriser og faste pakkepriser her.',
    href: '/priser',
  },
]

const testimonials = [
  { name: 'Lars Jensen', area: 'Odense C', text: 'Fantastisk service! De kom hurtigt og løste vores el-problem professionelt. Kan varmt anbefales til alle i Odense.' },
  { name: 'Mette Hansen', area: 'Bellinge', text: 'Vi fik installeret ny belysning i hele huset. Resultatet er helt utroligt, og prisen var fair. Tak for et flot stykke arbejde!' },
  { name: 'Peter Andersen', area: 'Dalum', text: 'Hurtig og pålidelig service med ladestander-installation. De hjalp endda med tilskudsansøgningen. Top professionelle.' },
]

const faqItems = [
  { question: 'Hvad koster en elektriker i Odense?', answer: 'Vores timepris ligger typisk mellem 450-650 kr. ekskl. moms, afhængigt af opgavens kompleksitet. Vi tilbyder altid et gratis og uforpligtende tilbud inden vi starter arbejdet, så du kender prisen på forhånd. For mange standardopgaver tilbyder vi også faste pakkepriser.' },
  { question: 'Er I autoriserede elektrikere?', answer: 'Ja, vi er fuldt autoriserede el-installatører med alle nødvendige certificeringer. Vi overholder altid gældende lovgivning og Stærkstrømsbekendtgørelsen. Alle vores elektrikere er uddannede og erfarne fagfolk.' },
  { question: 'Hvor hurtigt kan I komme?', answer: 'Ved akutte situationer kan vi typisk være fremme inden for 1-2 timer i Odense-området. For planlagte opgaver aftaler vi en tid, der passer dig. Vi dækker hele Odense og omegn, inklusiv Bellinge, Dalum, Bolbro og Skt. Klemens.' },
  { question: 'Dækker I hele Odense?', answer: 'Ja, vi dækker hele Odense og omkringliggende områder, herunder Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro, Skt. Klemens og resten af Fyn. Uanset hvor du bor, er vi klar til at hjælpe.' },
  { question: 'Tilbyder I gratis tilbud?', answer: 'Absolut! Vi giver altid et gratis og uforpligtende tilbud inden arbejdet påbegyndes. Kontakt os eller udfyld kontaktformularen, så vender vi tilbage hurtigst muligt med et detaljeret tilbud.' },
]

export default function HomePage() {
  return (
    <>
      <JsonLd page="home" breadcrumbItems={[]} faqItems={faqItems} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a1628_70%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Autoriseret el-installatør i Odense
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Din lokale{' '}
            <span className="gradient-text">elektriker</span>
            <br />i Odense
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-text max-w-2xl mx-auto mb-10"
          >
            Professionel el-service til private og erhverv. Fra akut fejlfinding til komplet el-installation — vi er Odenses foretrukne elektriker med over 15 års erfaring.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-xl glow-btn text-lg"
            >
              Få gratis tilbud
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-text text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Autoriseret
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hurtig responstid
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              5-stjernet service
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Hele Odense & Fyn
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-elektriker-new.jpg"
                alt="Autoriseret elektriker i Odense arbejder professionelt ved eltavle med sikkerhedsudstyr"
                width={1200}
                height={600}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-20 border-y border-gray-border/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={2500} suffix="+" label="Projekter udført" />
            <Counter end={15} suffix="+" label="Års erfaring" />
            <Counter end={98} suffix="%" label="Kundetilfredshed" />
            <Counter end={24} suffix="/7" label="Akut service" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vores services</h2>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">
              Som autoriseret elektriker i Odense tilbyder vi et bredt udvalg af el-services til både private og erhverv. Alt arbejde udføres efter gældende lovgivning.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.href} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <Image
                src="/images/services-eltavle.jpg"
                alt="Moderne eltavle med sikringsautomater installeret af autoriseret elektriker i Odense"
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hvorfor vælge os som din elektriker i Odense?</h2>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">
              Vi kombinerer faglig ekspertise med personlig service. Når du vælger Odense Elektriker, får du en partner du kan stole på — fra det første opkald til den færdige opgave.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Autoriseret & certificeret', text: 'Vi er fuldt autoriserede el-installatører med alle nødvendige certificeringer. Dit el-arbejde er i trygge hænder hos os, og vi overholder altid Stærkstrømsbekendtgørelsen og gældende sikkerhedskrav.' },
              { title: 'Lokalt forankret i Odense', text: 'Vi kender Odense og omegn som vores egen baglomme. Fra lejligheder i Odense C til villaer i Bellinge og erhvervslokaler i Bolbro — vi har erfaring med alle typer ejendomme i området.' },
              { title: 'Gennemsigtige priser', text: 'Ingen skjulte gebyrer eller overraskelser på regningen. Vi giver altid et detaljeret tilbud inden vi starter, og du betaler kun for det aftalte arbejde. Se vores priser for mere info.' },
              { title: 'Hurtig og pålidelig service', text: 'Vi respekterer din tid. Aftalte tider overholdes, og ved akutte situationer er vi typisk fremme inden for 1-2 timer. Vi efterlader altid arbejdspladsen pæn og ryddelig efter endt opgave.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 p-6 bg-dark border border-gray-border/30 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-text text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <div className="relative rounded-2xl overflow-hidden max-w-3xl mx-auto">
              <Image
                src="/images/kundetilfredshed.jpg"
                alt="Tilfreds kunde og elektriker efter udført el-arbejde i Odense"
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Det siger vores kunder</h2>
            <p className="text-gray-text text-lg">
              Vi er stolte af den tillid vores kunder i {SERVICE_AREAS.slice(0, 3).join(', ')} og resten af Odense viser os.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-dark-light border border-gray-border/30 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-text mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-gray-text text-sm">{t.area}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vi dækker hele Odense og omegn</h2>
            <p className="text-gray-text text-lg mb-10 max-w-2xl mx-auto">
              Uanset om du bor i centrum eller i udkanten af byen, er vi klar til at hjælpe. Vi kører dagligt til kunder i hele Odense-området og på Fyn. Som din lokale <Link href="/el-installation" className="text-accent hover:underline">el-installatør</Link> er vi altid tæt på.
            </p>
          </ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SERVICE_AREAS.map((area, i) => (
              <ScrollReveal key={area} delay={i * 0.05}>
                <span className="px-5 py-2.5 bg-dark border border-gray-border/30 rounded-full text-sm font-medium text-gray-text hover:text-accent hover:border-accent/30 transition-colors">
                  {area}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Content Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm text-gray-500 mb-4">Af <strong>Odense Elektriker Team</strong> · Opdateret marts 2026</p>
            <h2 className="text-3xl font-bold mb-6">Din autoriserede elektriker i Odense — lokal, pålidelig og professionel</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Odense Elektriker er din lokale partner når det handler om al el-arbejde i Odense og på Fyn. Vi er et team af autoriserede elektrikere med over 30 års samlet erfaring i branchen. Vi har udført mere end 2.500 projekter for private boligejere og erhvervskunder i hele Odense-området — fra lejligheder i Odense C og villaer i Bellinge til kontorer i Bolbro og produktionslokaler i Odense NV.
              </p>
              <p>
                Som autoriseret el-installatør overholder vi altid Stærkstrømsbekendtgørelsen og gældende sikkerhedsstandarder. Alle vores elektrikere er uddannede fagfolk med de nødvendige certificeringer, og vi er dækket af el-installatøransvarsforsikring. Det betyder, at du kan være helt tryg når du vælger os til dit el-projekt — uanset om det drejer sig om en enkelt stikkontakt eller en komplet renovering af el-anlægget.
              </p>
              <p>
                Vi tilbyder et bredt udvalg af services: <Link href="/eltjek" className="text-accent hover:underline">Eltjek og sikringsservice</Link> for at sikre at din installation er i orden. <Link href="/el-installation" className="text-accent hover:underline">El-installation</Link> til både nybyg og renovering. Professionel <Link href="/belysning" className="text-accent hover:underline">belysningsinstallation</Link> til indendørs, udendørs og erhverv. <Link href="/ladestandere" className="text-accent hover:underline">Ladestander-installation</Link> til elbiler. Og <Link href="/akut" className="text-accent hover:underline">akut elektriker-service</Link> med 24/7 udrykning når uheldet er ude.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Elektriker i Odense — hvad koster det?</h3>
              <p>
                En af de mest stillede spørgsmål vi får er: &ldquo;Hvad koster en elektriker i Odense?&rdquo; Svaret afhænger af opgavens karakter og omfang. Vores standardtimepris er 495 kr. ekskl. moms i dagtimerne, og vi tilbyder faste pakkepriser på mange standardopgaver. For eksempel koster installation af en ny stikkontakt typisk 995 kr. inkl. materialer, mens et komplet eltjek starter fra 1.995 kr. Se alle vores <Link href="/priser" className="text-accent hover:underline">priser</Link> for et komplet overblik.
              </p>
              <p>
                Vi giver altid et gratis og uforpligtende tilbud inden vi starter arbejdet. Ved en besigtigelse vurderer vi opgaven, identificerer eventuelle udfordringer og giver dig et fast tilbud, så du kender den præcise pris på forhånd. Ingen skjulte gebyrer, ingen overraskelser — bare ærlig og gennemsigtig prissætning.
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Lokalt forankret i Odense og på Fyn</h3>
              <p>
                Vi kender Odense som vores egen baglomme. Vi kører dagligt til kunder i Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro og Skt. Klemens. Vi kender de typiske udfordringer i forskellige boligtyper — fra ældre murermestervillaer med installationer fra 1930&apos;erne til moderne nybyggerier med smarthome-systemer. Den lokale forankring betyder hurtigere responstider og ingen unødvendige kørselstillæg inden for Odense kommune.
              </p>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">Sådan arbejder vi</h3>
              <p>
                Vores arbejdsproces er enkel og gennemsigtig. Du kontakter os med din opgave, og vi aftaler enten en besigtigelse eller giver et tilbud direkte baseret på din beskrivelse. Ved besigtigelsen gennemgår vi opgaven grundigt og giver dig et detaljeret tilbud med fast pris. Når du accepterer, aftaler vi en dato der passer dig, og vores elektrikere udfører arbejdet professionelt og effektivt. Efter endt arbejde tester vi alt grundigt og rydder op efter os. Du modtager en faktura der matcher tilbuddet — ingen overraskelser.
              </p>
              <p>
                Vi er dækket af el-installatøransvarsforsikring og giver 5 års garanti på alt installationsarbejde. Hvis der opstår problemer efter installationen, er vi klar til at hjælpe hurtigt og uden ekstra omkostning inden for garantiperioden.
              </p>
              <p>
                Har du brug for en elektriker i Odense? <Link href="/kontakt" className="text-accent hover:underline">Kontakt os i dag</Link> for et uforpligtende tilbud. Udfyld vores kontaktformular — vi svarer inden for 2 timer i åbningstiden.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* CTA */}
      <CTABanner />
    </>
  )
}
