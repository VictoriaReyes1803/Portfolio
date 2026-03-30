import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Magpie in Blue',
    subtitle: 'Multi-tenant SaaS for construction market intelligence',
    description:
      'Built a data-driven SaaS platform for HVAC distributors to analyze construction permits, contractor activity, and commercial opportunities. The system ingests large-scale permit data, enriches it through multiple external APIs, and applies AI-assisted scoring to surface the highest-value opportunities for each tenant.',
    highlights: [
      'Multi-tenant architecture using Supabase with PostgreSQL Row Level Security (RLS)',
      'Large-scale permit data ingestion pipelines with batch processing and deduplication',
      'Integrations with Epicor Eclipse ERP, Shovels permit API, and ZipcodeAPI',
      'AI-powered opportunity scoring using Claude for contractor ranking and lead prioritization',
      'Tenant-specific dashboards with filtered business intelligence views',
    ],
    stack: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL', 'Claude AI', 'REST APIs', 'RLS'],
  },
  {
    title: 'Eclipse Data Ingestion Pipeline',
    subtitle: 'Enterprise API ingestion and normalization layer',
    description:
      'Designed and implemented a backend ingestion system for complex enterprise data sourced from Epicor Eclipse ERP. The pipeline handles batched API calls, parses deeply nested JSON payloads, normalizes records into a relational schema, and prepares the data for downstream analytics and scoring workflows.',
    highlights: [
      'Batch-based ingestion strategy with configurable rate limiting and retry logic',
      'Deep nested JSON parsing and payload normalization for relational storage',
      'Data transformation layer optimized for analytics and cross-tenant querying',
      'Schema design for high-read performance across multi-tenant environments',
      'Integration with downstream scoring and BI modules',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Supabase', 'Epicor Eclipse API', 'ETL', 'JSON processing'],
  },
  {
    title: 'Contractor Intelligence System',
    subtitle: 'Scoring, matching, and enrichment for business leads',
    description:
      'Developed the contractor intelligence layer within the Magpie SaaS platform. The system evaluates contractor permit history, enriches profiles with external data sources, applies heuristic and AI-assisted scoring models, and surfaces the most relevant contractors for each distributor tenant based on configurable matching rules.',
    highlights: [
      'Historical permit analysis and contractor activity scoring across jurisdictions',
      'Multi-source data enrichment: permit APIs, contact databases, and ERP cross-referencing',
      'Heuristic and AI-assisted scoring with configurable weights per tenant',
      'Business intelligence datasets for opportunity review workflows',
      'Tenant-specific opportunity queues with filters, ranking, and export',
    ],
    stack: ['Node.js', 'PostgreSQL', 'Supabase', 'Claude AI', 'REST APIs', 'RLS', 'ETL'],
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
          description="Systems I've built where data volume, architecture, and API complexity were central to the solution. Each project reflects real production challenges across SaaS, data engineering, and business intelligence."
        />

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
