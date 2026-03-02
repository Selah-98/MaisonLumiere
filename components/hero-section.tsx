'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Maison Lumiere editorial campaign"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Sunburst Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <svg
            width="80"
            height="44"
            viewBox="0 0 80 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
            aria-hidden="true"
          >
            {/* Half sunburst */}
            {Array.from({ length: 11 }).map((_, i) => {
              const angle = (i * 180) / 10 - 90
              const rad = (angle * Math.PI) / 180
              const x2 = 40 + Math.cos(rad) * 38
              const y2 = 40 + Math.sin(rad) * 38
              return (
                <line
                  key={i}
                  x1="40"
                  y1="40"
                  x2={x2}
                  y2={y2}
                  stroke="#C6A75E"
                  strokeWidth="0.8"
                  opacity="0.8"
                />
              )
            })}
            <circle cx="40" cy="40" r="4" fill="#C6A75E" opacity="0.9" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1
          className={`text-3xl tracking-[0.4em] font-light text-[#F4EFE6] transition-all duration-1000 delay-300 md:text-4xl lg:text-5xl ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontVariant: 'small-caps' }}
        >
          Maison Lumiere
        </h1>

        {/* Tagline */}
        <p
          className={`mt-6 text-lg font-light italic tracking-wider text-[#F4EFE6]/80 md:text-xl transition-all duration-1000 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Where Light Meets Luxury.
        </p>

        {/* CTA */}
        <Link
          href="/parfums"
          className={`mt-10 inline-block border border-[#C6A75E]/60 bg-transparent px-8 py-3 text-xs uppercase tracking-[0.25em] text-[#F4EFE6] transition-all duration-500 delay-700 hover:bg-[#C6A75E]/20 hover:border-[#C6A75E] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Discover the Collection
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          loaded ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-px animate-pulse bg-[#C6A75E]/60" />
        </div>
      </div>
    </section>
  )
}
