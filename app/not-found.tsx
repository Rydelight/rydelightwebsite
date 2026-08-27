import Link from 'next/link'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-screen items-center bg-slate-950 px-5 py-20 text-white sm:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Rydelight</p>
        <p className="mt-8 text-7xl font-bold tracking-tight text-[#0091ea] sm:text-8xl">404</p>
        <h1 className="mt-5 max-w-xl text-3xl font-bold leading-tight sm:text-5xl">We could not find that page.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          The address may have changed, or the page may no longer be available. You can return to the main site or explore Rydelight&apos;s airport transportation service.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0091ea] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0077c2]">
            Return home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link href="/dfw-airport-transportation/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-200 hover:text-cyan-100">
            Explore airport service
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-9 flex items-center gap-2 text-sm text-slate-300">
          <Mail className="h-4 w-4 text-[#0091ea]" aria-hidden="true" />
          Need help with a specific request?{' '}
          <a className="font-semibold text-cyan-200 underline-offset-4 hover:underline" href="mailto:booking@rydelight.com">
            Email booking@rydelight.com
          </a>
        </p>
      </div>
    </main>
  )
}
