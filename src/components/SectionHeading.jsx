import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, accent, desc, align = 'center' }) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignClass}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[12px] font-bold tracking-[0.18em] text-cyan-300 uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
        {eyebrow}
      </span>
      <h2 className="font-display mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {desc && <p className="mt-4 text-lg leading-relaxed text-slate-400">{desc}</p>}
    </Reveal>
  )
}
