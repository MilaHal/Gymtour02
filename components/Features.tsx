"use client"

import { Eye, Smartphone, MapPin, Clock, Users, Zap } from "lucide-react"

export default function Features() {
  console.log("Modern Features component rendering")
  
  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "360° Virtuální prohlídka",
      description: "Prozkoumejte každý kout naší posilovny pomocí interaktivní 360° technologie"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobilní aplikace",
      description: "Přístup k virtuální prohlídce kdykoliv a kdekoliv prostřednictvím mobilní aplikace"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Interaktivní mapa",
      description: "Navigujte se snadno pomocí interaktivní mapy všech prostor a vybavení"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 dostupnost",
      description: "Virtuální prohlídka je dostupná kdykoliv, bez omezení otevírací doby"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Společná prohlídka",
      description: "Sdílejte prohlídku s přáteli a rodinou v reálném čase"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rychlé načítání",
      description: "Optimalizováno pro rychlé načítání na všech zařízeních"
    }
  ]

  return (
    <section id="features" className="py-24 bg-modern-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-white rounded-full text-sm font-medium text-modern-text mb-6">
            ✨ Moderní technologie
          </div>
          <h2 className="text-5xl font-bold text-modern-black mb-6" data-macaly="features-title">
            Proč zvolit naši
            <span className="block text-modern-orange">virtuální prohlídku?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-macaly="features-description">
            Objevte nejmodernější způsob, jak poznat naši posilovnu ještě před první návštěvou
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-modern-white rounded-3xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-modern-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-modern-orange/20 transition-colors">
                <div className="text-modern-orange">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-modern-black mb-4" data-macaly={`feature-${index + 1}-title`}>
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" data-macaly={`feature-${index + 1}-description`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-modern-white rounded-4xl p-12 shadow-modern-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-modern-black mb-4" data-macaly="features-cta-title">
              Připraveni na moderní fitness zážitek?
            </h3>
            <p className="text-gray-600 mb-8 text-lg" data-macaly="features-cta-description">
              Začněte svou fitness cestu s námi ještě dnes
            </p>
            <button 
              className="bg-modern-gradient text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-modern"
              onClick={() => console.log("Start tour from features clicked")}
            >
              Spustit virtuální prohlídku
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}