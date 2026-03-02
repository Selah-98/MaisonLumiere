'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'The Story', href: '/the-story' },
  { label: 'Parfums', href: '/parfums' },
  { label: 'Jewellery', href: '/jewellery' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          {/* Logo */}
          <Link href="/" className="group" onClick={() => setMobileOpen(false)}>
            <span
              className="text-sm tracking-[0.35em] font-light text-foreground transition-colors duration-300 group-hover:text-primary"
              style={{ fontVariant: 'small-caps' }}
            >
              Maison Lumiere
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-foreground/70'
                  }`}
                  style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side: Theme toggle + mobile menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-foreground/60 transition-colors duration-300 hover:text-primary"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <Moon className="h-4 w-4" strokeWidth={1.5} />
                )}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              className="text-foreground/60 transition-colors duration-300 hover:text-primary md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden ${
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl tracking-[0.2em] uppercase transition-all duration-300 hover:text-primary ${
                pathname === link.href
                  ? 'text-primary'
                  : 'text-foreground/70'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
