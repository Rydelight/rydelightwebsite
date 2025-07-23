
'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Services from '@/components/services';
import VehicleFeatures from '@/components/vehicle-features';
import ServiceArea from '@/components/service-area';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <VehicleFeatures />
      <ServiceArea />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
