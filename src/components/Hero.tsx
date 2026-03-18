'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/languageContext'
import { FLAVORS, Flavor } from '@/lib/flavors'
import dynamic from 'next/dynamic'
const Scene3D = dynamic(() => import('./three/Scene3D'), { 
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/50 text-sm animate-pulse tracking-widest">LOADING 3D MODULE...</div>
})
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Utility for Tailwind
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function Hero() {
  const { t, language } = useLanguage()
  const [activeFlavor, setActiveFlavor] = useState<Flavor>(FLAVORS[0])
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-1000 ease-in-out" 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Dynamic Background Glow based on active flavor */}
      <div 
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] rounded-full mix-blend-screen filter blur-[128px] opacity-40 transition-colors duration-1000 ease-in-out pointer-events-none"
        style={{ backgroundColor: activeFlavor.gradientFrom }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full mix-blend-screen filter blur-[128px] opacity-30 transition-colors duration-1000 ease-in-out pointer-events-none"
        style={{ backgroundColor: activeFlavor.gradientTo }}
      />
      
      {/* Mesh/Grid overlay for that 2026 tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Content - Typography & UI */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-10"
          >
            <motion.div variants={item} className="space-y-4">
              <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase transition-colors duration-500 border border-white/10 glass-panel shadow-xl"
                style={{ color: activeFlavor.accentColor, backgroundColor: `${activeFlavor.gradientFrom}20` }}
              >
                {t.hero.label}
              </span>
              
              <AnimatePresence mode="wait">
                <motion.h1 
                  key={activeFlavor.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
                >
                  <span className="block text-white glow-text drop-shadow-2xl">{t.hero.title[0]}</span>
                  <span 
                    className="block bg-clip-text text-transparent pb-2"
                    style={{ backgroundImage: `linear-gradient(to right, ${activeFlavor.gradientTo}, ${activeFlavor.accentColor})` }}
                  >
                    {t.hero.flavors?.[activeFlavor.nameKey as keyof typeof t.hero.flavors] || activeFlavor.nameKey.toUpperCase()}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={item}
              className="text-xl text-gray-300 leading-relaxed max-w-lg font-light"
            >
              {t.hero.description}
            </motion.p>

            {/* Flavor Selector (2026 Style) */}
            <motion.div variants={item} className="space-y-4">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Select Flavor</p>
              <div className="flex gap-4">
                {FLAVORS.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => setActiveFlavor(flavor)}
                    className={cn(
                      "group relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 overflow-hidden backdrop-blur-md border",
                      activeFlavor.id === flavor.id 
                        ? "border-white/50 scale-110 shadow-2xl z-10" 
                        : "border-white/10 hover:border-white/30 hover:scale-105 opacity-70 hover:opacity-100"
                    )}
                  >
                    {/* Inner glowing core */}
                    <div 
                      className="absolute inset-0 opacity-50 transition-opacity group-hover:opacity-80"
                      style={{ background: `radial-gradient(circle at center, ${flavor.gradientTo} 0%, transparent 70%)` }}
                    />
                    <div 
                      className="w-6 h-6 rounded-full shadow-inner z-10"
                      style={{ background: `linear-gradient(135deg, ${flavor.gradientFrom}, ${flavor.accentColor})` }}
                    />
                    {activeFlavor.id === flavor.id && (
                      <motion.div
                        layoutId="activeFlavorRing"
                        className="absolute inset-[-2px] rounded-2xl border-2"
                        style={{ borderColor: flavor.accentColor }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-6 pt-6"
            >
              <button
                className="relative px-8 py-4 rounded-xl text-white font-bold text-lg group overflow-hidden"
              >
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, ${activeFlavor.gradientFrom}, ${activeFlavor.gradientTo})` }}
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                  style={{ background: `linear-gradient(to right, ${activeFlavor.gradientFrom}, ${activeFlavor.gradientTo})` }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  {t.nav.shopNow}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right - Product 3D Interaction */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] lg:h-[700px] flex items-center justify-center pointer-events-auto"
          >
            {/* The 3D Canvas */}
            <Scene3D flavor={activeFlavor} />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
