"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function SimpleHero() {
  console.log("SimpleHero component rendering")
  
  return (
    <section className="min-h-screen bg-gymtour-black flex flex-col">
      {/* Simple Navigation */}
      <nav className="w-full px-6 py-8">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-16 h-16">
              <img 
                src="https://assets.macaly-user-data.dev/e7f5chgqdrg66as6f59ahzh4/rgp8xl61dpv4dex2gmky8d1p/XD9LXkbVKem7-C-BeAyMG/logo-01.png"
                alt="GYM TOUR - Virtuální fitness trenér logo"
                className="w-full h-full object-contain"
                data-macaly="logo"
              />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#funkce" className="text-gymtour-white hover:text-gymtour-purple transition-colors text-lg">
              Funkce
            </a>
            <a href="#galerie" className="text-gymtour-white hover:text-gymtour-purple transition-colors text-lg">
              Galerie
            </a>
            <a href="#kontakt" className="text-gymtour-white hover:text-gymtour-purple transition-colors text-lg">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="container-narrow text-center">
          {/* Main Headline */}
          <h1 className="text-gymtour-white mb-8" data-macaly="hero-title">
            Virtuální fitness trenér
            <br />
            <span className="bg-gymtour-gradient bg-clip-text text-transparent">
              vaší posilovny
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gymtour-white/80 mb-12 leading-relaxed" data-macaly="hero-subtitle">
            Moderní způsob jak poznat posilovnu ještě před první návštěvou
          </p>
          
          {/* Simple CTA Button */}
          <Button 
            size="lg" 
            className="btn-primary px-12 py-6 text-xl font-semibold animate-pulse-glow"
            onClick={() => {
              console.log("Start virtual tour clicked - scrolling to gallery")
              document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Play className="mr-3 h-6 w-6" />
            Spustit prohlídku
          </Button>
          
          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gymtour-white mb-2" data-macaly="stat-tours">360°</div>
              <div className="text-sm text-gymtour-white/60">Virtuální</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gymtour-white mb-2" data-macaly="stat-free">Zdarma</div>
              <div className="text-sm text-gymtour-white/60">Pro vaše zákazníky</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gymtour-white mb-2" data-macaly="stat-time">24/7</div>
              <div className="text-sm text-gymtour-white/60">Dostupné</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="text-center pb-12 pt-16">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gymtour-white/40 text-sm font-medium tracking-wide">SCROLL DOWN</p>
          <div className="relative">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-gymtour-gradient rounded-full blur-md opacity-30 animate-pulse"></div>
            {/* Main scroll indicator */}
            <div className="relative inline-block animate-bounce">
              <div className="w-8 h-12 border-2 border-gymtour-white/40 rounded-full flex justify-center bg-gymtour-white/5 backdrop-blur-sm">
                <div className="w-1.5 h-4 bg-gymtour-gradient rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
          {/* Animated dots */}
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-gymtour-white/30 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
            <div className="w-1 h-1 bg-gymtour-white/30 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-1 bg-gymtour-white/30 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}