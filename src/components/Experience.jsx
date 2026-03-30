import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const highlights = [
  {
    number: '01',
    title: 'Real-world systems',
    body: 'Experience building internal and client-facing platforms with real users, operational constraints, and continuously evolving product needs. I ship features that work in production — not just in development.',
  },
  {
    number: '02',
    title: 'Data-intensive work',
    body: 'Comfortable working with high-volume datasets, deeply nested API payloads, normalization strategies, and analytics-oriented data design. I understand the difference between data that exists and data that is useful.',
  },
  {
    number: '03',
    title: 'Architecture mindset',
    body: "Interested in designing reliable systems, not just shipping isolated features. I think about scale, structure, and long-term maintainability — and I'm willing to make tradeoffs explicit.",
  },
  {
    number: '04',
    title: 'Business alignment',
    body: 'I like building software that supports real decision-making. Whether it\'s a contractor scoring model or a permit intelligence dashboard, I connect technical work to its commercial purpose.',
  },
]

const archPoints = [
  'Multi-tenant SaaS with per-tenant data isolation (RLS)',
  'Batch API ingestion with retry, dedup, and rate limiting',
  'Normalized relational schema for high-read analytics',
  'AI scoring layer integrated into data pipelines',
  'External API orchestration (ERP, permit data, geocoding)',
]

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:px-10">
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          top: 0,
          left: -200,
          background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Experience Highlights"
          title="What I bring to a team"
          description="A combination of technical depth and product-level thinking. I work best in environments where engineering decisions directly shape business outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {highlights.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
            >
              <p className="font-mono text-xs font-semibold text-cyan-400/60">{item.number}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Architecture hint card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-6 rounded-3xl border border-cyan-400/15 bg-slate-900/60 p-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Architecture in production
            </span>
            <span className="h-px flex-1 bg-slate-800" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {archPoints.map((point) => (
              <div key={point} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
