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

const steps = [
  { step: '01', title: 'Booking & forberedelse', desc: 'Du kontakter os, og vi aftaler et tidspunkt der passer dig. Vi forbereder os på opgaven ved at gennemgå eventuelle tegninger eller oplysninger om din ejendom.' },
  { step: '02', title: 'Visuel inspektion', desc: 'Vores autoriserede elektriker gennemgår alle synlige el-installationer, stikkontakter, afbrydere, eltavle og kabler. Vi identificerer synlige fejl, slitage og potentielle risici.' },
  { step: '03', title: 'Måling & test', desc: 'Vi udfører grundige målinger med professionelt udstyr. Det inkluderer isolationstest, RCD-test (fejlstrømsafbryder), jordingstest og belastningstest af kredsløb.' },
  { step: '04', title: 'Rapport & anbefalinger', desc: 'Du modtager en detaljeret rapport med alle fund, vurderinger og anbefalede udbedringer. Vi prioriterer problemerne efter alvorlighed, så du ved hvad der haster mest.' },
]

const packages = [
  { name: 'Basis Eltjek', price: '1.995', features: ['Visuel inspektion', 'Eltavle-gennemgang', 'RCD-test', 'Kort rapport'], popular: false },
  { name: 'Komplet Eltjek', price: '3.495', features: ['Alt i Basis', 'Isolationstest', 'Jordingstest', 'Stikprøve af stikkontakter', 'Detaljeret rapport', 'Prioriteret handlingsplan'], popular: true },
  { name: 'Erhvervs Eltjek', price: 'Fra 4.995', features: ['Alt i Komplet', 'Hele virksomheden', 'Lovpligtig dokumentation', 'Termografering', 'Opfølgende besøg'], popular: false },
]

const faqItems = [
  { question: 'Hvad er et eltjek?', answer: 'Et eltjek er en grundig gennemgang af din el-installation udført af en autoriseret elektriker. Formålet er at identificere fejl, mangler og sikkerhedsrisici i dit el-anlæg. Det er en vigtig forebyggende foranstaltning, der kan forhindre brand og el-ulykker.' },
  { question: 'Hvor ofte bør man få lavet eltjek?', answer: 'Vi anbefaler et eltjek mindst hvert 10. år for private boliger, og hvert 5. år for erhvervsejendomme. Hvis din bolig er ældre end 25 år, eller hvis du oplever problemer med din el-installation, bør du bestille et eltjek hurtigst muligt.' },
  { question: 'Hvad koster et eltjek i Odense?', answer: 'Et basis eltjek starter fra 1.995 kr., mens et komplet eltjek koster 3.495 kr. Prisen afhænger af boligens størrelse og installationens alder. Vi giver altid et præcist tilbud inden arbejdet påbegyndes.' },
  { question: 'Hvor lang tid tager et eltjek?', answer: 'Et standard eltjek for en gennemsnitlig bolig tager typisk 2-3 timer. For større ejendomme eller erhvervslokaler kan det tage længere. Vi sørger for at gennemgå alt grundigt, så intet overses.' },
  { question: 'Skal jeg være hjemme under eltjekket?', answer: 'Det er en god idé at være til stede, især i starten, så du kan vise eventuelle problemområder og besvare spørgsmål. Men du behøver ikke være til stede under hele inspektionen.' },
]

export default function EltjekContent() {
  return (
    <>
      <JsonLd
        page="eltjek"
        breadcrumbItems={[{ name: 'Eltjek & Sikringsservice', url: '/eltjek' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Eltjek & Sikringsservice' }]} />

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
              Eltjek &{' '}
              <span className="gradient-text">Sikringsservice</span>
              <br />i Odense
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-8">
              Et professionelt eltjek er din sikkerhed for, at el-installationen i din bolig eller virksomhed fungerer korrekt og sikkert. Vores autoriserede elektrikere i Odense gennemgår grundigt hele dit el-anlæg og identificerer potentielle risici, inden de bliver til alvorlige problemer. Vi dækker hele Odense-området, fra {SERVICE_AREAS[0]} til {SERVICE_AREAS[SERVICE_AREAS.length - 1]}.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              Mange boligejere i Odense er ikke klar over, at deres el-installation kan have fejl, der udgør en brand- eller sikkerhedsrisiko. Ældre installationer fra 1960&apos;erne og 1970&apos;erne er særligt udsatte, da de ofte ikke lever op til moderne sikkerhedsstandarder. Et eltjek giver dig overblik over din installations tilstand og en klar handlingsplan for eventuelle udbedringer. Kontakt os for en <Link href="/kontakt" className="text-accent hover:underline">gratis vurdering</Link>.
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
                src="/images/eltjek-inspektion.jpg"
                alt="Autoriseret elektriker udfører professionelt eltjek med måleudstyr i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/eltjek-sikkerhed.jpg"
                alt="Elektrisk sikkerhedstjek af el-installation i bolig i Odense"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Steps Process */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sådan foregår et eltjek</h2>
            <p className="text-gray-text text-lg">En struktureret proces der sikrer intet overses</p>
          </ScrollReveal>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 p-8 bg-dark border border-gray-border/30 rounded-2xl">
                  <div className="text-4xl font-bold text-accent/30">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                    <p className="text-gray-text leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why eltjek */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Hvorfor er et eltjek vigtigt?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Forebyg brand', text: 'Defekte el-installationer er en af de hyppigste årsager til boligbrande i Danmark. Et eltjek identificerer fejl og mangler, der kan føre til overophedning, kortslutning og i værste fald brand. Forebyggelse er altid billigere end skaderne efter en brand.' },
              { title: 'Beskyt din familie', text: 'Fejlagtige installationer kan give elektrisk stød, der i værste fald kan være livsfarlige. Særligt børn og ældre er udsatte. Et eltjek sikrer, at alle sikkerhedsforanstaltninger fungerer korrekt, herunder fejlstrømsafbrydere (RCD) og jordforbindelser.' },
              { title: 'Spar på forsikringen', text: 'Mange forsikringsselskaber kræver dokumentation for el-installationens tilstand. Et eltjek kan give dig bedre vilkår på din forsikring og sikre, at du er dækket i tilfælde af skade. Se vores <a href="/priser" class="text-accent hover:underline">priser</a> for detaljer.' },
              { title: 'Øg boligens værdi', text: 'Ved salg af bolig er et eltjek en værdifuld investering. Købere og ejendomsmæglere sætter pris på dokumentation for, at el-installationen er i orden. Det kan øge din boligs salgspris og gøre salgsprocessen smidigere.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-6 bg-dark-light border border-gray-border/30 rounded-xl h-full">
                  <h3 className="text-lg font-semibold mb-3 text-accent">{item.title}</h3>
                  <p className="text-gray-text leading-relaxed" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vores eltjek-pakker</h2>
            <p className="text-gray-text text-lg">Vælg den pakke der passer til dine behov. Alle priser er ekskl. moms.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className={`relative p-8 rounded-2xl border h-full flex flex-col ${pkg.popular ? 'bg-dark border-accent/50' : 'bg-dark border-gray-border/30'}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-dark text-xs font-bold rounded-full">
                      Mest populær
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-6">{pkg.price} <span className="text-base text-gray-text font-normal">kr.</span></div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f, j) => (
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
                      pkg.popular
                        ? 'bg-accent text-dark glow-btn'
                        : 'border border-accent/50 text-accent hover:bg-accent/10'
                    }`}
                  >
                    Bestil nu
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Hvad indeholder et professionelt eltjek?</h2>
            <div className="prose prose-invert max-w-none text-gray-text leading-relaxed space-y-4">
              <p>
                Når vores autoriserede elektriker udfører et eltjek i din bolig i Odense, gennemgår vi systematisk hele din el-installation. Dette inkluderer en visuel inspektion af alle synlige komponenter — fra eltavlen og sikringerne til stikkontakter, afbrydere og kabelføring. Vi kontrollerer at installationen overholder gældende regler i Stærkstrømsbekendtgørelsen.
              </p>
              <p>
                Dernæst foretager vi en række elektriske målinger med professionelt måleudstyr. Vi tester isolationsmodstanden i kablerne for at sikre, at der ikke er skjulte fejl. Vi kontrollerer at alle fejlstrømsafbrydere (RCD/HPFI) udløser korrekt ved fejlstrøm — dette er din vigtigste beskyttelse mod elektrisk stød. Vi måler jordforbindelsens kvalitet og verificerer, at alle kredsløb er korrekt dimensioneret i forhold til belastningen.
              </p>
              <p>
                Hos Odense Elektriker bruger vi de nyeste testmetoder og kalibreret udstyr til alle målinger. Vores <Link href="/el-installation" className="text-accent hover:underline">el-installationsservice</Link> bygger på samme grundighed. Vi har udført over 2.500 eltjek i Odense-området og kender de typiske udfordringer i boliger fra alle epoker — fra murermestervillaer fra 1930&apos;erne til nybyggeri.
              </p>
              <p>
                Har du behov for akut hjælp til el-problemer, tilbyder vi også <Link href="/akut" className="text-accent hover:underline">akut elektriker-service</Link> med hurtig udrykning til hele Odense.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Hvornår bør du bestille et eltjek?</h3>
              <p>
                Vi anbefaler et eltjek i følgende situationer: Hvis din bolig er mere end 25 år gammel og aldrig har fået et professionelt eftersyn. Hvis du oplever problemer som flimrende lys, udløsende sikringer, eller stikkontakter der er varme at røre. Inden du køber eller sælger bolig — et eltjek giver tryghed for begge parter. Inden større renoveringer, så du ved om el-installationen kan håndtere nye belastninger. Og hvis du har fået installeret en <Link href="/ladestandere" className="text-accent hover:underline">ladestander</Link> eller anden strømkrævende installation, for at sikre at hele anlægget fungerer optimalt.
              </p>
              <p>
                Vi udfører eltjek i hele Odense-området — fra ældre lejligheder i Odense C og typehuse i Odense NV til villaer i Bellinge, Dalum og Skt. Klemens. Uanset boligtype har vi erfaring med de typiske el-installationer og ved præcis hvad vi skal kigge efter. Vores rapport giver dig et klart overblik over installationens tilstand og en prioriteret handlingsplan, så du kan tage informerede beslutninger om eventuelle opgraderinger. Se vores <Link href="/priser" className="text-accent hover:underline">priser</Link> for eltjek, eller <Link href="/kontakt" className="text-accent hover:underline">kontakt os</Link> for et uforpligtende tilbud.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Eltjek for boligkøbere og -sælgere i Odense</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Planlægger du at købe eller sælge en bolig i Odense? Et professionelt eltjek er en vigtig del af processen. For købere giver et eltjek tryghed om at el-installationen er i orden, og det kan afdække skjulte problemer der kan koste dyrt at udbedre efter overtagelsen. For sælgere kan et eltjek dokumentere installationens gode stand og øge boligens værdi og salgbarhed.
              </p>
              <p>
                Mange ejendomsmæglere i Odense anbefaler et eltjek som en del af tilstandsrapporten. Vores rapport giver et klart overblik over installationens tilstand med en prioriteret liste over eventuelle fejl og mangler. Vi kategoriserer fundene efter alvorlighed, så du ved præcis hvad der er kritisk, hvad der er anbefalingsværdigt, og hvad der kan vente. Det giver dig et solidt forhandlingsgrundlag uanset om du er køber eller sælger.
              </p>
              <p>
                Vi udfører boligeltjek i hele Odense-området, herunder Odense C, Odense SØ, Odense NV, Bellinge, Dalum, Bolbro og Skt. Klemens. Vores elektrikere har stort kendskab til de typiske el-installationer i forskellige boligtyper og årgange i Odense. Et basis eltjek til 1.995 kr. er tilstrækkeligt for de fleste lejligheder, mens vi anbefaler et komplet eltjek til 3.495 kr. for villaer og større ejendomme. Bestil dit eltjek ved at <Link href="/kontakt" className="text-accent hover:underline">kontakte os</Link> — vi kan typisk komme inden for en uge.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="Bestil dit eltjek i dag" subtitle="Kontakt os for et uforpligtende tilbud på et professionelt eltjek af din bolig eller virksomhed i Odense." />
    </>
  )
}
