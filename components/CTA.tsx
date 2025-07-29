"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, CheckCircle } from "lucide-react"

export default function CTA() {
  console.log("Modern CTA component rendering")
  
  const benefits = [
    "Virtuální prohlídka zdarma",
    "Bez registrace",
    "Dostupné 24/7",
    "Na všech zařízeních"
  ]

  return (
    <section className="py-24 bg-modern-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8">
              🚀 Začněte hned teď
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold mb-8" data-macaly="cta-title">
              Připraveni na
              <span className="block bg-modern-gradient bg-clip-text text-transparent">
                fitness revoluci?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed" data-macaly="cta-description">
              Nečekejte na zítřek. Začněte svou fitness cestu ještě dnes s naší virtuální prohlídkou
            </p>
          </div>

          {/* Benefits List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <CheckCircle className="w-5 h-5 text-modern-orange mr-3 flex-shrink-0" />
                <span className="text-gray-300" data-macaly={`benefit-${index + 1}`}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-modern-gradient hover:opacity-90 text-white px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-modern-lg"
              onClick={() => console.log("Start virtual tour clicked")}
            >
              <Play className="mr-3 h-6 w-6" />
              Spustit virtuální prohlídku
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-modern-black px-10 py-5 text-xl font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm"
              onClick={() => console.log("Book visit clicked")}
            >
              Rezervovat návštěvu
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-white/20 pt-12">
            <p className="text-gray-400 mb-8">Důvěřuje nám více než 2500 spokojených členů</p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-orange mb-2" data-macaly="trust-stat-1">100%</div>
                <div className="text-sm text-gray-400">Zdarma</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-orange mb-2" data-macaly="trust-stat-2">4.9★</div>
                <div className="text-sm text-gray-400">Hodnocení</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-orange mb-2" data-macaly="trust-stat-3">24/7</div>
                <div className="text-sm text-gray-400">Dostupnost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-modern-orange/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-modern-orange/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-modern-gray">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}