import { motion } from 'framer-motion'

export default function Experience() {
  const roles = [
    {
      company: 'Acme Corp',
      title: 'Software Engineer',
      period: 'Aug 2022 — Present',
      points: [
        'Built and shipped end‑to‑end features across React, FastAPI, and MongoDB',
        'Improved page performance by 35% via code‑splitting, caching, and query optimization',
        'Led migration to modern tooling (Vite, Tailwind), accelerating dev velocity',
      ],
    },
    {
      company: 'Nova Labs',
      title: 'Frontend Engineer',
      period: 'Jan 2021 — Jul 2022',
      points: [
        'Developed responsive UI components and design systems with Tailwind',
        'Collaborated with backend to integrate REST APIs and real‑time updates',
        'Authored testing utilities and stories improving UI reliability',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900">Experience</h2>
        <p className="mt-2 text-slate-600">3 years of professional software engineering</p>

        <div className="mt-10 grid gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={role.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-xl border border-slate-200 p-6 bg-white"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">{role.title}</h3>
                  <p className="text-slate-600">{role.company}</p>
                </div>
                <p className="text-sm text-slate-500">{role.period}</p>
              </div>
              <ul className="mt-4 list-disc ml-5 text-slate-700 space-y-2">
                {role.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
