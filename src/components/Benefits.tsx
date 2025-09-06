/* ========================================
   SECCIÓN DE BENEFICIOS MOBILE-FIRST
   Guía al usuario paso a paso hacia la compra
======================================== */

import { CheckCircle, Download, Zap, Crown, Target} from 'lucide-react'

const Benefits = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-sm mx-auto px-4">
        
        {/* ========================================
             ENCABEZADO CON SOCIAL PROOF
        ======================================== */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black mb-4 leading-tight">
            ¿Qué es el Mega Pack de
            <span className="block text-yellow-400">Vídeos Virales?</span>
          </h2>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            +30,000 vídeos HD 4K de alta calidad con derechos de uso para TikTok, Instagram y Shorts. Sin los costos ni el tiempo de creación. Personalízalos y Listos para publicar desde el primer día.
          </p>
        </div>

        {/* ========================================
             BENEFICIOS EN CARDS MOBILE
        ======================================== */}
        <div className="space-y-4 mb-8">
          
          {/* Benefit 1 */}
            <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap size={20} className="text-black" />
              </div>
              <div>
              <h3 className="text-lg font-bold text-white mb-2">Pack Más Completo</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Ningún otro paquete ofrece esta cantidad y calidad de contenido exclusivo.
              </p>
              </div>
            </div>
            </div>

          {/* Benefit 2 */}
          <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Crown size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Más Viralidad</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Tus publicaciones generan tracción con videos impactantes y profesionales.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700 hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Ahorra Tiempo y Dinero</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  No necesitas crear contenido desde cero. Monetiza fácilmente y gana autoridad.
                </p>
              </div>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gray-800 rounded-2xl p-3 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Download size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Acceso Inmediato</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Descarga instantánea en Google Drive. Empieza a crecer en 5 minutos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             RESULTADOS REALES (SOCIAL PROOF)
        ======================================== */}
        <div className="bg-gradient-to-r from-green-900/50 to-emerald-900/50 rounded-2xl p-6 border border-green-500/30 mb-8">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            📈 Incluye Categorías 
          </h3>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-black text-green-400 mb-1">Lujo & Estilo</div>
              <div className="text-xs text-gray-300">de vida millonario</div>
            </div>
            <div>
              <div className="text-lg font-black text-blue-400 mb-1">Superación</div>
              <div className="text-xs text-gray-300">Personal</div>
            </div>
            <div>
              <div className="text-lg font-black text-purple-400 mb-1">Negocios &</div>
              <div className="text-xs text-gray-300">Emprendimiento</div>
            </div>
            <div>
              <div className="text-lg font-black text-yellow-400 mb-1">Motivación</div>
              <div className="text-xs text-gray-300">& Éxito</div>
            </div>
          </div>
        </div>

        {/* ========================================
             URGENCIA + CTA
        ======================================== */}
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-xl p-4 mb-6">
            <div className="text-red-400 text-sm font-bold mb-2">⚡ ÚLTIMAS HORAS</div>
            <div className="text-white text-lg font-bold">Precio especial: €18.95</div>
            <div className="text-gray-400 text-sm line-through">Precio normal: €97</div>
            <div className="text-green-400 text-sm font-semibold">Ahorras €78 solo hoy</div>
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all duration-300 mb-4"
          >
            OBTENER ACCESO AHORA
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>Descarga inmediata</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>Garantía 7 días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits