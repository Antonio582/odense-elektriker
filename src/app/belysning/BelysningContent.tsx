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

const categories = [
  {
    title: 'Indendørs belysning',
    items: [
      { name: 'Spotlys & downlights', desc: 'Diskret og effektiv belysning med indbygningsspot i loft eller vægge. Perfekt til stue, køkken og badeværelse. Vi installerer både faste og justerbare spots med optimal placering.' },
      { name: 'Pendler & lysekroner', desc: 'Installation af pendler over spisebord, køkkenø eller i entréen. Vi sørger for korrekt ophæng, kabelføring og dimmer-funktion til den perfekte stemning.' },
      { name: 'LED-strips & indirekte lys', desc: 'Stemningsfuld indirekte belysning med LED-strips i hylder, under køkkenelementer, langs lofter eller som trappe-belysning. Energieffektivt og med uendelige muligheder.' },
      { name: 'Badeværelsesbelysning', desc: 'Specialbelysning til vådrum med korrekt IP-klassificering. Spejlbelysning, loftsspot og accentlys der overholder alle sikkerhedskrav for installation i badeværelser.' },
    ],
  },
  {
    title: 'Udendørs belysning',
    items: [
      { name: 'Havebelysning', desc: 'Professionel belysning af have, terrasse og indkørsel. Pullertlamper, spot til træer og facade, og stemningsbelysning der forlænger din udendørs sæson.' },
      { name: 'Facadebelysning', desc: 'Oplys dit hus med elegant facadebelysning der fremhæver arkitekturen. Vi installerer up/down-lights, wash-lights og spots tilpasset din bolig.' },
      { name: 'Sikkerhedsbelysning', desc: 'Bevægelsessensorer og automatisk belysning ved indgange, carport og sti. Øger tryghed og forebygger indbrud med intelligent lysautomatik.' },
      { name: 'Terrassebelysning', desc: 'Skab den perfekte stemning på terrassen med indfældet belysning, lyskæder eller diskrete spots. Vejrbestandige løsninger der holder i mange år.' },
    ],
  },
  {
    title: 'Erhvervsbelysning',
    items: [
      { name: 'Kontorbelysning', desc: 'Ergonomisk belysning der reducerer træthed og øger produktivitet. Panellamper, arbejdspladsbelysning og dagslysstyring tilpasset dit kontor.' },
      { name: 'Butiksbelysning', desc: 'Belysning der sætter dine varer i det bedste lys. Spotlys til udstilling, stemningsbelysning og skalerbare løsninger til retail.' },
      { name: 'Lagerbelysning', desc: 'Kraftig og energieffektiv belysning til lager og produktion. LED-industriarmaturer med lang levetid og lavt energiforbrug.' },
      { name: 'Nødbelysning', desc: 'Lovpligtig nødbelysning og flugtvejsskilte til erhvervsejendomme. Vi installerer, servicerer og tester i henhold til gældende krav.' },
    ],
  },
]

const faqItems = [
  { question: 'Hvad koster professionel belysningsinstallation i Odense?', answer: 'Prisen varierer afhængigt af opgavens omfang. Installation af et enkelt spotlight koster typisk 800-1.200 kr. inkl. materialer, mens et komplet belysningsprojekt for et parcelhus ligger mellem 15.000-50.000 kr. Vi giver altid et detaljeret tilbud inden arbejdet påbegyndes.' },
  { question: 'Kan I hjælpe med belysningsdesign?', answer: 'Ja, vi tilbyder rådgivning om belysningsdesign som en del af vores service. Vi vurderer dine rum, behov og ønsker, og udarbejder et belysningsforslag med optimal placering af lyskilder, farvetemp og styrke. Vi samarbejder også gerne med din arkitekt eller indretningsarkitekt.' },
  { question: 'Er LED-belysning virkelig billigere?', answer: 'Ja, LED bruger op til 85% mindre energi end traditionelle pærer og holder 25-50 gange længere. En typisk husstand sparer 3.000-6.000 kr. årligt ved at skifte til LED. Investeringen er typisk tjent hjem inden for 1-2 år, og vi hjælper dig med at vælge de bedste LED-løsninger.' },
  { question: 'Kan I installere smart belysning?', answer: 'Absolut! Vi installerer smart belysning fra førende mærker som Philips Hue, IKEA TRÅDFRI og Casambi. Styr dit lys fra telefonen, med stemmen eller via automatiske tidsplaner. Vi sørger for korrekt installation af dimmere, trådløse kontakter og integration med dit smarthome-system.' },
  { question: 'Hvad skal man overveje ved udendørs belysning?', answer: 'Ved udendørs belysning er IP-klassificering (vandtæthed) afgørende. Vi anbefaler minimum IP44 til overdækkede områder og IP65+ til fuldt eksponerede steder. Desuden bør du overveje lysstyrke (lumen), farvetemperatur (varm/kold) og om du ønsker bevægelsessensor. Vi rådgiver dig om alle aspekter.' },
]

export default function BelysningContent() {
  return (
    <>
      <JsonLd
        page="belysning"
        breadcrumbItems={[{ name: 'Belysning', url: '/belysning' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Belysning' }]} />

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
              <span className="gradient-text">belysning</span>
              <br />i Odense
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-8">
              God belysning forvandler dit hjem, din have og din arbejdsplads. Vi designer og installerer belysningsløsninger der kombinerer æstetik, funktionalitet og energieffektivitet. Fra diskrete spotlys til dramatiske facadebelysninger — vores autoriserede elektrikere i Odense skaber det perfekte lys til ethvert rum og formål.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              Belysning handler ikke kun om at kunne se — det handler om at skabe stemning, fremhæve arkitektur og forbedre trivsel. Med de rette lyskilder kan du gøre et mørkt rum indbydende, en have magisk og en arbejdsplads mere produktiv. Vi hjælper kunder i hele Odense-området, fra {SERVICE_AREAS[0]} til {SERVICE_AREAS[5]}, med skræddersyede belysningsløsninger. Kombinér gerne med en <Link href="/el-installation" className="text-accent hover:underline">el-installation</Link> for det bedste resultat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/belysning-indendors.jpg"
                alt="Moderne LED-belysning installeret i stue af elektriker i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/belysning-udendors.jpg"
                alt="Professionel udendørs havebelysning installeret i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <section key={ci} className={`py-20 ${ci % 2 === 1 ? 'bg-dark-light' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">{cat.title}</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cat.items.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group p-8 bg-dark border border-gray-border/30 rounded-2xl card-hover h-full relative overflow-hidden">
                    {/* Decorative light beam */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:bg-accent/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                        <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{item.name}</h3>
                      <p className="text-gray-text text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* LED Upgrade Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-dark-light border border-accent/20 rounded-2xl p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">LED-opgradering — spar op til 85% på dit elforbrug</h2>
                <div className="text-gray-text leading-relaxed space-y-4">
                  <p>
                    Bruger du stadig halogenpærer eller gammeldags glødepærer? Så betaler du sandsynligvis alt for meget for din belysning. En opgradering til LED kan reducere dit energiforbrug til belysning med op til 85%, og moderne LED-pærer holder 25.000-50.000 timer — det er over 20 år ved normal brug.
                  </p>
                  <p>
                    Vi tilbyder en komplet LED-opgraderingsservice, hvor vi gennemgår alle dine lyskilder og udskifter dem med energieffektive LED-alternativer. Vi sørger for at farvetemperatur og lysstyrke matcher dine ønsker, og vi installerer dimmere hvor det giver mening. En typisk husstand kan spare 3.000-6.000 kr. årligt efter opgradering.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: '85%', label: 'Energibesparelse' },
                    { value: '25+', label: 'Års levetid' },
                    { value: '6.000', label: 'Kr. sparet/år' },
                    { value: '1-2', label: 'Års tilbagebetalingstid' },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-accent">{stat.value}</div>
                      <div className="text-xs text-gray-text mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Content */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Belysningsinstallation i Odense — vores tilgang</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Hos Fyn El-Service tilgår vi belysning som et fagområde der kræver mere end bare at sætte en lampe op. Vi starter med at forstå dine behov — hvordan bruger du rummet, hvilken stemning ønsker du, og hvad er dit budget? Ud fra det designer vi en belysningsplan der optimerer lysforholdene og minimerer energiforbruget.
              </p>
              <p>
                Vi arbejder med alle typer belysningsteknologi fra førende producenter. Vores elektrikere er uddannet i de nyeste installationsteknikker og holder sig opdateret med trends inden for belysningsdesign. Vi installerer alt fra simple stikkontaktløsninger til avancerede DALI-styrede systemer i erhvervsejendomme.
              </p>
              <p>
                Uanset om du bor i en lejlighed i {SERVICE_AREAS[0]}, en villa i {SERVICE_AREAS[3]} eller driver virksomhed i {SERVICE_AREAS[5]}, garanterer vi en professionel installation der lever op til alle sikkerhedskrav. Kombinér din belysningsopgradering med et <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link> for at sikre at din el-installation kan håndtere de nye belastninger. Se vores <Link href="/priser" className="text-accent hover:underline">prisside</Link> for konkrete priser, eller <Link href="/kontakt" className="text-accent hover:underline">kontakt os</Link> direkte for et uforpligtende tilbud.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Typiske belysningsprojekter i Odense</h3>
              <p>
                Vi hjælper dagligt kunder i hele Odense-området med belysningsprojekter i alle størrelser. Et af de mest populære projekter er komplet LED-opgradering af parcelhuse, hvor vi udskifter alle gamle halogen- og glødepærer med moderne LED-løsninger. Det reducerer elforbruget til belysning med op til 85%, og de nye pærer holder i 20-25 år. For et gennemsnitligt hus i Bellinge eller Dalum kan besparelsen nemt løbe op i 4.000-6.000 kr. om året.
              </p>
              <p>
                Et andet populært projekt er installation af udendørs belysning til haver og facader. Mange villaejere i Odense SØ og Skt. Klemens ønsker at forlænge den udendørs sæson med stemningsfuld havebelysning, pullertlamper langs stier og elegant facadebelysning. Vi designer løsningen efter din haves layout og installerer vejrbestandige armaturer med IP65-klassificering, så de holder i mange år uanset vejret.
              </p>
              <p>
                For erhvervskunder installerer vi energieffektiv kontorbelysning med dagslyssensorer, butiksbelysning der fremhæver varerne, og lovpligtig nødbelysning i henhold til gældende krav. Vi har erfaring med projekter i alle størrelser — fra mindre butikker i Odense C til større lagerhaller i industriområderne. Som autoriseret el-installatør med over 30 års samlet erfaring i teamet, kan du stole på at arbejdet udføres korrekt og efter alle gældende regler.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Smart belysning og automatik i Odense</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Smart belysning er blevet enormt populært de seneste år, og med god grund. Med et intelligent belysningssystem kan du styre alt lys i dit hjem fra din smartphone, med stemmen via Google Home eller Amazon Alexa, eller via automatiske tidsplaner og sensorer. Vi installerer smart belysning fra de mest populære platforme, herunder Philips Hue, IKEA TRÅDFRI og Casambi.
              </p>
              <p>
                En typisk smart belysningsinstallation i en villa i Bellinge eller Dalum inkluderer udskiftning af eksisterende afbrydere med smarte dimmere, installation af trådløse kontakter til områder uden eksisterende kabelføring, opsætning af automatiske tidsplaner der tænder og slukker lyset baseret på dine vaner, og integration med bevægelsessensorer der automatisk tænder lyset når du kommer hjem. Vi sørger for at hele systemet fungerer pålideligt og er nemt at betjene.
              </p>
              <p>
                For erhvervskunder tilbyder vi DALI-styrede belysningssystemer der giver fuld kontrol over alle lyskilder i bygningen. DALI-systemer er ideelle til kontorer, butikker og andre erhvervslokaler, hvor belysningsbehovene varierer i løbet af dagen. Vi designer, programmerer og installerer komplette DALI-anlæg tilpasset dine specifikke behov. Kontakt din autoriserede elektriker i Odense — <Link href="/kontakt" className="text-accent hover:underline">ring eller skriv</Link> for et uforpligtende tilbud.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="Få professionel belysning" subtitle="Kontakt os for et uforpligtende tilbud på belysningsinstallation i Odense. Vi hjælper dig med at finde den perfekte løsning." />
    </>
  )
}
