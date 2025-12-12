import { useEffect, useRef } from 'react'

export default function HeroVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <div className="hero-video-wrapper">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/1.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>
    </div>
  )
}
