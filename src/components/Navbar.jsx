import { Menu } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <motion.div
            initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.1 }}
            className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold"
          >
            V
          </motion.div>
          <span className="font-semibold text-slate-800">Vinkent</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
              className="hover:text-slate-900 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-slate-200/60 bg-white/90 overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
