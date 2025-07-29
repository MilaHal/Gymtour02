"use client"

import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  console.log("Modern Footer component rendering")
  
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "#" },
    { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "#" },
    { icon: <Youtube className="w-5 h-5" />, label: "YouTube", href: "#" }
  ]

  const quickLinks = [
    { label: "Virtuální prohlídka", href: "#tour" },
    { label: "Ceníky", href: "#pricing" },
    { label: "Rozvrh lekcí", href: "#schedule" },
    { label: "O nás", href: "#about" },
    { label: "Kontakt", href: "#contact" }
  ]

  const services = [
    { label: "Osobní trénink", href: "#personal" },
    { label: "Skupinové lekce", href: "#classes" },
    { label: "Wellness", href: "#wellness" },
    { label: "Výživa", href: "#nutrition" },
    { label: "Fyzioterapie", href: "#physio" }
  ]

  return (
    <footer className="bg-modern-gray">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-modern-black mb-4" data-macaly="footer-brand">
                GYMTOUR
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6" data-macaly="footer-description">
                Moderní fitness centrum s virtuální prohlídkou. Objevte budoucnost fitness ještě dnes.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-modern-white rounded-2xl flex items-center justify-center text-gray-600 hover:text-modern-orange hover:shadow-modern transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-modern-black mb-6" data-macaly="footer-links-title">
              Rychlé odkazy
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-modern-orange transition-colors font-medium"
                    data-macaly={`footer-link-${index + 1}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-modern-black mb-6" data-macaly="footer-services-title">
              Naše služby
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-600 hover:text-modern-orange transition-colors font-medium"
                    data-macaly={`footer-service-${index + 1}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-modern-black mb-6" data-macaly="footer-contact-title">
              Kontaktní údaje
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-modern-orange mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-600 font-medium">
                    Wenceslas Square 1<br />
                    110 00 Praha 1
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-modern-orange mr-3 flex-shrink-0" />
                <a href="tel:+420123456789" className="text-gray-600 hover:text-modern-orange transition-colors font-medium">
                  +420 123 456 789
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-modern-orange mr-3 flex-shrink-0" />
                <a href="mailto:info@gymtour.cz" className="text-gray-600 hover:text-modern-orange transition-colors font-medium">
                  info@gymtour.cz
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-8">
              <h5 className="font-bold text-modern-black mb-3" data-macaly="footer-hours-title">
                Otevírací doba
              </h5>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Po - Pá:</span>
                  <span className="font-medium">6:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>So - Ne:</span>
                  <span className="font-medium">8:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-modern-border">
          <div className="bg-modern-white rounded-3xl p-8 text-center">
            <h4 className="text-2xl font-bold text-modern-black mb-4" data-macaly="newsletter-title">
              Zůstaňte v obraze
            </h4>
            <p className="text-gray-600 mb-6" data-macaly="newsletter-description">
              Přihlaste se k odběru novinek a získejte 10% slevu na první členství
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Váš e-mail"
                className="flex-1 px-4 py-3 rounded-2xl border border-modern-border focus:outline-none focus:ring-2 focus:ring-modern-orange"
              />
              <button 
                className="bg-modern-gradient text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300"
                onClick={() => console.log("Newsletter signup clicked")}
              >
                Přihlásit se
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-modern-border bg-modern-white">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0" data-macaly="footer-copyright">
              © 2024 GYMTOUR. Všechna práva vyhrazena.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-600 hover:text-modern-orange transition-colors">
                Ochrana soukromí
              </a>
              <a href="#terms" className="text-gray-600 hover:text-modern-orange transition-colors">
                Obchodní podmínky
              </a>
              <a href="#cookies" className="text-gray-600 hover:text-modern-orange transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}