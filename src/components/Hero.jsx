import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const profileItems = [
  { label: 'Focus', value: 'Data & Automation · Backend · Operations' },
  { label: 'Experience', value: 'ETL pipelines · API integrations · SQL analysis · system optimization' },
  { label: 'Stack', value: 'Node.js · Python · PostgreSQL · Supabase · Django' },
  { label: 'Location', value: 'Torreón, Coahuila, Mexico' },
]

const heroBadges = ['PostgreSQL', 'Supabase', 'Node.js', 'Python', 'ETL', 'REST APIs', 'SQL']

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-40">
      {/* Background orbs */}
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
            className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            Data & Automation Engineer · Backend & Operations
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            I turn raw data into{' '}
            <span className="text-gradient-cyan">operational intelligence</span> — through pipelines, API integrations, and{' '}
            <span className="text-gradient-cyan">systems that scale</span>.
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg"
          >
            Focused on data analysis, ETL pipeline design, and external API integrations.
            I work across PostgreSQL, Supabase, and backend systems to surface insights,
            automate workflows, and keep data reliable at scale.
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

          <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 font-mono text-xs text-slate-400"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile snapshot card */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-1.5 shadow-2xl shadow-black/40 backdrop-blur-sm glow-cyan"
        >
          {/* Card inner */}
          <div className="rounded-[1.4rem] border border-slate-700/50 bg-slate-950/80 p-6">
            {/* Terminal-style header */}
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-mono text-xs text-slate-500">profile.json</span>
            </div>

            <div className="space-y-5">
              {profileItems.map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-xs text-slate-500">{`// ${label}`}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                <span className="font-mono text-xs text-green-400">Open to new opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
