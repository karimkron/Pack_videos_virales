/* ========================================
   FOOTER MOBILE-FIRST MINIMALISTA
   Último empujón hacia la conversión
======================================== */

import { useTranslation } from 'react-i18next'
import { Crown, Shield, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
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
            <div className="text-red-400 text-sm font-bold mb-2">🚨 {t("footer.final_cta.urgency")}</div>
            <h3 className="text-2xl font-black text-white mb-3">
              {t("footer.final_cta.title_line1")}
              <span className="block text-yellow-400">{t("footer.final_cta.title_line2")}</span>
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {t("footer.final_cta.description")}
            </p>
          </div>

          <div className="bg-black/50 rounded-2xl p-4 border border-yellow-500/50 mb-6">
            <div className="text-yellow-400 font-bold text-lg"> {t("footer.final_cta.price")}</div>
            <div className="text-gray-400 text-sm line-through">{t("footer.final_cta.original_price")}</div>
            <div className="text-green-400 text-sm font-semibold">{t("footer.final_cta.savings")}</div>
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl mb-4"
          >
           {t("footer.final_cta.button")}
          </button>
          
          <div className="text-xs text-gray-400">
            ⏰ {t("footer.final_cta.time_limit")}
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
              <h3 className="text-lg font-bold">{t("footer.brand.name")}</h3>
              <p className="text-gray-400 text-xs">{t("footer.brand.tagline")}</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mb-6">
            {t("footer.brand.description")}
          </p>

          {/* Stats compactas */}
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-yellow-400"> {t("footer.stats.videos")}</div>
              <div className="text-gray-400 text-xs">{t("footer.stats.videos_desc")}</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-green-400">{t("footer.stats.clients")}</div>
              <div className="text-gray-400 text-xs">{t("footer.stats.clients_desc")}</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-3">
              <div className="text-lg font-bold text-blue-400">{t("footer.stats.support")}</div>
              <div className="text-gray-400 text-xs">{t("footer.stats.support_desc")}</div>
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
              <div className="text-white font-medium">{t("footer.guarantees.secure_payment")}</div>
              <div className="text-gray-400 text-xs">{t("footer.guarantees.secure_payment_desc")}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
            <div>
              <div className="text-white font-medium">{t("footer.guarantees.instant_support")}</div>
              <div className="text-gray-400 text-xs">{t("footer.guarantees.instant_support_desc")}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <Crown className="w-5 h-5 text-purple-400 flex-shrink-0" />
            <div>
              <div className="text-white font-medium">{t("footer.guarantees.guarantee")}</div>
              <div className="text-gray-400 text-xs">{t("footer.guarantees.guarantee_desc")}</div>
            </div>
          </div>
        </div>

        {/* ========================================
             ENLACES LEGALES MÍNIMOS
        ======================================== */}
        <div className="text-center text-xs text-gray-500 mb-6">
        
        <a 
                href="mailto:megapack3k@gmail.com"
                className="w-full bg-gray-800 border border-gray-600 text-white font-semibold py-3 px-6 rounded-xl hover:border-gray-500 transition-colors text-sm flex items-center justify-center gap-2"
              >
                📧 {t("footer.contact_support")}
              </a>
               <p>© {currentYear} {t("footer.copyright")}</p>
       
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
            <span>{t("footer.back_to_top")}</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer