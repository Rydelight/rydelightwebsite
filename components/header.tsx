'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Vehicle', id: 'vehicle' },
    { name: 'Service Area', id: 'service-area' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
            {/* Logo - Clean like live site */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img
                  src="/images/LogoSquareTransparent.png"
                  alt="Rydelight Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">RYDELIGHT</h1>
                <p className="text-sm text-gray-200">Premium Chauffeur Service</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-[#0091ea] font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Desktop CTA - Added phone number */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:4699190519"
                className="flex items-center space-x-2 text-gray-200 hover:text-[#0091ea] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">(469) 919-0519</span>
              </a>
              <a
                href="mailto:booking@rydelight.com"
                className="flex items-center space-x-2 text-gray-200 hover:text-[#0091ea] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">booking@rydelight.com</span>
              </a>
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0091ea] hover:bg-[#0077c2] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium py-3 px-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}

                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <a
                    href="tel:4698123488"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(469) 812-3488</span>
                  </a>

                  <a
                    href="mailto:booking@rydelight.com"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
                  >
                    <Mail className="w-5 h-5" />
                    <span>booking@rydelight.com</span>
                  </a>

                  <a
                    href="https://customer.moovs.app/rydelight/new/info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#0091ea] hover:bg-[#0077c2] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
