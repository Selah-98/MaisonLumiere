import Image from 'next/image'
import Link from 'next/link'

const jewels = [
  { src: '/images/jewel-1.jpg', alt: 'Gold necklace', name: 'Collier Celeste' },
  { src: '/images/jewel-2.jpg', alt: 'Gold earrings', name: 'Boucles Aurore' },
  { src: '/images/jewel-3.jpg', alt: 'Gold bracelet', name: 'Bracelet Soleil' },
]

export function JewelleryPreview() {
  return (
    <section className="linen-texture grain-texture relative bg-background">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
        <div className="reveal">
          {/* Header */}
          <div className="mb-16 text-center">
            <span
              className="text-[10px] uppercase tracking-[0.3em] text-primary"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              The Atelier
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground md:text-4xl lg:text-5xl">
              Jewellery
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg font-light leading-relaxed tracking-wide text-foreground/60">
              Sculpted in gold, inspired by light. Each piece is a quiet declaration
              of grace and power.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {jewels.map((jewel) => (
              <Link
                key={jewel.name}
                href="/jewellery"
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={jewel.src}
                  alt={jewel.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500">
                  <p className="text-sm font-light tracking-[0.2em] uppercase text-[#F4EFE6] opacity-0 transition-opacity duration-500 group-hover:opacity-100 drop-shadow-lg">
                    {jewel.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/jewellery"
              className="inline-block border-b border-primary/40 pb-1 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:border-primary hover:tracking-[0.3em]"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
