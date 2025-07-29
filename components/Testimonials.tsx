"use client"

import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  console.log("Modern Testimonials component rendering")
  
  const testimonials = [
    {
      name: "Anna Svobodová",
      role: "Fitness nadšenkyně",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Virtuální prohlídka mi pomohla rozhodnout se ještě před první návštěvou. Úžasná technologie a krásné prostory!"
    },
    {
      name: "Tomáš Novák",
      role: "Osobní trenér",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Jako trenér oceňuji kvalitu vybavení. Technogym stroje jsou prostě špička. Klienti jsou nadšení!"
    },
    {
      name: "Kateřina Dvořáková",
      role: "Manažerka",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Perfektní posilovny s moderním vybavením. Virtuální prohlídka ukázala přesně to, co jsem hledala."
    },
    {
      name: "Petr Horák",
      role: "Student",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Skvělé prostředí a přívětivý personál. Možnost virtuální prohlídky je geniální nápad!"
    }
  ]

  return (
    <section className="py-24 bg-modern-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-gray rounded-full text-sm font-medium text-modern-text mb-6">
            ⭐ Spokojení klienti
          </div>
          <h2 className="text-5xl font-bold text-modern-black mb-6" data-macaly="testimonials-title">
            Co o nás říkají
            <span className="block text-modern-orange">naši členové</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-macaly="testimonials-description">
            Přečtěte si skutečné recenze od našich spokojených členů
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-modern-gray rounded-3xl p-8 shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-modern-orange" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-modern-text leading-relaxed mb-8 text-lg" data-macaly={`testimonial-${index + 1}-text`}>
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                    data-macaly={`testimonial-${index + 1}-image`}
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-modern-orange rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-modern-black" data-macaly={`testimonial-${index + 1}-name`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600" data-macaly={`testimonial-${index + 1}-role`}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-modern-gradient rounded-4xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8" data-macaly="stats-title">
            Naše úspěchy v číslech
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-macaly="stat-members">2500+</div>
              <div className="text-white/80">Spokojených členů</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-macaly="stat-rating">4.9</div>
              <div className="text-white/80">Průměrné hodnocení</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-macaly="stat-years">8</div>
              <div className="text-white/80">Let zkušeností</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" data-macaly="stat-tours">15000+</div>
              <div className="text-white/80">Virtuálních prohlídek</div>
            </div>
          </div>
        </div>

        {/* Reviews Platform Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Najdete nás také na:</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="bg-modern-gray rounded-2xl px-6 py-3">
              <span className="font-semibold text-modern-text">Google ⭐ 4.9</span>
            </div>
            <div className="bg-modern-gray rounded-2xl px-6 py-3">
              <span className="font-semibold text-modern-text">Facebook ⭐ 4.8</span>
            </div>
            <div className="bg-modern-gray rounded-2xl px-6 py-3">
              <span className="font-semibold text-modern-text">TripAdvisor ⭐ 4.9</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}