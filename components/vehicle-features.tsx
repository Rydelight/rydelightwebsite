
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Shield, 
  Wifi, 
  Snowflake, 
  Volume2, 
  Smartphone,
  Leaf,
  Star
} from 'lucide-react';
import Image from 'next/image';

export default function VehicleFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Zap,
      title: 'Electric Performance',
      description: 'A quiet all-electric ride for a calmer private travel experience',
    },
    {
      icon: Shield,
      title: 'Advanced Safety',
      description: 'A thoughtfully equipped vehicle for private DFW transportation',
    },
    {
      icon: Wifi,
      title: 'Premium Connectivity',
      description: 'A refined cabin for a more comfortable travel experience',
    },
    {
      icon: Snowflake,
      title: 'Climate Control',
      description: 'Climate control designed to help keep the cabin comfortable',
    },
    {
      icon: Volume2,
      title: 'Premium Audio',
      description: 'A quiet cabin designed for a more relaxed ride',
    },
    {
      icon: Smartphone,
      title: 'Smart Features',
      description: 'Wireless charging and USB-C ports for compatible devices',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'All-electric transportation with no tailpipe emissions while driving',
    },
    {
      icon: Star,
      title: 'Luxury Interior',
      description: 'White vegan leather seats with panoramic glass roof',
    },
  ];

  const specs = [
    { label: 'Model Year', value: '2025' },
    { label: 'Vehicle', value: 'Tesla Model Y' },
    { label: 'Color', value: 'Black Exterior' },
    { label: 'Interior', value: 'White Vegan Leather' },
    { label: 'Seating', value: 'Up to 4 Passengers' },
  ];

  return (
    <section id="vehicle" className="section-padding bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0091ea] to-transparent" />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the <span className="text-[#0091ea]">2025 Tesla Model Y</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Travel in Rydelight Four, a 2025 Tesla Model Y that pairs a quiet electric ride with modern technology and a refined private experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Vehicle Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/luggagescifi.jpg"
                alt="Private electric vehicle prepared for a Rydelight passenger"
                fill
                className="object-cover"
              />
            </div>

          </motion.div>

          {/* Vehicle Specs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-8">Vehicle Specifications</h3>
            <div className="space-y-4">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-gray-700"
                >
                  <span className="text-gray-300 font-medium">{spec.label}</span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-8">
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Book Your Tesla Experience</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Premium Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                <div className="w-12 h-12 bg-[#0091ea] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
