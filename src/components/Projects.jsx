import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      name: 'TaskPilot',
      description: 'A collaborative task manager with real‑time updates and Kanban boards.',
      stack: ['React', 'FastAPI', 'MongoDB', 'Tailwind'],
      link: '#',
    },
    {
      name: 'InsightDash',
      description: 'Self‑serve analytics dashboards with role‑based access and alerts.',
      stack: ['React', 'Node', 'Postgres', 'Chart.js'],
      link: '#',
    },
    {
      name: 'FormFlow',
      description: 'Schema‑driven form builder with validation, themes, and integrations.',
      stack: ['React', 'Supabase', 'Tailwind'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600">Selected work that highlights problem‑solving and craftsmanship</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.link}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                className="aspect-video rounded-lg bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-slate-200"
              />
              <h3 className="mt-4 text-lg font-semibold text-slate-800 group-hover:text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{tech}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
