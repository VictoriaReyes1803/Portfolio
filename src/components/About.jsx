
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const pillars = [
  {
    icon: '⬡',
    title: 'Backend Systems',
    description: 'Scalable APIs, reliable data models, and clean application logic built to hold up under real production constraints.',
  },
  {
    icon: '⟡',
    title: 'Data Pipelines',
    description: 'Ingestion and transformation workflows for high-volume, nested datasets — from batch processing to analytics-ready storage.',
  },
  {
    icon: '◈',
    title: 'Fullstack Product',
    description: 'End-to-end delivery from database schema to UI. I own the full path data travels through a product.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Engineering with business context"
          description="I build systems where data volume, API complexity, and architecture decisions directly shape product value."
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
            Fullstack Software Engineer with a backend and data engineering focus. I've built multi-tenant SaaS platforms, ETL pipelines, internal tools, and production systems across different industries — always prioritizing reliability and real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
