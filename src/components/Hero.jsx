import { useState } from 'react'
import { motion } from 'framer-motion'
import ThreeHero from './ThreeHero'

export default function Hero() {
  const [trigger, setTrigger] = useState(0)

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-white" />
      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold tracking-wider text-blue-600 uppercase"
          >
            Software Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-3 text-4xl md:text-6xl font-bold leading-tight text-slate-900"
          >
            Vinkent — Building reliable, scalable web apps
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-slate-600 text-lg"
          >
            I’m a software engineer with 3 years of hands-on experience shipping full‑stack features, optimizing performance, and turning ideas into polished products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">See Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 font-medium hover:bg-slate-50">Get in Touch</a>
            <button
              onClick={() => setTrigger((t) => t + 1)}
              className="px-5 py-2.5 rounded-md bg-violet-600 text-white font-medium hover:bg-violet-700 active:scale-[0.98] transition"
            >
              Energize
            </button>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            className="rounded-2xl"
          >
            <ThreeHero trigger={trigger} />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-4 pointer-events-none"
          />
        </div>
      </div>
    </section>
  )
}
