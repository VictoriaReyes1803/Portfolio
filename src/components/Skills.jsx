import SectionTitle from './SectionTitle'
import SkillBlock from './SkillBlock'

const skills = [
  {
    title: 'Backend & Data',
    items: [
      'Node.js',
      'Python',
      'Django / REST Framework',
      'PostgreSQL',
      'Supabase',
      'ETL / Data Pipelines',
      'REST API Design',
      'Multi-tenant Architecture',
      'Row Level Security (RLS)',
      'SQL Query Optimization',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Next.js', 'Vite', 'Tailwind CSS', 'Ionic'],
  },
  {
    title: 'Infrastructure',
    items: ['Linux', 'Nginx', 'Docker', 'Vercel', 'DigitalOcean', 'AWS (basics)', 'Git & GitHub'],
  },
  {
    title: 'Additional',
    items: ['TypeScript', 'C# / .NET', 'MongoDB', 'SQL Server', 'Android (Java)', 'Claude AI SDK'],
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