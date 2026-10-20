import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { CASE_STUDIES, TECH_STACK } from '../data.js'

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 lg:py-32">
      <div className="pointer-events-none absolute top-64 -right-40 h-[400px] w-[400px] rounded-full bg-fuchsia-600/8 blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Real products."
          accent="Measurable outcomes."
          desc="We don't do vanity demos. Every engagement is tied to a business metric — here's what happens when great engineering meets applied AI."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.client} delay={i * 120}>
              <article className="glass card-hover group flex h-full flex-col overflow-hidden rounded-3xl p-7">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${cs.gradient} opacity-80`} aria-hidden="true" />
                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-display text-lg font-bold text-white">{cs.client}</div>
                      <div className="mt-0.5 text-[12px] font-bold tracking-[0.14em] text-cyan-300 uppercase">{cs.industry}</div>
                    </div>
                    <ArrowUpRight size={20} className="shrink-0 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                  </div>
                  <h3 className="font-display mt-5 text-[22px] leading-snug font-bold text-white">{cs.title}</h3>
                  <p className="mt-2.5 flex-1 leading-relaxed text-slate-400">{cs.desc}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/8 pt-5">
                    {cs.results.map((r) => (
                      <div key={r.label}>
                        <div className="font-display text-xl font-bold text-white">{r.value}</div>
                        <div className="mt-0.5 text-[11px] leading-snug font-medium text-slate-500">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="glass mt-14 rounded-3xl p-7 sm:p-9">
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
              <h3 className="font-display text-2xl font-bold text-white">
                The stack behind <span className="gradient-text">the magic</span>
              </h3>
              <p className="text-sm text-slate-400">Boring where it should be. Cutting-edge where it counts.</p>
            </div>
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {TECH_STACK.map((group) => (
                <div key={group.group}>
                  <div className="mb-3 text-[12px] font-bold tracking-[0.18em] text-violet-300 uppercase">{group.group}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-black/25 px-3 py-1.5 text-[13px] font-medium text-slate-200 transition hover:border-cyan-400/35 hover:text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
