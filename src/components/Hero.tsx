/* ========================================
   HERO OPTIMIZADO PARA MÓVILES CON VIDEO
   Diseño inspirado en tu web actual pero mejorado
======================================== */

import { ArrowDown, Star, Clock } from 'lucide-react'
import { useTranslation, Trans } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

const Hero = () => {
  const { t } = useTranslation()

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="relative min-h-dvh bg-black text-white overflow-hidden">
      {/* Selector de idioma */}
      <LanguageSelector />

      {/* ========================================
           CONTENIDO PRINCIPAL MOBILE-FIRST
      ======================================== */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 py-8">
        <div className="max-w-sm mx-auto text-center space-y-6">

          {/* Título principal mobile-optimized */}
          <h1 className="text-4xl font-black leading-tight">
            <span className="block text-white">{t('hero.title_line1')}</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('hero.title_line2')}
            </span>
            <span className="block text-white text-2xl font-bold mt-2">
              {t('hero.title_line3')}
            </span>
          </h1>

          {/* Subtítulo conciso */}
          <p className="text-lg text-gray-300 leading-relaxed">
            <Trans 
              i18nKey="hero.subtitle_line1" 
              values={{ luxury: t('common.luxury') }}
              components={{
                luxurySpan: <span className="text-yellow-400 font-semibold" />
              }}
            />
            <br />
            <span className="text-pink-400 font-semibold">{t('common.platforms')}</span>
          </p>

          {/* Stats compactas */}
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{t('hero.stats.videos')}</div>
              <div className="text-xs text-gray-400">{t('hero.stats.videos_desc')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{t('hero.stats.price')}</div>
              <div className="text-xs text-gray-400">{t('hero.stats.price_desc')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{t('hero.stats.downloads')}</div>
              <div className="text-xs text-gray-400">{t('hero.stats.downloads_desc')}</div>
            </div>
          </div>

          {/* CTA principal móvil */}
          <div className="space-y-4 pt-4">
            <button 
              onClick={scrollToPricing}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>{t('hero.cta_button')}</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span>{t('hero.trust_indicators.no_watermark')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-green-400" />
                <span>{t('hero.trust_indicators.instant_access')}</span>
              </div>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-3 border border-red-500/50">
            <div className="text-sm font-bold text-white mb-1">🔥 {t('hero.urgency.title')}</div>
            <div className="text-xs text-red-100">{t('hero.urgency.desc')}</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white/60" />
      </div>
    </section>
  )
}

export default Hero