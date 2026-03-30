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

const emergencies = [
  { title: 'Strømafbrydelse', desc: 'Pludselig strømsvigt i hele eller dele af boligen? Vi fejlfinder hurtigt og genopretter strømforsyningen. Det kan skyldes en udløst hovedsikring, defekt HPFI-relæ eller problemer med forsyningsnettet.', icon: '⚡' },
  { title: 'Kortslutning', desc: 'Gnister, røglugt eller brændte sikringer? En kortslutning kan være farlig og bør udbedres straks. Vi lokaliserer fejlen og udbedrer den sikkert, så du undgår brand og yderligere skader på installationen.', icon: '🔥' },
  { title: 'Defekt HPFI/RCD', desc: 'Når fejlstrømsafbrydere konstant udløser, mister du strømmen gentagne gange. Vi finder den underliggende årsag — det kan være en fugtig installation, en defekt apparat eller slidte kabler.', icon: '🔌' },
  { title: 'Vandskade på el-installation', desc: 'Oversvømmelse, sprungne rør eller utæt tag kan beskadige el-installationen og udgøre en alvorlig sikkerhedsrisiko. Vi sikrer installationen, isolerer beskadigede kredsløb og udbedrer skaderne.', icon: '💧' },
  { title: 'Lugt af brændt el', desc: 'En brændt lugt fra stikkontakter, eltavle eller kabler er et alvorligt advarselstegn. Sluk for hovedafbryderen og ring til os øjeblikkeligt. Vi rykker ud og identificerer problemet inden det eskalerer.', icon: '🚨' },
  { title: 'Løse eller varme stikkontakter', desc: 'Stikkontakter der er varme at røre, gnistrer ved brug, eller sidder løst i væggen, er potentielle brandfarer. Vi udskifter og reparerer dem hurtigt og sikkert.', icon: '🔧' },
]

const faqItems = [
  { question: 'Hvad koster en akut elektriker i Odense?', answer: 'Akut udrykning koster et fast tillæg på 995 kr. ekskl. moms oven i vores normale timepris. I dagtimerne (07-17, hverdage) er timeprisen 495 kr., i aftentimerne (17-22) er den 695 kr., og om natten (22-07) samt weekender er den 895 kr. Alt udspecificeres inden arbejdet påbegyndes.' },
  { question: 'Hvor hurtigt kan I komme ved akut el-nødsituation?', answer: 'Vi er typisk fremme inden for 30-60 minutter i Odense by og 60-90 minutter i ydreområderne. Responstiden afhænger af den aktuelle belastning, men vi prioriterer altid akutte sikkerhedsproblemer og giver dig et præcist tidspunkt ved bestilling.' },
  { question: 'Hvad gør jeg mens jeg venter på elektrikeren?', answer: 'Ved strømafbrydelse: Tjek om naboerne også er ramt (kan være forsyningsfejl). Ved gnister/røg/brændt lugt: Sluk for hovedafbryderen i eltavlen og undgå at røre ved beskadigede komponenter. Ved vandskade: Sluk for strømmen og undgå våde områder. Forlad boligen hvis du føler dig utryg, og ring 112 ved akut fare.' },
  { question: 'Kan I komme om natten og i weekenden?', answer: 'Ja, vores akut-service er tilgængelig 24 timer i døgnet, 7 dage om ugen, 365 dage om året. Inklusiv helligdage. Kontakt os uanset tidspunkt — vi har altid en elektriker på vagt der er klar til at rykke ud.' },
  { question: 'Hvornår bør jeg kontakte en akut elektriker?', answer: 'Kontakt os ved: strømsvigt der ikke løses ved at nulstille sikringer, gnister eller røg fra el-installationen, brændt lugt fra stikkontakter eller eltavle, vandskade der har ramt el-installationen, og løse ledninger eller synlige kabelskader. Ved fare for brand ring altid 112 først.' },
]

export default function AkutContent() {
  return (
    <>
      <JsonLd
        page="akut"
        breadcrumbItems={[{ name: 'Akut Elektriker', url: '/akut' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Akut Elektriker' }]} />

      {/* Hero */}
      <section className="pt-8 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 mb-4">Af <strong>Fyn El-Service Team</strong> · Opdateret marts 2026</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Akut{' '}
              <span className="gradient-text">elektriker</span>
              <br />i Odense — 24/7
            </h1>
            <p className="text-lg text-gray-text max-w-3xl mx-auto leading-relaxed mb-10">
              El-problemer venter ikke til det passer dig. Derfor er vi klar døgnet rundt med akut el-service i hele Odense-området. Vores autoriserede elektrikere rykker hurtigt ud og løser dit problem — sikkert og professionelt. Fra strømafbrydelser og kortslutninger til vandskade på el-installationen, vi håndterer det hele.
            </p>

            {/* Pulsating CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-2xl text-xl pulse-glow"
              >
                Kontakt os NU
              </Link>
            </motion.div>

            {/* Quick stats */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-text text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                Tilgængelig nu
              </div>
              <div>30-60 min responstid</div>
              <div>24/7/365</div>
              <div>Hele Odense & Fyn</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/akut-elektriker.jpg"
              alt="Akut elektriker i Odense klar til 24/7 nødudrykning ved el-problemer"
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Typiske akutte situationer</h2>
            <p className="text-gray-text text-lg">Vi har set det hele — og vi har løsningen klar</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencies.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-8 bg-dark border border-gray-border/30 rounded-2xl card-hover h-full">
                  <span className="text-3xl mb-4 block">{e.icon}</span>
                  <h3 className="text-lg font-semibold mb-3">{e.title}</h3>
                  <p className="text-gray-text text-sm leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time Map */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hurtig udrykning i hele Odense</h2>
            <p className="text-gray-text text-lg">Vi er lokalt forankret og kender Odense — det giver hurtigere responstider</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_AREAS.map((area, i) => (
              <ScrollReveal key={area} delay={i * 0.05}>
                <div className="flex items-center justify-between p-4 bg-dark-light border border-gray-border/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span className="font-medium">{area}</span>
                  </div>
                  <span className="text-accent text-sm font-medium">30-60 min</span>
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
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/akut-stroemafbrydelse.jpg"
                alt="Strømafbrydelse i bolig - akut elektriker Odense hjælper med nødservice"
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6">Akut el-service i Odense — din sikkerhed først</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                El-problemer kan opstå når som helst og uden varsel. En pludselig strømafbrydelse en kold vinteraften, gnister fra eltavlen midt om natten, eller en vandskade der truer el-installationen — disse situationer kræver øjeblikkelig professionel hjælp. Hos Fyn El-Service er vi klar 24 timer i døgnet, 7 dage om ugen, året rundt.
              </p>
              <p>
                Vores akut-team består af erfarne, autoriserede elektrikere med fuldt udstyrede servicebiler. Vi medbringer de mest almindelige reservedele og materialer, så vi kan løse de fleste problemer ved første besøg. Vores gennemsnitlige responstid i Odense by er under 45 minutter, og vi dækker hele området fra {SERVICE_AREAS[0]} til {SERVICE_AREAS[5]}.
              </p>
              <p>
                Vi anbefaler at forebygge akutte situationer med regelmæssige <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link>, der identificerer potentielle problemer inden de bliver alvorlige. En proaktiv tilgang til <Link href="/el-installation" className="text-accent hover:underline">el-installationen</Link> kan spare dig for både besvær og penge i det lange løb. Men når uheldet er ude, er vi klar til at hjælpe — hurtigt og professionelt.
              </p>
              <p>
                Se vores <Link href="/priser" className="text-accent hover:underline">akutpriser</Link> for gennemsigtige satser, eller <Link href="/kontakt" className="text-accent hover:underline">kontakt os</Link> direkte. Ved akut fare for brand eller personskade, ring altid 112 først.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Hvad koster akut elektriker i Odense?</h3>
              <p>
                Akut udrykning koster et fast tillæg på 995 kr. ekskl. moms, som lægges oven i vores normale timepris. I hverdagens dagtimer (07-17) er timeprisen 495 kr., mens aftentimer (17-22) koster 695 kr. og nat samt weekender koster 895 kr. per time. Vi oplyser altid den samlede pris inden arbejdet går i gang, så du aldrig får en overraskelse på regningen. Sammenlign gerne med vores <Link href="/priser" className="text-accent hover:underline">komplette prisliste</Link>.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Typiske akutte scenarier vi håndterer</h3>
              <p>
                Vi rykker dagligt ud til kunder i hele Odense-området — fra lejligheder i Odense C og rækkehuse i Odense SØ til villaer i Bellinge og Dalum. De mest almindelige akutte situationer vi ser inkluderer HPFI-relæer der konstant udløser, strømafbrydelser i dele af boligen, varme eller brummende eltavler, og vandskader der har ramt el-installationen efter kraftig regn eller sprungne rør.
              </p>
              <p>
                I ældre boliger i Odense NV og Bolbro ser vi ofte problemer med forældede installationer fra 1960&apos;erne og 1970&apos;erne, hvor aluminium-ledninger og ældre sikringstyper skaber udfordringer. Disse installationer kan pludselig svigte og kræve akut udbedring. Vi medbringer altid de nødvendige materialer til midlertidige og permanente løsninger.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Sådan forløber en akut udrykning</h3>
              <p>
                Når du ringer til os med et akut el-problem, sker der følgende: Først taler du med en af vores erfarne elektrikere, der vurderer situationen over telefonen og giver dig akutte sikkerhedsråd. Derefter sender vi den nærmeste ledige elektriker afsted med en fuldt udstyret servicebil. Ved ankomst udfører elektrikeren en hurtig diagnose for at identificere årsagen til problemet. Herefter får du en mundtlig pris-vurdering inden arbejdet påbegyndes. Når problemet er løst, tester vi grundigt for at sikre at alt fungerer korrekt, og du modtager en skriftlig rapport.
              </p>
              <p>
                Vores autoriserede elektrikere har i gennemsnit over 15 års erfaring med akut el-arbejde. Vi er stolte af vores hurtige responstider og høje kundetilfredshed — 98% af vores kunder anbefaler os videre. Som autoriseret el-installatør i Odense garanterer vi at alt arbejde udføres efter Stærkstrømsbekendtgørelsen og gældende sikkerhedsstandarder. Vi er dækket af el-installatøransvarsforsikring, så du kan være tryg. Har du brug for <Link href="/belysning" className="text-accent hover:underline">belysningsservice</Link> efter udbedring, hjælper vi også med det.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Forebyg akutte el-problemer i dit hjem</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Selv om vi altid er klar med akut elektriker-service i Odense, er forebyggelse det bedste middel mod uventede el-problemer. Der er flere ting du som boligejer kan gøre for at minimere risikoen for akutte situationer. Det vigtigste er at få foretaget regelmæssige eltjek af din el-installation. Vi anbefaler et professionelt eftersyn mindst hvert tiende år for private boliger, og oftere for ældre installationer.
              </p>
              <p>
                Hold øje med advarselstegn som flimrende lys, sikringer der ofte springer, stikkontakter der er varme at røre ved, eller en brummende lyd fra eltavlen. Disse symptomer kan tyde på underliggende problemer der bør udbedres inden de udvikler sig til akutte situationer. Undgå at overbelaste stikkontakter med for mange forbrugere i samme kredsløb — det er en hyppig årsag til udløste sikringer, særligt i ældre boliger i Odense C og Odense NV.
              </p>
              <p>
                Sørg for at din eltavle er tidssvarende med moderne sikringsautomater og HPFI-relæer i alle grupper. Mange ældre boliger i Bolbro og Dalum har stadig de gamle patronsikringer fra 1960&apos;erne og 1970&apos;erne, som giver dårligere beskyttelse end moderne automatsikringer. En opgradering af eltavlen koster typisk 8.000-15.000 kr. og er en af de bedste investeringer du kan gøre i dit hjems sikkerhed.
              </p>
              <p>
                Hvis du bor i en bolig med ældre el-installation og ønsker at være på den sikre side, kan du starte med et <Link href="/eltjek" className="text-accent hover:underline">komplet eltjek</Link> til 3.495 kr. Det giver dig et fuldt overblik over installationens tilstand og en prioriteret liste over eventuelle udbedringer. <Link href="/kontakt" className="text-accent hover:underline">Kontakt os</Link> for at bestille — vi dækker hele Odense og Fyn med hurtig service og gennemsigtige <Link href="/priser" className="text-accent hover:underline">priser</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Second CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Brug for akut hjælp nu?</h2>
            <p className="text-gray-text text-lg mb-8">Vi er klar 24/7 — kontakt os med det samme, og vi sender en elektriker afsted.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-3 px-10 py-5 bg-accent text-dark font-bold rounded-2xl text-xl pulse-glow"
              >
                Kontakt os nu
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="El-nødsituation?" subtitle="Vi er klar 24/7 med akut el-service i hele Odense-området. Kontakt os nu, og vi er hos dig inden for 30-60 minutter." />
    </>
  )
}
