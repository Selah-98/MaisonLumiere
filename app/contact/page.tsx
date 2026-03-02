import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact — Maison Lumiere',
  description: 'Get in touch with Maison Lumiere. Enquiries, appointments, and private viewings.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-background pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span
            className="text-[10px] uppercase tracking-[0.3em] text-primary"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            Get in Touch
          </span>
          <h1 className="mt-4 text-3xl font-light tracking-[0.15em] text-foreground md:text-4xl lg:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg font-light leading-relaxed tracking-wide text-foreground/60">
            We welcome your enquiries. Whether for a private appointment,
            bespoke creation, or simply to learn more about our collections.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="linen-texture grain-texture relative bg-background">
        <div className="relative z-10 mx-auto max-w-xl px-6 pb-24">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="linen-texture grain-texture relative bg-card">
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20">
          <div className="reveal grid gap-12 text-center md:grid-cols-3">
            <div>
              <h3
                className="text-[10px] uppercase tracking-[0.25em] text-primary"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Email
              </h3>
              <p className="mt-3 text-base font-light tracking-wide text-foreground/70">
                contact@maisonlumiere.com
              </p>
            </div>
            <div>
              <h3
                className="text-[10px] uppercase tracking-[0.25em] text-primary"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Instagram
              </h3>
              <p className="mt-3 text-base font-light tracking-wide text-foreground/70">
                @maisonlumiere
              </p>
            </div>
            <div>
              <h3
                className="text-[10px] uppercase tracking-[0.25em] text-primary"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Atelier
              </h3>
              <p className="mt-3 text-base font-light tracking-wide text-foreground/70">
                Paris, France
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
