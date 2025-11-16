import { motion } from 'framer-motion'

export default function Skills() {
  const skills = {
    Languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    Frontend: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['FastAPI', 'Node.js', 'Express', 'MongoDB'],
    DevOps: ['GitHub Actions', 'Docker', 'Vercel', 'CI/CD'],
    Testing: ['Jest', 'React Testing Library', 'Pytest'],
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900">Skills</h2>
        <p className="mt-2 text-slate-600">Tools I use to build fast, reliable products</p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-xl border border-slate-200 p-6 bg-white"
            >
              <h3 className="text-lg font-semibold text-slate-800">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
