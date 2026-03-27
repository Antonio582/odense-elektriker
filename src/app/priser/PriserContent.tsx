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

const hourlyRates = [
  { period: 'Hverdag (07-17)', rate: '495', note: 'Standard arbejdstid' },
  { period: 'Aften (17-22)', rate: '695', note: 'Aftentillæg' },
  { period: 'Nat (22-07)', rate: '895', note: 'Nattillæg' },
  { period: 'Weekend & helligdage', rate: '895', note: 'Weekend-/helligdagstillæg' },
]

const packages = [
  { name: 'Stikkontakt-installation', price: '995', desc: 'Installation af ny stikkontakt inkl. materialer. Pris pr. stk. ved installation af flere.', popular: false },
  { name: 'Afbryder/dimmer', price: '895', desc: 'Installation eller udskiftning af afbryder eller dimmer inkl. materialer.', popular: false },
  { name: 'Lampeudtag (loft)', price: '1.495', desc: 'Nyt lampeudtag i loft med kabelføring, roset og tilslutning.', popular: false },
  { name: 'Basis Eltjek', price: '1.995', desc: 'Visuel inspektion, eltavle-gennemgang, RCD-test og kort rapport.', popular: false },
  { name: 'Komplet Eltjek', price: '3.495', desc: 'Alt i Basis plus isolationstest, jordingstest, stikprøver og detaljeret rapport.', popular: true },
  { name: 'Eltavle-opgradering', price: 'Fra 8.995', desc: 'Udskiftning af eltavle med moderne sikringsautomater og HPFI.', popular: false },
  { name: 'Ladestander (7,4 kW)', price: 'Fra 12.995', desc: 'Komplet installation af smart ladestander inkl. materialer og test.', popular: true },
  { name: 'LED-opgradering (hus)', price: 'Fra 4.995', desc: 'Udskiftning af alle lyskilder til LED i standard parcelhus.', popular: false },
]

const faqItems = [
  { question: 'Hvad koster en elektriker i Odense per time?', answer: 'Vores standardtimepris er 495 kr. ekskl. moms for arbejde udført i dagtimerne (07-17, hverdage). Aftentimerne koster 695 kr., og nat/weekend er 895 kr. Materialer faktureres separat til indkøbspris + 15%. Vi giver altid et samlet tilbud inden vi starter, så du kender den totale pris på forhånd.' },
  { question: 'Er priserne inkl. eller ekskl. moms?', answer: 'Alle priser på denne side er ekskl. moms (25%). For privatkunder skal du derfor lægge 25% oveni den angivne pris. Erhvervskunder kan trække momsen fra. Vi oplyser altid den endelige pris inkl. moms i vores tilbud til privatkunder, så der ikke opstår forvirring.' },
  { question: 'Tager I kørselstillæg?', answer: 'Nej, vi tager ikke kørselstillæg inden for Odense kommune. For kunder uden for Odense (resten af Fyn) beregner vi et kørselstillæg baseret på afstanden. Vi oplyser altid om eventuelle kørselstillæg inden arbejdet påbegyndes.' },
  { question: 'Kan I give en fast pris på mit projekt?', answer: 'Ja, vi foretrækker faktisk at arbejde med faste priser. Ved en uforpligtende besigtigelse vurderer vi opgaven og giver dig et detaljeret tilbud med en fast totalpris. Så ved du præcis hvad det kommer til at koste, og der er ingen ubehagelige overraskelser.' },
  { question: 'Hvad koster akut udrykning?', answer: 'Akut udrykning koster et fast tillæg på 995 kr. ekskl. moms oven i den gældende timepris. Så en akut udrykning i dagtimerne koster 495 + 995 = 1.490 kr. for den første time. Herefter er det den normale timepris. Ved akutte sikkerhedsproblemer er det godt givet ud for hurtig professionel hjælp.' },
]

export default function PriserContent() {
  return (
    <>
      <JsonLd
        page="priser"
        breadcrumbItems={[{ name: 'Priser', url: '/priser' }]}
        faqItems={faqItems}
      />
      <Breadcrumb items={[{ label: 'Priser' }]} />

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
              Gennemsigtige{' '}
              <span className="gradient-text">priser</span>
              <br />uden overraskelser
            </h1>
            <p className="text-lg text-gray-text max-w-3xl leading-relaxed mb-8">
              Vi tror på åbenhed og gennemsigtighed i vores prissætning. Ingen skjulte gebyrer, ingen overraskelser på regningen. Herunder finder du vores timepriser og faste pakkepriser for de mest almindelige el-opgaver i Odense. Alle priser er ekskl. moms.
            </p>
            <p className="text-gray-text leading-relaxed mb-6">
              For større projekter som komplet <Link href="/el-installation" className="text-accent hover:underline">el-installation</Link>, <Link href="/belysning" className="text-accent hover:underline">belysningsprojekter</Link> eller <Link href="/ladestandere" className="text-accent hover:underline">ladestander-installation</Link> anbefaler vi altid en uforpligtende besigtigelse, hvor vi giver et fast tilbud. Så ved du præcis hvad det koster, inden vi starter.
            </p>
            <p className="text-gray-text leading-relaxed">
              Som autoriseret el-installatør i Odense er vi forpligtede til at levere kvalitetsarbejde til rimelige priser. Vi bruger kun certificerede materialer fra anerkendte producenter som Lauritz Knudsen, Schneider Electric og Hager. Vores elektrikere har over 30 års samlet erfaring og arbejder effektivt, så du ikke betaler for unødvendig tid. Vi dækker hele Odense og omegn uden kørselstillæg inden for kommunegrænsen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/priser-tilbud.jpg"
              alt="Elektriker giver gennemsigtigt tilbud til kunde i Odense"
              width={1000}
              height={500}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hourly Rates */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Timepriser</h2>
            <p className="text-gray-text text-lg">Vores satser for timebaseret el-arbejde i Odense-området</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hourlyRates.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 0 30px rgba(251, 191, 36, 0.15)' }}
                  className="p-6 bg-dark border border-gray-border/30 rounded-2xl text-center"
                >
                  <div className="text-sm text-gray-text mb-2">{r.period}</div>
                  <div className="text-3xl font-bold text-accent mb-1">{r.rate} <span className="text-base font-normal text-gray-text">kr/t</span></div>
                  <div className="text-xs text-gray-text">{r.note}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark border border-accent/20 rounded-full text-sm text-gray-text">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              Akut-tillæg: 995 kr. fast (se <Link href="/akut" className="text-accent hover:underline">akut elektriker</Link>)
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Package Prices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Faste pakkepriser</h2>
            <p className="text-gray-text text-lg">Populære opgaver til fast pris — ingen overraskelser</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packages.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 0 30px rgba(251, 191, 36, 0.15)' }}
                  className={`relative p-6 rounded-2xl border h-full flex flex-col ${p.popular ? 'bg-dark border-accent/40' : 'bg-dark-light border-gray-border/30'}`}
                >
                  {p.popular && (
                    <span className="absolute -top-2.5 right-4 px-3 py-0.5 bg-accent text-dark text-xs font-bold rounded-full">
                      Populær
                    </span>
                  )}
                  <h3 className="text-base font-semibold mb-2">{p.name}</h3>
                  <div className="text-2xl font-bold text-accent mb-3">{p.price} <span className="text-sm text-gray-text font-normal">kr.</span></div>
                  <p className="text-gray-text text-sm leading-relaxed flex-1">{p.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Price Explanation */}
      <section className="py-20 bg-dark-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="/images/services-eltavle.jpg"
                alt="Autoriseret elektriker arbejder ved eltavle med kvalitetsmaterialer i Odense"
                width={800}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6">Hvad er inkluderet i prisen?</h2>
            <div className="text-gray-text leading-relaxed space-y-4">
              <p>
                Vores timepriser dækker selve arbejdslønnen for en autoriseret elektriker. Materialer (kabler, stikkontakter, sikringer osv.) faktureres separat til indkøbspris plus et materialetillæg på 15%. Vi bruger altid kvalitetsmaterialer fra anerkendte producenter som Lauritz Knudsen, Schneider Electric og Hager.
              </p>
              <p>
                Ved pakkepriser er materialerne normalt inkluderet i den angivne pris. Eventuelle tillæg for ekstra kabelføring, komplicerede installationsforhold eller nødvendige opgraderinger oplyses altid inden arbejdet påbegyndes. Vi giver aldrig &ldquo;overraskelsesregninger&rdquo; — du ved altid hvad du skal betale.
              </p>
              <p>
                For kunder i Odense-området ({SERVICE_AREAS.join(', ')}) beregner vi intet kørselstillæg. Det betyder at den pris du ser, er den pris du betaler for arbejdet. For kunder uden for Odense kommune beregnes et kørselstillæg baseret på afstanden.
              </p>
              <p>
                Vi anbefaler altid at starte med en besigtigelse, især ved større opgaver. Under besigtigelsen vurderer vi omfanget, identificerer eventuelle udfordringer og giver dig et detaljeret tilbud med en fast totalpris. Besigtigelsen er gratis og uforpligtende — <Link href="/kontakt" className="text-accent hover:underline">kontakt os</Link> for at booke.
              </p>

              <h3 className="text-xl font-semibold text-white mt-8 mb-3">Priseksempler fra virkelige projekter i Odense</h3>
              <p>
                For at give dig et bedre billede af hvad el-arbejde typisk koster, deler vi her nogle eksempler fra projekter vi har udført i Odense-området. En komplet LED-opgradering af et parcelhus i Bellinge med 25 lyskilder kostede 8.500 kr. inkl. moms og materialer. Installation af en 7,4 kW ladestander i en carport i Odense SØ med 12 meter kabelføring fra eltavlen kostede 16.800 kr. inkl. moms. Et komplet <Link href="/eltjek" className="text-accent hover:underline">eltjek</Link> af en lejlighed fra 1975 i Odense C med efterfølgende udskiftning af HPFI-relæ kostede 5.200 kr. inkl. moms.
              </p>
              <p>
                Renovation af el-anlæg i et typehus fra 1972 i Dalum — med ny eltavle, 12 nye sikringsgrupper, HPFI i alle grupper og nye stikkontakter i køkken og badeværelse — kostede 42.000 kr. inkl. moms. Installation af komplet udendørs <Link href="/belysning" className="text-accent hover:underline">belysning</Link> med 8 pullertlamper, facadespots og bevægelsessensorer i Skt. Klemens kostede 18.500 kr. inkl. moms. Disse priser giver et realistisk billede, men den endelige pris afhænger altid af de konkrete forhold. Få dit eget uforpligtende tilbud ved at <Link href="/kontakt" className="text-accent hover:underline">kontakte os</Link>.
              </p>
              <p>
                Vi er stolte af vores gennemsigtige prissætning. Som autoriseret el-installatør i Odense med over 30 års samlet erfaring i teamet, kan vi tilbyde konkurrencedygtige priser uden at gå på kompromis med kvaliteten. Alle vores elektrikere er fuldt uddannede og certificerede, og vi bruger kun kvalitetsmaterialer fra anerkendte producenter. Din sikkerhed og tilfredshed er vores højeste prioritet. Har du et <Link href="/akut" className="text-accent hover:underline">akut el-problem</Link>? Vi er klar 24/7.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Timepris vs. fastpris</h2>
            <p className="text-gray-text text-lg">Hvad er bedst for dig?</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="p-8 bg-dark-light border border-gray-border/30 rounded-2xl h-full">
                <h3 className="text-xl font-semibold mb-4 text-accent">Timepris</h3>
                <p className="text-gray-text leading-relaxed mb-4">
                  Bedst egnet til mindre, uforudsigelige opgaver eller fejlfinding, hvor omfanget ikke kan fastlægges på forhånd. Du betaler for den tid vi bruger, og vi holder dig løbende orienteret om forbruget.
                </p>
                <ul className="space-y-2">
                  {['Fejlfinding og diagnostik', 'Mindre reparationer', 'Når omfanget er uklart', 'Fleksibelt tidsforbrug'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-text text-sm">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="p-8 bg-dark-light border border-accent/30 rounded-2xl h-full">
                <h3 className="text-xl font-semibold mb-4 text-accent">Fastpris</h3>
                <p className="text-gray-text leading-relaxed mb-4">
                  Bedst egnet til definerede opgaver hvor omfanget kan fastlægges efter besigtigelse. Du kender prisen på forhånd og er sikker mod overraskelser. Vi anbefaler fastpris for de fleste projekter.
                </p>
                <ul className="space-y-2">
                  {['Nye installationer', 'Eltjek og sikringsservice', 'Ladestander-installation', 'Belysningsprojekter'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-text text-sm">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTABanner title="Få et uforpligtende tilbud" subtitle="Kontakt os for en gratis besigtigelse og et detaljeret tilbud på dit el-projekt. Vi svarer inden for 2 timer." />
    </>
  )
}
