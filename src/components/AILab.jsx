import { useMemo, useState } from 'react'
import { FlaskConical, HeartPulse, AlignLeft, ScanText, Wand2, RotateCcw, Info } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

/* ---------------- lightweight on-device "models" ---------------- */

const POSITIVE = ['love', 'great', 'excellent', 'amazing', 'awesome', 'fantastic', 'happy', 'best', 'perfect', 'brilliant', 'wonderful', 'good', 'fast', 'easy', 'beautiful', 'impressive', 'delighted', 'recommend', 'smooth', 'reliable', 'helpful', 'superb', 'outstanding', 'enjoy', 'success', 'win', 'growth', 'innovative', 'powerful', 'seamless']
const NEGATIVE = ['bad', 'terrible', 'awful', 'hate', 'worst', 'slow', 'broken', 'bug', 'crash', 'fail', 'failure', 'poor', 'disappointing', 'frustrating', 'expensive', 'difficult', 'useless', 'annoying', 'error', 'problem', 'issue', 'delay', 'angry', 'sad', 'horrible', 'weak', 'confusing', 'outage', 'loss']

function analyzeSentiment(text) {
  const words = text.toLowerCase().match(/[a-z']+/g) || []
  let pos = 0
  let neg = 0
  const hits = []
  words.forEach((w) => {
    if (POSITIVE.includes(w)) { pos++; hits.push({ word: w, type: 'pos' }) }
    if (NEGATIVE.includes(w)) { neg++; hits.push({ word: w, type: 'neg' }) }
  })
  const total = pos + neg
  const score = total === 0 ? 0 : (pos - neg) / Math.max(total, 3) // -1 … 1
  const label = score > 0.18 ? 'Positive' : score < -0.18 ? 'Negative' : 'Neutral'
  const confidence = total === 0 ? 52 : Math.min(97, Math.round(58 + Math.abs(score) * 42 + total * 1.5))
  return { pos, neg, score, label, confidence, hits: [...new Map(hits.map((h) => [h.word, h])).values()] }
}

const STOPWORDS = new Set(['the', 'is', 'a', 'an', 'and', 'or', 'to', 'of', 'in', 'on', 'for', 'with', 'that', 'this', 'it', 'as', 'are', 'was', 'were', 'be', 'by', 'at', 'from', 'has', 'have', 'had', 'will', 'would', 'can', 'could', 'their', 'they', 'them', 'its', 'but', 'not', 'also', 'than', 'then', 'so', 'such', 'into', 'over', 'after', 'before', 'more', 'most', 'other', 'some', 'any', 'each', 'which', 'who', 'whom', 'these', 'those', 'being', 'been', 'about', 'between', 'through', 'during', 'out', 'up', 'down', 'if', 'when', 'where', 'how', 'all', 'we', 'our', 'you', 'your', 'i', 'he', 'she', 'his', 'her'])

function summarize(text, maxSentences = 3) {
  const sentences = text.match(/[^.!?]+[.!?]+/g)?.map((s) => s.trim()).filter(Boolean) || []
  if (sentences.length === 0) return { summary: [], keywords: [] }
  const freq = {}
  const wordsOf = (s) => s.toLowerCase().match(/[a-z0-9']+/g) || []
  sentences.forEach((s) => wordsOf(s).forEach((w) => { if (!STOPWORDS.has(w) && w.length > 2) freq[w] = (freq[w] || 0) + 1 }))
  const maxFreq = Math.max(1, ...Object.values(freq))
  const scored = sentences.map((s, idx) => {
    const ws = wordsOf(s).filter((w) => !STOPWORDS.has(w))
    const score = ws.reduce((sum, w) => sum + ((freq[w] || 0) / maxFreq), 0) / Math.max(ws.length, 1) + (idx === 0 ? 0.15 : 0)
    return { s, idx, score }
  })
  const picked = [...scored].sort((a, b) => b.score - a.score).slice(0, Math.min(maxSentences, sentences.length)).sort((a, b) => a.idx - b.idx)
  const keywords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([w]) => w)
  return { summary: picked.map((p) => p.s), keywords }
}

function extractEntities(text) {
  const emails = text.match(/[\w.+-]+@[\w-]+\.[\w.]+/g) || []
  const urls = text.match(/https?:\/\/[^\s]+|www\.[^\s]+/g) || []
  const dates = text.match(/\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}(?:,?\s+\d{4})?/g) || []
  const money = text.match(/(?:₹|\$|€|£|Rs\.?)\s?[\d,]+(?:\.\d+)?(?:\s?(?:crore|lakh|million|billion|k))?/gi) || []
  const phones = text.match(/(?:\+\d{1,3}[\s-]?)?\b\d{10}\b/g) || []
  const hashtags = text.match(/#\w+/g) || []
  const names = (text.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2}\b/g) || []).filter(
    (n) => !['The', 'This', 'That'].includes(n.split(' ')[0]) || n.split(' ').length > 1,
  )
  const uniq = (arr) => [...new Set(arr)]
  return [
    { type: 'People / Orgs', items: uniq(names), color: 'border-violet-400/30 bg-violet-400/10 text-violet-200' },
    { type: 'Dates', items: uniq(dates), color: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-200' },
    { type: 'Money', items: uniq(money), color: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' },
    { type: 'Emails', items: uniq(emails), color: 'border-amber-400/30 bg-amber-400/10 text-amber-200' },
    { type: 'Phones', items: uniq(phones), color: 'border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200' },
    { type: 'URLs', items: uniq(urls), color: 'border-sky-400/30 bg-sky-400/10 text-sky-200' },
    { type: 'Hashtags', items: uniq(hashtags), color: 'border-rose-400/30 bg-rose-400/10 text-rose-200' },
  ].filter((g) => g.items.length > 0)
}

/* ---------------- samples ---------------- */

const SAMPLES = {
  sentiment:
    'The new checkout flow is amazing — super fast, seamless and easy to use. Our customers love the smooth experience and support has been incredibly helpful. Best upgrade we have shipped this year!',
  summarizer:
    'Artificial intelligence is reshaping how companies build digital products, from design to deployment. Teams now use machine learning models to personalise user experiences, predict demand and automate repetitive operations. Companies that invest early in data infrastructure are seeing the biggest gains, because clean data makes every model more accurate. At the same time, leaders stress that human oversight remains essential for quality and trust. The most successful products combine strong engineering with responsible AI practices. Analysts expect AI adoption to accelerate further as tools become cheaper and easier to deploy. For growing businesses, the opportunity is to start small, measure impact carefully and scale what works.',
  entities:
    'Priya Sharma from NovaRetail confirmed the ₹18 crore rollout with ByteBasket Innovations on March 14, 2026. Reach the team at hello@example.com or +91 9876543210, track updates at https://bytebasket.example.com and follow #VisionCart #RetailAI for launch news.',
}

const TABS = [
  { id: 'sentiment', label: 'Sentiment Analyzer', icon: HeartPulse, blurb: 'Reads tone & emotion in any text' },
  { id: 'summarizer', label: 'Smart Summarizer', icon: AlignLeft, blurb: 'Distils long text into key points' },
  { id: 'entities', label: 'Entity Extractor', icon: ScanText, blurb: 'Finds names, dates, money & more' },
]

export default function AILab() {
  const [tab, setTab] = useState('sentiment')
  const [inputs, setInputs] = useState(SAMPLES)
  const [ran, setRan] = useState({ sentiment: true, summarizer: false, entities: false })

  const text = inputs[tab]
  const setText = (v) => setInputs((prev) => ({ ...prev, [tab]: v }))

  const sentiment = useMemo(() => analyzeSentiment(inputs.sentiment), [inputs.sentiment])
  const summary = useMemo(() => summarize(inputs.summarizer), [inputs.summarizer])
  const entities = useMemo(() => extractEntities(inputs.entities), [inputs.entities])

  const run = () => setRan((prev) => ({ ...prev, [tab]: true }))
  const loadSample = () => { setText(SAMPLES[tab]); setRan((prev) => ({ ...prev, [tab]: true })) }
  const clear = () => { setText(''); setRan((prev) => ({ ...prev, [tab]: false })) }

  const sentimentColor =
    sentiment.label === 'Positive' ? 'text-emerald-300' : sentiment.label === 'Negative' ? 'text-rose-300' : 'text-amber-300'
  const markerLeft = `${((sentiment.score + 1) / 2) * 100}%`

  return (
    <section id="lab" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/12 blur-[150px]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Live AI Lab"
          title="Don't take our word for it —"
          accent="try our AI"
          desc="Three miniature models running right here in your browser. This is a tiny taste of what we build at production scale for clients."
        />

        <Reveal delay={120}>
          <div className="glass mx-auto mt-14 max-w-5xl overflow-hidden rounded-[28px] shadow-[0_40px_100px_-40px_rgba(124,58,237,0.6)]">
            <div className="flex flex-col gap-3 border-b border-white/8 bg-black/25 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                  <FlaskConical size={20} />
                </span>
                <div>
                  <div className="font-display font-bold text-white">ByteBasket AI Playground</div>
                  <div className="text-xs text-slate-400">On-device demo models · your text never leaves this page</div>
                </div>
              </div>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> MODELS ONLINE
              </span>
            </div>

            <div className="grid sm:grid-cols-3" role="tablist" aria-label="AI Lab demos">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-3 border-b border-white/8 px-5 py-4 text-left transition sm:border-r sm:last:border-r-0 ${
                    tab === t.id ? 'bg-violet-500/12' : 'hover:bg-white/[0.04]'
                  }`}
                >
                  <t.icon size={22} className={tab === t.id ? 'text-violet-300' : 'text-slate-400'} />
                  <span>
                    <span className={`block text-sm font-bold ${tab === t.id ? 'text-white' : 'text-slate-200'}`}>{t.label}</span>
                    <span className="block text-xs text-slate-500">{t.blurb}</span>
                  </span>
                </button>
              ))}
            </div>

            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-b border-white/8 p-5 sm:p-6 lg:border-r lg:border-b-0">
                <label htmlFor="lab-input" className="mb-3 block text-sm font-semibold text-slate-200">
                  Your input text
                </label>
                <textarea
                  id="lab-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows={9}
                  maxLength={4000}
                  placeholder="Type or paste any text here…"
                  className="field w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-[15px] leading-relaxed text-slate-100 placeholder:text-slate-500"
                />
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <button onClick={run} disabled={!text.trim()} className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">
                    <Wand2 size={16} /> Analyze
                  </button>
                  <button onClick={loadSample} className="rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10">
                    Load sample
                  </button>
                  <button onClick={clear} className="inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:text-white">
                    <RotateCcw size={14} /> Clear
                  </button>
                  <span className="ml-auto font-mono text-[11px] text-slate-500">{text.length} / 4000</span>
                </div>
              </div>

              <div className="bg-black/20 p-5 sm:p-6" aria-live="polite">
                <div className="mb-3 text-sm font-semibold text-slate-200">Model output</div>

                {!text.trim() ? (
                  <div className="flex h-[calc(100%-2rem)] flex-col items-center justify-center rounded-2xl border border-dashed border-white/12 p-8 text-center">
                    <FlaskConical size={30} className="mb-3 text-slate-500" />
                    <p className="text-sm text-slate-400">Add some text on the left and hit <strong className="text-slate-200">Analyze</strong> — or load a sample to see it in action.</p>
                  </div>
                ) : tab === 'sentiment' ? (
                  <div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className={`font-display text-4xl font-bold ${sentimentColor}`}>{sentiment.label}</div>
                        <div className="mt-1 text-sm text-slate-400">{sentiment.confidence}% confidence · {sentiment.pos} positive / {sentiment.neg} negative signals</div>
                      </div>
                      <div className="font-mono text-sm text-slate-400">{sentiment.score >= 0 ? '+' : ''}{sentiment.score.toFixed(2)}</div>
                    </div>
                    <div className="relative mt-6 h-3 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400">
                      <div
                        className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#0b0f22] shadow-lg transition-all duration-700"
                        style={{ left: markerLeft }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-[11px] font-semibold tracking-wide text-slate-500">
                      <span>NEGATIVE</span><span>NEUTRAL</span><span>POSITIVE</span>
                    </div>
                    {sentiment.hits.length > 0 ? (
                      <div className="mt-6">
                        <div className="mb-2 text-xs font-bold tracking-[0.14em] text-slate-500 uppercase">Signal words detected</div>
                        <div className="flex flex-wrap gap-1.5">
                          {sentiment.hits.map((h) => (
                            <span key={h.word} className={`rounded-full border px-2.5 py-1 text-xs font-medium ${h.type === 'pos' ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' : 'border-rose-400/30 bg-rose-400/10 text-rose-200'}`}>
                              {h.word}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="mt-6 text-sm text-slate-400">No strong sentiment words found — try words like “amazing”, “love” or “terrible”.</p>
                    )}
                  </div>
                ) : tab === 'summarizer' ? (
                  <div>
                    {summary.summary.length > 0 ? (
                      <>
                        <ul className="space-y-3">
                          {summary.summary.map((s, i) => (
                            <li key={i} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-[15px] leading-relaxed text-slate-100">
                              <span className="font-display mt-0.5 shrink-0 font-bold text-cyan-300">{String(i + 1).padStart(2, '0')}</span>
                              {s}
                            </li>
                          ))}
                        </ul>
                        {summary.keywords.length > 0 && (
                          <div className="mt-5">
                            <div className="mb-2 text-xs font-bold tracking-[0.14em] text-slate-500 uppercase">Key topics</div>
                            <div className="flex flex-wrap gap-1.5">
                              {summary.keywords.map((k) => (
                                <span key={k} className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">#{k}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <p className="mt-4 font-mono text-[11px] text-slate-500">
                          Compressed {inputs.summarizer.split(/\s+/).filter(Boolean).length} words → {summary.summary.join(' ').split(/\s+/).filter(Boolean).length} words
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-slate-400">Please enter at least a few full sentences (ending with a period) so the summarizer can rank them.</p>
                    )}
                  </div>
                ) : (
                  <div>
                    {entities.length > 0 ? (
                      <div className="space-y-4">
                        {entities.map((group) => (
                          <div key={group.type}>
                            <div className="mb-2 text-xs font-bold tracking-[0.14em] text-slate-500 uppercase">{group.type}</div>
                            <div className="flex flex-wrap gap-1.5">
                              {group.items.map((item) => (
                                <span key={item} className={`rounded-full border px-3 py-1 text-[13px] font-medium ${group.color}`}>{item}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-400">No entities spotted yet. Try including a name like “Priya Sharma”, a date, an email, or an amount like ₹5,000.</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2.5 border-t border-white/8 bg-black/25 px-5 py-4 text-[13px] text-slate-400 sm:px-6">
              <Info size={16} className="mt-0.5 shrink-0 text-cyan-300" />
              <p>
                These toy models run 100% in your browser. In production we ship LLM-powered versions of exactly these
                capabilities — fine-tuned on your data, with evaluations, guardrails and APIs.{' '}
                <a href="#contact" className="font-semibold text-cyan-300 underline-offset-2 hover:underline">Build yours →</a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
