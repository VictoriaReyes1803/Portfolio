import { useEffect, useRef } from 'react'

const LABELS = ['{ }', '</>', 'API', 'SQL', 'JSON', 'AI', '=>', '[ ]', 'async', 'ETL', 'GET', 'await', '.map()', 'fn()', 'RLS', 'pg']
const CYAN   = 'rgba(34,211,238,'
const BLUE   = 'rgba(96,165,250,'
const VIOLET = 'rgba(139,92,246,'
// Weighted palette — cyan dominant to match site accent
const PALETTE = [CYAN, CYAN, CYAN, CYAN, BLUE, BLUE, VIOLET]

function makeParticle(w, h) {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    label: LABELS[Math.floor(Math.random() * LABELS.length)],
    color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
    r: Math.random() * 1.2 + 1.2,
    base: Math.random() * 0.07 + 0.04,
    phase: Math.random() * Math.PI * 2,
  }
}

export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    // Fewer particles on narrow screens
    const count = Math.max(8, Math.min(20, Math.floor(window.innerWidth / 65)))
    let particles = []
    let animId

    const setup = () => {
      const dpr = window.devicePixelRatio || 1
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: count }, () => makeParticle(w, h))
    }

    const tick = (t) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Move particles, wrap at edges
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -80) p.x = w + 80
        if (p.x > w + 80) p.x = -80
        if (p.y < -80) p.y = h + 80
        if (p.y > h + 80) p.y = -80
      }

      // Connection lines between nearby particles
      const MAX = 175
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < MAX) {
            const a = (1 - d / MAX) * 0.055
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34,211,238,${a})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Nodes and labels
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.font = "500 10px 'JetBrains Mono', monospace"

      for (const p of particles) {
        const pulse = p.base + Math.sin(t * 0.00075 + p.phase) * 0.022

        // Soft glow halo
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 7)
        grd.addColorStop(0, `${p.color}${(pulse * 2.2).toFixed(3)})`)
        grd.addColorStop(1, `${p.color}0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 7, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${Math.min(pulse * 4.5, 0.45).toFixed(3)})`
        ctx.fill()

        // Floating label
        ctx.fillStyle = `${p.color}${pulse.toFixed(3)})`
        ctx.fillText(p.label, p.x, p.y - p.r - 4)
      }

      animId = requestAnimationFrame(tick)
    }

    setup()
    animId = requestAnimationFrame(tick)

    const onResize = () => setup()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
