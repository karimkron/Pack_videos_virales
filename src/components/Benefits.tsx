/* ========================================
   SECCIÓN DE BENEFICIOS MOBILE-FIRST
   Guía al usuario paso a paso hacia la compra
======================================== */

import { CheckCircle, Download, Zap, Crown, Target} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Benefits = () => {
  const { t } = useTranslation()
  
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
            {t('benefits.title_line1')}
            <span className="block text-yellow-400">{t('benefits.title_line2')}</span>
          </h2>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {t('benefits.description')}
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
                <h3 className="text-lg font-bold text-white mb-2">{t('benefits.benefit1.title')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('benefits.benefit1.desc')}
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
                <h3 className="text-lg font-bold text-white mb-2">{t('benefits.benefit2.title')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('benefits.benefit2.desc')}
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
                <h3 className="text-lg font-bold text-white mb-2">{t('benefits.benefit3.title')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('benefits.benefit3.desc')}
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
                <h3 className="text-lg font-bold text-white mb-2">{t('benefits.benefit4.title')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {t('benefits.benefit4.desc')}
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
            📈 {t('benefits.categories.title')}
          </h3>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-lg font-black text-green-400 mb-1">{t('benefits.categories.luxury')}</div>
              <div className="text-xs text-gray-300">{t('benefits.categories.luxury_desc')}</div>
            </div>
            <div>
              <div className="text-lg font-black text-blue-400 mb-1">{t('benefits.categories.personal')}</div>
              <div className="text-xs text-gray-300">{t('benefits.categories.personal_desc')}</div>
            </div>
            <div>
              <div className="text-lg font-black text-purple-400 mb-1">{t('benefits.categories.business')}</div>
              <div className="text-xs text-gray-300">{t('benefits.categories.business_desc')}</div>
            </div>
            <div>
              <div className="text-lg font-black text-yellow-400 mb-1">{t('benefits.categories.motivation')}</div>
              <div className="text-xs text-gray-300">{t('benefits.categories.motivation_desc')}</div>
            </div>
          </div>
        </div>

        {/* ========================================
             URGENCIA + CTA
        ======================================== */}
        <div className="text-center">
          <div className="bg-red-600/20 border border-red-500/50 rounded-xl p-4 mb-6">
            <div className="text-red-400 text-sm font-bold mb-2">⚡ {t('benefits.urgency.title')}</div>
            <div className="text-white text-lg font-bold">{t('benefits.urgency.special_price')}</div>
            <div className="text-gray-400 text-sm line-through">{t('benefits.urgency.normal_price')}</div>
            <div className="text-green-400 text-sm font-semibold">{t('benefits.urgency.savings')}</div>
          </div>

          <button 
            onClick={scrollToPricing}
            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-lg py-4 px-8 rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transform hover:-translate-y-1 transition-all duration-300 mb-4"
          >
            {t('benefits.cta_button')}
          </button>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>{t('benefits.trust_badges.secure_payment')}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>{t('benefits.trust_badges.instant_download')}</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle size={12} className="text-green-400" />
              <span>{t('benefits.trust_badges.guarantee')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits