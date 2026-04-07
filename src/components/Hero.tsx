'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '@/lib/languageContext'

export default function Hero() {
  const { t, language } = useLanguage()
  
  // 3D Tilt Effect Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-200, 200], [15, -15])
  const rotateY = useTransform(x, [-200, 200], [-15, 15])

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set(event.clientX - rect.left - rect.width / 2)
    y.set(event.clientY - rect.top - rect.height / 2)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }
  
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-qwantam-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-qwantam-pink/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" />

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
              <span className="text-qwantam-pink font-semibold tracking-widest uppercase text-sm">
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
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-qwantam-purple to-qwantam-pink text-white font-bold text-lg hover:shadow-lg hover:shadow-qwantam-pink/50 transition-all"
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

          {/* Right - Product Image 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center -ml-8 sm:ml-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-qwantam-purple/30 to-qwantam-pink/30 rounded-full blur-[120px]" />

            <motion.div
              style={{ rotateX, rotateY, transformPerspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, scale: { duration: 0.2 } }}
              className="relative w-full max-w-sm h-full max-h-[600px] cursor-pointer"
            >
              <div className="absolute w-full h-full">
                {/* Fallback glow if image lacks drop shadow */}
                <div className="absolute inset-x-10 inset-y-20 bg-qwantam-pink/20 blur-2xl rounded-full" />
                <Image
                  src="/images/qwantam-can.png"
                  alt="Qwantam Energy Drink"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="drop-shadow-2xl z-10"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
