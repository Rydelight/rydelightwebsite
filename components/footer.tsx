
'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-1">
                <img 
                  src="/images/LogoSquareTransparent.png" 
                  alt="Rydelight Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">RYDELIGHT</h3>
                <p className="text-gray-400">Premium Chauffeur Service</p>
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Experience luxury transportation in the DFW metro area with our brand new 
              2025 Tesla Model Y. Professional, reliable, and environmentally conscious 
              chauffeur service for all your transportation needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0091ea]" />
                <a 
                  href="mailto:booking@rydelight.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  booking@rydelight.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#0091ea]" />
                <span className="text-gray-300">DFW Metro Area (75-mile radius)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#0091ea]" />
                <span className="text-gray-300">24/7 Service Available</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', id: 'about' },
                { name: 'Our Services', id: 'services' },
                { name: 'Vehicle Features', id: 'vehicle' },
                { name: 'Service Area', id: 'service-area' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <span className="text-yellow-400">★</span>
                <span>Sip & Ride Premium</span>
              </li>
              <li>Airport Transfers</li>
              <li>Business Travel</li>
              <li>Special Occasions</li>
              <li>Corporate Events</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-2"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Rydelight. All rights reserved.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
