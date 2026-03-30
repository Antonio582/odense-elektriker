'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { SERVICE_AREAS } from '@/lib/constants'

const chargers = [
  { name: 'Basis', power: '3,7 kW', type: 'Mode 2 / stikkontakt', chargeTime: '12-18 timer (fuldt)', price: 'Fra 4.995', features: ['Enkel installation', 'Bruger eksisterende stikkontakt', 'Ingen gravearbejde', 'Ideel til plug-in hybrider'], recommended: false },
  { name: 'Smart Home', power: '7,4 kW', type: 'Mode 3 / Type 2', chargeTime: '5-8 timer (fuldt)', price: 'Fra 12.995', features: ['WiFi-tilsluttet', 'App-styring', 'Tidsplanlægning', 'Dynamisk lastbalancering', 'RFID-adgangskontrol', 'Ideel til de fleste elbiler'], recommended: true },
  { name: 'Power', power: '11 kW', type: 'Mode 3 / Type 2 (3-faset)', chargeTime: '3-5 timer (fuldt)', price: 'Fra 18.995', features: ['3-faset tilslutning', 'Hurtigst hjemmeladning', 'WiFi + 4G', 'MID-godkendt måler', 'Solar-integration', 'Til krævende brugere'], recommended: false },
]

const processSteps = [
  { step: '1', title: 'Gratis rådgivning', desc: 'Vi hjælper dig med at vælge den rigtige ladestander baseret på din bil, dit kørselsmønster og din eksisterende el-installation.' },
  { step: '2', title: 'Besigtigelse', desc: 'Vi besøger dig og vurderer installationsforholdene, eltavlens kapacitet og den optimale placering af ladestanderen.' },
  { step: '3', title: 'Tilbud & tilskud', desc: 'Du modtager et fast tilbud, og vi hjælper med at ansøge om relevante tilskudsordninger til nedsættelse af prisen.' },
  { step: '4', title: 'Installation', desc: 'Vores autoriserede elektrikere installerer ladestanderen professionelt, typisk på under én dag. Alt testes grundigt inden aflevering.' },
]

const faqItems = [
  { question: 'Hvad koster installation af en ladestander i Odense?', answer: 'En komplet ladestander-installation starter fra ca. 5.000 kr. for en enkel løsning og op til 25.000+ kr. for en avanceret 3-faset installation. Prisen inkluderer ladestander, materialer og installation. Den endelige pris afhænger af afstanden fra eltavle til ladestanderens placering og om der er behov for opgradering af eltavlen.' },
  { question: 'Kan min el-installation håndtere en ladestander?', answer: 'Det afhænger af din nuværende installation. De fleste moderne boliger kan håndtere en 7,4 kW ladestander uden problemer. For ældre installationer eller 11 kW ladere kan der være behov for opgradering af eltavlen eller hovedsikringen. Vi vurderer dette ved besigtigelsen og inkluderer eventuelle opgraderinger i tilbuddet.' },
  { question: 'Hvor lang tid tager installationen?', answer: 'En standard installation tager typisk 3-6 timer afhængigt af forholdene. Hvis der er behov for kabelføring over længere afstande eller eltavle-opgradering, kan det tage en hel dag. Vi aftaler altid en præcis tidsplan med dig inden vi starter.' },
  { question: 'Findes der tilskud til ladestandere?', answer: 'Ja, der har været flere tilskudsordninger til private ladestandere i Danmark. Ordningerne skifter løbende, så vi holder os opdateret og hjælper dig med at ansøge om relevante tilskud. Kontakt os for aktuel information om tilgængelige tilskudsordninger i Odense-området.' },
  { question: 'Kan jeg lade min elbil i regnvejr?', answer: 'Ja, absolut! Alle godkendte ladestandere er designet til udendørs brug med IP-klassificering der beskytter mod regn, sne og støv. Installation og tilslutning skal dog udføres af en autoriseret elektriker for at sikre korrekt jordforbindelse og vandtæthed.' },
]

export default function LadestandarderContent() {
  const [tilskudProcent] = useState(0)
  const formatPrice = (price: string) => {
    const num = parseInt(price.replace(/[^0-9]/g, ''))
    if (isNaN(num)) return price
    const reduced = Math.round(num * (1 - tilskudProcent / 100))
    return `Fra ${reduced.toLocaleString('da-DK')}`
  }

  return (
    <>
      <JsonLd
        page="ladestandere"
        breadcrumbItems={[{ name: 'Ladestandere', url: '/ladestandere' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Ladestandere' }]} />

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
              <span className="gradient-text">Ladestandere</span>
              <br />til elbiler i Odense
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-8">
              Opladning af din elbil behøver ikke være besværligt. Vi installerer ladestandere til private og erhverv i hele Odense-området. Fra rådgivning og valg af model til installation og tilskudsansøgning — vi håndterer det hele. Vores autoriserede elektrikere sikrer en sikker og effektiv installation, der passer til netop din bil og dit forbrug.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              Med en hjemmeladestander kan du lade din elbil bekvemt derhjemme mens du sover eller arbejder. Det er billigere end offentlig ladning, og du har altid en fuld bil klar om morgenen. Vi dækker hele Odense fra {SERVICE_AREAS[0]} til {SERVICE_AREAS[6]}. Vores erfarne team har installeret hundredvis af ladestandere i Odense-området, og vi kender de lokale forhold og el-infrastrukturen indgående. Sørg for at din <Link href="/el-installation" className="text-accent hover:underline">el-installation</Link> er i orden inden opgradering.
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
                src="/images/ladestander-elbil.jpg"
                alt="Elbil oplades ved hjemme-ladestander installeret af elektriker i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/ladestander-installation.jpg"
                alt="Professionel installation af EV-ladestander i garage i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vælg din ladestander</h2>
            <p className="text-gray-text text-lg">Vi tilbyder løsninger til alle behov og budgetter. Alle priser er ekskl. moms og installation.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chargers.map((c, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`relative p-8 rounded-2xl border h-full flex flex-col ${c.recommended ? 'bg-dark border-accent/50' : 'bg-dark border-gray-border/30'}`}>
                  {c.recommended && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-dark text-xs font-bold rounded-full">
                      Anbefalet
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{c.name}</h3>
                  <div className="text-sm text-gray-text mb-4">{c.power} • {c.type}</div>
                  <div className="text-3xl font-bold text-accent mb-1">{formatPrice(c.price)} <span className="text-base text-gray-text font-normal">kr.</span></div>
                  <div className="text-xs text-gray-text mb-6">Ladetid: {c.chargeTime}</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {c.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-text text-sm">
                        <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                      c.recommended ? 'bg-accent text-dark glow-btn' : 'border border-accent/50 text-accent hover:bg-accent/10'
                    }`}
                  >
                    Få tilbud
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Installationsprocessen</h2>
            <p className="text-gray-text text-lg">Fra første kontakt til fuldt installeret ladestander — vi guider dig hele vejen</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-accent">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Alt om ladestandere til elbiler i Odense</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Salget af elbiler i Danmark er eksploderet de seneste år, og med det er behovet for private ladestandere vokset tilsvarende. Som elbilsejer i Odense er en hjemmeladestander den mest bekvemme og økonomiske måde at holde din bil opladet. Du slipper for at planlægge ture til offentlige ladestationer, og du udnytter billigere strøm i nattetimerne.
              </p>
              <p>
                Installation af en ladestander kræver en autoriseret elektriker, da det involverer højspænding og dedikerede kredsløb. En forkert installation kan medføre brandfare eller beskadigelse af din bil. Hos Odense Elektriker har vi installeret over 500 ladestandere i Odense og på Fyn, og vi kender de lokale udfordringer — fra ældre eltavler i {SERVICE_AREAS[0]} til nye byggerier i {SERVICE_AREAS[2]}.
              </p>
              <p>
                Inden installationen anbefaler vi et <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link> for at vurdere din installations kapacitet. Mange ældre boliger har hovedsikringer på 25A eller 35A, hvilket kan kræve opgradering til 50A eller 63A for at håndtere en 11 kW ladestander sikkert. Vi inkluderer altid denne vurdering i vores besigtigelse.
              </p>
              <p>
                Dynamisk lastbalancering er en smart funktion vi anbefaler til de fleste installationer. Den sørger for, at ladestanderen automatisk tilpasser sin effekt baseret på boligens øvrige elforbrug. Så hvis du tænder komfuret mens bilen lader, reduceres ladeeffekten automatisk for at undgå overbelastning. Det giver tryghed og forhindrer at hovedsikringen springer.
              </p>
              <p>
                Se vores <Link href="/priser" className="text-accent hover:underline">gennemsigtige priser</Link> for konkrete tal, eller <Link href="/kontakt" className="text-accent hover:underline">kontakt os</Link> for en uforpligtende snak om dine muligheder. Vi er klar til at hjælpe dig med den perfekte ladeløsning.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Ladestander-installation i praksis — typiske scenarier</h3>
              <p>
                De fleste af vores ladestander-installationer i Odense følger et lignende mønster. En typisk installation i en carport eller garage i Bellinge eller Dalum tager 3-5 timer og inkluderer kabelføring fra eltavlen, montering af ladestanderen, konfiguration af WiFi-tilslutning og grundig test. Afstanden fra eltavle til ladeplads er den vigtigste prisfaktor — jo længere kabelføring, desto højere pris.
              </p>
              <p>
                I etageejendomme og rækkehusforeninger i Odense C og Odense SØ er installationen ofte mere kompleks, da kablet skal føres gennem fællesarealer. Her hjælper vi også med at rådgive ejerforeningens bestyrelse og udarbejde et forslag der tager hensyn til flere beboeres fremtidige ladebehov. Vi har installeret ladestander-løsninger i flere ejendomsforeninger i Odense og kender de typiske udfordringer.
              </p>
              <p>
                For erhvervskunder tilbyder vi installation af flerbruger-ladestandere med RFID-adgangskontrol og individuel forbrugsmåling. Det er relevant for virksomheder der vil tilbyde ladning til medarbejdere eller kunder. Vi sørger for korrekt dimensionering af el-installationen, lastbalancering og integration med virksomhedens eksisterende el-anlæg. Kontakt os for en uforpligtende snak om dine muligheder som autoriseret el-installatør i Odense med over 30 års samlet erfaring.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Ladestandere til ejerforeninger og boligforeninger</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Installation af ladestandere i ejerforeninger og boligforeninger i Odense kræver særlig planlægning og koordinering. Vi har stor erfaring med disse projekter og hjælper med hele processen — fra rådgivning af bestyrelsen til den færdige installation. Vi udarbejder et samlet forslag der tager hensyn til både nuværende og fremtidige ladebehov i foreningen.
              </p>
              <p>
                En typisk foreningsinstallation i Odense C eller Odense SØ inkluderer etablering af en fælles eltavle til ladestandere med individuelle målere for hver bruger. Vi installerer dynamisk lastbalancering der fordeler den tilgængelige effekt mellem alle aktive ladestandere, så bygningens el-forsyning aldrig overbelastes. Det betyder at flere beboere kan lade samtidig uden risiko for at hovedsikringen springer.
              </p>
              <p>
                Vi anbefaler at foreninger planlægger fremtidssikret kabelføring, selv om ikke alle parkeringspladser skal have ladestander fra starten. Ved at føre hovedkablerne fra eltavlen til parkeringsområdet under den første installation, sparer foreningen betydeligt på de efterfølgende installationer. Kontakt os for en uforpligtende gennemgang af jeres forenings muligheder — vi kommer gerne ud og vurderer forholdene. <Link href="/kontakt" className="text-accent hover:underline">Kontakt os</Link> eller <Link href="/kontakt" className="text-accent hover:underline">udfyld kontaktformularen</Link> for at komme i gang. Se vores <Link href="/priser" className="text-accent hover:underline">priser</Link> for konkrete tal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="Klar til hjemmeladning?" subtitle="Kontakt os for et gratis tilbud på installation af ladestander i Odense. Vi svarer inden for 2 timer." />
    </>
  )
}
