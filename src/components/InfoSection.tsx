'use client'

import { motion } from 'framer-motion'
import InfoColumn from './InfoColumn'
import { useLanguage } from '@/lib/languageContext'

export default function InfoSection() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-qwantam-purple/20 rounded-full mix-blend-screen filter blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-qwantam-pink/20 rounded-full mix-blend-screen filter blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-qwantam-pink font-semibold tracking-widest uppercase text-sm">
            {t.info.label}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold">
            {t.info.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.info.description}
          </p>
        </motion.div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.info.columns.map((column: any, index: number) => (
            <InfoColumn
              key={index}
              icon={column.icon}
              title={column.title}
              description={column.description}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-qwantam-purple to-qwantam-pink text-white font-bold text-lg hover:shadow-lg hover:shadow-qwantam-pink/50 transition-all"
          >
            {t.nav.shopNow}
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
