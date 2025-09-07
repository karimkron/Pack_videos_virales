/* ========================================
   COMPONENTE PRINCIPAL DE LA APLICACIÓN
   Maneja las rutas y navegación entre páginas
   ======================================== */
import './i18n'

import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import VideoPreview from './components/VideoPreview'
import Access from './pages/Access'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Routes>
        {/* ========================================
             PÁGINA PRINCIPAL - LANDING PAGE
        ======================================== */}
        <Route path="/" element={
          <>
            <Hero />
            <Benefits />
            <VideoPreview />
            <Pricing />
            <FAQ />
            <Testimonials />
            <Footer />
          </>
        } />

        {/* ========================================
             PÁGINA DE VIDEO - MISMO CONTENIDO PARA TRACKING
        ======================================== */}
        <Route path="/video" element={
          <>
            <Hero />
            <Benefits />
            <VideoPreview />
            <Pricing />
            <FAQ />
            <Testimonials />
            <Footer />
          </>
        } />
        
        {/* ========================================
             PÁGINA DE ACCESO POST-PAGO
        ======================================== */}
        <Route path="/access" element={<Access />} />
        
        {/* ========================================
             RUTA 404 - REDIRECCIONA A HOME
        ======================================== */}
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
              <a href="/" className="btn-primary">Volver al inicio</a>
            </div>
          </div>
        } />
      </Routes>
    </div>
  )
}

export default App