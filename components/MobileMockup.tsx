"use client"

export default function MobileMockup() {
  console.log("MobileMockup component rendering")

  return (
    <section className="section-spacing bg-gradient-to-br from-black via-purple-900/40 via-indigo-900/30 to-black">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-macaly="mockup-title">
            Vyzkoušejte si to
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
              přímo na mobilu
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto" data-macaly="mockup-description">
            Virtuální fitness trenér funguje perfektně na všech zařízeních
          </p>
        </div>

        {/* Mobile Mockup Container */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {/* Background Gradient Circles */}
          <div className="absolute top-8 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/25 to-violet-600/25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-8 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-green-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
          
          {/* Mobile Phone Mockup */}
          <div className="relative transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            {/* Phone Shadow */}
            <div className="absolute inset-0 bg-black/20 rounded-[3rem] blur-2xl translate-y-8 translate-x-4 scale-105"></div>
            
            {/* Phone Body */}
            <div className="relative bg-gradient-to-b from-slate-700 via-slate-600 to-slate-700 rounded-[3rem] p-3 shadow-2xl border border-slate-500/30">
              {/* Screen Bezel */}
              <div className="bg-black rounded-[2.5rem] p-1">
                {/* Screen */}
                <div className="relative bg-white rounded-[2.2rem] overflow-hidden w-[280px] h-[560px]">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/5 flex items-center justify-between px-4 z-10">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 rounded-full bg-black/40"></div>
                      <div className="w-1 h-1 rounded-full bg-black/40"></div>
                      <div className="w-1 h-1 rounded-full bg-black/40"></div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-6 h-3 border border-black/30 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Video Content */}
                  <div className="absolute inset-0 pt-8">
                    <img 
                      src="https://assets.macaly-user-data.dev/e7f5chgqdrg66as6f59ahzh4/rgp8xl61dpv4dex2gmky8d1p/qHqX08-VMeGI9Dtedl7UY/videoweb-ezgif.com-optimize.gif"
                      alt="Virtuální fitness trenér v akci - demonstrace mobilní aplikace s 360° prohlídkou posilovny"
                      className="w-full h-full object-cover"
                      data-macaly="phone-video"
                    />
                  </div>

                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[2.2rem] pointer-events-none"></div>
                </div>
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-6 bg-black/85 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-purple-400/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">Z</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">360° Prohlídka</p>
                  <p className="text-xs text-purple-300">Interaktivní</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 bg-black/85 backdrop-blur-sm rounded-xl p-3 shadow-2xl border border-emerald-400/50">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-bold">B</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Virtuální trenér</p>
                  <p className="text-xs text-emerald-300">V reálném čase</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Below */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl border border-purple-400/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" data-macaly="feature-responsive-title">
              360° Prohlídka
            </h3>
            <p className="text-gray-300 text-sm" data-macaly="feature-responsive-desc">
              Kompletní virtuální prohlídka posilovny s videi, fotkami a popiskami
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl border border-emerald-400/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" data-macaly="feature-speed-title">
              Virtuální trenér
            </h3>
            <p className="text-gray-300 text-sm" data-macaly="feature-speed-desc">
              Interaktivní výuka na všech strojích
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-cyan-600 to-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl border border-blue-400/30">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-3" data-macaly="feature-intuitive-title">
              Ready i na mobilní zařízení
            </h3>
            <p className="text-gray-300 text-sm" data-macaly="feature-intuitive-desc">
              Optimalizováno pro všechna zařízení
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}