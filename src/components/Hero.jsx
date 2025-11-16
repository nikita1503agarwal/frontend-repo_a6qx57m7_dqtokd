import { motion } from 'framer-motion'

export default function Hero() {
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
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-slate-200"
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute inset-4 rounded-2xl bg-white shadow-xl border border-slate-200 grid place-items-center text-center p-6"
          >
            <div>
              <p className="text-sm text-slate-500">Currently open to full‑time roles and impactful freelance work</p>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-medium"
              >
                <span>Available</span>
                <motion.span
                  animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="h-2 w-2 rounded-full bg-green-500 inline-block"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
