
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Clock, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'booking@rydelight.com',
      description: 'For questions and special requests',
      action: 'mailto:booking@rydelight.com',
    },
    {
      icon: Clock,
      title: 'Service Hours',
      details: '24/7 Available',
      description: 'Round-the-clock service for your convenience',
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'DFW Metro Area',
      description: 'Within 75 miles of Dallas-Fort Worth',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white relative overflow-hidden">
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
            Get in <span className="text-[#0091ea]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to book your premium chauffeur service? We're here to help with 
            any questions or special requests you may have.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-[#0091ea] rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{info.title}</h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-[#0091ea] hover:text-blue-300 font-medium text-lg transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-200">{info.details}</p>
                    )}
                    <p className="text-gray-400 mt-1">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700"
            >
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-[#0091ea]" />
                Preferred Communication
              </h4>
              <p className="text-gray-300 mb-4">
                We prefer email communication for booking inquiries and questions. 
                This allows us to provide detailed responses and maintain accurate records.
              </p>
              <a
                href="mailto:booking@rydelight.com"
                className="inline-flex items-center space-x-2 text-[#0091ea] hover:text-blue-300 font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send us an email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-[#0091ea] to-[#42a5f5] rounded-2xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold mb-6">Ready to Book?</h3>
            <p className="text-xl mb-8 opacity-90">
              Get an instant quote and book your premium chauffeur service 
              through our secure booking platform.
            </p>
            
            <div className="space-y-6">
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#0091ea] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Book Now - Get Instant Quote
              </a>
              
              <div className="text-center">
                <p className="text-sm opacity-75 mb-4">Or contact us for custom requests:</p>
                <a
                  href="mailto:booking@rydelight.com"
                  className="inline-flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>booking@rydelight.com</span>
                </a>
              </div>
            </div>

            {/* Service Promise */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <h4 className="font-semibold mb-4">Our Service Promise</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>✓ On-time guarantee</div>
                <div>✓ Professional service</div>
                <div>✓ Clean, luxury vehicle</div>
                <div>✓ Competitive pricing</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center bg-gray-800 rounded-2xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold mb-4">Booking Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-[#0091ea] mb-2">Advance Booking</h4>
              <p className="text-gray-300">
                We recommend booking at least 24 hours in advance for guaranteed availability, 
                though same-day service may be available.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0091ea] mb-2">Quote Approval</h4>
              <p className="text-gray-300">
                All quotes require manual approval to ensure accurate pricing and availability. 
                You'll receive confirmation within a few hours.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0091ea] mb-2">Special Requests</h4>
              <p className="text-gray-300">
                Need child seats, wheelchair accessibility, or other accommodations? 
                Contact us directly to discuss your specific needs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
