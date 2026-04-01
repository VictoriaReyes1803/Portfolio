import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const experiences = [
  {
    period: '2025 – Present',
    company: 'Magpie in Blue',
    role: 'Fullstack Engineer · Backend & Data Lead',
    bullets: [
      'Built multi-tenant SaaS for HVAC construction intelligence (Node.js, Supabase, PostgreSQL)',
      'Designed ETL pipelines: permit ingestion, ERP sync, and AI-powered contractor scoring',
      'Implemented per-tenant data isolation with PostgreSQL RLS',
    ],
  },
  {
    period: '2025',
    company: 'Nexus Platform',
    role: 'Fullstack Developer',
    bullets: [
      'Built Angular SPA frontend with modular architecture, reactive forms, and role-based views',
      'Designed Django REST API backend: custom serializers, auth middleware, and relational schema for multi-entity workflows',
    ],
  },
  {
    period: '2024 – 2025',
    company: 'Clayens',
    role: 'Software Engineer',
    bullets: [
      'Designed SPCM system end-to-end — architecture, data modeling, and business logic',
      'Deployed on Linux with Nginx; managed production environment and iterative releases',
    ],
  },
  {
    period: '2023 – 2024',
    company: 'Mayan GPS',
    role: 'Software Developer Intern',
    bullets: [
      'Built real-time GPS tracking dashboard consuming high-frequency WebSocket/REST data (React, Node.js, MongoDB)',
      'Optimized backend query patterns and frontend rendering pipeline — achieved 25% performance improvement',
      'Contributed to both API layer and client-side data handling for live vehicle tracking workflows',
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
          description="Production systems, client platforms, and internships across SaaS, industrial software, and GPS tracking."
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
