'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/lib/languageContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { label: t.nav.products, href: '#products' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-qwantam-purple to-qwantam-pink flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span className="text-2xl font-bold gradient-text">Qwantam</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#0066ff' }}
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Right Section - Language Toggle & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-semibold text-gray-300 hover:text-white border border-white/10"
          >
            {language === 'ar' ? 'EN' : 'العربية'}
          </button>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-qwantam-purple to-qwantam-pink text-white font-semibold hover:shadow-lg hover:shadow-qwantam-pink/50 transition-all"
          >
            {t.nav.shopNow}
          </motion.button>
        </div>

        {/* Mobile - Language Toggle & Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-xs font-semibold text-gray-300 hover:text-white"
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-bg border-t border-white/10"
        >
          <div className="px-4 py-4 flex flex-col gap-4" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-300 hover:text-blue-500">
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-qwantam-purple to-qwantam-pink text-white font-semibold">
              {t.nav.shopNow}
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
