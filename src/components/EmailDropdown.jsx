import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EMAIL = 'reyedvictoria1803@gmail.com'

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

export default function EmailDropdown() {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(false)
  const wrapperRef = useRef(null)
  const toastTimer = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const showToast = () => {
    clearTimeout(toastTimer.current)
    setToast(true)
    toastTimer.current = setTimeout(() => setToast(false), 2500)
  }

  const handleGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, '_blank', 'noreferrer')
    setOpen(false)
  }

  const handleOutlook = () => {
    window.location.href = `mailto:${EMAIL}`
    setOpen(false)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setOpen(false)
    showToast()
  }

  return (
    <>
      <div className="relative inline-block" ref={wrapperRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
        >
          Send a message
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute bottom-full left-0 mb-2 w-56 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
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

      {/* Toast */}
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
