import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles, TrendingUp, Bot, ShoppingBasket, Zap, ShieldCheck } from 'lucide-react'
import { STATS } from '../data.js'

function useCountUp(target, duration = 1600) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setValue(Math.round(target * eased))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, value]
}

function Stat({ value, suffix, label }) {
  const [ref, display] = useCountUp(value)
  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-display text-3xl font-bold text-white sm:text-4xl">
        {display}
        <span className="gradient-text">{suffix}</span>
      </div>
      <div className="mt-1 text-[13px] font-medium tracking-wide text-slate-400">{label}</div>
    </div>
  )
}

function NeuralCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let nodes = []
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      const count = Math.min(85, Math.floor((rect.width * rect.height) / 16000))
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.8,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / 130) * 0.22})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
        const mDist = Math.hypot(nodes[i].x - mouse.x, nodes[i].y - mouse.y)
        if (mDist < 160) {
          ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - mDist / 160) * 0.4})`
          ctx.beginPath()
          ctx.moveTo(nodes[i].x, nodes[i].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = 'rgba(196, 181, 253, 0.8)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', onMove)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" aria-hidden="true" />
}

const PROMPTS = [
  'Forecast next quarter demand for SKU-4821…',
  'Summarise 3,000 support tickets into top 5 themes…',
  'Detect shelf gaps across 140 store cameras…',
  'Draft a refund reply in our brand voice…',
]

function useTypewriter() {
  const [text, setText] = useState('')
  useEffect(() => {
    let promptIdx = 0
    let charIdx = 0
    let deleting = false
    let timer
    const tick = () => {
      const current = PROMPTS[promptIdx]
      if (!deleting) {
        charIdx++
        setText(current.slice(0, charIdx))
        if (charIdx === current.length) {
          deleting = true
          timer = setTimeout(tick, 1600)
          return
        }
        timer = setTimeout(tick, 34)
      } else {
        charIdx--
        setText(current.slice(0, charIdx))
        if (charIdx === 0) {
          deleting = false
          promptIdx = (promptIdx + 1) % PROMPTS.length
          timer = setTimeout(tick, 350)
          return
        }
        timer = setTimeout(tick, 16)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [])
  return text
}

function DashboardMock() {
  const typed = useTypewriter()
  const [live, setLive] = useState(1284)

  useEffect(() => {
    const id = setInterval(() => setLive((v) => v + Math.floor(Math.random() * 9) - 2), 2200)
    return () => clearInterval(id)
  }, [])

  const bars = [38, 52, 44, 66, 58, 74, 69, 86, 78, 92, 84, 97]

  return (
    <div className="relative">
      <div className="glass relative overflow-hidden rounded-3xl p-5 shadow-[0_40px_90px_-30px_rgba(124,58,237,0.55)] sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[11px] tracking-wider text-slate-400">basketai · console</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> LIVE
          </span>
        </div>

        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3.5">
          <Bot size={20} className="shrink-0 text-violet-300" />
          <p className="min-h-[20px] truncate font-mono text-[13px] text-slate-200">
            {typed}
            <span className="animate-blink text-cyan-300">▌</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
            <div className="text-[11px] font-medium tracking-wide text-slate-400">Queries today</div>
            <div className="mt-1 font-display text-xl font-bold text-white tabular-nums">{live.toLocaleString()}</div>
            <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
              <TrendingUp size={12} /> +18.2%
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
            <div className="text-[11px] font-medium tracking-wide text-slate-400">Auto-resolved</div>
            <div className="mt-1 font-display text-xl font-bold text-white">68%</div>
            <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-300">
              <Zap size={12} /> 0.4s avg
            </div>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
            <div className="text-[11px] font-medium tracking-wide text-slate-400">Model accuracy</div>
            <div className="mt-1 font-display text-xl font-bold text-white">97.4%</div>
            <div className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300">
              <ShieldCheck size={12} /> Guardrails on
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-medium text-slate-300">Inference volume · last 12 hrs</span>
            <span className="font-mono text-[11px] text-cyan-300">▲ trending up</span>
          </div>
          <div className="flex h-24 items-end gap-[6px]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="animate-bar-grow flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-violet-600/70 to-cyan-400/80"
                style={{ height: `${h}%`, animationDelay: `${i * 80}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="glass animate-float absolute -left-4 -bottom-6 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-xl sm:flex lg:-left-10">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
          <ShoppingBasket size={20} />
        </span>
        <span>
          <span className="block text-sm font-bold text-white">Order #84,201 predicted</span>
          <span className="block text-xs text-slate-400">Restock alert sent · 98% confidence</span>
        </span>
      </div>

      <div className="glass animate-float-slow absolute -top-5 -right-3 hidden items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl md:flex lg:-right-6">
        <span className="animate-pulse-ring flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/20 text-violet-300">
          <Sparkles size={18} />
        </span>
        <span>
          <span className="block text-sm font-bold text-white">Model v4.2 deployed</span>
          <span className="block text-xs text-slate-400">Drift: none · Cost −23%</span>
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <NeuralCanvas />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute top-64 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-500/12 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <a
              href="#lab"
              className="group inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/10 py-1.5 pr-4 pl-1.5 text-sm font-medium text-violet-200 transition hover:border-violet-400/45 hover:bg-violet-400/15"
            >
              <span className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-2.5 py-0.5 text-[11px] font-bold tracking-wide text-white">
                NEW
              </span>
              Try our live AI Lab — no signup needed
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </a>

            <h1 className="font-display mt-7 text-[42px] leading-[1.05] font-bold tracking-tight text-white sm:text-6xl lg:text-[68px]">
              We build digital products.
              <span className="gradient-text block">We power them with intelligence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300/90">
              ByteBasket Innovations is a product &amp; AI studio crafting web platforms, mobile apps and
              machine-learning systems for ambitious brands — everything you need, in one basket.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-white">
                Start a Project <ArrowRight size={18} />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Explore Products
              </a>
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-300" /> 100% IP ownership
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap size={15} className="text-amber-300" /> MVP in 6–10 weeks
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={15} className="text-violet-300" /> Free discovery call
              </span>
            </p>
          </div>

          <DashboardMock />
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-white/8 pt-10 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
