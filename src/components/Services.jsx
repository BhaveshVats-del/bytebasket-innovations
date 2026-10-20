import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { SERVICES } from '../data.js'

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 lg:py-32">
      <div className="pointer-events-none absolute top-40 -left-40 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your product needs,"
          accent="in one basket"
          desc="Six deeply-integrated capabilities under one roof — so your designers, engineers and data scientists are never lost in translation."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 110}>
              <article className="glass card-hover group relative h-full overflow-hidden rounded-3xl p-7">
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${service.gradient}`} aria-hidden="true" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className={`inline-flex h-13 w-13 items-center justify-center rounded-2xl border p-3 ${service.iconColor}`}>
                      <service.icon size={26} />
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    />
                  </div>
                  <h3 className="font-display mt-5 text-[22px] font-bold text-white">{service.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-slate-400">{service.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[12px] font-medium text-slate-300">
                        {tag}
                      </span>
                    ))}
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
