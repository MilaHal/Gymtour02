"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, Instagram } from "lucide-react"
import { useState } from "react"

export default function SimpleContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  })

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({ name: false, email: false, message: false })

    let hasError = false
    const newErrors = { name: false, email: false, message: false }

    if (!formData.name.trim()) {
      newErrors.name = true
      hasError = true
    }
    if (!validateEmail(formData.email)) {
      newErrors.email = true
      hasError = true
    }
    if (!formData.message.trim()) {
      newErrors.message = true
      hasError = true
    }

    setErrors(newErrors)

    if (hasError) {
      alert("Zkontrolujte prosím formulář.")
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch("https://getform.io/f/aoloxwqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Děkujeme za zprávu!")
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert("Něco se pokazilo. Zkuste to prosím znovu.")
      }
    } catch (error) {
      console.error("Chyba při odesílání formuláře:", error)
      alert("Došlo k chybě při odesílání.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="section-spacing bg-gymtour-gray">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-gymtour-white mb-8">
            Pojďme se<br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent">potkat</span>
          </h2>
          <p className="text-xl text-gymtour-white/70">
            Rádi vám poradíme se službou pro vaši posilovnu
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <ContactInfo />
          </div>

          <div className="bg-gymtour-black rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gymtour-white mb-6">Napište nám</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput id="name" label="Vaše jméno" value={formData.name} error={errors.name} onChange={(v) => setFormData(prev => ({ ...prev, name: v }))} />
              <FormInput id="email" label="Váš email" value={formData.email} error={errors.email} onChange={(v) => setFormData(prev => ({ ...prev, email: v }))} type="email" />
              <FormTextarea id="message" label="Vaše zpráva" value={formData.message} error={errors.message} onChange={(v) => setFormData(prev => ({ ...prev, message: v }))} />
              <Button type="submit" disabled={isSubmitting} className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50">
                {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gymtour-white/10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24">
              <img src="https://assets.macaly-user-data.dev/e7f5chgqdrg66as6f59ahzh4/rgp8xl61dpv4dex2gmky8d1p/F_Boq0x3mEk26ngltrQeK/logo-sede.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-gymtour-white/50 text-sm">© 2024 GYM TOUR. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  return (
    <>
      <ContactRow icon={<Mail className="w-6 h-6 text-white" />} label="Email" value="info.gymtour@gmail.com" href="mailto:info.gymtour@gmail.com" />
      <ContactRow icon={<Phone className="w-6 h-6 text-white" />} label="Telefon" value="+420 605 061 468" href="tel:+420605061468" />
      <ContactRow icon={<Instagram className="w-6 h-6 text-white" />} label="Instagram" value="@gymtourr" href="https://www.instagram.com/gymtourr/" />
    </>
  )
}

function ContactRow({ icon, label, value, href }: { icon: JSX.Element, label: string, value: string, href: string }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gymtour-gradient rounded-full flex items-center justify-center mr-4">
        {icon}
      </div>
      <div>
        <p className="text-gymtour-white font-semibold">{label}</p>
        <a href={href} className="text-gymtour-white/70 hover:text-gymtour-purple transition-colors">{value}</a>
      </div>
    </div>
  )
}

function FormInput({ id, label, value, onChange, error, type = "text" }: { id: string, label: string, value: string, onChange: (v: string) => void, error: boolean, type?: string }) {
  return (
    <input id={id} type={type} placeholder={label} value={value} onChange={(e) => onChange(e.target.value)} required
      className={`w-full px-4 py-3 bg-gymtour-gray border ${error ? 'border-red-500' : 'border-gymtour-white/20'} rounded-xl text-gymtour-white placeholder-gymtour-white/50 focus:outline-none focus:border-gymtour-purple`} />
  )
}

function FormTextarea({ id, label, value, onChange, error }: { id: string, label: string, value: string, onChange: (v: string) => void, error: boolean }) {
  return (
    <textarea id={id} rows={4} placeholder={label} value={value} onChange={(e) => onChange(e.target.value)} required
      className={`w-full px-4 py-3 bg-gymtour-gray border ${error ? 'border-red-500' : 'border-gymtour-white/20'} rounded-xl text-gymtour-white placeholder-gymtour-white/50 focus:outline-none focus:border-gymtour-purple resize-none`} />
  )
}
