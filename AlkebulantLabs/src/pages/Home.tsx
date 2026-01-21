import { motion } from 'framer-motion'
import { NewsletterForm } from '../components/forms/NewsletterForm'

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold"
        data-aos="fade-up"
      >
        Building Tomorrow’s Software Today
      </motion.h1>
      <p className="text-white/80 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
        Alkebulant Labs is the frontier R&D division, prototyping breakthroughs in AI‑blockchain hybrids, decentralized health/agri/biotech infrastructure, and next‑gen robotics protocols.
      </p>
      <div data-aos="fade-up" data-aos-delay="200">
        <NewsletterForm />
      </div>
    </section>
  )
}
