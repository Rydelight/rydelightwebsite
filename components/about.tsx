'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Shield } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: '100%', label: 'On-Time Arrivals', icon: Clock },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '5★', label: 'Average Rating', icon: Award },
    { number: '24/7', label: 'Available Service', icon: Shield },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Rydelight</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted chauffeur service in the DFW metro area, providing premium transportation 
            with our brand new 2025 Tesla Model Y.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Professional, Reliable, Luxurious
            </h3>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                As an owner-operated chauffeur service, I personally ensure every ride meets 
                the highest standards of comfort, safety, and professionalism. Whether you're 
                a business executive needing reliable airport transportation or someone requiring 
                assistance with mobility and errands, I'm here to serve you.
              </p>
              <p>
                My 2025 Tesla Model Y offers the perfect combination of luxury, technology, 
                and environmental consciousness. With its spacious interior, advanced safety 
                features, and whisper-quiet operation, every journey becomes a premium experience.
              </p>
              <p>
                Serving the greater DFW metro area within 75 miles, I specialize in airport 
                transfers while also providing transportation for special occasions, corporate 
                events, and daily assistance needs.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Experience the Difference</span>
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://azlimo.com/wp-content/uploads/2021/01/What-makes-a-great-chauffeur.jpg"
                alt="Professional chauffeur with Tesla Model Y"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#0091ea] text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm">Tesla Model Y</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center feature-card"
            >
              <div className="w-16 h-16 bg-[#0091ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 animate-count-up">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}