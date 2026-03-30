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
      'Full-stack internal management platform with an Angular SPA frontend and a Django REST API backend.',
    highlights: [
      'Angular frontend with modular feature architecture and reactive forms',
      'Django REST Framework backend with custom serializers and role-based access',
      'Relational schema designed for multi-entity business workflows',
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
    subtitle: 'GPS platform · Dashboard development',
    description:
      'Contributed to a GPS tracking platform during an internship — focused on dashboard development and frontend performance.',
    highlights: [
      'Built real-time tracking dashboard for high-frequency GPS data',
      'Optimized rendering performance for large, continuously updating datasets',
      'Collaborated on UI/UX improvements aligned with end-user workflows',
    ],
    stack: ['React', 'REST APIs', 'JavaScript'],
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
