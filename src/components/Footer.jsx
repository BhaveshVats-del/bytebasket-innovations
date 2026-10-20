import { useState } from 'react'
import { ArrowUp, Check, Github, Instagram, Linkedin, Send, Twitter, Youtube } from 'lucide-react'
import Logo from './Logo.jsx'

const COLUMNS = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#top' },
      { label: 'Our process', href: '#process' },
      { label: 'Case studies', href: '#work' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI / ML Solutions', href: '#services' },
      { label: 'Product Engineering', href: '#services' },
      { label: 'Web & Mobile Apps', href: '#services' },
      { label: 'Data & Analytics', href: '#services' },
      { label: 'Cloud & DevOps', href: '#services' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'BasketAI Studio', href: '#products' },
      { label: 'VisionCart', href: '#products' },
      { label: 'ShopForge', href: '#products' },
      { label: 'PulseMetrics', href: '#products' },
      { label: 'ForgeML', href: '#products' },
    ],
  },
]

const SOCIALS = [
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Twitter, label: 'Twitter / X' },
  { icon: Github, label: 'GitHub' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Youtube, label: 'YouTube' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = (e) => {
    e.preventDefault()
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setSubscribed(true)
  }

  return (
    <footer className="relative border-t border-white/6 bg-[#04060d]">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
              A product &amp; AI studio building digital products and machine-learning systems that people love — and businesses measure.
            </p>

            <form onSubmit={subscribe} className="mt-7 max-w-sm">
              <label htmlFor="newsletter" className="mb-2 block text-sm font-semibold text-white">
                The Basket Brief — monthly AI &amp; product insights
              </label>
              {subscribed ? (
                <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-200">
                  <Check size={16} /> You're in! First issue lands soon.
                </p>
              ) : (
                <div className="flex overflow-hidden rounded-full border border-white/12 bg-white/[0.04] p-1 focus-within:border-violet-400/50">
                  <input
                    id="newsletter"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent px-4 text-sm text-white placeholder:text-slate-500"
                  />
                  <button type="submit" aria-label="Subscribe" className="btn-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                    <Send size={16} />
                  </button>
                </div>
              )}
            </form>

            <div className="mt-7 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[12px] font-bold tracking-[0.2em] text-slate-500 uppercase">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[15px] text-slate-300 transition hover:text-cyan-300">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-7 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} ByteBasket Innovations. All rights reserved. Crafted with ♥ and a lot of coffee in India.</p>
          <div className="flex items-center gap-5">
            <a href="#top" className="text-sm text-slate-500 transition hover:text-slate-200">Privacy Policy</a>
            <a href="#top" className="text-sm text-slate-500 transition hover:text-slate-200">Terms</a>
            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-violet-400/40 hover:text-white"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
