/* ========================================
   PRICING SECTION MOBILE-FIRST OPTIMIZADA
   Diseño inspirado en las imágenes con mejor UX
======================================== */

import { Crown, Check, Star, Zap, AlertTriangle } from 'lucide-react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

const Pricing = () => {
  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  
  return (
    <section id="pricing" className="bg-black text-white py-12">
      <div className="max-w-sm mx-auto px-4">
        
        {/* ========================================
             ENCABEZADO CON URGENCIA
        ======================================== */}
        <div className="text-center mb-8">
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-3 border border-red-500/50 mb-6">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle size={16} className="text-yellow-400" />
              <span className="text-sm font-bold text-white">OFERTA ESPECIAL - Solo 24h</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-4 leading-tight">
            Elige tu
            <span className="block text-yellow-400">Pack Perfecto</span>
          </h2>
          
          <p className="text-gray-300 text-sm">
            Pago único • Sin suscripciones • Acceso de por vida
          </p>
        </div>

        {/* ========================================
             PACK COMPLETO (DESTACADO)
        ======================================== */}
        <div className="relative mb-6">
          {/* Badge Best Seller */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full font-bold text-xs shadow-lg">
              ⭐ MÁS POPULAR
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gray-900 border-2 border-yellow-500/50 rounded-3xl p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-black mx-auto mb-4">
                <Crown size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">Mega Pack Completo</h3>
              <p className="text-gray-400 text-sm mb-4">La colección más completa</p>
              
              {/* Precio destacado */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-4 border border-yellow-500/30 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-black text-yellow-400">€18,95</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-lg">€97</div>
                    <div className="text-green-400 font-bold text-sm">-85%</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-white font-bold text-lg">30.000 vídeos premium</div>
                  <div className="text-yellow-400 text-sm">Solo €0,0005 por vídeo</div>
                </div>
              </div>
            </div>

            {/* Features compactas */}
            <div className="space-y-3 mb-6">
              {[
                "30.000 vídeos calidad HD 4K",
                "categorías premium completas",
                "Sin marcas de agua - 100%",
                "Música y efectos profesionales",
                "Formatos: TikTok, IG, shorts y más",
                "Descargas ilimitadas",
                "Acceso de por vida garantizado",
                "Actualizaciones gratuitas"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stripe Button - Pack Completo */}
            <div className="space-y-3">
              <stripe-buy-button
                buy-button-id={import.meta.env.VITE_STRIPE_BUY_BUTTON_ID_COMPLETE}
                publishable-key={stripePublishableKey}>
              </stripe-buy-button>
              
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500" />
                  <span>Pago seguro SSL</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap size={12} className="text-green-500" />
                  <span>Acceso inmediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             PACK BÁSICO (OPCIÓN ACCESIBLE)
        ======================================== */}
        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Star size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Pack Básico</h3>
            <p className="text-gray-400 text-sm mb-4">Perfecto para empezar</p>
            
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-600 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-black text-blue-400">€7,95</span>
                <div className="text-left">
                  <div className="text-gray-400 line-through">€40</div>
                  <div className="text-green-400 font-semibold text-sm">80,13%</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-white font-bold">7.000 vídeos premium</div>
                <div className="text-blue-400 text-sm">Solo €0,0011 por vídeo</div>
              </div>
            </div>
          </div>

          {/* Features básicas */}
          <div className="space-y-3 mb-6">
            {[
              "7.000 vídeos calidad HD 4K",
              "categorías premium ",
              "Sin marcas de agua",
              "Música y efectos incluidos",
              "Optimizado para redes",
              "Descargas ilimitadas"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Stripe Button - Pack Básico */}
          <div className="space-y-3">
            <stripe-buy-button
              buy-button-id={import.meta.env.VITE_STRIPE_BUY_BUTTON_ID_BASIC}
              publishable-key={stripePublishableKey}>
            </stripe-buy-button>
            
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-500" />
                <span>Pago seguro SSL</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={12} className="text-green-500" />
                <span>Acceso inmediato</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             COMPARACIÓN Y URGENCIA FINAL
        ======================================== */}
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-6 border border-green-500/30 mb-6">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            💎 ¿Por qué el Mega Pack?
          </h3>
          
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">23K+</div>
              <div className="text-xs text-gray-300">Más vídeos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">€11</div>
              <div className="text-xs text-gray-300">Solo €11 más</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">4x</div>
              <div className="text-xs text-gray-300">Más valor</div>
            </div>
          </div>
          
          <div className="text-center text-sm text-green-400 font-semibold">
            🔥 4x más contenido por solo €11 extra = Mejor inversión
          </div>
        </div>

        {/* ========================================
             GARANTÍA Y CONFIANZA
        ======================================== */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600 text-center">
          <h3 className="text-lg font-bold text-white mb-3">
            🛡️ Garantía Total - Sin Riesgos
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Si no quedas 100% satisfecho, te devolvemos tu dinero completo durante los primeros 7 días. Sin preguntas.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
            <div className="text-center">
              <div className="text-green-400 font-bold">✓</div>
              <div>Pago seguro</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-bold">✓</div>
              <div>Sin suscripciones</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold">✓</div>
              <div>Soporte 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing