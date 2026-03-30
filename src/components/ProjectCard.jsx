import { motion } from 'framer-motion'


export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-3xl border border-slate-800 bg-slate-900/60 p-7 shadow-2xl shadow-black/30 transition-all duration-300 hover:border-cyan-400/30 glow-cyan-hover"
    >
      {/* Top accent bar */}
      <div className="mb-5 flex items-center gap-3">
        <span className="h-1.5 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Featured Project
        </span>
      </div>

      {/* Title & subtitle */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-100">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-slate-400">{project.subtitle}</p>
      </div>

      {/* Description */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Key Highlights
        </p>
        <ul className="space-y-2.5">
          {project.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 font-mono text-xs font-medium text-slate-300 transition group-hover:border-cyan-400/20 group-hover:text-cyan-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover glow overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  )
}
