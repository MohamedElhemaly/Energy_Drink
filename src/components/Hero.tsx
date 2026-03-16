'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/languageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={item} className="space-y-2">
              <span className="text-blue-500 font-semibold tracking-widest uppercase text-sm">
                {t.hero.label}
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {t.hero.title[0]}
                <span className="gradient-text block">{t.hero.title[1]}</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 leading-relaxed max-w-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                {t.nav.shopNow}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all"
              >
                {t.nav.learnMore}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
              className="flex gap-8 pt-8 border-t border-white/10"
            >
              {t.hero.stats.map((stat: { value: string; label: string }, index: number) => (
                <div key={index}>
                  <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 sm:h-[500px] flex items-center justify-center"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-orange-500/30 rounded-full blur-3xl" />

            {/* Can mockup */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-white/10 flex items-center justify-center overflow-hidden group"
            >
              {/* Can shine effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />

              {/* Lightning design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl">⚡</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">EnDeck</h3>
                    <p className="text-orange-500 font-bold text-sm">ENERGY DRINK</p>
                    <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-orange-500 rounded" />
                    <p className="text-xs text-gray-400">330ml</p>
                  </div>
                </div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
