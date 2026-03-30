import { motion } from 'framer-motion'

const categoryConfig = {
  'Backend & Data': { accent: 'text-cyan-400', border: 'border-cyan-400/20', bg: 'bg-cyan-400/8', dot: 'bg-cyan-400' },
  Frontend:         { accent: 'text-blue-400',  border: 'border-blue-400/20',  bg: 'bg-blue-400/8',  dot: 'bg-blue-400' },
  Infrastructure:   { accent: 'text-violet-400', border: 'border-violet-400/20', bg: 'bg-violet-400/8', dot: 'bg-violet-400' },
  Additional:       { accent: 'text-slate-400',  border: 'border-slate-600/40', bg: 'bg-slate-800/60', dot: 'bg-slate-400' },
}

export default function SkillBlock({ title, items, index }) {
  const config = categoryConfig[title] ?? categoryConfig.Additional
  const isPrimary = title === 'Backend & Data'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`rounded-3xl border p-6 transition-all duration-300 ${
        isPrimary
          ? 'border-cyan-400/20 bg-slate-900/80 glow-cyan'
          : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
      }`}
    >
      <div className="mb-4 flex items-center gap-2.5">
        <span className={`h-2 w-2 rounded-full ${config.dot}`} />
        <h3 className={`text-sm font-semibold uppercase tracking-widest ${config.accent}`}>
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={`rounded-xl border px-3 py-1.5 font-mono text-xs font-medium text-slate-300 transition-all duration-200 hover:text-white ${config.border} ${config.bg}`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
