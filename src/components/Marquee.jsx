import { CLIENTS } from '../data.js'

export default function Marquee() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <section className="relative border-y border-white/6 bg-white/[0.015] py-10" aria-label="Trusted by">
      <p className="mb-7 text-center text-[12px] font-bold tracking-[0.28em] text-slate-500 uppercase">
        Trusted by product teams at
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display flex items-center gap-3 text-xl font-semibold whitespace-nowrap text-slate-500 transition hover:text-slate-200"
            >
              <span className="h-2 w-2 rotate-45 bg-gradient-to-br from-violet-400/70 to-cyan-400/70" aria-hidden="true" />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
