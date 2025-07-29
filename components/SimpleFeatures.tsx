"use client"

import { useState, useEffect } from "react"
import { Eye, Monitor, Clock } from "lucide-react"

export default function SimpleFeatures() {
  console.log("SimpleFeatures component rendering")
  
  const words = ["virtuální prohlídku?", "virtuálního fitness trenéra?"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= currentWord.length) {
        setDisplayedText(currentWord.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        
        setTimeout(() => {
          setIsTyping(true)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }, 3000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentWordIndex])
  
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "360° Prohlídka",
      description: "Prozkoumejte každý kout posilovny interaktivně"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "PC i mobil",
      description: "Funguje plynule na mobilním telefonu i na PC"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Kdykoli",
      description: "Dostupné 24 hodin denně, 7 dní v týdnu"
    }
  ]

  return (
    <section id="funkce" className="section-spacing bg-gymtour-black">
      <div className="container-max">
        {/* Simple Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-gymtour-white mb-6" data-macaly="features-title">
            Proč si vybrat
            <br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent transition-all duration-500">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </span>
          </h2>
        </div>

        {/* Simple Features Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gymtour-gradient rounded-full flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gymtour-white mb-4" data-macaly={`feature-${index + 1}-title`}>
                {feature.title}
              </h3>
              <p className="text-lg text-gymtour-white/70" data-macaly={`feature-${index + 1}-description`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}