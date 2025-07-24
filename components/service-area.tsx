
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Plane, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function ServiceArea() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const locations = [
    {
      name: 'DFW Airport',
      type: 'Airport',
      icon: Plane,
      description: 'Primary airport serving the Dallas-Fort Worth metroplex',
    },
    {
      name: 'Love Field Airport',
      type: 'Airport',
      icon: Plane,
      description: 'Dallas city airport with convenient downtown access',
    },
    {
      name: 'Downtown Dallas',
      type: 'Business District',
      icon: Building2,
      description: 'Central business district and corporate headquarters',
    },
    {
      name: 'Downtown Fort Worth',
      type: 'Business District',
      icon: Building2,
      description: 'Historic downtown and cultural district',
    },
    {
      name: 'Plano',
      type: 'Suburb',
      icon: MapPin,
      description: 'Corporate corridor and residential area',
    },
    {
      name: 'Irving',
      type: 'Suburb',
      icon: MapPin,
      description: 'Business hub near DFW Airport',
    },
    {
      name: 'Arlington',
      type: 'Suburb',
      icon: MapPin,
      description: 'Entertainment district and sports venues',
    },
    {
      name: 'Frisco',
      type: 'Suburb',
      icon: MapPin,
      description: 'Rapidly growing business and residential area',
    },
  ];

  const serviceHighlights = [
    {
      icon: Clock,
      title: '75-Mile Radius',
      description: 'Comprehensive coverage of the greater DFW metro area',
    },
    {
      icon: MapPin,
      title: 'Door-to-Door',
      description: 'Pick up and drop off at any location within our service area',
    },
    {
      icon: Plane,
      title: 'Airport Specialists',
      description: 'Expert knowledge of DFW and Love Field terminals',
    },
  ];

  return (
    <section id="service-area" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Service Area</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving the entire DFW metro area within a 75-mile radius, with specialized 
            focus on airport transfers and business districts.
          </p>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {serviceHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="feature-card text-center"
            >
              <div className="w-16 h-16 bg-[#0091ea] rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Map/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh5.googleusercontent.com/proxy/fA4kmiqY7_U8JaUcLlCRMwdmvYAmSdaqI96FZKZZopLj1SuP3wYc7CAAtG96W1ksFdyoJ62U-cpvLR_TQ8GFQvA60HUoXNCS2dfTXSMlGpeDIqtzdi2IZQB7BmeuxGJlnDSM0LJwCfCC=s0-d"
                alt="DFW Metro Area Service Map"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">75-Mile Coverage</h3>
                <p className="text-gray-200">Complete DFW Metro Area</p>
              </div>
            </div>
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Key Service Locations</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <location.icon className="w-6 h-6 text-[#0091ea]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{location.name}</h4>
                      <p className="text-gray-600 text-sm">{location.description}</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {location.type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need Service Outside Our Area?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Contact us for special arrangements and custom transportation solutions 
            beyond our standard 75-mile service radius.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://customer.moovs.app/rydelight/new/info"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Standard Service
            </a>
            <a
              href="mailto:booking@rydelight.com"
              className="btn-secondary"
            >
              Request Custom Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
