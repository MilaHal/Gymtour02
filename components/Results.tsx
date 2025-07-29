"use client"

import { useState, useEffect, useRef } from "react"

export default function Results() {
  console.log("Results component rendering")
  
  const [animatedNumber, setAnimatedNumber] = useState(1)
  const [showPlusText, setShowPlusText] = useState(false)
  const [visitorsPercent, setVisitorsPercent] = useState(1)
  const [satisfactionPercent, setSatisfactionPercent] = useState(1)
  const [timePercent, setTimePercent] = useState(1)
  const [trustAnimated, setTrustAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    // Intersection Observer pro spuštění animace při scrollování do sekce
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          console.log("Results section is now visible, starting animations")
          setIsVisible(true)
        }
      },
      { threshold: 0.3 } // Spustí animaci při 30% viditelnosti
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    console.log("Starting number animations")
    
    // První statistika - spokojené posilovny (animuje jednou a zastaví se)
    const gymInterval = setInterval(() => {
      setAnimatedNumber(prev => {
        if (prev === 3) {
          setShowPlusText(true)
          clearInterval(gymInterval) // Zastaví animaci po dosažení konce
          return 3
        }
        return prev + 1
      })
    }, 1200) // Zpomaleno z 800ms na 1200ms
    
    // Druhá statistika - návštěvnost 1→43% (animuje jednou a zastaví se)
    const visitorsInterval = setInterval(() => {
      setVisitorsPercent(prev => {
        if (prev >= 43) {
          clearInterval(visitorsInterval)
          return 43
        }
        return prev + 1
      })
    }, 150) // Zpomaleno z 100ms na 150ms
    
    // Třetí statistika - spokojenost 1→95% (animuje jednou a zastaví se)
    const satisfactionInterval = setInterval(() => {
      setSatisfactionPercent(prev => {
        if (prev >= 95) {
          clearInterval(satisfactionInterval)
          return 95
        }
        return prev + 1
      })
    }, 120) // Zpomaleno z 80ms na 120ms
    
    // Čtvrtá statistika - čas na webu 1→62% (animuje jednou a zastaví se)
    const timeInterval = setInterval(() => {
      setTimePercent(prev => {
        if (prev >= 62) {
          clearInterval(timeInterval)
          return 62
        }
        return prev + 1
      })
    }, 180) // Zpomaleno z 120ms na 180ms
    
    // Animace pro trust indikátory - spustí se po 4 sekundách
    const trustTimer = setTimeout(() => {
      console.log("Spouštím trust animace!")
      setTrustAnimated(true)
    }, 4000) // Zpomaleno z 3000ms na 4000ms
    
    return () => {
      clearInterval(gymInterval)
      clearInterval(visitorsInterval)
      clearInterval(satisfactionInterval)
      clearInterval(timeInterval)
      clearTimeout(trustTimer)
    }
  }, [isVisible])

  return (
    <section ref={sectionRef} className="py-24 bg-gymtour-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Success Statistics */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gymtour-white mb-4" data-macaly="stats-title">
              Výsledky, které 
              <span className="bg-gymtour-gradient bg-clip-text text-transparent"> mluví samy</span>
            </h2>
            <p className="text-xl text-gymtour-white/70 max-w-2xl mx-auto" data-macaly="stats-description">
              Službu realizujeme po celém Česku i Slovensku
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                number: showPlusText ? "3 + vaše" : `${animatedNumber}+`, 
                label: "Spokojených posiloven", 
                icon: "🏋️",
                isSpecial: true
              },
              { 
                number: `${visitorsPercent}%`, 
                label: "Nárůst návštěvnosti", 
                icon: "📈",
                isAnimated: true
              },
              { 
                number: `${satisfactionPercent}%`, 
                label: "Spokojenost klientů", 
                icon: "⭐",
                isAnimated: true
              },
              { 
                number: `${timePercent}%`, 
                label: "Navýšení času na webu", 
                icon: "📊",
                isAnimated: true
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group bg-gymtour-dark/50 border border-gymtour-white/10 rounded-3xl p-8 text-center hover:bg-gymtour-dark/80 transition-all duration-300 hover:scale-105"
                data-macaly={`stat-${index + 1}`}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`${stat.isSpecial && showPlusText ? 'text-lg md:text-xl' : 'text-4xl md:text-5xl'} font-bold bg-gymtour-gradient bg-clip-text text-transparent mb-3 ${stat.isSpecial && showPlusText ? 'animate-pulse' : ''} ${stat.isAnimated ? 'transition-all duration-300' : ''}`}>
                  {stat.number}
                </div>
                <p className="text-gymtour-white/80 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gymtour-dark/30 border border-gymtour-white/10 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gymtour-white mb-6" data-macaly="trust-title">
                Důvěřují nám nejlepší
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div 
                  className={`text-5xl transform transition-all duration-1000 ${
                    trustAnimated 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                  style={{ 
                    animation: trustAnimated ? 'bounce 0.8s ease-in-out 0s 2, pulse 3s ease-in-out 1.6s infinite' : 'none'
                  }}
                >
                  🏆
                </div>
                <h4 
                  className={`text-gymtour-white font-semibold transform transition-all duration-700 ${
                    trustAnimated 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  Prémiové posilovny
                </h4>
                <p className={`text-gymtour-white/70 text-sm transition-all duration-500 ${
                  trustAnimated ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
                >
                  Fitness řetězce v ČR
                </p>
              </div>
              <div className="space-y-3">
                <div 
                  className={`text-5xl transform transition-all duration-1000 ${
                    trustAnimated 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                  style={{ 
                    animation: trustAnimated ? 'bounce 0.8s ease-in-out 0.3s 2, pulse 3s ease-in-out 1.9s infinite' : 'none'
                  }}
                >
                  ⚡
                </div>
                <h4 
                  className={`text-gymtour-white font-semibold transform transition-all duration-700 ${
                    trustAnimated 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  Rychlá implementace
                </h4>
                <p className={`text-gymtour-white/70 text-sm transition-all duration-500 ${
                  trustAnimated ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '900ms' }}
                >
                  Hotovo do 7 dnů
                </p>
              </div>
              <div className="space-y-3">
                <div 
                  className={`text-5xl transform transition-all duration-1000 ${
                    trustAnimated 
                      ? 'scale-100 opacity-100' 
                      : 'scale-0 opacity-0'
                  }`}
                  style={{ 
                    animation: trustAnimated ? 'bounce 0.8s ease-in-out 0.6s 2, pulse 3s ease-in-out 2.2s infinite' : 'none'
                  }}
                >
                  🎯
                </div>
                <h4 
                  className={`text-gymtour-white font-semibold transform transition-all duration-700 ${
                    trustAnimated 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-8 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '1000ms' }}
                >
                  Měřitelné výsledky
                </h4>
                <p className={`text-gymtour-white/70 text-sm transition-all duration-500 ${
                  trustAnimated ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: '1200ms' }}
                >
                  Sledování konverzí a analýzy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}