
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const pillars = [
  {
    icon: '⬡',
    title: 'Backend Systems',
    description:
      'Building secure, scalable services with strong data models, well-structured APIs, and maintainable application logic. I focus on reliability, clear error boundaries, and systems that scale with the product.',
  },
  {
    icon: '⟡',
    title: 'Data Pipelines',
    description:
      'Designing ingestion and transformation workflows for high-volume, nested, and business-critical datasets. From batch processing and normalization to analytics-ready data storage.',
  },
  {
    icon: '◈',
    title: 'Fullstack Product',
    description:
      'Delivering complete features end-to-end — database schema, API layer, and UI. I care about the entire path data travels, from external source to user-facing output.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About"
          title="Engineering with business context"
          description="I build systems that solve operational and analytical problems — especially where data volume, API complexity, and architecture decisions directly shape product value. My work connects backend engineering, data processing, and product thinking."
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
          <p className="max-w-4xl text-base leading-relaxed text-slate-300">
            Fullstack Software Engineer with a strong focus on backend and data engineering.
            Experienced in building scalable SaaS platforms, designing data pipelines, and
            implementing multi-tenant architectures. Skilled in integrating external APIs,
            processing large datasets, and developing data-driven systems for business intelligence.
            I combine frontend and backend expertise to deliver complete, production-ready solutions —
            with emphasis on performance, scalability, and real-world impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
