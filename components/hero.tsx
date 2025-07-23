
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-gradient-to-r from-black/60 to-black/40">
          <Image
            src="https://content.app-sources.com/s/29293006541839925/uploads/Cars/2020-Tesla-Model-Y-front-4479907.png"
            alt="Rydelight Tesla Model Y at DFW Airport"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center space-x-6 mb-8"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-sm font-medium">Premium Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium">On-Time Guarantee</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Premium Chauffeur Service
            <span className="block text-[#0091ea]">in DFW Metro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury transportation in our brand new 2025 Tesla Model Y. 
            Perfect for business executives, airport transfers, and special occasions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="https://customer.moovs.app/rydelight/new/info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 flex items-center space-x-2 group"
            >
              <span>Book Your Ride</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-10 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-gray-900"
            >
              View Services
            </button>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0091ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">✈️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
              <p className="text-gray-300">Reliable transportation to/from DFW and Love Field airports</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0091ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🏢</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Travel</h3>
              <p className="text-gray-300">Professional service for executives and corporate events</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0091ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">🎉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Occasions</h3>
              <p className="text-gray-300">Weddings, birthdays, and memorable events</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
