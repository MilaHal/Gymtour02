"use client"

import { Play, ArrowRight, RotateCcw, Maximize } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VirtualTour() {
  console.log("Modern VirtualTour component rendering")
  
  const tourStops = [
    {
      image: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Vstupní hala",
      description: "Moderní recepce a odpočinková zóna"
    },
    {
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Kardio zóna",
      description: "Nejnovější kardio stroje s výhledem"
    },
    {
      image: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Posilovna",
      description: "Profesionální posilovací stroje a činky"
    },
    {
      image: "https://images.pexels.com/photos/1552100/pexels-photo-1552100.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Skupinové lekce",
      description: "Prostorný sál pro fitness lekce"
    }
  ]

  return (
    <section className="py-24 bg-modern-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-gray rounded-full text-sm font-medium text-modern-text mb-6">
            🎯 Interaktivní prohlídka
          </div>
          <h2 className="text-5xl font-bold text-modern-black mb-6" data-macaly="tour-title">
            Prozkoumejte naší
            <span className="block text-modern-orange">posilovnu virtuálně</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" data-macaly="tour-description">
            Interaktivní 360° prohlídka vám umožní poznat každý detail našich prostor
          </p>
        </div>

        {/* Main Tour Interface */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative rounded-4xl overflow-hidden shadow-modern-lg bg-modern-black">
            <img 
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200&h=700&fit=crop"
              alt="Virtuální prohlídka posilovny"
              className="w-full h-[500px] lg:h-[600px] object-cover"
              data-macaly="main-tour-image"
            />
            
            {/* Tour Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-modern-black/60 via-transparent to-transparent">
              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="w-24 h-24 bg-modern-white rounded-full flex items-center justify-center shadow-modern-lg hover:scale-110 transition-transform duration-300 group"
                  onClick={() => console.log("Start 360 tour clicked")}
                >
                  <Play className="w-10 h-10 text-modern-orange ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
              {/* Bottom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2" data-macaly="current-location">
                      Hlavní posilovací sál
                    </h3>
                    <p className="text-white/80" data-macaly="current-description">
                      Moderní stroje pro kompletní silový trénink
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="w-12 h-12 bg-modern-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-modern-white/30 transition-colors">
                      <RotateCcw className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-modern-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-modern-white/30 transition-colors">
                      <Maximize className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Stops */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tourStops.map((stop, index) => (
            <div 
              key={index}
              className="bg-modern-gray rounded-3xl overflow-hidden hover:shadow-modern transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              onClick={() => console.log(`Tour stop ${index + 1} clicked`)}
            >
              <div className="relative">
                <img 
                  src={stop.image}
                  alt={stop.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-modern-black/20 group-hover:bg-modern-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-modern-white rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-modern-orange ml-0.5" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-modern-black mb-2" data-macaly={`stop-${index + 1}-title`}>
                  {stop.title}
                </h4>
                <p className="text-sm text-gray-600" data-macaly={`stop-${index + 1}-description`}>
                  {stop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-modern-gradient text-white px-8 py-4 text-lg font-semibold rounded-2xl hover:scale-105 transition-transform duration-300 shadow-modern"
              onClick={() => console.log("Full tour clicked")}
            >
              <Play className="mr-2 h-5 w-5" />
              Spustit kompletní prohlídku
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-modern-border text-modern-text hover:bg-modern-gray px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300"
              onClick={() => console.log("Book visit clicked")}
            >
              Rezervovat návštěvu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}