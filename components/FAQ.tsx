"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  console.log("FAQ component rendering")

  const faqs = [
    {
      id: "1",
      question: "Co je Virtuální fitness trenér?",
      answer: "Virtuální fitness trenér je interaktivní online nástroj, který umožňuje vašim klientům procházet vaši posilovnu virtuálně ještě před návštěvou. Zároveň jim ukazuje, jak správně používat jednotlivé stroje a pomáhá zvyšovat jejich jistotu a motivaci při cvičení."
    },
    {
      id: "2", 
      question: "Na jakých zařízeních funguje?",
      answer: "Služba je plně funkční na mobilních telefonech, tabletech i počítačích. Lze ji jednoduše vložit na web, sdílet přes QR kód nebo integrovat do interních systémů."
    },
    {
      id: "3",
      question: "Kolik to stojí?",
      answer: "Cena závisí na velikosti vaší posilovny a počtu strojů. Každý projekt naceňujeme individuálně po úvodní konzultaci – bezplatně a nezávazně."
    },
    {
      id: "4",
      question: "Jak dlouho trvá realizace?",
      answer: "Samotné nafocení a skenování zabere přibližně půl dne. Hotový produkt dodáváme do 7 pracovních dnů od focení."
    },
    {
      id: "5",
      question: "Musíme něco připravit?",
      answer: "Během natáčení by se v posilovně neměli pohybovat žádní zákazníci. Ideální je také zajistit dobré světelné podmínky a celkově upravené prostory. O vše ostatní – od přípravy přes samotné focení až po finální zpracování – se postaráme my."
    },
    {
      id: "6",
      question: "Jak se Virtuální trenér integruje na web?",
      answer: "Jednoduše vložíte odkaz nebo kód na své stránky (např. jako video nebo interaktivní okno). Zajistíme technickou podporu a integraci přesně podle vašich možností."
    },
    {
      id: "7",
      question: "Co když změníme vybavení nebo přidáme nové stroje?",
      answer: "Nabízíme možnost průběžných aktualizací – přidání, úpravy nebo přepracování obsahu podle vašich aktuálních potřeb."
    },
    {
      id: "8",
      question: "Je možné využít i pro propagaci na sociálních sítích?",
      answer: "Ano. Virtuální trenér je perfektní nástroj pro online marketing – lze jej sdílet formou krátkých videí, reels, stories nebo QR kódů umístěných přímo v posilovně."
    }
  ]

  return (
    <section className="section-spacing bg-gymtour-black">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-gymtour-white mb-8" data-macaly="faq-title">
            Často kladené
            <br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent">
              otázky
            </span>
          </h2>
          <p className="text-xl text-gymtour-white/70 max-w-2xl mx-auto" data-macaly="faq-description">
            Odpovědi na nejčastější dotazy ohledně Virtuálního fitness trenéra
          </p>
        </div>

        <div className="bg-gymtour-dark/30 border border-gymtour-white/10 rounded-3xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-gymtour-dark/50 border border-gymtour-white/10 rounded-2xl px-6 py-2 hover:bg-gymtour-dark/70 transition-all duration-300"
                data-macaly={`faq-${faq.id}`}
              >
                <AccordionTrigger className="text-gymtour-white font-semibold text-lg hover:no-underline hover:text-gymtour-purple py-6 [&[data-state=open]]:text-gymtour-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gymtour-white/80 text-base leading-relaxed pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}