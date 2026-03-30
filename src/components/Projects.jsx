import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Magpie in Blue',
    subtitle: 'Multi-tenant SaaS · Construction market intelligence',
    description:
      'Full-stack SaaS platform for HVAC distributors to surface contractor leads from permit data, ERP records, and AI scoring — all isolated per tenant.',
    highlights: [
      'Permit data ingestion pipelines: batch processing, dedup, and rate limiting',
      'Integrations with Epicor Eclipse ERP, Shovels permit API, and ZipcodeAPI',
      'AI-powered contractor scoring and lead prioritization with Claude AI',
      'Per-tenant data isolation via PostgreSQL Row Level Security (RLS)',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Claude AI', 'RLS'],
  },
  {
    title: 'Nexus Platform',
    subtitle: 'Internal platform · Angular + Django',
    description:
      'Full-stack internal management platform — Angular SPA on the frontend, Django REST API on the backend, with a relational schema covering complex multi-entity business workflows.',
    highlights: [
      'Angular SPA: modular feature architecture, reactive forms, and role-based UI access',
      'Django REST Framework: custom serializers, auth middleware, and permission layers',
      'PostgreSQL schema designed for multi-entity relationships and data integrity constraints',
    ],
    stack: ['Angular', 'Django', 'Python', 'PostgreSQL', 'REST API'],
  },
  {
    title: 'SPCM System — Clayens',
    subtitle: 'Production system · Full design and Linux deployment',
    description:
      'Designed and deployed a production system end-to-end at Clayens — from architecture and data modeling to Linux server configuration.',
    highlights: [
      'Full system design: data model, API layer, and business logic',
      'Linux server deployment with Nginx as reverse proxy',
      'Ongoing maintenance and iterative feature delivery in a production environment',
    ],
    stack: ['Linux', 'Nginx', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Mayan GPS — Internship',
    subtitle: 'GPS platform · Backend + Dashboard',
    description:
      'Fullstack contributions to a GPS tracking platform — backend API work, MongoDB data layer, and a real-time React dashboard for live vehicle tracking.',
    highlights: [
      'Built and optimized Node.js/MongoDB backend queries for high-frequency GPS data',
      'Achieved 25% performance improvement through query optimization and frontend rendering pipeline fixes',
      'Developed real-time tracking dashboard consuming live WebSocket and REST data streams',
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'REST APIs'],
  },
  {
    title: 'Lockity',
    subtitle: 'Personal project · Web + desktop app',
    description:
      'Personal project — a cross-platform credentials and lock management app built with React for both web and desktop.',
    highlights: [
      'Single codebase targeting web and desktop via Electron',
      'Local-first data storage with encrypted credential management',
      'Clean, minimal UI designed for fast daily use',
    ],
    stack: ['React', 'Electron', 'JavaScript'],
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
          description="Production systems, internal platforms, and personal projects — across SaaS, data engineering, and fullstack development."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
