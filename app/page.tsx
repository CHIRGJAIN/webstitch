import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webstitch - Code. Craft. Connect | Premier Web Development in Greater Noida',
  description: 'Transform your digital presence with Webstitch - Greater Noida\'s leading web development company. We create stunning, high-performance websites and applications that drive business growth.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </main>
  )
}