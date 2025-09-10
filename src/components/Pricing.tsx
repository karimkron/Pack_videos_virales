/* ========================================
   PRICING SECTION MOBILE-FIRST OPTIMIZADA
   DiseÃ±o inspirado en las imÃ¡genes con mejor UX
======================================== */

import { Crown, Check, Star, Zap, AlertTriangle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
  
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

const Pricing = () => {
  const { t } = useTranslation()
  const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
  const pricingSectionRef = useRef<HTMLElement>(null)
  
  // Función para trackear inicio de compra en Facebook
  const trackInitiateCheckout = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      console.log('Enviando evento InitiateCheckout'); // Para debug
      window.fbq('track', 'InitiateCheckout', {
        value: 9.65,
        currency: 'EUR',
        content_name: 'Video Pack Checkout Started',
        content_type: 'product'
      });
    }
  }

  useEffect(() => {
    // Función para observar cambios en los botones de Stripe
    const observeStripeButtons = () => {
      const stripeButtons = document.querySelectorAll('stripe-buy-button');
      
      stripeButtons.forEach((button) => {
        // Verificar si ya tiene el event listener
        if (!button.hasAttribute('data-listener-added')) {
          button.setAttribute('data-listener-added', 'true');
          
          // Agregar listener para click
          button.addEventListener('click', () => {
            console.log('Click en botón de Stripe detectado'); // Para debug
            trackInitiateCheckout();
          });
          
          // También escuchar en elementos internos del botón
          const observer = new MutationObserver(() => {
            const internalElements = button.shadowRoot?.querySelectorAll('*') || button.querySelectorAll('*');
            internalElements.forEach((element) => {
              element.addEventListener('click', () => {
                console.log('Click en elemento interno detectado'); // Para debug
                trackInitiateCheckout();
              });
            });
          });
          
          observer.observe(button, { childList: true, subtree: true });
        }
      });
    };

    // Observer para detectar cuando se cargan los botones de Stripe
    const buttonObserver = new MutationObserver(() => {
      observeStripeButtons();
    });

    // Iniciar observación
    if (pricingSectionRef.current) {
      buttonObserver.observe(pricingSectionRef.current, { 
        childList: true, 
        subtree: true 
      });
    }

    // También ejecutar inmediatamente por si ya están cargados
    setTimeout(observeStripeButtons, 1000);
    setTimeout(observeStripeButtons, 3000);
    setTimeout(observeStripeButtons, 5000);

    // Event listener adicional para cualquier click en la sección
    const handleSectionClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const stripeButton = target.closest('stripe-buy-button');
      
      if (stripeButton) {
        console.log('Click general en botón Stripe'); // Para debug
        trackInitiateCheckout();
      }
    };

    document.addEventListener('click', handleSectionClick, true);
    
    return () => {
      buttonObserver.disconnect();
      document.removeEventListener('click', handleSectionClick, true);
    };
  }, []);
  
  return (
    <section id="pricing" className="bg-black text-white py-12" ref={pricingSectionRef}>
      <div className="max-w-sm mx-auto px-4">
        
        {/* ========================================
             ENCABEZADO CON URGENCIA
        ======================================== */}
        <div className="text-center mb-8">
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg p-3 border border-red-500/50 mb-6">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle size={16} className="text-yellow-400" />
              <span className="text-sm font-bold text-white">{t('pricing.urgency_banner')}</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-4 leading-tight">
            {t('pricing.title_line1')}
            <span className="block text-yellow-400">{t('pricing.title_line2')}</span>
          </h2>
          
          <p className="text-gray-300 text-sm">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* ========================================
             PACK COMPLETO (DESTACADO)
        ======================================== */}
        <div className="relative mb-6">
          {/* Badge Best Seller */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-1 rounded-full font-bold text-xs shadow-lg">
              â­ {t('pricing.complete_pack.badge')}
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gray-900 border-2 border-yellow-500/50 rounded-3xl p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center text-black mx-auto mb-4">
                <Crown size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.complete_pack.title')}</h3>
              <p className="text-gray-400 text-sm mb-4">{t('pricing.complete_pack.subtitle')}</p>
              
              {/* Precio destacado */}
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-4 border border-yellow-500/30 mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-black text-yellow-400">{t('pricing.complete_pack.price')}</span>
                  <div className="text-right">
                    <div className="text-gray-400 line-through text-lg">{t('pricing.complete_pack.original_price')}</div>
                    <div className="text-green-400 font-bold text-sm">{t('pricing.complete_pack.discount')}</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-white font-bold text-lg">{t('pricing.complete_pack.videos_count')}</div>
                  <div className="text-yellow-400 text-sm">{t('pricing.complete_pack.price_per_video')}</div>
                </div>
              </div>
            </div>

            {/* Features compactas */}
            <div className="space-y-3 mb-6">
              {(t('pricing.complete_pack.features', { returnObjects: true }) as string[]).map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Wrapper con evento manual para Pack Completo */}
            <div className="space-y-3">
              <div 
                onClick={trackInitiateCheckout}
                className="cursor-pointer"
              >
                <stripe-buy-button
                  buy-button-id={import.meta.env.VITE_STRIPE_BUY_BUTTON_ID_COMPLETE}
                  publishable-key={stripePublishableKey}>
                </stripe-buy-button>
              </div>
              
              <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-yellow-500" />
                  <span>{t('pricing.trust_badges.secure_ssl')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap size={12} className="text-green-500" />
                  <span>{t('pricing.trust_badges.instant_access')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             PACK BÃSICO (OPCIÃ"N ACCESIBLE)
        ======================================== */}
        <div className="bg-gray-900 border border-gray-700 rounded-3xl p-6 mb-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
              <Star size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{t('pricing.basic_pack.title')}</h3>
            <p className="text-gray-400 text-sm mb-4">{t('pricing.basic_pack.subtitle')}</p>
            
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-600 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl font-black text-blue-400">{t('pricing.basic_pack.price')}</span>
                <div className="text-left">
                  <div className="text-gray-400 line-through">{t('pricing.basic_pack.original_price')}</div>
                  <div className="text-green-400 font-semibold text-sm">{t('pricing.basic_pack.discount')}</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-white font-bold">{t('pricing.basic_pack.videos_count')}</div>
                <div className="text-blue-400 text-sm">{t('pricing.basic_pack.price_per_video')}</div>
              </div>
            </div>
          </div>

          {/* Features bÃ¡sicas */}
          <div className="space-y-3 mb-6">
            {(t('pricing.basic_pack.features', { returnObjects: true }) as string[]).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Wrapper con evento manual para Pack Básico */}
          <div className="space-y-3">
            <div 
              onClick={trackInitiateCheckout}
              className="cursor-pointer"
            >
              <stripe-buy-button
                buy-button-id={import.meta.env.VITE_STRIPE_BUY_BUTTON_ID_BASIC}
                publishable-key={stripePublishableKey}>
              </stripe-buy-button>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-500" />
                <span>{t('pricing.trust_badges.secure_ssl')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={12} className="text-green-500" />
                <span>{t('pricing.trust_badges.instant_access')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             COMPARACIÃ"N Y URGENCIA FINAL
        ======================================== */}
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-6 border border-green-500/30 mb-6">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            ðŸ'Ž {t('pricing.comparison.title')}
          </h3>
          
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">{t('pricing.comparison.more_videos')}</div>
              <div className="text-xs text-gray-300">{t('pricing.comparison.more_videos_desc')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-1">{t('pricing.comparison.extra_cost')}</div>
              <div className="text-xs text-gray-300">{t('pricing.comparison.extra_cost_desc')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-1">{t('pricing.comparison.value')}</div>
              <div className="text-xs text-gray-300">{t('pricing.comparison.value_desc')}</div>
            </div>
          </div>
          
          <div className="text-center text-sm text-green-400 font-semibold">
            ðŸ"¥ {t('pricing.comparison.conclusion')}
          </div>
        </div>

        {/* ========================================
             GARANTÃA Y CONFIANZA
        ======================================== */}
        <div className="bg-gray-800 rounded-2xl p-6 border border-gray-600 text-center">
          <h3 className="text-lg font-bold text-white mb-3">
            ðŸ›¡ï¸ {t('pricing.guarantee.title')}
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            {t('pricing.guarantee.description')}
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
            <div className="text-center">
              <div className="text-green-400 font-bold">âœ"</div>
              <div>{t('pricing.guarantee.secure_payment')}</div>
            </div>
            <div className="text-center">
              <div className="text-blue-400 font-bold">âœ"</div>
              <div>{t('pricing.guarantee.no_subscriptions')}</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold">âœ"</div>
              <div>{t('pricing.guarantee.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing