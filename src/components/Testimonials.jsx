import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { TESTIMONIALS } from '../data.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(id)
  }, [paused])

  const go = (dir) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[index]

  return (
    <section className="relative border-y border-white/6 bg-[#070b1a]/60 py-24 lg:py-32" aria-label="Testimonials">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Client love" title="Teams that trusted the" accent="basket" />

        <Reveal delay={120}>
          <div
            className="relative mx-auto mt-14 max-w-4xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="glass overflow-hidden rounded-[28px] px-6 py-10 text-center sm:px-12 sm:py-12">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                <Quote size={22} />
              </span>
              <div className="mt-5 flex justify-center gap-1" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={17} className="fill-amber-300 text-amber-300" />
                ))}
              </div>

              <div key={index} className="reveal is-visible">
                <blockquote className="font-display mx-auto mt-6 max-w-2xl text-[22px] leading-snug font-medium text-white sm:text-[26px]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-3.5">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} font-display text-sm font-bold text-white`}>
                    {t.initials}
                  </span>
                  <span className="text-left">
                    <span className="block font-bold text-white">{t.name}</span>
                    <span className="block text-sm text-slate-400">{t.role}</span>
                  </span>
                </figcaption>
              </div>
            </div>

            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="absolute top-1/2 -left-3 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[#0b1024] text-white shadow-xl transition hover:border-violet-400/40 hover:bg-violet-500/20 md:flex lg:-left-6"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="absolute top-1/2 -right-3 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-[#0b1024] text-white shadow-xl transition hover:border-violet-400/40 hover:bg-violet-500/20 md:flex lg:-right-6"
            >
              <ChevronRight size={20} />
            </button>

            <div className="mt-7 flex items-center justify-center gap-2">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial from ${item.name}`}
                  className={`h-2 rounded-full transition-all duration-400 ${
                    i === index ? 'w-9 bg-gradient-to-r from-violet-400 to-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
