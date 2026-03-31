import SectionTitle from './SectionTitle'
import SkillBlock from './SkillBlock'

const skills = [
  {
    title: 'Data & Analytics',
    items: [
      'PostgreSQL',
      'Supabase',
      'SQL Query Optimization',
      'ETL / Data Pipelines',
      'Data Ingestion & Dedup',
      'Row Level Security (RLS)',
      'Data Inconsistency Debugging',
      'Large Dataset Handling (400k+ records)',
    ],
  },
  {
    title: 'Backend & Automation',
    items: [
      'Node.js',
      'Python',
      'Django / REST Framework',
      'REST API Design & Integration',
      'Epicor Eclipse ERP',
      'Shovels Permit API',
      'Multi-tenant Architecture',
      'Business Logic Automation',
    ],
  },
  {
    title: 'Infrastructure & Operations',
    items: ['Linux', 'Nginx', 'Docker', 'Vercel', 'DigitalOcean', 'Git & GitHub'],
  },
  {
    title: 'Additional',
    items: ['TypeScript', 'React', 'Angular', 'C# / .NET', 'MongoDB', 'SQL Server'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack"
          description="Data analysis and pipeline engineering is my primary focus, backed by API integration experience, backend automation, and operational infrastructure."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((group, i) => (
            <SkillBlock key={group.title} title={group.title} items={group.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}