import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const experiences = [
  {
    period: '2025 – Present',
    company: 'Magpie in Blue',
    role: 'Data & Automation Engineer · Backend Lead',
    bullets: [
      'Designed ETL pipelines processing 400k+ permit records — batch ingestion, deduplication, normalization',
      'Integrated Epicor Eclipse ERP and Shovels permit API; debugged data mapping inconsistencies between sources',
      'Optimized PostgreSQL/Supabase queries and RLS policies to maintain performance at production data scale',
    ],
  },
  {
    period: '2025',
    company: 'Nexus Platform',
    role: 'Backend Developer',
    bullets: [
      'Designed PostgreSQL schema for complex multi-entity business workflows with data integrity constraints',
      'Built Django REST API with business logic automation, permission-scoped endpoints, and data validation layers',
    ],
  },
  {
    period: '2024 – 2025',
    company: 'Clayens',
    role: 'Software Engineer',
    bullets: [
      'Designed SPCM data model and business logic end-to-end for a production operations system',
      'Managed Linux deployment and ongoing production maintenance — resolved data and system issues in live environment',
    ],
  },
  {
    period: '2023 – 2024',
    company: 'Mayan GPS',
    role: 'Software Developer Intern',
    bullets: [
      'Diagnosed and resolved backend query bottlenecks on high-frequency GPS data streams (Node.js, MongoDB)',
      'Achieved 25% performance improvement through query restructuring and data handling optimization',
    ],
  },
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
          eyebrow="Experience"
          title="Where I've worked"
          description="Data pipelines, API integrations, and backend systems — across SaaS, operations software, and high-frequency data environments."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80"
            >
              <p className="font-mono text-xs font-semibold text-cyan-400/60">{item.period}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{item.company}</h3>
              <p className="mt-0.5 text-xs font-medium text-slate-500">{item.role}</p>
              <ul className="mt-4 space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400/70" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
