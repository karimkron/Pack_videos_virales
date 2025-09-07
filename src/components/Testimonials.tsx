/* ========================================
   TESTIMONIALS COMPONENT
   Solo imágenes de capturas - Estilo Hero consistente
======================================== */
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const testimonialImages = [
    './img/testimonio1.jpeg',
    './img/testimonio2.jpeg',
    './img/testimonio3.jpeg'
  ]

  return (
    <section className="relative min-h-dvh bg-black text-white overflow-hidden">
      {/* ========================================
           CONTENIDO PRINCIPAL MOBILE-FIRST
      ======================================== */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 py-8">
        <div className="max-w-sm mx-auto text-center space-y-6">

          {/* Título principal */}
          <h1 className="text-4xl font-black leading-tight">
            <span className="block text-white">{t("testimonials.title_line1")}</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t("testimonials.title_line2")}
            </span>
          </h1>

         

          {/* ========================================
               IMÁGENES DE TESTIMONIOS
          ======================================== */}
          <div className="space-y-4">
            {testimonialImages.map((image, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:border-yellow-500/50"
              >
                <img 
                  src={image} 
                  alt={`Testimonio ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-4">
            <div className="text-center">
              <div className="text-green-400 font-bold">✓</div>
              <div>{t("testimonials.trust_indicators.real_clients")}</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold">✓</div>
              <div>{t("testimonials.trust_indicators.verified_results")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials