'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import ScrollReveal from '@/components/ScrollReveal'
import JsonLd from '@/components/JsonLd'
import { SERVICE_AREAS } from '@/lib/constants'

const timeline = [
  { phase: 'Dag 1', title: 'Besigtigelse & tilbud', desc: 'Vi besøger dig, gennemgår dine ønsker og laver et detaljeret tilbud med fast pris. Ingen overraskelser.' },
  { phase: 'Dag 2-3', title: 'Projektering', desc: 'Vi udarbejder en komplet installationsplan med dimensionering af kabler, sikringer og placering af komponenter.' },
  { phase: 'Uge 1-2', title: 'Installation', desc: 'Vores autoriserede elektrikere udfører installationen professionelt og med minimal forstyrrelse af din hverdag.' },
  { phase: 'Afslutning', title: 'Test & overdragelse', desc: 'Grundig test af alle installationer, dokumentation og gennemgang med dig. Du får en komplet installationsrapport.' },
]

const services = [
  { title: 'Ny el-installation', desc: 'Komplet el-installation i nybyg eller tilbygninger. Vi dimensionerer og installerer hele el-anlægget fra eltavle til stikkontakter, belysning og specialinstallationer. Alt udføres efter gældende regler og med fremtidssikret kapacitet.' },
  { title: 'Renovering af el-anlæg', desc: 'Modernisering af ældre el-installationer til nutidens standarder. Vi udskifter forældede komponenter, opgraderer eltavlen og sikrer at dit anlæg lever op til alle sikkerhedskrav. Særligt vigtigt i boliger fra 1960-1980.' },
  { title: 'Stikkontakter & afbrydere', desc: 'Installation af nye stikkontakter, afbrydere, dimmere og USB-udtag. Vi placerer dem præcis hvor du har brug for dem og sørger for at kredsløbene er korrekt dimensioneret. Vi tilbyder også smarte løsninger med trådløs styring.' },
  { title: 'Eltavle-opgradering', desc: 'Udskiftning og opgradering af eltavler med moderne sikringsautomater og fejlstrømsafbrydere (HPFI/RCD). En tidssvarende eltavle er grundlaget for et sikkert el-anlæg og giver plads til fremtidige udvidelser.' },
  { title: 'Erhvervsinstallationer', desc: 'El-installation til kontor, butik, lager og produktion. Vi håndterer alt fra 3-faset kraftinstallationer til netværkskabler og belysningsanlæg. Altid med minimalt driftstab for din virksomhed.' },
  { title: 'Smarthome & automation', desc: 'Installation af intelligente el-systemer til dit hjem. Styring af lys, varme, persienner og overvågning fra din smartphone. Vi rådgiver om de bedste løsninger og sikrer pålidelig integration.' },
]

const faqItems = [
  { question: 'Hvad koster en ny el-installation i Odense?', answer: 'Prisen for en ny el-installation afhænger af boligens størrelse og omfanget af arbejdet. En typisk el-installation i et parcelhus ligger mellem 50.000-150.000 kr. ekskl. moms. Vi giver altid et detaljeret tilbud med fast pris inden arbejdet påbegyndes, så du kender den præcise pris.' },
  { question: 'Hvor lang tid tager en el-installation?', answer: 'En komplet el-installation i et gennemsnitligt parcelhus tager typisk 1-3 uger afhængigt af omfanget. Mindre opgaver som installation af nye stikkontakter eller eltavle-opgradering kan ofte klares på 1-2 dage. Vi aftaler altid en realistisk tidsplan med dig.' },
  { question: 'Skal jeg have tilladelse til el-arbejde?', answer: 'Alt el-arbejde i Danmark skal udføres af en autoriseret el-installatør. Du behøver ikke selv søge tilladelse — vi sørger for al nødvendig dokumentation og anmeldelse til myndighederne. Vi sikrer at alt overholder Stærkstrømsbekendtgørelsen.' },
  { question: 'Kan I lave el-arbejde i ældre huse?', answer: 'Ja, vi har stor erfaring med el-renovering i ældre ejendomme i Odense. Uanset om det er en murermestervilla fra 1930erne eller et typehus fra 1970erne, kan vi opgradere installationen til moderne standarder. Vi tager særligt hensyn til bygningens karakter.' },
  { question: 'Tilbyder I garanti på el-installation?', answer: 'Ja, vi giver 5 års garanti på alt installationsarbejde. Derudover er du dækket af den lovpligtige el-installatøransvarsforsikring. Hvis der opstår problemer, er vi klar til at hjælpe hurtigt og effektivt.' },
]

export default function ElInstallationContent() {
  return (
    <>
      <JsonLd
        page="el-installation"
        breadcrumbItems={[{ name: 'El-installation', url: '/el-installation' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'El-installation' }]} />

      {/* Hero */}
      <section className="pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm text-gray-500 mb-4">Af <strong>Fyn El-Service Team</strong> · Opdateret marts 2026</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Professionel{' '}
              <span className="gradient-text">el-installation</span>
              <br />i Odense
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-8">
              Fra nye stikkontakter til komplet renovering af dit el-anlæg — vi leverer el-installationer af højeste kvalitet i hele Odense-området. Vores autoriserede elektrikere har over 15 års erfaring med alle typer el-installationer til både private boliger og erhverv, fra {SERVICE_AREAS[0]} til {SERVICE_AREAS[SERVICE_AREAS.length - 1]}.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              En professionel el-installation er fundamentet for et sikkert og funktionelt hjem. Uanset om du bygger nyt, renoverer eller blot har brug for ekstra stikkontakter, sikrer vi at alt arbejde udføres korrekt og efter gældende lovgivning. Vi rådgiver dig om de bedste løsninger til dit behov og budget, og vi giver altid et fast tilbud inden vi starter. Har du brug for et <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link> inden renovering? Vi hjælper med det hele.
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
                src="/images/el-installation-stikkontakt.jpg"
                alt="Elektriker installerer nye stikkontakter i bolig i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/el-installation-ny.jpg"
                alt="Ny el-installation med kabelføring i nybyggeri i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vores el-installationsservices</h2>
            <p className="text-gray-text text-lg">Alt fra enkle opgaver til komplette installationer — vi klarer det hele</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-8 bg-dark border border-gray-border/30 rounded-2xl card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sådan forløber dit projekt</h2>
            <p className="text-gray-text text-lg">En struktureret proces fra start til slut</p>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-border/30" />

            <div className="space-y-12">
              {timeline.map((t, i) => (
                <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-2">{t.phase}</span>
                      <h3 className="text-xl font-semibold mb-2">{t.title}</h3>
                      <p className="text-gray-text leading-relaxed">{t.desc}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-dark shrink-0 z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">El-installation i Odense — hvad du bør vide</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Når det kommer til el-installation i Odense, er kvalitet og sikkerhed altafgørende. Alt el-arbejde i Danmark skal udføres af en autoriseret el-installatør, og det er der god grund til. Forkert udført el-arbejde kan medføre alvorlige risici som brand og elektrisk stød. Hos Fyn El-Service tager vi sikkerhed seriøst og sikrer, at enhver installation overholder Stærkstrømsbekendtgørelsen og gældende sikkerhedsstandarder.
              </p>
              <p>
                Mange boligejere i Odense bor i ejendomme med ældre el-installationer, der ikke lever op til moderne krav. Særligt boliger fra 1960&apos;erne og 1970&apos;erne har ofte installationer med aluminium-ledninger, forældede sikringer og manglende fejlstrømsafbrydere. En modernisering af el-anlægget øger både sikkerheden og komforten i dit hjem, og det kan også spare dig penge på el-regningen ved at optimere installationen.
              </p>
              <p>
                Vi anbefaler at få udført et <Link href="/eltjek" className="text-accent hover:underline">professionelt eltjek</Link> inden større renoveringer for at få et klart overblik over installationens tilstand. Overvejer du også at opgradere din <Link href="/belysning" className="text-accent hover:underline">belysning</Link> i forbindelse med renoveringen, kan vi kombinere opgaverne og spare dig tid og penge.
              </p>
              <p>
                For elbilsejere tilbyder vi desuden installation af <Link href="/ladestandere" className="text-accent hover:underline">ladestandere</Link>, som kræver en korrekt dimensioneret el-installation. Vi hjælper med at vurdere om din nuværende installation kan håndtere belastningen, eller om der er behov for opgradering.
              </p>
              <p>
                Uanset om du er i {SERVICE_AREAS[0]}, {SERVICE_AREAS[3]} eller {SERVICE_AREAS[5]}, er vi klar til at hjælpe med din el-installation. <Link href="/kontakt" className="text-accent hover:underline">Kontakt os</Link> for et uforpligtende tilbud, eller se vores <Link href="/priser" className="text-accent hover:underline">gennemsigtige priser</Link>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Typiske el-installationsprojekter i Odense</h3>
              <p>
                Vi udfører dagligt el-installationer i hele Odense-området. Nogle af de mest efterspurgte opgaver inkluderer installation af ekstra stikkontakter i køkken og stue, opgradering af eltavler med moderne sikringsautomater, installation af USB-udtag ved sengepladser og arbejdsborde, samt komplet renovering af el-anlæg i ældre boliger. For nybyggeri håndterer vi hele el-installationen fra projektering til færdig aflevering.
              </p>
              <p>
                I Bellinge og Dalum ser vi mange villaejere der ønsker smarthome-integration med intelligent styring af lys, varme og persienner. I Odense C er der stor efterspørgsel på modernisering af ældre lejligheder, hvor el-installationerne ofte er fra 1950&apos;erne eller 1960&apos;erne og ikke lever op til moderne standarder. Vi tilpasser altid løsningen til den konkrete ejendom og kundens behov.
              </p>
              <p>
                Som autoriseret el-installatør med over 30 års erfaring i teamet, sikrer vi at alt arbejde udføres efter Stærkstrømsbekendtgørelsen. Vi giver 5 års garanti på alt installationsarbejde og er dækket af el-installatøransvarsforsikring. Din sikkerhed er vores højeste prioritet — det er derfor vi aldrig gå på kompromis med kvaliteten af materialer eller håndværk.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">El-installation til erhverv i Odense</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Udover private boliger udfører vi også el-installationer for erhvervskunder i hele Odense-området. Vi har erfaring med kontorer, butikker, restauranter, lagre og produktionslokaler. For erhvervskunder er det afgørende at el-installationen er pålidelig og dimensioneret korrekt, da nedetid kan koste dyrt. Vi planlægger derfor altid installationen med minimal forstyrrelse af den daglige drift.
              </p>
              <p>
                Typiske erhvervsopgaver inkluderer installation af 3-faset kraft til maskiner og udstyr, opgradering af belysning til energieffektive LED-løsninger, installation af netværk og datakabler, nødbelysning og flugtvejsskilte, samt eltavle-dimensionering til høje belastninger. Vi arbejder tæt sammen med bygherrer, arkitekter og andre håndværkere for at sikre en koordineret og effektiv installation.
              </p>
              <p>
                For butikker i Odense C installerer vi specialbelysning der sætter varerne i det bedste lys. For kontorer i Bolbro og Odense NV leverer vi ergonomisk arbejdspladsbelysning med dagslyssensorer. Og for produktionsvirksomheder sikrer vi kraftig, energieffektiv belysning og korrekt dimensionerede kraftinstallationer. Alt udføres af autoriserede elektrikere med den nødvendige erfaring og certificering, og vi giver altid 5 års garanti på vores arbejde.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="Brug for ny el-installation?" subtitle="Kontakt os for et gratis og uforpligtende tilbud. Vi svarer inden for 2 timer — og vi dækker hele Odense-området." />
    </>
  )
}
