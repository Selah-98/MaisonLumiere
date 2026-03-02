import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'The Story — Maison Lumiere',
  description: 'Discover the story of Maison Lumiere and founder Julia Ilunga — a visionary legacy of light, elegance, and feminine strength.',
}

export default function TheStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/story-hero.jpg"
          alt="The Maison Lumiere atelier"
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
            Our Heritage
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-[0.2em] text-[#F4EFE6] md:text-4xl lg:text-5xl">
            The Story of Maison Lumiere
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="linen-texture grain-texture relative bg-background">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 lg:py-32">
          <div className="reveal space-y-8 text-center">
            <p className="text-lg font-light leading-relaxed tracking-wide text-foreground/70">
              Born from a vision of luminous beauty and quiet power, Maison
              Lumiere was founded with a singular purpose: to create objects of
              desire that celebrate the radiant essence of femininity.
            </p>
            <p className="text-lg font-light leading-relaxed tracking-wide text-foreground/70">
              Every fragrance, every jewel, is a meditation on light — how it
              transforms, how it reveals, how it elevates the everyday into the
              extraordinary. Our atelier blends the heritage of European
              craftsmanship with a modern sensibility, creating pieces that feel
              both timeless and deeply personal.
            </p>
            <p className="text-lg font-light leading-relaxed tracking-wide text-foreground/70">
              From the first sketch to the final polish, each creation passes
              through the hands of master artisans who share our devotion to
              perfection. We source only the finest materials — rare essences
              from Grasse, ethically mined gemstones, and gold that carries the
              warmth of the sun itself.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="linen-texture grain-texture relative bg-card">
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <div className="reveal">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Portrait */}
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden">
                <Image
                  src="/images/founder.jpg"
                  alt="Julia Ilunga, Founder and CEO of Maison Lumiere"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bio */}
              <div className="text-center lg:text-left">
                <span
                  className="text-[10px] uppercase tracking-[0.3em] text-primary"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  The Visionary
                </span>

                <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground md:text-4xl">
                  Julia Ilunga
                </h2>

                <p
                  className="mt-2 text-xs uppercase tracking-[0.2em] text-foreground/50"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  Founder & CEO
                </p>

                <div className="mx-auto mt-6 h-px w-12 bg-primary/30 lg:mx-0" />

                <p className="mt-6 text-lg font-light leading-relaxed tracking-wide text-foreground/70">
                  With an eye refined by years immersed in the worlds of haute
                  couture and fine jewellery, Julia Ilunga envisioned a maison
                  where light itself became the ultimate luxury.
                </p>

                <p className="mt-4 text-lg font-light leading-relaxed tracking-wide text-foreground/70">
                  Her philosophy is rooted in quiet confidence — the belief that
                  true elegance never shouts, it illuminates. Under her
                  leadership, Maison Lumiere has become a sanctuary for those
                  who seek beauty with depth, luxury with soul.
                </p>

                <p className="mt-4 text-base font-light italic tracking-wide text-primary/80">
                  {'"I create for the woman who carries her own light."'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="linen-texture grain-texture relative bg-background">
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 lg:py-32">
          <div className="reveal">
            <div className="mb-16 text-center">
              <span
                className="text-[10px] uppercase tracking-[0.3em] text-primary"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Our Pillars
              </span>
              <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground md:text-4xl">
                Guided by Light
              </h2>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              {[
                {
                  title: 'Heritage',
                  description:
                    'Rooted in the grand traditions of European craftsmanship, we honour the art of slow, intentional creation.',
                },
                {
                  title: 'Radiance',
                  description:
                    'Light is our muse. Every texture, every facet, every note is designed to capture and reflect its warmth.',
                },
                {
                  title: 'Femininity',
                  description:
                    'We celebrate strength in softness — the quiet power that defines the modern woman.',
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto mb-6 h-px w-8 bg-primary/40" />
                  <h3 className="text-xl font-light tracking-wide text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-foreground/60">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
