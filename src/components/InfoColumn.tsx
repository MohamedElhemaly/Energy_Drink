'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface InfoColumnProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export default function InfoColumn({ icon, title, description, delay = 0 }: InfoColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-8 space-y-6 transition-all duration-300 hover:bg-white/20">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center text-3xl group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          className="flex items-center gap-2 text-blue-500 font-semibold"
        >
          <span>Learn more</span>
          <span>→</span>
        </motion.div>
      </div>
    </motion.div>
  )
}
