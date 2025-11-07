import { useRef, useEffect } from 'react'

export default function HeroP5() {
  const containerRef = useRef(null)
  const p5Ref = useRef(null)

  useEffect(() => {
    // Solo cargar p5 en el cliente
    if (typeof window === 'undefined') return

    import('p5').then((p5Module) => {
      const p5 = p5Module.default

      const sketch = (s) => {
        let particles = []
        const config = { count: 80, maxDist: 120 }

        s.setup = () => {
          const canvas = s.createCanvas(s.windowWidth, Math.max(560, s.windowHeight * 0.6))
          canvas.parent(containerRef.current)
          s.pixelDensity(window.devicePixelRatio || 1)
          for (let i = 0; i < config.count; i++) {
            particles.push({
              pos: s.createVector(s.random(s.width), s.random(s.height)),
              vel: s.createVector(s.random(-0.35, 0.35), s.random(-0.35, 0.35)),
              r: s.random(1, 3)
            })
          }
          s.noStroke()
        }

        s.windowResized = () => {
          s.resizeCanvas(s.windowWidth, Math.max(560, s.windowHeight * 0.6))
        }

        s.draw = () => {
          s.clear()
          // Fondo azul oscuro corporativo
          s.background(10, 26, 40)

          // Actualizar y dibujar partículas
          for (let p of particles) {
            p.pos.add(p.vel)
            if (p.pos.x < 0 || p.pos.x > s.width) p.vel.x *= -1
            if (p.pos.y < 0 || p.pos.y > s.height) p.vel.y *= -1

            // Partículas en color naranja/amarillo
            s.fill(243, 146, 0, 220)
            s.circle(p.pos.x, p.pos.y, p.r)
          }

          // Conectar partículas cercanas con líneas sutiles
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const a = particles[i]
              const b = particles[j]
              const d = s.dist(a.pos.x, a.pos.y, b.pos.x, b.pos.y)
              if (d < config.maxDist) {
                const alpha = s.map(d, 0, config.maxDist, 120, 0)
                s.stroke(243, 146, 0, alpha)
                s.strokeWeight(0.7)
                s.line(a.pos.x, a.pos.y, b.pos.x, b.pos.y)
              }
            }
          }
        }
      }

      p5Ref.current = new p5(sketch)
    })

    return () => {
      if (p5Ref.current) {
        p5Ref.current.remove()
        p5Ref.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="hero-canvas" aria-hidden="true" />
}

