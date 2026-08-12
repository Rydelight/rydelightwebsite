'use client'

import Image from 'next/image'
import { ArrowRight, CalendarDays, CarFront, Clock3, MapPin, ThermometerSun } from 'lucide-react'
import { motion } from 'framer-motion'

const bookingUrl = 'https://customer.moovs.app/rydelight/new/info'

export default function ArlingtonConcertCampaign() {
  return (
    <section
      id="arlington-concert-transport"
      aria-labelledby="arlington-concert-heading"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.30),transparent_38%),radial-gradient(circle_at_90%_72%,rgba(0,145,234,0.18),transparent_34%)]" />
      <div className="relative container-max px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-center sm:mb-10">
          <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-violet-100">
            Arlington Concert Weekend
          </span>
          <span className="rounded-full border border-sky-300/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-sky-100">
            August 15–16
          </span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-violet-200">
              BTS at AT&amp;T Stadium
            </p>
            <h2 id="arlington-concert-heading" className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Arrive calm. Leave with a plan.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              Skip the parking maze, heat, and last-minute rideshare scramble. Rydelight gives your group a polished,
              all-electric ride to Arlington in a private 2025 Tesla Model Y—then a clear post-show pickup strategy,
              confirmed with your booking.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 backdrop-blur-sm">
                <CalendarDays className="mb-3 h-5 w-5 text-violet-300" aria-hidden="true" />
                <p className="font-semibold">August 15–16</p>
                <p className="mt-1 text-sm text-slate-300">Concert night transportation</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 backdrop-blur-sm">
                <MapPin className="mb-3 h-5 w-5 text-violet-300" aria-hidden="true" />
                <p className="font-semibold">AT&amp;T Stadium</p>
                <p className="mt-1 text-sm text-slate-300">Arlington, Texas</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 backdrop-blur-sm">
                <CarFront className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
                <p className="font-semibold">Private Tesla</p>
                <p className="mt-1 text-sm text-slate-300">Up to 4 guests; 3 recommended for comfort</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-100 backdrop-blur-sm">
                <Clock3 className="mb-3 h-5 w-5 text-sky-300" aria-hidden="true" />
                <p className="font-semibold">Post-show plan</p>
                <p className="mt-1 text-sm text-slate-300">Pickup strategy confirmed with your booking</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[#0091ea] px-6 py-4 text-base font-bold text-white transition hover:bg-[#0285d4] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Reserve Concert Transport
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="mailto:booking@rydelight.com?subject=Arlington%20Concert%20Transportation%20Request"
                className="text-center text-sm font-semibold text-sky-200 underline-offset-4 hover:text-white hover:underline sm:text-left"
              >
                Email for a custom concert quote
              </a>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-200/15 bg-amber-100/[0.06] p-4 text-sm leading-relaxed text-amber-50">
              <ThermometerSun className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" aria-hidden="true" />
              <p>
                Your group&apos;s ride is reserved before the day gets crowded. Your exact pickup arrangements depend on
                traffic controls and venue operations and are confirmed with your booking.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-violet-200/20 bg-slate-900 shadow-[0_0_80px_rgba(124,58,237,0.28)]">
              <Image
                src="/images/rydelight-arlington-concert-night.png"
                alt="Original illustration of a black electric SUV outside a purple-lit concert stadium at night"
                width={1440}
                height={2560}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent px-6 pb-7 pt-20">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-violet-200">Rydelight Four</p>
                <p className="mt-2 text-xl font-semibold text-white">Your concert night starts before the stadium.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-slate-400">
          Rydelight is an independent local black-car service and is not affiliated with BTS, BigHit Music, HYBE,
          AT&amp;T Stadium, or the event organizer.
        </p>
      </div>
    </section>
  )
}
