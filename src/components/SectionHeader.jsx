import { motion } from "framer-motion"

export const SectionHeader = ({ title, eyebrow, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-linear-to-r from-orange-500/20 to-orange-600/20 text-orange-400 mb-4">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  )
}