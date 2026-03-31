import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Magpie in Blue',
    subtitle: 'Data & Automation · Construction market intelligence SaaS',
    description:
      'Backend data platform for HVAC distributors — ingesting, analyzing, and scoring contractor leads from permit records and ERP data across 400k+ entries.',
    highlights: [
      'Ingested and processed 400k+ permit records: batch dedup, normalization, and rate-limited API calls',
      'Integrated Epicor Eclipse ERP and Shovels permit API — syncing, mapping, and surfacing discrepancies',
      'Debugged data inconsistencies between external sources and internal PostgreSQL/Supabase tables',
      'Optimized SQL queries and Supabase RLS policies to maintain performance at scale',
    ],
    stack: ['Node.js', 'Supabase', 'PostgreSQL', 'RLS', 'Eclipse ERP', 'Shovels API'],
  },
  {
    title: 'Nexus Platform',
    subtitle: 'Internal operations platform · Django + PostgreSQL',
    description:
      'Backend-driven internal management system — relational schema supporting complex multi-entity business workflows with a REST API layer and role-based data access.',
    highlights: [
      'Designed PostgreSQL schema for multi-entity relationships with data integrity constraints',
      'Built Django REST API with custom serializers, auth middleware, and permission-scoped endpoints',
      'Automated business workflow logic through backend rules and validation layers',
    ],
    stack: ['Django', 'Python', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'SPCM System — Clayens',
    subtitle: 'Production operations system · End-to-end design',
    description:
      'Designed and deployed a production system for Clayens — from data modeling and business logic to Linux server configuration and ongoing maintenance.',
    highlights: [
      'Data model and API layer designed to support production-grade operational workflows',
      'Deployed on Linux with Nginx; managed releases and iterative improvements in production',
      'Maintained system stability and resolved issues in a live environment',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Linux', 'Nginx', 'Docker'],
  },
  {
    title: 'Mayan GPS — Internship',
    subtitle: 'GPS tracking platform · Query optimization & data handling',
    description:
      'Backend and data contributions to a GPS tracking platform — optimizing query performance and handling high-frequency data streams from live vehicle feeds.',
    highlights: [
      'Identified and resolved query bottlenecks in Node.js/MongoDB backend for high-frequency GPS data',
      'Achieved 25% performance improvement through query restructuring and data handling fixes',
      'Worked across REST and WebSocket data streams to ensure accurate, low-latency data delivery',
    ],
    stack: ['Node.js', 'MongoDB', 'REST APIs', 'WebSockets'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-10">
      {/* Subtle background accent */}
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          bottom: -100,
          right: -150,
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work"
          description="Data pipelines, API integrations, and backend systems — built for production, focused on data accuracy and operational efficiency."
        />

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
