import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Parfums — Maison Lumiere',
  description: 'Explore the Maison Lumiere fragrance collection. Rare essences, quiet luxury, and unforgettable elegance.',
}

const parfums = [
  {
    name: 'Lumiere Dorée',
    description:
      'A radiant opening of bergamot and neroli that settles into warm amber and sandalwood. An invitation to bask in golden light.',
    price: '€285',
    image: '/images/parfum-1.jpg',
  },
  {
    name: 'Nuit de Soie',
    description:
      'Velvet rose and jasmine, wrapped in the whisper of musk and vanilla. For the hours when elegance turns to enchantment.',
    price: '€310',
    image: '/images/parfum-2.jpg',
  },
  {
    name: 'Éclat Blanc',
    description:
      'A crystalline accord of white tea, iris, and cedar. Clean, luminous, and impossibly refined.',
    price: '€265',
    image: '/images/parfum-3.jpg',
  },
]

export default function ParfumsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/parfums-hero.jpg"
          alt="Maison Lumiere parfums collection"
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
            The Collection
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-[0.2em] text-[#F4EFE6] md:text-4xl lg:text-5xl">
            Parfums
          </h1>
          <p className="mt-4 max-w-md text-base font-light tracking-wide text-[#F4EFE6]/70">
            Invisible yet unforgettable. Each scent is a story told in the
            language of light.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="linen-texture grain-texture relative bg-background">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="space-y-28">
            {parfums.map((parfum, index) => (
              <div key={parfum.name} className="reveal">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    index % 2 !== 0 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden lg:[direction:ltr]">
                    <Image
                      src={parfum.image}
                      alt={parfum.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left lg:[direction:ltr]">
                    <span
                      className="text-[10px] uppercase tracking-[0.3em] text-primary/60"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      {'Eau de Parfum'}
                    </span>

                    <h2 className="mt-3 text-3xl font-light tracking-wide text-foreground md:text-4xl">
                      {parfum.name}
                    </h2>

                    <div className="mx-auto mt-4 h-px w-12 bg-primary/30 lg:mx-0" />

                    <p className="mt-6 text-lg font-light leading-relaxed tracking-wide text-foreground/60">
                      {parfum.description}
                    </p>

                    <p className="mt-6 text-xl font-light tracking-wider text-primary">
                      {parfum.price}
                    </p>

                    <button className="mt-8 border border-primary/40 bg-transparent px-8 py-3 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
