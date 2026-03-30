'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import FAQ from '@/components/FAQ'
import { EMAIL, ADDRESS, SERVICE_AREAS } from '@/lib/constants'

const contactMethods = [
  { icon: '📧', title: 'Email', value: EMAIL, link: `mailto:${EMAIL}`, desc: 'Vi svarer inden for 2 timer i åbningstiden' },
  { icon: '✉️', title: 'Send en email', value: EMAIL, link: `mailto:${EMAIL}`, desc: 'Vi svarer inden for 2 timer i åbningstiden' },
  { icon: '📍', title: 'Besøg os', value: `${ADDRESS.street}, ${ADDRESS.zip} ${ADDRESS.city}`, link: '#map', desc: 'Mandag-fredag 08-16 (efter aftale)' },
]

const hours = [
  { day: 'Mandag - Fredag', time: '07:00 - 17:00', note: 'Normal åbningstid' },
  { day: 'Lørdag', time: '09:00 - 14:00', note: 'Begrænset service' },
  { day: 'Søndag & helligdage', time: 'Lukket', note: 'Kun akut service' },
  { day: 'Akut 24/7', time: 'Altid åben', note: 'Kontakt os døgnet rundt' },
]

const formFields = [
  { name: 'name', label: 'Dit navn', type: 'text', placeholder: 'F.eks. Lars Jensen' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'din@email.dk' },
  { name: 'phone', label: 'Telefon', type: 'tel', placeholder: 'F.eks. 12 34 56 78' },
  { name: 'address', label: 'Adresse (valgfri)', type: 'text', placeholder: 'F.eks. Vestergade 12, 5000 Odense C' },
]

const serviceOptions = [
  'Eltjek & Sikring',
  'El-installation',
  'Belysning',
  'Ladestander',
  'Akut elektriker',
  'Andet',
]

const faqItems = [
  { question: 'Hvor hurtigt svarer I på henvendelser?', answer: 'Vi svarer på alle henvendelser inden for 2 timer i vores åbningstid (mandag-fredag 07-17). Henvendelser modtaget uden for åbningstiden besvares næste arbejdsdag. Ved akutte situationer ring direkte — vi er klar 24/7.' },
  { question: 'Er besigtigelse og tilbud gratis?', answer: 'Ja, vi tilbyder altid gratis og uforpligtende besigtigelse og tilbud for alle el-opgaver i Odense-området. Vi kommer ud til dig, vurderer opgaven og giver dig et detaljeret tilbud med fast pris. Du er ikke forpligtet til at acceptere tilbuddet.' },
  { question: 'Dækker I hele Odense-området?', answer: 'Ja, vi dækker hele Odense kommune og omegn, herunder Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro, Skt. Klemens og resten af Fyn. Inden for Odense kommune er der intet kørselstillæg.' },
]

export default function KontaktContent() {
  const [currentField, setCurrentField] = useState(0)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', service: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <JsonLd
        page="kontakt"
        breadcrumbItems={[{ name: 'Kontakt', url: '/kontakt' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Kontakt' }]} />

      {/* Hero */}
      <section className="pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-gray-500 mb-4">Af <strong>Odense Elektriker Team</strong> · Opdateret marts 2026</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Kontakt</span> os
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-4">
              Har du brug for en elektriker i Odense? Vi er klar til at hjælpe. Uanset om du har et akut problem eller planlægger et større projekt, starter alt med en samtale. Mail eller udfyld formularen herunder, og vi vender tilbage inden for 2 timer.
            </p>
            <p className="text-gray-text max-w-3xl leading-relaxed">
              Som autoriseret el-installatør i Odense med over 30 års samlet erfaring tilbyder vi professionel el-service til både private og erhverv. Vi giver altid gratis og uforpligtende tilbud på alle typer el-arbejde — fra enkle stikkontakter til komplet renovering af el-anlæg. Vores team af erfarne elektrikere dækker hele Odense og omegn, herunder Odense C, Odense SØ, Bellinge, Dalum, Bolbro og Skt. Klemens, uden kørselstillæg inden for kommunen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Images */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/kontakt-team.jpg"
                alt="Odense Elektriker-teamet klar til at hjælpe med alle el-opgaver"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/kontakt-service.jpg"
                alt="Kundeservice hos Odense Elektriker — vi svarer inden for 2 timer"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a
                  href={m.link}
                  className="block p-8 bg-dark border border-gray-border/30 rounded-2xl card-hover text-center h-full"
                >
                  <span className="text-4xl mb-4 block">{m.icon}</span>
                  <h2 className="text-lg font-semibold mb-2">{m.title}</h2>
                  <div className="text-accent font-medium mb-2">{m.value}</div>
                  <p className="text-gray-text text-sm">{m.desc}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Hours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-8">Send os en besked</h2>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-10 bg-dark-light border border-accent/30 rounded-2xl text-center"
                    >
                      <span className="text-5xl mb-4 block">✅</span>
                      <h3 className="text-2xl font-bold mb-2">Tak for din henvendelse!</h3>
                      <p className="text-gray-text">Vi vender tilbage inden for 2 timer i åbningstiden.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {formFields.map((field, i) => (
                          <motion.div
                            key={field.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <label className="block text-sm font-medium mb-2">{field.label}</label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.name as keyof typeof formData]}
                              onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                              onFocus={() => setCurrentField(i)}
                              className="w-full px-4 py-3 bg-dark-light border border-gray-border/30 rounded-xl text-white placeholder-gray-text/50 focus:outline-none focus:border-accent/50 transition-colors"
                              required={field.name !== 'address'}
                            />
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium mb-2">Hvilken service?</label>
                        <div className="flex flex-wrap gap-2">
                          {serviceOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, service: opt })}
                              className={`px-4 py-2 rounded-full text-sm transition-all ${
                                formData.service === opt
                                  ? 'bg-accent text-dark font-medium'
                                  : 'bg-dark-light border border-gray-border/30 text-gray-text hover:border-accent/30'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium mb-2">Besked</label>
                        <textarea
                          placeholder="Beskriv kort din opgave eller dit problem..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-dark-light border border-gray-border/30 rounded-xl text-white placeholder-gray-text/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                          required
                        />
                      </motion.div>

                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        type="submit"
                        className="w-full sm:w-auto px-8 py-4 bg-accent text-dark font-bold rounded-xl glow-btn text-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send besked
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.2}>
                <div className="p-8 bg-dark-light border border-gray-border/30 rounded-2xl mb-6">
                  <h3 className="text-xl font-semibold mb-6">Åbningstider</h3>
                  <div className="space-y-4">
                    {hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-border/20 last:border-0 last:pb-0">
                        <div>
                          <div className="font-medium text-sm">{h.day}</div>
                          <div className="text-xs text-gray-text">{h.note}</div>
                        </div>
                        <div className={`text-sm font-medium ${h.time === 'Altid åben' ? 'text-accent' : h.time === 'Lukket' ? 'text-gray-text' : 'text-white'}`}>
                          {h.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-dark-light border border-gray-border/30 rounded-2xl mb-6">
                  <h3 className="text-xl font-semibold mb-4">Serviceområder</h3>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_AREAS.map((area) => (
                      <span key={area} className="px-3 py-1 bg-dark border border-gray-border/30 rounded-full text-xs text-gray-text">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-dark-light border border-accent/20 rounded-2xl">
                  <h3 className="text-xl font-semibold mb-3">Akut?</h3>
                  <p className="text-gray-text text-sm mb-4">
                    El-problemer der ikke kan vente? Vi er klar 24/7.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-dark font-bold rounded-xl glow-btn text-sm"
                  >
                    Kontakt os nu
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find os i Odense</h2>
            <p className="text-gray-text">{ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}</p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-gray-border/30 bg-dark h-80 flex items-center justify-center relative">
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-light to-dark opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold">Odense Elektriker</p>
                  <p className="text-gray-text text-sm">{ADDRESS.street}, {ADDRESS.zip} {ADDRESS.city}</p>
                </div>
              </div>
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Kontakt din lokale elektriker i Odense</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Hos Odense Elektriker sætter vi en ære i at være tilgængelige og nemme at komme i kontakt med. Uanset om du har et simpelt spørgsmål om el-installation, behøver et tilbud på en ny <Link href="/ladestandere" className="text-accent hover:underline">ladestander</Link>, eller har brug for <Link href="/akut" className="text-accent hover:underline">akut hjælp</Link> midt om natten — vi er her for dig.
              </p>
              <p>
                Vi dækker hele Odense kommune og omegn, herunder {SERVICE_AREAS.join(', ')} og resten af Fyn. Inden for Odense kommune beregner vi intet kørselstillæg, og du kan altid forvente gennemsigtige <Link href="/priser" className="text-accent hover:underline">priser</Link> uden overraskelser.
              </p>
              <p>
                Vores tilbudsproces er enkel: Du kontakter os med din opgave, vi vurderer omfanget (eventuelt ved en gratis besigtigelse), og du modtager et detaljeret tilbud med fast pris. Først når du accepterer tilbuddet, går vi i gang. Det er 100% uforpligtende at få et tilbud — så tøv ikke med at kontakte os, selv for små opgaver.
              </p>
              <p>
                Vi har et tæt samarbejde med mange boligejere og ejerforeninger i Odense-området. Flere af vores kunder vender tilbage til os år efter år, fordi de ved at vi leverer kvalitetsarbejde til fair priser. Vi er stolte af vores kundetilfredshed på 98 procent og de mange anbefalinger vi modtager. Vores mål er at gøre el-arbejde trygt og problemfrit for dig — fra den første henvendelse til den færdige opgave.
              </p>
              <p>
                Vi er tilgængelige i vores normale åbningstid mandag til fredag fra 07 til 17, og lørdag fra 09 til 14. Ved akutte el-problemer er vi klar 24 timer i døgnet, 7 dage om ugen. Du kan altid nå os via email på {EMAIL}, eller ved at udfylde kontaktformularen ovenfor. Vi glæder os til at høre fra dig og hjælpe dig med dit el-projekt i Odense.
              </p>
              <p>
                Vi udfører alle typer el-arbejde, fra <Link href="/eltjek" className="text-accent hover:underline">eltjek og sikringsservice</Link> til komplet <Link href="/el-installation" className="text-accent hover:underline">el-installation</Link> og professionel <Link href="/belysning" className="text-accent hover:underline">belysning</Link>. Alt udføres af autoriserede elektrikere med mange års erfaring i Odense-området.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sådan kommer du i gang</h3>
              <p>
                Det er nemt at komme i gang med dit el-projekt. Udfyld kontaktformularen herover — vi svarer inden for 2 timer. Du kan også sende en email til {EMAIL} med en beskrivelse af din opgave. Vi vurderer opgaven, aftaler en eventuel besigtigelse og sender dig et detaljeret tilbud med fast pris.
              </p>
              <p>
                Vores elektrikere kører dagligt til kunder i Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro og Skt. Klemens. Vi kender de lokale forhold og de typiske el-installationer i Odense-området. Som autoriseret el-installatør med over 30 års samlet erfaring i teamet, kan du stole på at vi leverer professionelt arbejde til konkurrencedygtige <Link href="/priser" className="text-accent hover:underline">priser</Link>. Vi er klar til at hjælpe dig — uanset om det er en lille reparation eller et større projekt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Extended Content */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Hvorfor vælge Odense Elektriker?</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Når du vælger en elektriker i Odense, er det vigtigt at vælge en der er autoriseret, erfaren og pålidelig. Hos Odense Elektriker opfylder vi alle tre kriterier. Vi er fuldt autoriserede el-installatører med alle nødvendige certificeringer, og vi har over 30 års samlet erfaring i teamet. Vi har hjulpet mere end 2.500 kunder i Odense-området med alt fra simple reparationer til komplekse installationsprojekter.
              </p>
              <p>
                Vores kunder sætter pris på vores ærlighed og gennemsigtighed. Vi giver altid et detaljeret tilbud inden vi starter, og vi holder os til den aftalte pris. Ingen skjulte gebyrer, ingen overraskelser. Vi overholder altid aftalte tider og efterlader arbejdspladsen pæn og ryddelig. Det er disse simple principper der har gjort os til en af Odenses mest anbefalede elektrikere med en kundetilfredshed på 98 procent.
              </p>
              <p>
                Vi er lokalt forankret med kontor centralt i Odense, hvilket betyder hurtige responstider og ingen unødvendige kørselstillæg for kunder i kommunen. Vi kender de lokale bygningstyper og deres typiske el-installationer — fra de smukke murermestervillaer i Odense C til parcelhusene i Bellinge og de nyere boliger i Odense SØ. Denne lokalkendskab gør os hurtigere og mere effektive, hvilket kommer dig til gode som kunde.
              </p>
              <p>
                Uanset om du har brug for et <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link>, en ny <Link href="/el-installation" className="text-accent hover:underline">el-installation</Link>, professionel <Link href="/belysning" className="text-accent hover:underline">belysning</Link>, en <Link href="/ladestandere" className="text-accent hover:underline">ladestander til elbilen</Link>, eller <Link href="/akut" className="text-accent hover:underline">akut hjælp</Link> midt om natten — vi er her for dig. Kontakt os i dag og oplev forskellen ved at vælge en lokal, autoriseret elektriker i Odense der tager stolthed i sit arbejde. Se vores <Link href="/priser" className="text-accent hover:underline">gennemsigtige priser</Link> for konkrete tal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner />
    </>
  )
}
