import SectionTitle from './SectionTitle'
import SkillBlock from './SkillBlock'

const skills = [
  {
    title: 'Backend & Automation',
    items: [
      'Node.js',
      'Python',
      'Django / REST Framework',
      'PostgreSQL',
      'Supabase',
      'REST API Design',
      'API Orchestration',
      'Async Workflows',
      'ETL / Data Pipelines',
      'Multi-tenant Architecture',
      'Row Level Security (RLS)',
      'SQL Query Optimization',
    ],
  },
  {
    title: 'AI & LLM Integration',
    items: [
      'Claude AI SDK',
      'Claude Code',
      'Cursor',
      'LLM Integrations',
      'AI Agents',
      'Prompt Engineering',
      'Workflow Automation',
      'Rapid Prototyping',
    ],
  },
  {
    title: 'Frontend',
    items: ['React', 'Angular', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'Ionic'],
  },
  {
    title: 'Infrastructure & Tooling',
    items: [
      'Linux',
      'Nginx',
      'Docker',
      'Vercel',
      'DigitalOcean',
      'AWS (basics)',
      'Git & GitHub',
      'C# / .NET',
      'MongoDB',
      'SQL Server',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Skills"
          title="Technical stack"
          description="Backend and automation engineering is my primary focus, with AI and LLM integration as a growing specialization. I complement both with frontend delivery and infrastructure knowledge."
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
