/* ========================================
   COMPONENTE FAQ SECTION
   Estilo consistente con Hero - Mobile-first dark
======================================== */

import { useState } from 'react'
import { Plus, Minus, ArrowDown, Star, Clock } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Primera FAQ abierta por defecto

  const faqs = [
    {
      question: "¿Cómo recibo el acceso?",
      answer:
        "Tras el pago, serás redirigido a una página con el enlace directo a Google Drive. Si tienes problemas, escribe a: megapack3k@gmail.com."
    },
    {
      question: "¿Son realmente 30,000 videos?",
      answer:
        "Sí, más de 30,000 videos en formato vertical HD/4K, organizados por categorías de contenido."
    },
    {
      question: "¿Puedo monetizarlos?",
      answer:
        "Absolutamente. Incluye derechos de uso comercial sin restricciones."
    },
    {
      question: "¿Esta oferta es real?",
      answer:
        "Sí, precio promocional del Pack Completo: €18,95 por tiempo limitado. Precio normal: €97. Pack Básico: €7,65."
    },
    {
      question: "¿Los videos tienen marca de agua?",
      answer:
        "No, todos los videos son 100% libres de marcas de agua. Listos para usar sin atribuciones."
    },
    {
      question: "¿Qué calidad tienen los videos?",
      answer:
        "Todos en resolución 4K y 1080p, formato vertical 9:16, optimizados para móviles y redes sociales."
    },
    {
      question: "¿Incluye actualizaciones?",
      answer:
        "Sí, el Pack Completo incluye actualizaciones gratuitas con nuevo contenido premium."
    },
    {
      question: "¿Hay garantía de devolución?",
      answer:
        "Garantía de satisfacción del 100% durante 7 días. Reembolso completo sin preguntas."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-dvh bg-black text-white overflow-hidden">
      {/* ========================================
           CONTENIDO PRINCIPAL MOBILE-FIRST
      ======================================== */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 py-8">
        <div className="max-w-sm mx-auto text-center space-y-6">

          {/* Título principal */}
          <h1 className="text-4xl font-black leading-tight">
            <span className="block text-white">Preguntas</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Frecuentes
            </span>
            <span className="block text-white text-2xl font-bold mt-2">
              Resuelve tus dudas
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-gray-300 leading-relaxed">
            Todo sobre el <span className="text-yellow-400 font-semibold">Mega Pack</span>
            <br />
            <span className="text-pink-400 font-semibold">30,000 Videos Premium</span>
          </p>

          {/* ========================================
               ACORDEÓN DE PREGUNTAS
          ======================================== */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden transition-all duration-300"
              >
                {/* Pregunta - Botón clickeable */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                >
                  <h3 className="text-base font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-black transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Respuesta - Contenido expandible */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-600">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================================
               SECCIÓN DE SOPORTE
          ======================================== */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
            <h3 className="text-lg font-bold text-white mb-4">
              ¿Problemas de acceso?
            </h3>
            
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-lg mb-2">
                megapack3k@gmail.com
              </div>
              <div className="text-gray-300 text-sm">
                Envía tu comprobante de pago - Respuesta en 1h
              </div>
            </div>
          </div>

          {/* ========================================
               ÚLTIMA OPORTUNIDAD CTA
          ======================================== */}
          <div className="space-y-4 pt-4">
            <button 
              onClick={scrollToPricing}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>ÚLTIMA OPORTUNIDAD</span>
              <ArrowDown size={20} className="animate-bounce" />
            </button>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span>30,000 videos HD 4K</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={12} className="text-green-400" />
                <span>Solo €18,95 hoy</span>
              </div>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-3 border border-red-500/50">
            <div className="text-sm font-bold text-white mb-1">🔥 OFERTA LIMITADA</div>
            <div className="text-xs text-red-100">Precio especial válido solo 24h</div>
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

export default FAQ