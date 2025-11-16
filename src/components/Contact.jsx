import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const formData = Object.fromEntries(new FormData(e.currentTarget).entries())
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 text-center">Contact</h2>
        <p className="mt-2 text-slate-600 text-center">Have an opportunity or a project in mind? Let’s talk.</p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mt-10 grid gap-4 bg-white p-6 rounded-xl border border-slate-200"
        >
          <motion.input name="name" placeholder="Your name" required whileFocus={{ scale: 1.01 }} className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <motion.input type="email" name="email" placeholder="Email" required whileFocus={{ scale: 1.01 }} className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <motion.input name="subject" placeholder="Subject" whileFocus={{ scale: 1.01 }} className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <motion.textarea name="message" placeholder="Your message" rows="5" required whileFocus={{ scale: 1.01 }} className="border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2 px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Send</motion.button>
          {status && <p className="text-sm text-slate-600">{status}</p>}
        </motion.form>
      </div>
    </section>
  )
}
