import { useState } from 'react'
import { ChevronDown, MessageCircleQuestion } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { FAQS } from '../data.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative scroll-mt-20 border-y border-white/6 bg-[#070b1a]/60 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions?"
              accent="Answered."
              desc="The things founders, CTOs and product leaders ask us most often. Something else on your mind? We reply within one business day."
            />
            <Reveal delay={150}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:border-violet-400/35 hover:bg-violet-500/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                  <MessageCircleQuestion size={21} />
                </span>
                <span>
                  <span className="block font-bold text-white">Still curious?</span>
                  <span className="block text-sm text-slate-400">Book a free 30-min discovery call →</span>
                </span>
              </a>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <Reveal key={faq.q} delay={i * 70}>
                  <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${isOpen ? 'border-violet-400/35 bg-violet-500/[0.07]' : 'border-white/8 bg-white/[0.025]'}`}>
                    <button
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-[17px] font-semibold text-white">{faq.q}</span>
                      <ChevronDown size={20} className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-violet-300' : ''}`} />
                    </button>
                    <div className={`grid transition-all duration-400 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-relaxed text-slate-400">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
