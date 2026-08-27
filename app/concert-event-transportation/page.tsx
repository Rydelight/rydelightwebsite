import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarCheck,
  CarFront,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Mail,
  MapPin,
  Music2,
  ShieldCheck,
  Sparkles,
  Ticket,
  Users,
  Zap,
} from 'lucide-react'

const pageUrl = 'https://rydelight.com/concert-event-transportation'
const heroImageUrl = 'https://rydelight.com/images/rydelight-event-transportation-hero.png'
const pageTitle = 'DFW Concert & Event Transportation | Rydelight'
const pageDescription =
  'Private electric black-car service for concerts, sporting events, galas, dinners, and nights out across Dallas-Fort Worth, with a planned pickup approach.'

export const metadata: Metadata = {
  metadataBase: new URL('https://rydelight.com'),
  title: pageTitle,
  description: pageDescription,
  keywords: [],
  alternates: {
    canonical: '/concert-event-transportation',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'Rydelight',
    images: [
      {
        url: heroImageUrl,
        width: 2560,
        height: 1440,
        alt: 'Private electric black-car service arriving at a DFW event venue at night',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [heroImageUrl],
  },
}

const eventPageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Concert & Event Transportation',
    description: pageDescription,
    serviceType: [
      'Concert transportation',
      'Sporting event transportation',
      'Private black-car service',
    ],
    provider: {
      '@type': 'Organization',
      name: 'Rydelight',
      url: 'https://rydelight.com',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Dallas-Fort Worth Metroplex',
    },
    image: heroImageUrl,
    url: pageUrl,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://rydelight.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Concert & Event Transportation',
        item: pageUrl,
      },
    ],
  },
]

const bookingUrl = 'https://customer.moovs.app/rydelight/new/info'
const emailUrl = 'mailto:booking@rydelight.com?subject=Event%20Transportation%20Request'

const highlights = [
  {
    number: '01',
    title: 'Arrive settled',
    description:
      'Start the night in a quiet, climate-controlled cabin instead of a parking search or last-minute rideshare decision.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Stay together',
    description:
      'Keep your group in one private vehicle, with room for up to four guests and a more comfortable fit for three.',
    icon: Users,
  },
  {
    number: '03',
    title: 'Leave with a plan',
    description:
      'Your post-event pickup approach is discussed with your booking and depends on venue traffic controls and event operations.',
    icon: MapPin,
  },
]

const occasions = [
  { label: 'Concerts & shows', icon: Music2 },
  { label: 'Sporting events', icon: Ticket },
  { label: 'Galas & corporate nights', icon: ShieldCheck },
  { label: 'Dinners & date nights', icon: Sparkles },
  { label: 'Celebrations & nights out', icon: CalendarCheck },
]

const vehicleDetails = [
  'Quiet electric ride',
  'Comfortable private cabin',
  'Wireless charging and USB-C ports',
  'Private chauffeur service',
]

const bookingSteps = [
  {
    number: '01',
    title: 'Share the occasion',
    description:
      'Add your event, date, guests, pickup, and destination details in the booking flow.',
  },
  {
    number: '02',
    title: 'Confirm the ride',
    description:
      'Final availability and booking details are confirmed in the secure booking flow.',
  },
  {
    number: '03',
    title: 'Know the approach',
    description:
      'Pickup details are confirmed with your booking, taking event operations and traffic controls into account.',
  },
]

const faqs = [
  {
    question: 'Do you provide transportation for concerts and sporting events?',
    answer:
      'Yes. Rydelight provides private black-car service for small groups attending events throughout the DFW area.',
  },
  {
    question: 'How many guests can ride together?',
    answer:
      'The private vehicle accommodates up to four guests. Three are recommended for maximum comfort.',
  },
  {
    question: 'How is post-event pickup handled?',
    answer:
      'The pickup approach is discussed and confirmed with your booking. Exact arrangements depend on venue operations, traffic controls, and the event environment.',
  },
  {
    question: 'Can Rydelight check availability or give a final total on this page?',
    answer:
      'Final availability and booking details are confirmed in the secure booking flow. Use the booking flow or email your event details for help with a specific request.',
  },
  {
    question: 'Is Rydelight affiliated with an event, artist, venue, or team?',
    answer: 'No. Rydelight is an independent private black-car service.',
  },
]

export default function ConcertEventTransportationPage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#070D17] text-white selection:bg-[#0091ea] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventPageStructuredData) }}
      />
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Rydelight home">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 transition group-hover:border-[#0091ea]">
              <Image
                src="/images/LogoSquareTransparent.png"
                alt="Rydelight logo"
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="text-lg font-bold tracking-[0.16em]">RYDELIGHT</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300">Private black-car service</div>
            </div>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Back to home
            </Link>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#0091ea] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,145,234,0.24)] transition hover:bg-[#0077c2]"
            >
              Book now
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate flex min-h-[780px] items-end overflow-hidden border-b border-white/10">
        <Image
          src="/images/rydelight-event-transportation-hero.png"
          alt="Black electric vehicle outside a softly lit entertainment district at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[67%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D17] via-[#070D17]/88 to-[#070D17]/22" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D17] via-transparent to-[#070D17]/35" />
        <div className="absolute left-[8%] top-[20%] h-44 w-44 rounded-full bg-[#0091ea]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#70cbff]/30 bg-[#0091ea]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b6e7ff]">
              <Zap className="h-3.5 w-3.5" />
              Concerts · Games · Nights out
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Your event starts before the doors open.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Private, all-electric black-car service for concerts, sporting events, dinners, galas, and celebrations across DFW. Arrive with a pickup approach already discussed with your booking.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0091ea] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(0,145,234,0.35)] transition hover:bg-[#0077c2]"
              >
                Plan your event ride <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#07101d]"
              >
                <Mail className="h-4 w-4" /> Email event details
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2"><CarFront className="h-4 w-4 text-[#70cbff]" /> Private electric vehicle</span>
              <span className="inline-flex items-center gap-2"><Users className="h-4 w-4 text-[#70cbff]" /> Up to 4 guests</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#70cbff]" /> 3 recommended for comfort</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">The event-night difference</p>
              <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Keep the night about the night.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The destination changes. The standard does not. Rydelight is designed for guests who want the transportation portion of the night handled with the same care as the reservation, tickets, or table.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map(({ number, title, description, icon: Icon }) => (
              <article key={number} className="group rounded-2xl border border-[#d8e7f3] bg-white p-7 shadow-[0_18px_45px_rgba(15,31,54,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,31,54,0.11)]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.18em] text-[#0091ea]">{number}</span>
                  <Icon className="h-6 w-6 text-[#0077c2]" />
                </div>
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1728] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#70cbff]">Built for the calendar</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">One private ride. Many reasons to go.</h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {occasions.map(({ label, icon: Icon }) => (
              <div key={label} className="flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#0091ea]/60 hover:bg-white/[0.07]">
                <Icon className="h-6 w-6 text-[#70cbff]" />
                <span className="mt-8 text-base font-semibold leading-6 text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f7fbff] px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">Private electric service</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">An event-night ride should feel intentional.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Your private ride includes a clean, quiet cabin built for conversation, charging, and a smoother start to the night.
            </p>
            <ul className="mt-8 space-y-4">
              {vehicleDetails.map((detail) => (
                <li key={detail} className="flex gap-3 text-base leading-6 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#0091ea]" />
                  {detail}
                </li>
              ))}
            </ul>
            <p className="mt-8 rounded-xl border border-[#bfddf2] bg-[#eaf6ff] px-5 py-4 text-sm leading-6 text-[#1c4667]">
              The private vehicle accommodates up to four guests. Three guests are recommended for maximum comfort.
            </p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-[#07101d] p-7 shadow-2xl sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0091ea]/20 blur-[80px]" />
            <div className="relative flex h-full min-h-[350px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0091ea] text-white"><Zap className="h-6 w-6" /></div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9bb8ce]">Private electric service</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#70cbff]">Quiet by design</p>
                <p className="mt-4 max-w-sm text-3xl font-bold leading-tight tracking-[-0.04em] text-white">Comfort before the crowd. A calmer ride after it.</p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/15 px-3 py-2">Panoramic glass roof</span>
                <span className="rounded-full border border-white/15 px-3 py-2">USB-C + wireless charging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07101d] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#70cbff]">Before the crowd</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">A clear plan, before the day gets busy.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {bookingSteps.map((step) => (
              <div key={step.number} className="relative border-t border-white/20 pt-7">
                <CircleDot className="absolute -top-2 left-0 h-4 w-4 fill-[#0091ea] text-[#0091ea]" />
                <span className="text-sm font-bold tracking-[0.18em] text-[#70cbff]">{step.number}</span>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-white">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">Details, clearly handled</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Questions before you plan?</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">The essentials are straightforward. Your specific booking details are confirmed in the secure booking flow.</p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-[#fbfdff] px-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-[#10233b] marker:hidden">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#0077c2] transition group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pt-4 leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0091ea] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Clock3 className="mx-auto h-7 w-7 text-white/80" />
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Make the ride part of the plan.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            If the night matters, do not leave the arrival and return to chance. Plan the ride before the day gets crowded.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#0077c2] shadow-xl transition hover:bg-slate-100"
            >
              Plan your event ride <ArrowRight className="h-4 w-4" />
            </a>
            <a href={emailUrl} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0077c2]">
              <Mail className="h-4 w-4" /> Email event details
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-white/75">Independent private black-car service. Final availability and booking details are confirmed in the secure booking flow.</p>
        </div>
      </section>
    </main>
  )
}
