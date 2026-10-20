import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data.js'

export default function Products() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)

  return (
    <section id="products" className="relative scroll-mt-20 border-y border-white/6 bg-[#070b1a]/60 py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-20 right-0 h-[380px] w-[520px] rounded-full bg-cyan-500/8 blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our products"
          title="Platforms we've built,"
          accent="ready to deploy"
          desc="Battle-tested in production for our clients — now available as platforms you can launch on in weeks, fully customised to your brand."
        />

        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5" delay={100}>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                category === cat
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_10px_28px_-8px_rgba(124,58,237,0.7)]'
                  : 'border border-white/12 bg-white/4 text-slate-300 hover:border-white/25 hover:bg-white/8 hover:text-white'
              }`}
              aria-pressed={category === cat}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 110}>
              <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className={`relative bg-gradient-to-br ${product.gradient} p-6`}>
                  {product.badge && (
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-[11px] font-bold tracking-wide text-white backdrop-blur">
                      <Sparkles size={12} /> {product.badge}
                    </span>
                  )}
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
                    <product.icon size={25} />
                  </span>
                  <div className="mt-8 flex h-14 items-end gap-1.5" aria-hidden="true">
                    {product.bars.map((h, bi) => (
                      <div
                        key={bi}
                        className="flex-1 rounded-t bg-white/35 transition-all duration-500 group-hover:bg-white/55"
                        style={{ height: `${h}%`, transitionDelay: `${bi * 40}ms` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] text-cyan-300 uppercase">
                    {product.category}
                  </div>
                  <h3 className="font-display mt-2 text-[22px] font-bold text-white">{product.name}</h3>
                  <p className="text-sm font-medium text-slate-300">{product.tagline}</p>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-400">{product.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-sm font-bold text-emerald-300">{product.metric}</span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:gap-2.5 hover:text-cyan-300"
                      aria-label={`Enquire about ${product.name}`}
                    >
                      Enquire <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
