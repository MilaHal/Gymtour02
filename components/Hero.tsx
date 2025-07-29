"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  console.log("Modern Hero component rendering")
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-modern-white">
      {/* Modern Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-modern-white/80 backdrop-blur-lg border-b border-modern-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-modern-black font-bold text-2xl tracking-tight" data-macaly="logo">
              GYMTOUR
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-modern-text hover:text-modern-orange transition-colors font-medium">Funkce</a>
              <a href="#facilities" className="text-modern-text hover:text-modern-orange transition-colors font-medium">Vybavení</a>
              <a href="#contact" className="text-modern-text hover:text-modern-orange transition-colors font-medium">Kontakt</a>
              <Button 
                size="sm" 
                className="bg-modern-orange hover:bg-modern-orange/90 text-white rounded-full px-6 font-semibold"
              >
                Začít
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-modern-gray rounded-full text-sm font-medium text-modern-text">
                🚀 Nová virtuální prohlídka
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold text-modern-black leading-none tracking-tight" data-macaly="hero-title">
                GYM
                <span className="block text-modern-orange">TOUR</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg" data-macaly="hero-description">
                Virtuální fitness trenér Vaší posilovnou
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-modern-orange hover:bg-modern-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-modern"
                onClick={() => console.log("Start Virtual Tour clicked")}
              >
                <Play className="mr-2 h-5 w-5" />
                Spustit prohlídku
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-modern-border text-modern-text hover:bg-modern-gray px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
                onClick={() => console.log("Learn More clicked")}
              >
                Zjistit více
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Modern Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-black mb-1" data-macaly="stat-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Strojů</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-black mb-1" data-macaly="stat-2">50+</div>
                <div className="text-sm text-gray-600 font-medium">Lekcí</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-modern-black mb-1" data-macaly="stat-3">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Přístup</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Modern Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-4xl overflow-hidden shadow-modern-lg">
              <img 
                src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern gym interior"
                className="w-full h-[600px] object-cover"
                data-macaly="hero-image"
              />
              <div className="absolute inset-0 bg-hero-modern"></div>
              
              {/* Floating Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-20 h-20 bg-modern-white rounded-full flex items-center justify-center shadow-modern-lg hover:scale-110 transition-transform duration-300"
                  onClick={() => console.log("Play video clicked")}
                >
                  <Play className="w-8 h-8 text-modern-orange ml-1" />
                </button>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-8 -left-8 bg-modern-white rounded-3xl p-6 shadow-modern animate-slide-up">
              <div className="text-2xl font-bold text-modern-black mb-1">4.9</div>
              <div className="text-sm text-gray-600">★★★★★ Rating</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-modern-white rounded-3xl p-6 shadow-modern animate-fade-in">
              <div className="text-2xl font-bold text-modern-orange mb-1">360°</div>
              <div className="text-sm text-gray-600">Virtuální tour</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}