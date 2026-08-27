'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Menu, Phone, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Airport', href: '/dfw-airport-transportation/' },
  { name: 'Events', href: '/concert-event-transportation/' },
  { name: 'Vehicle', href: '/#vehicle' },
  { name: 'Service Area', href: '/#service-area' },
  { name: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex h-20 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <motion.a
              href="/"
              aria-label="Rydelight home"
              className="flex shrink-0 items-center space-x-3"
              whileHover={{ scale: 1.03 }}
            >
              <span className="h-10 w-10 overflow-hidden rounded-lg sm:h-12 sm:w-12">
                <img
                  src="/images/LogoSquareTransparent.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="hidden sm:block">
                <span className="block text-xl font-bold leading-none text-white xl:text-2xl">RYDELIGHT</span>
                <span className="mt-1 block text-xs text-gray-200 xl:text-sm">Private Electric Chauffeur</span>
              </span>
            </motion.a>

            <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-white transition-colors duration-200 hover:text-[#0091ea]"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:4699190519"
                aria-label="Call Rydelight at 469 919 0519"
                className="rounded-lg p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-[#0091ea] xl:flex xl:items-center xl:gap-2 xl:px-0"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span className="hidden text-sm xl:inline">(469) 919-0519</span>
              </a>
              <a
                href="mailto:booking@rydelight.com"
                aria-label="Email Rydelight"
                className="rounded-lg p-2 text-gray-200 transition-colors hover:bg-white/10 hover:text-[#0091ea] xl:flex xl:items-center xl:gap-2 xl:px-0"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span className="hidden text-sm xl:inline">Email</span>
              </a>
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#0091ea] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0077c2] xl:px-5"
              >
                Book Now
              </a>
            </div>

            <button
              type="button"
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="fixed left-0 right-0 top-20 z-50 border-t border-gray-200 bg-white shadow-lg lg:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="space-y-2 px-4 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="block w-full rounded-md px-3 py-3 text-left font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0091ea]"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="space-y-3 border-t border-gray-200 pt-4">
                  <a
                    href="tel:4699190519"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0091ea]"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span>(469) 919-0519</span>
                  </a>
                  <a
                    href="mailto:booking@rydelight.com"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-50 hover:text-[#0091ea]"
                  >
                    <Mail className="h-5 w-5" aria-hidden="true" />
                    <span>booking@rydelight.com</span>
                  </a>
                  <a
                    href="https://customer.moovs.app/rydelight/new/info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-[#0091ea] px-6 py-3 text-center font-medium text-white transition-colors duration-200 hover:bg-[#0077c2]"
                    onClick={closeMobileMenu}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
