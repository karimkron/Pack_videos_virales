/* ========================================
   PÁGINA DE ACCESO MOBILE-FIRST
   Optimizada para la experiencia post-compra
======================================== */

import { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { Crown, Download, CheckCircle, ExternalLink, ArrowLeft, Shield, Copy, Smartphone } from 'lucide-react'

const Access = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [hasValidAccess, setHasValidAccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [copySuccess, setCopySuccess] = useState(false)
  
  const driveLink = import.meta.env.VITE_DRIVE_LINK 

  useEffect(() => {
    const checkAccess = () => {
      const sessionId = searchParams.get('session_id')
      const success = searchParams.get('success')
      
      if (sessionId || success === 'true') {
        setHasValidAccess(true)
      } else {
        const accessToken = localStorage.getItem('videopack_access')
        if (accessToken) {
          setHasValidAccess(true)
        }
      }
      
      setLoading(false)
    }

    checkAccess()
  }, [searchParams])

  const openDriveLink = () => {
    window.open(driveLink, '_blank')
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(driveLink).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 2000)
    })
  }

  const goHome = () => {
    navigate('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Verificando acceso...</p>
        </div>
      </div>
    )
  }

  // ========================================
  // ACCESO DENEGADO - MOBILE OPTIMIZED
  // ========================================
  if (!hasValidAccess) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-sm mx-auto text-center">
          <div className="bg-gray-900 rounded-3xl p-8 border border-red-500/50">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/50">
              <Shield size={24} className="text-red-500" />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-4">
              Acceso Restringido
            </h1>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Esta área es exclusiva para clientes. Necesitas completar tu compra para acceder a los vídeos premium.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={goHome}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-6 rounded-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Packs Disponibles
              </button>
              
              <p className="text-sm text-gray-400">
                ¿Ya compraste? Revisa tu email de confirmación.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ========================================
  // PÁGINA DE ACCESO EXITOSO MOBILE-FIRST
  // ========================================
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header compacto */}
      <div className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-sm mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Crown size={16} className="text-black" />
            </div>
            <div>
              <h1 className="font-bold text-white text-sm">VideoPacks Premium</h1>
              <p className="text-xs text-gray-400">Área de cliente</p>
            </div>
          </div>
          
          <button 
            onClick={goHome}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-sm mx-auto px-4 py-8">
        {/* ========================================
             MENSAJE DE BIENVENIDA
        ======================================== */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
            <CheckCircle size={24} className="text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-white mb-3 leading-tight">
            ¡Bienvenido a tu
            <span className="block text-yellow-400">contenido premium!</span>
          </h1>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            Tu pago se procesó correctamente. Ya puedes acceder a todos los vídeos y acelerar tu crecimiento.
          </p>
        </div>

        {/* ========================================
             CARD DE ACCESO ÚNICO
        ======================================== */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-yellow-500/50 relative mb-6">
          
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <Crown size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tu MegaPack</h3>
              </div>
            </div>
            
            
          </div>
          
          <div className="space-y-3">
            <button 
              onClick={openDriveLink}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download size={18} />
              Acceder a Google Drive
              <ExternalLink size={14} />
            </button>
            
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <p className="text-gray-300 text-xs mb-3 text-center">
                ¿El botón no funciona? Copia y pega este enlace:
              </p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-800 px-3 py-2 rounded-lg text-gray-300 text-xs font-mono break-all">
                  {driveLink}
                </div>
                <button 
                  onClick={copyToClipboard}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    copySuccess ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Copy size={14} />
                </button>
              </div>
              {copySuccess && (
                <p className="text-green-400 text-xs mt-2 text-center">¡Enlace copiado!</p>
              )}
            </div>
          </div>
        </div>

        {/* ========================================
             RECOMENDACIÓN APP GOOGLE DRIVE
        ======================================== */}
        <div className="bg-blue-900/50 rounded-3xl p-6 border border-blue-500/50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <Smartphone size={20} className="text-blue-400" />
            </div>
            <div>
              <h3 className="text-white font-bold">📱 Recomendación</h3>
              <p className="text-blue-300 text-xs">Para mejor experiencia</p>
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">
            Te recomendamos descargar la app de Google Drive para obtener la máxima calidad de descarga y mejor experiencia móvil.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <a 
              href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/30 border border-blue-500/50 text-blue-300 font-semibold py-2 px-3 rounded-xl text-xs text-center hover:bg-blue-600/50 transition-colors"
            >
              🤖 Android
            </a>
            <a 
              href="https://apps.apple.com/app/google-drive/id507874739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600/30 border border-blue-500/50 text-blue-300 font-semibold py-2 px-3 rounded-xl text-xs text-center hover:bg-blue-600/50 transition-colors"
            >
              🍎 iOS
            </a>
          </div>
        </div>

        {/* ========================================
             INSTRUCCIONES DETALLADAS
        ======================================== */}
        <div className="bg-gray-900 rounded-3xl p-6 border border-gray-700 mb-8">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            📂 Instrucciones importantes
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">1</div>
              <div>
                <h4 className="text-white font-semibold text-sm">Copia la carpeta</h4>
                <p className="text-gray-400 text-xs">Haz clic derecho en la carpeta → "Hacer una copia" para guardarla en tu Drive personal</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">2</div>
              <div>
                <h4 className="text-white font-semibold text-sm">Evita perder acceso</h4>
                <p className="text-gray-400 text-xs">Al copiar la carpeta a tu Drive, tendrás acceso permanente aunque cambie el enlace original</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">3</div>
              <div>
                <h4 className="text-white font-semibold text-sm">Descarga por lotes</h4>
                <p className="text-gray-400 text-xs">Selecciona varios videos → clic derecho → "Descargar" para descargas masivas</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white">4</div>
              <div>
                <h4 className="text-white font-semibold text-sm">Usa y disfruta</h4>
                <p className="text-gray-400 text-xs">Sube a tus redes sociales y observa cómo crece tu engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================
             SOPORTE Y CONTACTO
        ======================================== */}
        <div className="text-center">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-white mb-3">
              ¿Necesitas ayuda? 🤝
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Estamos aquí para ayudarte 24/7 con cualquier duda que tengas
            </p>
            
            <div className="space-y-3">
              <a 
                href="mailto:megapack3k@gmail.com"
                className="w-full bg-gray-800 border border-gray-600 text-white font-semibold py-3 px-6 rounded-xl hover:border-gray-500 transition-colors text-sm flex items-center justify-center gap-2"
              >
                📧 Contactar Soporte
              </a>
              
              <button 
                onClick={goHome}
                className="w-full bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-500/30 transition-colors text-sm"
              >
                Explorar más contenido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Access