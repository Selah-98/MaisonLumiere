import Image from 'next/image'
import Link from 'next/link'

export function ParfumsPreview() {
  return (
    <section className="linen-texture grain-texture relative bg-card">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="reveal">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/parfums-hero.jpg"
                alt="Maison Lumiere parfums collection"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="text-center lg:text-left">
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-primary"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                The Collection
              </span>

              <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground md:text-4xl lg:text-5xl">
                Parfums
              </h2>

              <p className="mt-6 text-lg font-light leading-relaxed tracking-wide text-foreground/60">
                Invisible yet unforgettable. Our fragrances are woven from rare
                essences and quiet luxury — each bottle a vessel of memory and
                desire.
              </p>

              <Link
                href="/parfums"
                className="mt-8 inline-block border-b border-primary/40 pb-1 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:border-primary hover:tracking-[0.3em]"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Explore Parfums
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
