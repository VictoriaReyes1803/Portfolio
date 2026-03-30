export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-600">
          © {year} Blanca Victoria Jaime Reyes
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/VictoriaReyes1803"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-600 transition hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/blanca-victoria-jaime-reyes/"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-600 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:reyedvictoria1803@gmail.com"
            className="text-xs text-slate-600 transition hover:text-cyan-400"
          >
            Email
          </a>
        </div>
        <p className="font-mono text-xs text-slate-700">Torreón, Coahuila, Mexico</p>
      </div>
    </footer>
  )
}
