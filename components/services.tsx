
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Plane, 
  Building2, 
  Heart, 
  GraduationCap, 
  Trophy, 
  Calendar,
  MapPin,
  Clock,
  Wine,
  Star
} from 'lucide-react';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      category: 'Airport Services',
      icon: Plane,
      color: 'bg-blue-500',
      services: ['Airport Transfers', 'Airport Drop Off', 'Airport Pick Up'],
      description: 'Reliable transportation to/from DFW and Love Field airports',
      featured: true,
    },
    {
      category: 'Corporate',
      icon: Building2,
      color: 'bg-gray-700',
      services: ['Business Meetings', 'Corporate Events', 'Executive Transport'],
      description: 'Professional service for business executives and corporate needs',
    },
    {
      category: 'Special Occasions',
      icon: Heart,
      color: 'bg-pink-500',
      services: ['Weddings', 'Anniversaries', 'Date Nights'],
      description: 'Make your special moments even more memorable',
    },
    {
      category: 'Celebrations',
      icon: Calendar,
      color: 'bg-purple-500',
      services: ['Birthdays', 'Sweet 16', 'Quinceañera', '21st Birthday'],
      description: 'Celebrate in style with luxury transportation',
    },
    {
      category: 'School Events',
      icon: GraduationCap,
      color: 'bg-green-500',
      services: ['Prom', 'Homecoming', 'Graduation'],
      description: 'Safe and elegant transportation for school events',
    },
    {
      category: 'Entertainment',
      icon: Trophy,
      color: 'bg-orange-500',
      services: ['Sporting Events', 'Concerts', 'Night Out'],
      description: 'Enjoy events without worrying about transportation',
    },
    {
      category: 'Personal Services',
      icon: MapPin,
      color: 'bg-teal-500',
      services: ['Medical Appointments', 'Shopping', 'Point-to-Point'],
      description: 'Assistance with daily needs and errands',
    },
    {
      category: 'Leisure',
      icon: Clock,
      color: 'bg-indigo-500',
      services: ['Day Tours', 'Sightseeing', 'Custom Trips'],
      description: 'Explore the DFW area in comfort and style',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From airport transfers to special occasions, we provide premium chauffeur 
            services for every need in the DFW metro area.
          </p>
        </motion.div>

        {/* Sip & Ride Premium Service */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mr-4">
                <Wine className="w-12 h-12 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
                <span className="text-2xl font-bold">Premium Experience</span>
              </div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Sip & Ride
            </h3>
            
            <p className="text-xl text-center mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Elevate your journey with our exclusive beverage service. Enjoy premium drinks 
              perfectly chilled in our Tesla's sub-trunk freezer while you travel in luxury.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Available Beverages */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Wine className="w-6 h-6 mr-3" />
                  Available Beverages
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Red Wine', 'Rosé Wine', 'White Wine', 
                    'Premium Water', 'Topo Chico', 'Titos Vodka'
                  ].map((drink, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                      <span className="text-sm">{drink}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm opacity-75 mt-3">
                  Special requests available with additional fee
                </p>
              </div>
              
              {/* Service Details */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-3" />
                  Perfect For
                </h4>
                <ul className="space-y-2">
                  {[
                    'Hotel guests seeking luxury',
                    'Corporate professionals',
                    'Romantic evenings',
                    'Special celebrations',
                    'Airport transfers with style',
                    'Business entertainment'
                  ].map((occasion, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                      <span className="text-sm">{occasion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Important Notes */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h4 className="text-lg font-bold mb-3">Important Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Age Requirement:</strong> 21+ for alcoholic beverages</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Advance Booking:</strong> Request when scheduling</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Temperature:</strong> Perfectly chilled in sub-trunk freezer</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 text-lg"
              >
                <Wine className="w-5 h-5" />
                <span>Book Sip & Ride Experience</span>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`service-card p-6 relative overflow-hidden ${
                service.featured ? 'ring-2 ring-[#0091ea] ring-offset-2' : ''
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-[#0091ea] text-white px-3 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.category}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.services.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <div className="w-2 h-2 bg-[#0091ea] rounded-full mr-3 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 block ${
                  service.featured
                    ? 'bg-[#0091ea] text-white hover:bg-[#0077c2]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-[#0091ea] to-[#42a5f5] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Don't See Your Occasion Listed?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            We provide custom transportation solutions for any event or need. 
            Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://customer.moovs.app/rydelight/new/info"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#0091ea] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Custom Quote
            </a>
            <a
              href="mailto:booking@rydelight.com"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0091ea] font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
