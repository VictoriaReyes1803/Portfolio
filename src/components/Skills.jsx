import SectionTitle from './SectionTitle'
import SkillBlock from './SkillBlock'

const skills = [
  {
    title: 'Backend & Data',
    items: [
      'Node.js',
      'PostgreSQL',
      'Supabase',
      'REST API Design',
      'ETL / Data Pipelines',
      'Multi-tenant Architecture',
      'Batch Processing',
      'JSON / Nested Payload Parsing',
      'Data Normalization',
      'Row Level Security (RLS)',
      'SQL Query Optimization',
      'API Integration',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Angular', 'Ionic'],
  },
  {
    title: 'Infrastructure',
    items: ['Linux', 'Docker', 'Nginx', 'Vercel', 'DigitalOcean', 'AWS (basics)', 'Git & GitHub'],
  },
  {
    title: 'Additional',
    items: ['C# / .NET', 'TypeScript', 'MongoDB', 'SQL Server', 'Android (Java)', 'Claude AI SDK'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack"
          description="Backend and data engineering is my primary focus. I complement it with frontend capability and infrastructure knowledge to deliver full-stack, production-ready systems."
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
