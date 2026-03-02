import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/">
            <span
              className="text-sm tracking-[0.35em] font-light text-foreground/60 transition-colors duration-300 hover:text-primary"
              style={{ fontVariant: 'small-caps' }}
            >
              Maison Lumiere
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8">
            {['Home', 'The Story', 'Parfums', 'Jewellery', 'Contact'].map(
              (item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-xs tracking-[0.15em] uppercase text-foreground/50 transition-colors duration-300 hover:text-primary"
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Divider */}
          <div className="h-px w-16 bg-primary/30" />

          {/* Copyright */}
          <p
            className="text-xs text-foreground/40 tracking-wider"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {'© 2026 Maison Lumiere. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
