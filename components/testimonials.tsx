'use client'

import { motion } from 'framer-motion'
import { CarFront, MapPin, ShieldCheck, UserRoundCheck } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const serviceStandards = [
  {
    icon: UserRoundCheck,
    title: 'Owner-Operated Service',
    detail: 'Scott personally drives every Rydelight Four ride, providing a consistent point of contact from trip planning through arrival.',
  },
  {
    icon: CarFront,
    title: 'Private Electric Comfort',
    detail: 'Travel in Rydelight Four, a 2025 black Tesla Model Y with a white vegan-leather interior, quiet electric ride, and modern charging options.',
  },
  {
    icon: MapPin,
    title: 'DFW-Focused Coverage',
    detail: 'Private chauffeur service for airport rides, business travel, special occasions, and events across the Dallas-Fort Worth metro area.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear Booking Expectations',
    detail: 'Use the secure booking flow for final availability and trip totals, or email directly for help with a specific request.',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-white" aria-labelledby="rydelight-standard-heading">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0091ea]">Private chauffeur service</p>
          <h2 id="rydelight-standard-heading" className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            The <span className="text-gradient">Rydelight Standard</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            A thoughtful, owner-operated alternative for travelers who value a quiet ride, clear communication, and a premium electric vehicle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {serviceStandards.map((standard, index) => {
            const Icon = standard.icon

            return (
              <motion.article
                key={standard.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="rounded-2xl bg-gray-50 p-8 transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0091ea]/10 text-[#0091ea]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-gray-900">{standard.title}</h3>
                <p className="leading-relaxed text-gray-700">{standard.detail}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="mb-4 text-3xl font-bold text-gray-900">Ready to Plan Your Ride?</h3>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Use the secure booking flow to view final trip details, or contact Rydelight directly for help with a specific request.
          </p>
          <a
            href="https://customer.moovs.app/rydelight/new/info"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 py-4 text-lg"
          >
            Book Your Ride
          </a>
        </motion.div>
      </div>
    </section>
  )
}
