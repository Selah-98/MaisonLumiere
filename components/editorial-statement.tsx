export function EditorialStatement() {
  return (
    <section className="linen-texture grain-texture relative bg-background">
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
        <div className="reveal">
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary/40" />
            <span
              className="text-[10px] uppercase tracking-[0.3em] text-primary"
              style={{ fontFamily: 'var(--font-inter), sans-serif' }}
            >
              Our Philosophy
            </span>
            <div className="h-px w-12 bg-primary/40" />
          </div>

          <h2 className="text-3xl font-light leading-relaxed tracking-wide text-foreground md:text-4xl lg:text-5xl">
            Crafted in light.
            <br />
            Defined by elegance.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed tracking-wide text-foreground/60">
            A celebration of radiance and feminine strength. Each creation is an
            ode to the luminous spirit that resides within.
          </p>

          <div className="mx-auto mt-10 h-px w-16 bg-primary/30" />
        </div>
      </div>
    </section>
  )
}
