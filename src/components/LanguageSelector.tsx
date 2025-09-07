import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Globe, ChevronDown } from 'lucide-react'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0]

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Botón principal */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border border-gray-600 rounded-xl px-4 py-2 text-white hover:border-yellow-500/50 transition-all duration-300"
        >
          <Globe size={16} className="text-yellow-400" />
          <span className="text-sm font-medium">{currentLanguage.flag}</span>
          <span className="text-sm font-medium hidden sm:block">{currentLanguage.name}</span>
          <ChevronDown 
            size={14} 
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <>
            {/* Overlay para cerrar */}
            <div 
              className="fixed inset-0 z-10" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu desplegable */}
            <div className="absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-sm border border-gray-600 rounded-xl overflow-hidden shadow-2xl z-20">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-800/50 transition-colors ${
                    i18n.language === language.code 
                      ? 'bg-yellow-500/20 text-yellow-400' 
                      : 'text-white'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium whitespace-nowrap">{language.name}</span>
                  {i18n.language === language.code && (
                    <div className="w-2 h-2 bg-yellow-400 rounded-full ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default LanguageSelector