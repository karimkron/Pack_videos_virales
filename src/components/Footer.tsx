/* ========================================
   FOOTER MOBILE-FIRST MINIMALISTA
   Último empujón hacia la conversión
======================================== */

import { Crown, Shield, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white">
      {/* ========================================
           CTA FINAL AGRESIVO
      ======================================== */}
      <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 border-t border-red-500/30">
        <div className="max-w-sm mx-auto px-4 py-8 text-center">
          <div className="mb-6">
            <div className="text-red-400 text-sm font-bold mb-2">🚨 ÚLTIMA OPORTUNIDAD</div>
            <h3 className="text-2xl font-black text-white mb-3">
              No dejes pasar esta
              <span className="block text-yellow-400">oferta única</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              30.000 vídeos premium por solo €18.95. Mañana vuelve a su precio normal de €97
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl p-4 border border-yellow-500/50 mb-6">
            <div className="text-yellow-400 font-bold text-lg">€18,95</div>
            <div className="text-gray-400 text-sm line-through">€97</div>
            <div className="text-green-400 text-sm font-semibold">Ahorras €78 solo hoy</div>
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl mb-4"
          >
            CONSEGUIR MI ACCESO AHORA
          </button>
          
          <div className="text-xs text-gray-400">
            ⏰ Oferta válida solo por tiempo limitado
          </div>
        </div>
      </div>

      {/* ========================================
           INFORMACIÓN PRINCIPAL
      ======================================== */}
      <div className="max-w-sm mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Crown size={20} className="text-black" />
            </div>
            <div>
              <h3 className="text-lg font-bold">VideoPacks Premium</h3>
              <p className="text-gray-400 text-xs">Contenido de lujo para creadores</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mb-6">
            La mayor colección de vídeos premium para acelerar tu crecimiento en redes sociales.
          </p>

          {/* Stats compactas */}
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-yellow-400">30K+</div>
              <div className="text-gray-400 text-xs">Vídeos HD 4K</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-green-400">800+</div>
              <div className="text-gray-400 text-xs">Clientes</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-blue-400">24/7</div>
              <div className="text-gray-400 text-xs">Soporte</div>
            </div>
          </div>
        </div>

        {/* ========================================
             GARANTÍAS COMPACTAS
        ======================================== */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-3 text-sm">
            <Shield className="w-5 h-5 text-green-400 flex-shrink-0" />
            <div>
              <div className="text-white font-medium">Pago 100% Seguro</div>
              <div className="text-gray-400 text-xs">Protegido por Stripe</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-white font-medium">Soporte Inmediato</div>
              <div className="text-gray-400 text-xs">Respuesta rapida</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Crown className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-white font-medium">Garantía 7 Días</div>
              <div className="text-gray-400 text-xs">100% satisfacción</div>
            </div>
          </div>
        </div>

        {/* ========================================
             ENLACES LEGALES MÍNIMOS
        ======================================== */}
        <div className="text-center text-xs text-gray-500 mb-6">
        
          <p>© {currentYear} VideoPacks Premium. Todos los derechos reservados.</p>

          {/* ========================================
             boton de soporte
        ======================================== */}
        <a 
                href="mailto:megapack3k@gmail.com"
                className="w-full bg-gray-800 border border-gray-600 text-white font-semibold py-3 px-6 rounded-xl hover:border-gray-500 transition-colors text-sm flex items-center justify-center gap-2"
              >
                📧 Contactar Soporte
              </a>
       
        </div>

        {/* ========================================
             BOTÓN VOLVER ARRIBA
        ======================================== */}
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
          >
            <ArrowUp size={16} />
            <span>Volver arriba</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer