import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import { PROCESS } from '../data.js'

export default function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 border-y border-white/6 bg-[#070b1a]/60 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title="From idea to intelligent product,"
          accent="in five moves"
          desc="A process refined over 120+ launches. Transparent, demo-driven and built to kill risk early — you always know what's done, what's next and what it costs."
        />

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent lg:top-[27px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r" aria-hidden="true" />

          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {PROCESS.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 120} className="relative pl-20 lg:pt-20 lg:pl-0">
                <span className="font-display absolute top-0 left-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-[#0b1024] text-lg font-bold text-white shadow-[0_0_0_6px_rgba(5,7,15,1),0_14px_30px_-10px_rgba(124,58,237,0.6)]">
                  <span className="gradient-text">{phase.step}</span>
                </span>
                <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wide text-cyan-300">
                  {phase.duration}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold text-white">{phase.title}</h3>
                <p className="mt-2 leading-relaxed text-slate-400">{phase.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
