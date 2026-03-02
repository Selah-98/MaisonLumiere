import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Jewellery — Maison Lumiere',
  description: 'Discover the Maison Lumiere jewellery collection. Gold, light, and sculpted elegance for the modern woman.',
}

const jewellery = [
  {
    name: 'Collier Celeste',
    description: 'An ethereal gold chain adorned with a luminous pendant — celestial in spirit, timeless in form.',
    price: '€1,450',
    image: '/images/jewel-1.jpg',
  },
  {
    name: 'Boucles Aurore',
    description: 'Cascading gold drops that catch the light with every movement. Inspired by the first rays of dawn.',
    price: '€890',
    image: '/images/jewel-2.jpg',
  },
  {
    name: 'Bracelet Soleil',
    description: 'A sculptural bangle that wraps the wrist in warm gold. Bold geometry softened by organic curves.',
    price: '€1,120',
    image: '/images/jewel-3.jpg',
  },
  {
    name: 'Bague Lumiere',
    description: 'A statement ring crowned with a rare stone, set in hand-polished gold. Quiet brilliance, extraordinary presence.',
    price: '€2,200',
    image: '/images/jewel-4.jpg',
  },
]

export default function JewelleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/jewellery-hero.jpg"
          alt="Maison Lumiere jewellery collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-[#C6A75E]"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            The Atelier
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-[0.2em] text-[#F4EFE6] md:text-4xl lg:text-5xl">
            Jewellery
          </h1>
          <p className="mt-4 max-w-md text-base font-light tracking-wide text-[#F4EFE6]/70">
            Sculpted in gold, inspired by light. Each piece is a quiet
            declaration of grace.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="linen-texture grain-texture relative bg-background">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {jewellery.map((item) => (
              <div key={item.name} className="reveal group">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-6 text-center">
                  <h2 className="text-xl font-light tracking-wide text-foreground transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </h2>

                  <p className="mx-auto mt-3 max-w-sm text-sm font-light leading-relaxed tracking-wide text-foreground/60">
                    {item.description}
                  </p>

                  <p className="mt-4 text-lg font-light tracking-wider text-primary">
                    {item.price}
                  </p>

                  <button className="mt-6 border border-primary/40 bg-transparent px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
