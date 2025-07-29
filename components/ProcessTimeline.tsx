'use client'

import React, { useState, useEffect } from 'react'
import { 
  MessageCircle, 
  Calendar, 
  FileText, 
  Handshake, 
  Camera, 
  Rocket, 
  TrendingUp 
} from 'lucide-react'

interface TimelineStep {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const steps: TimelineStep[] = [
  {
    id: 1,
    title: "Dejte nám vědět",
    description: "Stačí krátká zpráva, že máte zájem – my se postaráme o zbytek.",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Domluvíme schůzku",
    description: "Ozveme se a zdarma si domluvíme videocall nebo osobní setkání.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Připravíme nabídku",
    description: "Na základě velikosti posilovny a počtu strojů naceníme realizaci.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Potvrdíme spolupráci",
    description: "Jakmile si plácneme, domluvíme konkrétní termín realizace.",
    icon: <Handshake className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Dorazíme za vámi",
    description: "Nafotíme a naskenujeme posilovnu – zabere to přibližně půl dne.",
    icon: <Camera className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Dodáme hotovou službu",
    description: "Do 7 dnů obdržíte kompletního virtuálního fitness trenéra připraveného ke spuštění.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: 7,
    title: "Spustíte a sledujete výsledky",
    description: "Stačí vložit na web nebo sdílet – noví zákazníci přicházejí a ti stávající se edukují.",
    icon: <TrendingUp className="w-6 h-6" />
  }
]

export default function ProcessTimeline() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    console.log("ProcessTimeline component mounted")
    
    // Intersection Observer pro spuštění animací
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isInView) {
            console.log("ProcessTimeline is in view, starting animations")
            setIsInView(true)
            
            // Postupně zobrazujeme kroky s delayem
            steps.forEach((_, index) => {
              setTimeout(() => {
                console.log(`Showing step ${index + 1}`)
                setVisibleSteps(prev => [...prev, index + 1])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('process-timeline')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [isInView])

  return (
    <section 
      id="process-timeline"
      className="section-spacing bg-gymtour-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gymtour-gray/20 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gymtour-gradient opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gymtour-white mb-6" data-macaly="timeline-title">
            Jak to 
            <span className="bg-gymtour-gradient bg-clip-text text-transparent"> funguje?</span>
          </h2>
          <p className="text-xl text-gymtour-white/70 max-w-2xl mx-auto" data-macaly="timeline-subtitle">
            Sedm jednoduchých kroků k vašemu virtuálnímu fitness trenérovi
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gymtour-purple via-gymtour-pink to-gymtour-purple opacity-30"></div>
          
          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isVisible = visibleSteps.includes(step.id)
              const isEven = index % 2 === 0
              
              return (
                <div
                  key={step.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step number and icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`
                      w-16 h-16 mx-auto md:mx-0 rounded-full bg-gymtour-gradient 
                      flex items-center justify-center text-white font-bold text-lg
                      shadow-lg
                      ${isVisible ? 'animate-pulse-glow scale-100' : 'scale-75'}
                      transition-all duration-500 ease-out
                    `}>
                      <div className="absolute inset-0 rounded-full bg-gymtour-gradient animate-ping opacity-20"></div>
                      <div className="relative z-10 flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Step number badge */}
                    <div className={`
                      absolute -top-2 -right-2 w-6 h-6 bg-gymtour-white 
                      rounded-full flex items-center justify-center
                      text-gymtour-black font-bold text-sm
                      ${isVisible ? 'scale-100' : 'scale-0'}
                      transition-transform duration-300 ease-out
                    `}
                    style={{ transitionDelay: `${(index * 100) + 200}ms` }}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`
                    flex-1 ml-6 md:ml-0 md:mx-8
                    ${isEven ? 'md:text-left' : 'md:text-right'}
                  `}>
                    <div className={`
                      bg-gymtour-gray/80 backdrop-blur-sm rounded-2xl p-6 
                      border border-gymtour-white/10 hover:border-gymtour-white/20
                      transition-all duration-300 hover:scale-105 hover:shadow-2xl
                      ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                    `}
                    style={{ transitionDelay: `${(index * 100) + 100}ms` }}
                    >
                      <h3 className="text-xl font-bold text-gymtour-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gymtour-white/80 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Decorative gradient line */}
                      <div className={`
                        mt-4 h-1 w-12 bg-gymtour-gradient rounded-full
                        ${isEven ? 'mr-auto' : 'md:ml-auto'}
                        ${isVisible ? 'scale-x-100' : 'scale-x-0'}
                        transition-transform duration-500 ease-out
                      `}
                      style={{ transitionDelay: `${(index * 100) + 300}ms` }}
                      ></div>
                    </div>
                  </div>

                  {/* Mobile connector line */}
                  <div className="md:hidden absolute left-8 top-16 w-0.5 h-12 bg-gymtour-gradient opacity-30"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className={`
          text-center mt-20
          ${visibleSteps.length >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          transition-all duration-700 ease-out delay-1000
        `}>
          <div className="bg-gymtour-gradient/10 backdrop-blur-sm rounded-3xl p-8 border border-gymtour-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-gymtour-white mb-4">
              Připraveni začít?
            </h3>
            <p className="text-gymtour-white/80 mb-6 max-w-md mx-auto">
              Napište nám a my vám do 24 hodin odpovíme s konkrétními kroky
            </p>
            <a 
              href="#kontakt"
              className="inline-flex items-center px-8 py-4 btn-primary font-semibold hover:scale-105 hover:shadow-lg"
            >
              Začít hned teď
              <TrendingUp className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}