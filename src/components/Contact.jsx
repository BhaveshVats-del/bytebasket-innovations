import { useState } from 'react'
import { ArrowRight, CheckCircle2, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

const SERVICES_OPTIONS = ['AI / ML Solution', 'Web Platform', 'Mobile App', 'Data & Analytics', 'Our Products (BasketAI, VisionCart…)', 'Something else']
const BUDGETS = ['Under ₹10L', '₹10L – ₹50L', '₹50L – ₹2Cr', '₹2Cr+', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: SERVICES_OPTIONS[0], budget: BUDGETS[1], message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (form.message.trim().length < 10) next.message = 'Tell us a little more (min. 10 characters)'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const reset = () => {
    setForm({ name: '', email: '', company: '', service: SERVICES_OPTIONS[0], budget: BUDGETS[1], message: '' })
    setSubmitted(false)
  }

  const inputClass = (hasError) =>
    `field w-full rounded-xl border ${hasError ? 'border-rose-400/60' : 'border-white/10'} bg-black/30 px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition`

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[440px] w-[860px] -translate-x-1/2 rounded-full bg-violet-600/14 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build what's"
          accent="next, together"
          desc="Tell us where you want to go. We'll reply within one business day with honest next steps — no pressure, no jargon."
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-7">
                <h3 className="font-display text-xl font-bold text-white">Talk to a human</h3>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/12 text-violet-300"><Mail size={20} /></span>
                    <span>
                      <span className="block text-sm font-medium text-slate-400">Email us</span>
                      <a href="mailto:hello@example.com" className="font-semibold text-white hover:text-cyan-300">hello@example.com</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/12 text-cyan-300"><Phone size={20} /></span>
                    <span>
                      <span className="block text-sm font-medium text-slate-400">Call / WhatsApp</span>
                      <a href="tel:+919876543210" className="font-semibold text-white hover:text-cyan-300">+91 98765 43210</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-500/12 text-fuchsia-300"><MapPin size={20} /></span>
                    <span>
                      <span className="block text-sm font-medium text-slate-400">Studio</span>
                      <span className="font-semibold text-white">Ludhiana · Punjab, India</span>
                      <span className="block text-sm text-slate-400">Remote-first, worldwide</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/12 text-emerald-300"><Clock3 size={20} /></span>
                    <span>
                      <span className="block text-sm font-medium text-slate-400">Response time</span>
                      <span className="font-semibold text-white">Within 1 business day</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-violet-500 to-cyan-600 p-7">
                <h3 className="font-display text-xl font-bold text-white">Free AI Opportunity Audit</h3>
                <p className="mt-2 leading-relaxed text-white/85">
                  We'll review your product &amp; processes and send back 3 concrete AI opportunities with expected ROI — free, this month only.
                </p>
                <a href="#contact" onClick={() => setForm((p) => ({ ...p, service: 'AI / ML Solution', message: p.message || "Hi! I'd like the free AI Opportunity Audit for our product." }))} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-violet-700 transition hover:gap-3 hover:bg-violet-50">
                  Claim my audit <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass h-full rounded-3xl p-7 sm:p-9">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-14 text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <CheckCircle2 size={42} />
                  </span>
                  <h3 className="font-display mt-6 text-3xl font-bold text-white">Thanks, {form.name.split(' ')[0]}! 🎉</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-slate-400">
                    Your message is in our basket. We'll get back to <span className="font-semibold text-slate-100">{form.email}</span> within
                    one business day to schedule your free discovery call.
                  </p>
                  <button onClick={reset} className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-200">Your name *</label>
                      <input id="name" type="text" value={form.name} onChange={update('name')} placeholder="Priya Sharma" className={inputClass(errors.name)} />
                      {errors.name && <p className="mt-1.5 text-[13px] text-rose-300">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-200">Work email *</label>
                      <input id="email" type="email" value={form.email} onChange={update('email')} placeholder="priya@example.com" className={inputClass(errors.email)} />
                      {errors.email && <p className="mt-1.5 text-[13px] text-rose-300">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-200">Company</label>
                      <input id="company" type="text" value={form.company} onChange={update('company')} placeholder="NovaRetail" className={inputClass(false)} />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-semibold text-slate-200">I'm interested in</label>
                      <select id="service" value={form.service} onChange={update('service')} className={`${inputClass(false)} [&>option]:bg-[#0d1226]`}>
                        {SERVICES_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">Indicative budget</span>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm((p) => ({ ...p, budget: b }))}
                          aria-pressed={form.budget === b}
                          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                            form.budget === b
                              ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white'
                              : 'border border-white/12 bg-white/4 text-slate-300 hover:border-white/25 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-200">Tell us about your project *</label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={update('message')}
                      rows={5}
                      placeholder="We're a D2C brand and want an AI assistant that can answer order questions from our help centre…"
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    {errors.message && <p className="mt-1.5 text-[13px] text-rose-300">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold text-white sm:w-auto">
                    Send message <Send size={17} />
                  </button>
                  <p className="mt-4 text-[13px] text-slate-500">
                    By sending, you agree to be contacted about your enquiry. We never share your details. NDA available on request.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
