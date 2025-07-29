"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Instagram } from "lucide-react"
import { useState } from "react"

export default function SimpleContact() {
  console.log("SimpleContact component rendering")
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  console.log("Form data state:", formData)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting form with data:", formData)
    setIsSubmitting(true)
    
    try {
      // V reálné aplikaci by se zde odeslal email na info.gymtour@gmail.com
      // Pro demonstraci pouze vypíšeme data do konzole
      console.log("Odesílání na email: info.gymtour@gmail.com")
      console.log("Data formuláře:", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      })
      
      // Simulace odeslání
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert("Zpráva byla úspěšně odeslána!")
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error("Chyba při odesílání:", error)
      alert("Nastala chyba při odesílání zprávy.")
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="kontakt" className="section-spacing bg-gymtour-gray">
      <div className="container-narrow">
        {/* Simple Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-gymtour-white mb-8" data-macaly="contact-title">
            Pojďme se
            <br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent">
              potkat
            </span>
          </h2>
          <p className="text-xl text-gymtour-white/70" data-macaly="contact-description">
            Rádi vám poradíme se službou pro vaši posilovnu
          </p>
        </div>

        {/* Simple Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gymtour-gradient rounded-full flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gymtour-white font-semibold">Email</p>
                <a 
                  href="mailto:info.gymtour@gmail.com" 
                  className="text-gymtour-white/70 hover:text-gymtour-purple transition-colors"
                  aria-label="Napište nám email na info.gymtour@gmail.com"
                >
                  info.gymtour@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gymtour-gradient rounded-full flex items-center justify-center mr-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gymtour-white font-semibold">Telefon</p>
                <a 
                  href="tel:+420605061468" 
                  className="text-gymtour-white/70 hover:text-gymtour-purple transition-colors"
                  aria-label="Zavolejte nám na číslo +420 605 061 468"
                >
                  +420 605 061 468
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gymtour-gradient rounded-full flex items-center justify-center mr-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gymtour-white font-semibold">Instagram</p>
                <a 
                  href="https://www.instagram.com/gymtourr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gymtour-white/70 hover:text-gymtour-purple transition-colors"
                  aria-label="Sledujte nás na Instagramu @gymtourr"
                  onClick={(e) => {
                    console.log("Instagram link clicked")
                    // Ujistíme se, že se odkaz otevře v novém okně
                    e.preventDefault()
                    window.open('https://www.instagram.com/gymtourr/', '_blank', 'noopener,noreferrer')
                  }}
                >
                  @gymtourr
                </a>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <div className="bg-gymtour-black rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gymtour-white mb-6" data-macaly="form-title">
              Napište nám
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Vaše jméno</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Vaše jméno"
                  value={formData.name}
                  onChange={(e) => {
                    console.log("Name field changed:", e.target.value)
                    setFormData(prev => ({ ...prev, name: e.target.value }))
                  }}
                  required
                  className="w-full px-4 py-3 bg-gymtour-gray border border-gymtour-white/20 rounded-xl text-gymtour-white placeholder-gymtour-white/50 focus:outline-none focus:border-gymtour-purple"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Váš email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Váš email"
                  value={formData.email}
                  onChange={(e) => {
                    console.log("Email field changed:", e.target.value)
                    setFormData(prev => ({ ...prev, email: e.target.value }))
                  }}
                  required
                  className="w-full px-4 py-3 bg-gymtour-gray border border-gymtour-white/20 rounded-xl text-gymtour-white placeholder-gymtour-white/50 focus:outline-none focus:border-gymtour-purple"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Vaše zpráva</label>
                <textarea 
                  id="message"
                  rows={4}
                  placeholder="Vaše zpráva"
                  value={formData.message}
                  onChange={(e) => {
                    console.log("Message field changed:", e.target.value)
                    setFormData(prev => ({ ...prev, message: e.target.value }))
                  }}
                  required
                  className="w-full px-4 py-3 bg-gymtour-gray border border-gymtour-white/20 rounded-xl text-gymtour-white placeholder-gymtour-white/50 focus:outline-none focus:border-gymtour-purple resize-none"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
              </Button>
            </form>
          </div>
        </div>

        {/* Simple Footer */}
        <div className="text-center pt-12 border-t border-gymtour-white/10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24">
              <img 
                src="https://assets.macaly-user-data.dev/e7f5chgqdrg66as6f59ahzh4/rgp8xl61dpv4dex2gmky8d1p/F_Boq0x3mEk26ngltrQeK/logo-sede.png"
                alt="GYM TOUR - Virtuální fitness trenér, spodní logo"
                className="w-full h-full object-contain"
                data-macaly="footer-logo"
              />
            </div>
          </div>
          <p className="text-gymtour-white/50 text-sm" data-macaly="footer-copyright">
            © 2024 GYM TOUR. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </section>
  )
}