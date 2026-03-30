import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'Email',
    value: 'reyedvictoria1803@gmail.com',
    display: 'reyedvictoria1803@gmail.com',
    href: 'mailto:reyedvictoria1803@gmail.com',
    description: 'Preferred contact for opportunities',
  },
  {
    label: 'GitHub',
    value: 'VictoriaReyes1803',
    display: 'github.com/VictoriaReyes1803',
    href: 'https://github.com/VictoriaReyes1803',
    description: 'Projects and open source work',
  },
  {
    label: 'LinkedIn',
    value: 'blanca-victoria-jaime-reyes',
    display: 'linkedin.com/in/blanca-victoria-jaime-reyes',
    href: 'https://www.linkedin.com/in/blanca-victoria-jaime-reyes/',
    description: 'Professional profile',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:px-10">
      <div
        className="orb"
        style={{
          width: 600,
          height: 600,
          bottom: -200,
          left: '30%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.09) 0%, transparent 65%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/60 p-10 md:p-14 glow-cyan"
        >
          {/* Header */}
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Let's build something meaningful
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            I'm open to backend, data, and fullstack engineering roles where I can contribute to
            scalable systems, data-driven products, and real business impact. Let's talk.
          </p>

          {/* Contact cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:bg-slate-800/80"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  {link.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white break-all leading-snug">
                  {link.display}
                </p>
                <p className="mt-1.5 text-xs text-slate-500">{link.description}</p>
                <span className="mt-3 inline-block text-xs text-cyan-400/70 transition group-hover:text-cyan-300">
                  {link.href.startsWith('http') ? 'Open →' : 'Send email →'}
                </span>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="mailto:reyedvictoria1803@gmail.com"
              className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
            >
              Send a message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
