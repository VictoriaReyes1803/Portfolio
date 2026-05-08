import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMAIL = 'reyedvictoria1803@gmail.com'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },

  { label: 'Contact', href: '#contact' },
]

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconClipboard() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function PopoverOption({ icon, label, sub, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors duration-150 hover:bg-white/[0.06]"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-slate-800/80 text-slate-400 transition group-hover:border-cyan-400/30 group-hover:text-cyan-400">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-slate-200">{label}</p>
        {sub && <p className="truncate font-mono text-[10px] text-slate-500">{sub}</p>}
      </div>
    </button>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [mobileEmailOpen, setMobileEmailOpen] = useState(false)
  const [toast, setToast] = useState(false)
  const popoverRef = useRef(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!popoverOpen) return
    const handler = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setPopoverOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [popoverOpen])

  const showToast = () => {
    clearTimeout(toastTimer.current)
    setToast(true)
    toastTimer.current = setTimeout(() => setToast(false), 2500)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setPopoverOpen(false)
    setMobileEmailOpen(false)
    setMenuOpen(false)
    showToast()
  }

  const handleGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, '_blank', 'noreferrer')
    setPopoverOpen(false)
    setMobileEmailOpen(false)
    setMenuOpen(false)
  }

  const handleOutlook = () => {
    window.location.href = `mailto:${EMAIL}`
    setPopoverOpen(false)
    setMobileEmailOpen(false)
    setMenuOpen(false)
  }

  const handleNavClick = () => {
    setMenuOpen(false)
    setMobileEmailOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <a href="#" className="group flex flex-col">
            <span className="font-mono text-xs font-medium tracking-[0.25em] text-cyan-400 uppercase">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-white transition group-hover:text-cyan-200">
              Victoria Jaime Reyes
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}

            {/* Desktop: Get in touch → anchored popover */}
            <div className="relative" ref={popoverRef}>
              <button
                onClick={() => setPopoverOpen((v) => !v)}
                className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-200 hover:border-cyan-400/70 hover:bg-cyan-400/20 hover:text-cyan-200"
              >
                Get in touch
              </button>

              <AnimatePresence>
                {popoverOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
                  >
                    <div className="px-3 py-2.5">
                      <p className="mb-1 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        Open with
                      </p>
                      <PopoverOption icon={<IconMail />} label="Gmail" onClick={handleGmail} />
                      <PopoverOption icon={<IconMail />} label="Outlook" onClick={handleOutlook} />
                      <PopoverOption
                        icon={<IconClipboard />}
                        label="Copy address"
                        sub={EMAIL}
                        onClick={handleCopy}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex flex-col gap-1.5 p-1 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-300 transition-all duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/[0.06] bg-slate-950/95 backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Mobile: Get in touch → inline expansion */}
                <div className="mt-2">
                  <button
                    onClick={() => setMobileEmailOpen((v) => !v)}
                    className="w-full rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-center text-sm font-semibold text-cyan-300"
                  >
                    Get in touch
                  </button>

                  <AnimatePresence>
                    {mobileEmailOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 rounded-2xl border border-slate-700/60 bg-slate-900/80 px-3 py-2">
                          <PopoverOption icon={<IconMail />} label="Gmail" onClick={handleGmail} />
                          <PopoverOption icon={<IconMail />} label="Outlook" onClick={handleOutlook} />
                          <PopoverOption
                            icon={<IconClipboard />}
                            label="Copy address"
                            sub={EMAIL}
                            onClick={handleCopy}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Copy toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2"
          >
            <div className="flex items-center gap-2.5 rounded-2xl border border-green-500/30 bg-slate-900/95 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <IconCheck />
              </span>
              <span className="text-sm font-medium text-slate-200">Email address copied</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
