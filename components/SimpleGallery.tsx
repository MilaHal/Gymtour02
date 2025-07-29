"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
export default function SimpleGallery() {
  console.log("SimpleGallery component rendering")
  

  const [activeReasonIndex, setActiveReasonIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  
  useEffect(() => {
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevReason()
      } else if (e.key === 'ArrowRight') {
        nextReason()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  const reasonsData = [
    {
      id: 1,
      icon: "🎓",
      title: "Edukace, která posune",
      subtitle: "Vzdělávání zákazníků přímo v prostředí",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      accentColor: "from-blue-400 to-purple-600",
      sections: [
        {
          title: "Problém",
          content: "Většina lidí cvičí špatně – nebo se do toho ani nepustí. Proč?",
          points: [
            "Nevědí, jak používat stroje",
            "Bojí se špatné techniky", 
            "Neumí si sestavit trénink"
          ]
        },
        {
          title: "Řešení",
          content: "Interaktivní virtuální trenér:",
          points: [
            "Ukáže každý stroj v akci přímo ve vaší posilovně",
            "Vysvětlí správnou techniku cvičení i zapojení svalů",
            "Nabídne tréninkové plány pro progres"
          ]
        },
        {
          title: "Výsledek",
          content: "Díky tomu:",
          points: [
            "Vaši zákazníci se rychleji naučí správně cvičit",
            "Výrazně se sníží riziko zranění",
            "Vytváří se komunita, která má víc informací"
          ]
        }
      ]
    },
    {
      id: 2,
      icon: "📢",
      title: "Marketing, který funguje",
      subtitle: "Organické šíření a sdílení obsahu",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      accentColor: "from-green-400 to-teal-600",
      sections: [
        {
          title: "Sdílení",
          content: "Chcete, aby si o vás lidé řekli? Nejlepší reklama je ta, která se šíří sama.",
          points: [
            "Virtuální prohlídku lze snadno sdílet",
            "Lze ji vložit na web, sociální sítě nebo do Google Maps",
            "Funguje na počítači i v mobilu"
          ]
        },
        {
          title: "Výhody",
          content: "Jak vám to pomůže?",
          points: [
            "Posilovna je viditelná online kdykoli a odkudkoli",
            "Interaktivní formát se šíří víc než klasické fotky",
            "Více rezervací a nových členů bez dalších nákladů",
            "Možnost tvořit videa a fotky přímo z prohlídky"
          ]
        }
      ]
    },
    {
      id: 3,
      icon: "🚀", 
      title: "Přilákání začátečníků",
      subtitle: "Snížení bariér vstupu pro nové členy",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      accentColor: "from-orange-400 to-red-600",
      sections: [
        {
          title: "Strach",
          content: "Mnoho lidí se bojí jít do posilovny.",
          points: [
            "Nevědí, co je uvnitř čeká",
            "Bojí se, že budou vypadat hloupě",
            "Mají strach, že neumí cvičit správně"
          ]
        },
        {
          title: "Řešení",
          content: "Virtuální fitness trenér",
          points: [
            "Ukaže jim posilovnu online – ještě než přijdou",
            "Vysvětlí, jak fungují stroje a jednotlivé cviky",
            "Dodá jim jistotu, že to zvládnou"
          ]
        },
        {
          title: "Benefit",
          content: "Co to přinese vaší posilovně?",
          points: [
            "Méně strachu = více nových cvičenců",
            "Začátečníci se budou cítit pohodlněji",
            "Víc lidí překoná obavy a opravdu přijde cvičit"
          ]
        }
      ]
    }
  ]

  const nextReason = () => {
    console.log("Next reason clicked")
    setActiveReasonIndex((prev) => {
      const newIndex = (prev + 1) % reasonsData.length
      console.log("Moving to index:", newIndex)
      return newIndex
    })
  }

  const prevReason = () => {
    console.log("Previous reason clicked")
    setActiveReasonIndex((prev) => {
      const newIndex = (prev - 1 + reasonsData.length) % reasonsData.length
      console.log("Moving to index:", newIndex)
      return newIndex
    })
  }

  // Touch handlers for swipe gestures - improved for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    // Pouze pokud je touch v oblasti karuselu a ne na tlačítkách/odkazech
    const target = e.target as HTMLElement
    if (target.tagName === 'BUTTON' || target.tagName === 'A') {
      return
    }
    
    console.log("Touch start registered")
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
    setIsInteracting(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isInteracting || touchStart === 0) return
    
    const currentTouch = e.targetTouches[0].clientX
    setTouchEnd(currentTouch)
    
    // Zabránit scrollování při horizontálním swipe
    const distance = Math.abs(touchStart - currentTouch)
    if (distance > 10) {
      e.preventDefault()
    }
  }

  const handleTouchEnd = () => {
    if (!isInteracting || !touchStart || !touchEnd) {
      setIsInteracting(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 80 // Zvýšená minimální vzdálenost pro aktivaci
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    console.log("Touch end - distance:", distance, "isInteracting:", isInteracting)
    
    if (isLeftSwipe) {
      console.log("Left swipe confirmed - going to next")
      nextReason()
    } else if (isRightSwipe) {
      console.log("Right swipe confirmed - going to previous")
      prevReason()
    }
    
    // Reset všech stavů
    setTouchStart(0)
    setTouchEnd(0)
    setIsInteracting(false)
  }

  const iframeItems = [
    {
      url: "https://my.matterport.com/show/?m=p7Fw4hQ7sTN",
      title: "Posilovna: Jako Proutek Olomouc"
    },
    {
      url: "https://my.matterport.com/show/?m=vyyM8c6KaFG",
      title: "Posilovna: Na kolejích E - Ostrava"
    }
  ]

  const gymImages = [
    {
      url: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Kardio zóna"
    },
    {
      url: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Vstupní hala"
    },
    {
      url: "https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      title: "Skupinové lekce"
    }
  ]

  return (
    <section id="galerie" className="section-spacing bg-gymtour-black">
      <div className="container-max">
        {/* Simple Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-gymtour-white mb-8" data-macaly="gallery-title">
            Nahlédněte do
            <br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent">
              moderních posiloven
            </span>
          </h2>
          <p className="text-xl text-gymtour-white/70 max-w-2xl mx-auto" data-macaly="gallery-description">
            Podívejte se jak může vypadat naše služba i ve Vaší posilovně
          </p>
        </div>

        {/* Full Width Iframe Tours */}
        <div className="mb-16 space-y-8">
          {iframeItems.map((item, index) => (
            <div key={index} className="rounded-3xl overflow-hidden bg-gymtour-dark">
              <iframe 
                width="100%" 
                height="480" 
                src={item.url} 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; web-share; xr-spatial-tracking;"
                className="w-full aspect-video rounded-t-3xl"
                data-macaly={`gallery-iframe-${index + 1}`}
                title={`Virtuální prohlídka ${item.title}`}
                loading="lazy"
              ></iframe>
              <div className="p-6 text-center">
                <h3 className="text-white text-xl font-semibold" data-macaly={`iframe-${index + 1}-title`}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modern Interactive Reasons Carousel */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gymtour-white mb-6" data-macaly="why-title">
              Hlavní benefity
              <br />
              <span className="bg-gymtour-gradient bg-clip-text text-transparent">
                pro vaši posilovnu
              </span>
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative">

            {/* Full Width Active Card Layout - Touch events only on the card area */}
            <div className="relative min-h-[600px]">
              {/* Main Active Card - Full Width */}
              <div className="w-full">
                <div 
                  className={`bg-gradient-to-br from-gymtour-dark/70 via-gymtour-dark/50 to-transparent border border-gymtour-white/20 rounded-3xl p-8 h-full min-h-[600px] transition-all duration-700 ease-out shadow-2xl cursor-grab active:cursor-grabbing`}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${reasonsData[activeReasonIndex].gradient} mb-6 shadow-2xl animate-pulse`}>
                      <span className="text-4xl">{reasonsData[activeReasonIndex].icon}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gymtour-white mb-3">
                      {reasonsData[activeReasonIndex].title}
                    </h3>
                    <p className={`text-lg bg-gradient-to-r ${reasonsData[activeReasonIndex].accentColor} bg-clip-text text-transparent font-medium`}>
                      {reasonsData[activeReasonIndex].subtitle}
                    </p>
                  </div>

                  {/* Content Sections */}
                  <div className={`grid ${reasonsData[activeReasonIndex].sections.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
                    {reasonsData[activeReasonIndex].sections.map((section, sectionIndex) => (
                      <div 
                        key={sectionIndex}
                        className={`
                          bg-gymtour-dark/60 border border-gymtour-white/10 rounded-2xl p-6
                          hover:border-gymtour-white/20 transition-all duration-300 hover:scale-105
                          ${sectionIndex === reasonsData[activeReasonIndex].sections.length - 1 && reasonsData[activeReasonIndex].sections.length === 3 
                            ? `bg-gradient-to-br from-gymtour-dark/60 to-transparent` 
                            : ''
                          }
                        `}
                      >
                        <h4 className={`text-lg font-bold mb-3 bg-gradient-to-r ${reasonsData[activeReasonIndex].accentColor} bg-clip-text text-transparent`}>
                          {section.title}
                        </h4>
                        <p className="text-gymtour-white/90 mb-4 text-sm">
                          {section.content}
                        </p>
                        <ul className="space-y-2">
                          {section.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start gap-2 text-gymtour-white/70 text-sm">
                              <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${reasonsData[activeReasonIndex].accentColor} mt-2 flex-shrink-0`}></span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows - Positioned outside content */}
              <button 
                onClick={prevReason}
                aria-label="Předchozí benefit"
                className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gymtour-dark/80 via-gymtour-dark/60 to-gymtour-dark/80 hover:from-gymtour-accent/20 hover:via-gymtour-dark/80 hover:to-gymtour-accent/20 border border-gymtour-white/20 hover:border-gymtour-accent/50 rounded-full p-3 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-gymtour-accent/10 z-10 group md:block hidden"
              >
                <svg 
                  className="w-5 h-5 text-gymtour-white/80 group-hover:text-gymtour-accent group-hover:drop-shadow-lg transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextReason}
                aria-label="Další benefit"
                className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gymtour-dark/80 via-gymtour-dark/60 to-gymtour-dark/80 hover:from-gymtour-accent/20 hover:via-gymtour-dark/80 hover:to-gymtour-accent/20 border border-gymtour-white/20 hover:border-gymtour-accent/50 rounded-full p-3 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-gymtour-accent/10 z-10 group md:block hidden"
              >
                <svg 
                  className="w-5 h-5 text-gymtour-white/80 group-hover:text-gymtour-accent group-hover:drop-shadow-lg transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Mobile swipe instruction */}
              <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-gymtour-white/40 text-xs">Potáhněte pro přepnutí</p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {reasonsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    console.log("Dot clicked, going to index:", index)
                    setActiveReasonIndex(index)
                  }}
                  aria-label={`Přejít na ${index + 1}. benefit`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeReasonIndex 
                      ? `bg-gradient-to-r ${reasonsData[activeReasonIndex].accentColor} scale-125` 
                      : 'bg-gymtour-white/30 hover:bg-gymtour-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary px-10 py-4 text-lg font-semibold hover:scale-105"
            onClick={() => window.location.href = 'https://my.matterport.com/show/?m=vyyM8c6KaFG'}
          >
            <Play className="mr-3 h-5 w-5" />
            Spustit kompletní prohlídku
          </Button>
        </div>
      </div>
    </section>
  )
}