
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const pillars = [
  {
    icon: '⬡',
    title: 'Data Analysis & Pipelines',
    description: 'Ingestion, dedup, and transformation of high-volume datasets — 400k+ records — into clean, queryable state using PostgreSQL and Supabase.',
  },
  {
    icon: '⟡',
    title: 'API Integrations & Automation',
    description: 'End-to-end integration with external systems (Eclipse ERP, Shovels permit API) — syncing, normalizing, and surfacing data through backend logic.',
  },
  {
    icon: '◈',
    title: 'System Optimization & Operations',
    description: 'Debugging data inconsistencies, optimizing SQL queries, and improving system performance to keep production workflows reliable and efficient.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Data-driven, operations-focused"
          description="I design systems where data quality, pipeline reliability, and integration accuracy directly drive business outcomes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:border-cyan-400/25 hover:bg-slate-900/80"
            >
              <span className="mb-5 block text-2xl text-cyan-400 transition group-hover:scale-110">
                {pillar.icon}
              </span>
              <h3 className="mb-3 text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Summary strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/40 p-7"
        >
          <p className="max-w-3xl text-base leading-relaxed text-slate-300">
            Backend and data-focused engineer with hands-on experience building ETL pipelines, integrating external APIs, and analyzing large datasets in PostgreSQL and Supabase. I've worked on SaaS platforms, internal operations systems, and production environments — consistently focused on data accuracy, workflow efficiency, and measurable performance gains.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
