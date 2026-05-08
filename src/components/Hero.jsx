import { motion } from 'framer-motion'
import heroPhoto from '../assets/hero.jpeg'
import HeroBackground from './HeroBackground'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})


export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-40">
      <HeroBackground />
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          top: -200,
          left: -100,
          background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: -100,
          right: -100,
          background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_420px] lg:items-center">
        {/* Left: Main content */}
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="mb-5 font-mono text-ls font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            Fullstack Software Engineer · Backend & Data Focus
          </motion.p>

          

          
          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              View Projects
            </a>
            <a
              href="/Blanca Victoria Jaime Reyes CV.pdf"
              download
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10"
            >
              Download CV
            </a>
          </motion.div>

         
        </div>

        {/* Right: Profile card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-sm glow-cyan"
        >
          <div className="overflow-hidden rounded-[1.4rem] border border-slate-700/50 bg-slate-950">

            {/* Photo — full width, fades into card */}
            <div className="relative h-48 w-full sm:h-56 lg:h-64">
              <img
                src={heroPhoto}
                alt="Victoria Reyes"
                className="h-full w-full object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent sm:h-24 lg:h-28" />

              {/* Terminal dots */}
              <div className="absolute left-4 top-4 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              </div>

              {/* Availability badge */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-green-500/25 bg-slate-950/70 px-2.5 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-[10px] font-medium text-green-400">Available</span>
              </div>
            </div>

            {/* Info */}
            <div className="px-6 pb-7 pt-3">
              <h2 className="text-base font-bold tracking-tight text-white">Victoria Jaime Reyes</h2>
              <p className="mt-1 font-mono text-[11px] font-semibold tracking-wide text-cyan-400">
                Backend · Data · Fullstack
              </p>

              <div className="my-5 border-t border-slate-800/80" />

              {/* Stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {['Node.js', 'PostgreSQL', 'Django', 'Claude AI', 'Next.js', 'Supabase', 'Python', 'React', 'Angular'].map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-slate-800 bg-slate-900/80 px-2 py-1 font-mono text-[10px] text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Domain keywords */}
              <p className="mt-4 font-mono text-[11px] leading-relaxed text-slate-500">
                SaaS · APIs · Automation · ETL · ELT
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
