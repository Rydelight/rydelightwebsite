'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-gray-50" aria-labelledby="about-heading">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0091ea]">Private electric service</p>
          <h2 id="about-heading" className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            About <span className="text-gradient">Rydelight</span>
          </h2>
          <p className="text-xl leading-relaxed text-gray-600">
            Private electric chauffeur service for DFW travelers who value clear communication, thoughtful planning, and a refined ride.
          </p>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-6 text-3xl font-bold text-gray-900">Professional, Personal, and Purposeful</h3>
            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Rydelight is a private chauffeur service built around clear communication and thoughtful transportation for airport trips, business travel, special occasions, and everyday transportation needs.
              </p>
              <p>
                A quiet electric ride, comfortable cabin, modern safety features, and refined interior help create a more comfortable private experience.
              </p>
              <p>
                Rydelight serves the greater DFW metro area within 75 miles, with particular attention to airport transfers, corporate travel, special occasions, and local events.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/dfw-airport-transportation/"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Explore Airport Service</span>
              </a>
              <a
                href="https://customer.moovs.app/rydelight/new/info"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Plan Your Ride</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/rydelight-private-electric-service-corrected.png"
                alt="Black electric chauffeur vehicle outside a modern Dallas-Fort Worth arrival entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-[#0091ea] p-6 text-white shadow-lg">
              <div className="text-center">
                <div className="text-sm font-semibold">Private Electric Service</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
