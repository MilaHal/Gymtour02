"use client"

import { Dumbbell, Heart, Users, Droplets, Wifi, Car } from "lucide-react"

export default function Facilities() {
  console.log("Modern Facilities component rendering")
  
  const facilities = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Posilovací stroje",
      items: ["Technogym vybavení", "Volné váhy", "Funkční trénink", "Crossfit zóna"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Kardio zóna",
      items: ["Běžecké pásy", "Rotoped", "Eliptické trenažéry", "Veslařské trenažéry"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skupinové lekce",
      items: ["Yoga", "Pilates", "Zumba", "Spinning"]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Wellness",
      items: ["Sauna", "Parní lázeň", "Masáže", "Regenerace"]
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Moderní vybavení",
      items: ["WiFi zdarma", "Klimatizace", "Audio systém", "TV obrazovky"]
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Dodatečné služby",
      items: ["Parkování", "Šatny", "Úschova", "Občerstvení"]
    }
  ]

  const images = [
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  ]

  return (
    <section id="facilities" className="py-24 bg-modern-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-white rounded-full text-sm font-medium text-modern-text mb-6">
            🏋️ Moderní vybavení
          </div>
          <h2 className="text-5xl font-bold text-modern-black mb-6" data-macaly="facilities-title">
            Naše
            <span className="block text-modern-orange">vybavení a služby</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-macaly="facilities-description">
            Objevte vše, co nabízíme pro váš dokonalý fitness zážitek
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="rounded-3xl overflow-hidden shadow-modern">
                <img 
                  src={image}
                  alt={`Facility ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  data-macaly={`facility-image-${index + 1}`}
                />
                <div className="absolute inset-0 bg-modern-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-modern-white rounded-3xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-modern-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-modern-orange/20 transition-colors mr-4">
                  <div className="text-modern-orange">
                    {facility.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-modern-black" data-macaly={`facility-${index + 1}-title`}>
                  {facility.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-modern-orange rounded-full mr-3 flex-shrink-0"></div>
                    <span data-macaly={`facility-${index + 1}-item-${itemIndex + 1}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Equipment Showcase */}
        <div className="mt-20">
          <div className="bg-modern-white rounded-4xl p-12 shadow-modern-lg">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-modern-black mb-6" data-macaly="equipment-title">
                  Nejmodernější technologie
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed" data-macaly="equipment-description">
                  Investujeme do nejnovějších technologií a vybavení, abychom vám poskytli ten nejlepší tréninkový zážitek. Naše stroje jsou pravidelně servisovány a aktualizovány.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-modern-orange mb-2" data-macaly="equipment-stat-1">500+</div>
                    <div className="text-sm text-gray-600">Kusů vybavení</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-modern-orange mb-2" data-macaly="equipment-stat-2">2024</div>
                    <div className="text-sm text-gray-600">Nejnovější modely</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-modern">
                  <img 
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Modern gym equipment"
                    className="w-full h-80 object-cover"
                    data-macaly="equipment-showcase-image"
                  />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-modern-gradient text-white rounded-2xl p-4 shadow-modern">
                  <div className="text-center">
                    <div className="text-lg font-bold">100%</div>
                    <div className="text-xs">Technogym</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}