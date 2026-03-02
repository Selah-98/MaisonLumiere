'use client'

import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 text-center animate-fade-in">
        <div className="mx-auto mb-6 h-px w-12 bg-primary/40" />
        <h3 className="text-2xl font-light tracking-wide text-foreground">
          Thank You
        </h3>
        <p className="mt-4 text-base font-light tracking-wide text-foreground/60">
          Your message has been received. We will respond within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border-b border-border bg-transparent pb-3 text-base font-light tracking-wide text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border-b border-border bg-transparent pb-3 text-base font-light tracking-wide text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full border-b border-border bg-transparent pb-3 text-base font-light tracking-wide text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors duration-300"
          placeholder="Enquiry subject"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[10px] uppercase tracking-[0.25em] text-foreground/50 mb-3"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border-b border-border bg-transparent pb-3 text-base font-light leading-relaxed tracking-wide text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Your message"
        />
      </div>

      {/* Submit */}
      <div className="pt-4 text-center">
        <button
          type="submit"
          className="border border-primary/60 bg-transparent px-10 py-3.5 text-xs uppercase tracking-[0.25em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
