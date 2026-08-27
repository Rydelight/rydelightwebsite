import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarCheck,
  CarFront,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Mail,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Zap,
} from 'lucide-react'

const pageUrl = 'https://rydelight.com/dfw-airport-transportation'
const heroImageUrl = 'https://rydelight.com/images/rydelight-dfw-airport-transportation-hero.png'
const pageTitle = 'DFW Airport Transportation | Private Electric Black-Car Service | Rydelight'
const pageDescription =
  'Private electric black-car airport transportation for DFW International Airport and Dallas Love Field. Travel across Dallas-Fort Worth in a 2025 Tesla Model Y with Rydelight.'

export const metadata: Metadata = {
  metadataBase: new URL('https://rydelight.com'),
  title: pageTitle,
  description: pageDescription,
  keywords: [],
  alternates: {
    canonical: '/dfw-airport-transportation',
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
        alt: 'Private electric black-car service at an airport at night',
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

const airportPageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'DFW Airport Transportation',
    description: pageDescription,
    serviceType: [
      'Airport transportation',
      'Private black-car service',
      'DFW Airport transfer',
      'Dallas Love Field transfer',
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
        name: 'DFW Airport Transportation',
        item: pageUrl,
      },
    ],
  },
]

const bookingUrl = 'https://customer.moovs.app/rydelight/new/info'
const emailUrl = 'mailto:booking@rydelight.com?subject=Airport%20Transportation%20Request'

const highlights = [
  {
    number: '01',
    title: 'Prearranged and personal',
    description:
      'Your trip begins with clear details. Share your timing, airport, and destination in the secure booking flow so the transportation plan is handled before your travel day.',
    icon: CalendarCheck,
  },
  {
    number: '02',
    title: 'A quieter way to travel',
    description:
      'Settle into a private, all-electric cabin with room to recharge devices, make a call, or simply take a breath between the airport and the rest of your day.',
    icon: Zap,
  },
  {
    number: '03',
    title: 'Small-group comfort',
    description:
      'Rydelight Four accommodates up to four guests. Three guests are recommended for the most comfortable airport ride.',
    icon: Users,
  },
]

const airportDetails = [
  {
    name: 'DFW International Airport',
    label: 'DFW',
    description:
      'Private transportation for departures and arrivals across the Dallas-Fort Worth area. Airport operations and terminal traffic can affect the pickup approach, so final details are confirmed with your booking.',
    icon: Plane,
  },
  {
    name: 'Dallas Love Field',
    label: 'DAL',
    description:
      'Prearranged private black-car service for Love Field travelers. Follow airport signage and the confirmed trip details for the designated ground-transportation pickup approach.',
    icon: MapPin,
  },
]

const vehicleDetails = [
  '2025 black Tesla Model Y',
  'White vegan-leather interior and panoramic glass roof',
  'Whisper-quiet electric ride',
  'Wireless charging and USB-C ports',
  'Private owner-led service',
]

const travelUses = [
  { label: 'Early departures', icon: Clock3 },
  { label: 'Arriving executives', icon: BriefcaseBusiness },
  { label: 'Client and guest travel', icon: UserRound },
  { label: 'Business meetings', icon: ShieldCheck },
  { label: 'A more relaxed return', icon: Sparkles },
]

const bookingSteps = [
  {
    number: '01',
    title: 'Share the trip basics',
    description:
      'Enter your airport, date, timing, guest count, pickup, and destination details in the secure booking flow.',
  },
  {
    number: '02',
    title: 'Confirm the ride',
    description:
      'Final availability and booking details are confirmed in the secure booking flow.',
  },
  {
    number: '03',
    title: 'Travel with the plan in place',
    description:
      'Airport pickup and drop-off directions follow the confirmed booking and current airport operations.',
  },
]

const faqs = [
  {
    question: 'Do you provide private airport transportation to DFW and Love Field?',
    answer:
      'Yes. Rydelight provides private electric black-car transportation for travelers using DFW International Airport and Dallas Love Field across the Dallas-Fort Worth area.',
  },
  {
    question: 'How many guests can ride together?',
    answer:
      'Rydelight Four accommodates up to four guests. Three guests are recommended for maximum comfort, especially when luggage is part of the trip.',
  },
  {
    question: 'Where will I meet my driver at the airport?',
    answer:
      'The pickup approach is confirmed with your booking and follows airport operations, terminal traffic controls, and any current ground-transportation instructions.',
  },
  {
    question: 'Can this page confirm availability or give my final total?',
    answer:
      'No. Final availability and booking details are confirmed in the secure booking flow. Use the booking flow or email your trip details for help with a specific request.',
  },
  {
    question: 'Do you provide a shared shuttle or rideshare service?',
    answer:
      'No. Rydelight is an independent private black-car service. Your ride is reserved for your party, subject to confirmed booking details.',
  },
]

export default function DfwAirportTransportationPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#070D17] text-white selection:bg-[#0091ea] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(airportPageStructuredData) }}
      />
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="group flex items-center gap-3" aria-label="Rydelight home">
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
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <a href="/" className="text-sm font-medium text-slate-200 transition hover:text-white">
              Back to home
            </a>
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

      <section className="relative isolate flex min-h-[780px] items-end overflow-hidden border-b border-white/10" data-analytics-location="airport_page_hero">
        <Image
          src="/images/rydelight-dfw-airport-transportation-hero.png"
          alt="Private electric black-car service at an airport at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070D17] via-[#070D17]/88 to-[#070D17]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D17] via-transparent to-[#070D17]/35" />
        <div className="absolute left-[8%] top-[20%] h-44 w-44 rounded-full bg-[#0091ea]/10 blur-[90px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 lg:pb-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#70cbff]/30 bg-[#0091ea]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#b6e7ff]">
              <Plane className="h-3.5 w-3.5" />
              DFW · Love Field · Private service
            </div>
            <h1 className="max-w-xl text-5xl font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              A calmer way to start or finish your airport day.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Private, all-electric black-car service for DFW International Airport and Dallas Love Field. Travel in a 2025 Tesla Model Y with your airport ride arranged before the day gets busy.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0091ea] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(0,145,234,0.35)] transition hover:bg-[#0077c2]"
              >
                Book airport transportation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={emailUrl}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 px-6 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#07101d]"
              >
                <Mail className="h-4 w-4" /> Email airport details
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-200">
              <span className="inline-flex items-center gap-2"><CarFront className="h-4 w-4 text-[#70cbff]" /> Rydelight Four</span>
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">Airport travel, considered</p>
              <h2 className="mt-4 max-w-md text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">The ride should support the day ahead.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Early flight, important arrival, or a return home after a long day. Rydelight is designed for travelers who value a private ride, an orderly plan, and a quieter cabin from the moment they leave the airport or head toward it.
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#70cbff]">Two airports, one standard</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">DFW and Love Field, handled with care.</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {airportDetails.map(({ name, label, description, icon: Icon }) => (
              <article key={label} className="rounded-3xl border border-white/10 bg-white/[0.035] p-8 transition hover:border-[#0091ea]/60 hover:bg-white/[0.07] sm:p-10">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0091ea] text-white"><Icon className="h-6 w-6" /></div>
                  <span className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-[0.16em] text-[#9ccdec]">{label}</span>
                </div>
                <h3 className="mt-12 text-3xl font-bold tracking-[-0.04em] text-white">{name}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-3xl text-sm leading-6 text-slate-400">Airport directions and designated ground-transportation locations are controlled by the airport and may change. Confirmed trip details govern your specific ride.</p>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f7fbff] px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">Rydelight Four</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">A private cabin for the time between places.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Your airport ride is a 2025 black Tesla Model Y with a clean, quiet cabin for conversation, charging, and a more composed transition between travel and the rest of your schedule.
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
              Rydelight Four accommodates up to four guests. Three guests are recommended for maximum comfort, particularly with luggage.
            </p>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-[#07101d] p-7 shadow-2xl sm:p-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#0091ea]/20 blur-[80px]" />
            <div className="relative flex h-full min-h-[350px] flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-7">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0091ea] text-white"><Plane className="h-6 w-6" /></div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9bb8ce]">Private electric service</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-[#70cbff]">Travel day, simplified</p>
                <p className="mt-4 max-w-sm text-3xl font-bold leading-tight tracking-[-0.04em] text-white">A quieter start. A more settled arrival.</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#70cbff]">Designed around your schedule</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">For the airport days that cannot feel improvised.</h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {travelUses.map(({ label, icon: Icon }) => (
              <div key={label} className="flex min-h-32 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#0091ea]/60 hover:bg-white/[0.07]">
                <Icon className="h-6 w-6 text-[#70cbff]" />
                <span className="mt-8 text-base font-semibold leading-6 text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">A clear plan before travel day</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Simple details. A smoother handoff.</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {bookingSteps.map((step) => (
              <div key={step.number} className="relative border-t border-slate-200 pt-7">
                <CircleDot className="absolute -top-2 left-0 h-4 w-4 fill-[#0091ea] text-[#0091ea]" />
                <span className="text-sm font-bold tracking-[0.18em] text-[#0091ea]">{step.number}</span>
                <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em] text-[#10233b]">{step.title}</h3>
                <p className="mt-4 max-w-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbff] px-5 py-20 text-[#0b1728] sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0077c2]">Details, clearly handled</p>
            <h2 className="mt-4 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl">Questions before you fly?</h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">The essentials are straightforward. Your specific booking details are confirmed in the secure booking flow.</p>
          </div>
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
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

      <section className="relative overflow-hidden bg-[#0091ea] px-5 py-20 sm:px-8 lg:py-24" data-analytics-location="airport_page_final_cta">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Plane className="mx-auto h-7 w-7 text-white/80" />
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-5xl">Plan the airport ride before the day begins.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Keep the travel day focused on the flight, the meeting, or the arrival. Secure your private airport ride with the details that matter.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#0077c2] shadow-xl transition hover:bg-slate-100"
            >
              Book airport transportation <ArrowRight className="h-4 w-4" />
            </a>
            <a href={emailUrl} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/60 px-6 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0077c2]">
              <Mail className="h-4 w-4" /> Email airport details
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-white/75">Independent private black-car service. Final availability and booking details are confirmed in the secure booking flow.</p>
        </div>
      </section>
    </main>
  )
}
