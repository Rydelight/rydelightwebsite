'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, RefreshCw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Rydelight page error', error)
  }, [error])

  return (
    <main id="main-content" className="flex min-h-screen items-center bg-slate-950 px-5 py-20 text-white sm:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Rydelight</p>
        <h1 className="mt-8 max-w-xl text-3xl font-bold leading-tight sm:text-5xl">This page needs another try.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Something interrupted this page before it finished loading. You can try again or return to the Rydelight homepage.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0091ea] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0077c2]"
          >
            Try again
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
          </button>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 font-semibold text-white transition-colors hover:border-cyan-200 hover:text-cyan-100">
            Return home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  )
}
