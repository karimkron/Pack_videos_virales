/* ========================================
   VIDEO PREVIEW COMPONENT
   Modal con controles touch para móviles
======================================== */

import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { X, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'

const VideoPreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [originalPath, setOriginalPath] = useState('/')

  // Array de videos - considerando .mov para video 5 y 6
  const videos = [
    { src: '/video/video1.mp4', thumb: '/thumbnails/thumb1.png' },
    { src: '/video/video2.mp4', thumb: '/thumbnails/thumb2.png' },
    { src: '/video/video3.mp4', thumb: '/thumbnails/thumb3.png' },
    { src: '/video/video4.mp4', thumb: '/thumbnails/thumb4.png' },
    { src: '/video/video5.mov', thumb: '/thumbnails/thumb5.png' },
    { src: '/video/video6.mov', thumb: '/thumbnails/thumb6.png' },
    { src: '/video/video7.mp4', thumb: '/thumbnails/thumb7.png' },
    { src: '/video/video8.mp4', thumb: '/thumbnails/thumb8.png' }
  ]

  const openModal = (index: number) => {
    setCurrentVideoIndex(index)
    setIsModalOpen(true)
    setShowControls(true)
    // Guardar la ruta actual antes de cambiar a /video
    setOriginalPath(location.pathname)
    // Cambiar URL a /video para tracking de Meta Ads
    navigate('/video', { replace: true })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
    // Restaurar la URL original
    navigate(originalPath, { replace: true })
  }

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    setShowControls(true)
  }

  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)
    setShowControls(true)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }

  const handleVideoClick = () => {
    setShowControls(true)
    // Auto-hide controls after 3 seconds
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current)
    }
    hideControlsTimeout.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  // Manejar navegación del navegador (botón back)
  useEffect(() => {
    const handlePopState = () => {
      if (isModalOpen && location.pathname !== '/video') {
        setIsModalOpen(false)
        if (videoRef.current) {
          videoRef.current.pause()
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [isModalOpen, location.pathname])

  // Auto-play when modal opens or video changes
  useEffect(() => {
    if (isModalOpen && videoRef.current) {
      videoRef.current.play()
      videoRef.current.muted = isMuted
    }
  }, [currentVideoIndex, isModalOpen])

  // Hide controls initially after 3 seconds
  useEffect(() => {
    if (isModalOpen && showControls) {
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current)
      }
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
    return () => {
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current)
      }
    }
  }, [showControls, isModalOpen])

  return (
    <section className="relative min-h-dvh bg-black text-white overflow-hidden">
      {/* ========================================
           CONTENIDO PRINCIPAL MOBILE-FIRST
      ======================================== */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-4 py-8">
        <div className="max-w-sm mx-auto text-center space-y-6">

          {/* Título principal */}
          <h1 className="text-4xl font-black leading-tight">
            <span className="block text-white">Vista previa</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              de contenido
            </span>
          </h1>

          {/* ========================================
               GRID DE VIDEOS
          ======================================== */}
          <div className="grid grid-cols-2 gap-3">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:border-yellow-500/50 border border-gray-700"
              >
                <img
                  src={video.thumb}
                  alt={`Video ${index + 1}`}
                  className="w-full aspect-[9/16] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================
           MODAL DE VIDEO
      ======================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Video Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={handleVideoClick}
            onTouchStart={handleVideoClick}
          >
            <video
              ref={videoRef}
              src={videos[currentVideoIndex].src}
              className="w-full h-full object-contain"
              loop
              playsInline
              preload="metadata"
            />

            {/* Controls Overlay */}
            <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
              showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}>
              
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeModal()
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-10"
              >
                <X size={24} />
              </button>

              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevVideo()
                }}
                className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextVideo()
                }}
                className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                <ChevronRight size={24} />
              </button>

              {/* Mute Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  toggleMute()
                }}
                className="absolute bottom-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>

              {/* Video Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
                {currentVideoIndex + 1} / {videos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoPreview