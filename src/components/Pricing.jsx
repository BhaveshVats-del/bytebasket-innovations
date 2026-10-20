import { Check, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { PRICING } from '../data.js'

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 py-24 lg:py-32">
      <div className="pointer-events-none absolute top-40 left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engagement models"
          title="Pick how we"
          accent="work together"
          desc="Transparent models for every stage — from a two-week de-risking sprint to a long-term AI partnership. No hourly billing surprises, ever."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.highlighted
                    ? 'border border-violet-400/40 bg-gradient-to-b from-violet-500/16 via-[#0d1226] to-[#0d1226] shadow-[0_30px_70px_-25px_rgba(124,58,237,0.65)] lg:-translate-y-3'
                    : 'glass card-hover'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-4 py-1.5 text-[12px] font-bold tracking-wide whitespace-nowrap text-white shadow-lg">
                    <Sparkles size={13} /> MOST POPULAR
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{plan.desc}</p>
                <div className="mt-6 flex flex-wrap items-baseline gap-x-2.5">
                  <span className="font-display text-[42px] leading-none font-bold text-white">{plan.price}</span>
                  <span className="text-sm font-medium text-slate-400">{plan.unit}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3 border-t border-white/8 pt-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-slate-200">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 font-semibold text-white transition ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'border border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-slate-400">
            Need something different? We also do fixed-scope builds and staff augmentation.{' '}
            <a href="#contact" className="font-semibold text-cyan-300 underline-offset-4 hover:underline">
              Let's talk →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
