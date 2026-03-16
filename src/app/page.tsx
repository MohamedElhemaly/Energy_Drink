'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InfoSection from '@/components/InfoSection'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/lib/languageContext'

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-dark-bg">
        <Header />
        <Hero />
        <InfoSection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
