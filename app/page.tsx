'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import VehicleFeatures from '@/components/vehicle-features'
import ServiceArea from '@/components/service-area'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import AIChatWidget from '@/components/ai-chat-widget'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <VehicleFeatures />
        <ServiceArea />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <AIChatWidget />
    </>
  )
}