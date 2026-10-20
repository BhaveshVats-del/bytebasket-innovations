import { ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import Products from './components/Products.jsx'
import AILab from './components/AILab.jsx'
import Process from './components/Process.jsx'
import Work from './components/Work.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'

function CtaBanner() {
  return (
    <section className="relative px-5 pb-4 sm:px-8" aria-label="Call to action">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 via-violet-600 to-cyan-600 px-6 py-14 text-center sm:px-12">
        <div className="grid-bg absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Have an idea? Let's put it in the basket.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Book a free 30-minute discovery call. We'll map your fastest path from idea to intelligent product — with honest timelines and costs.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-violet-700 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] transition hover:gap-3 hover:bg-violet-50"
          >
            Book my free call <ArrowRight size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Products />
        <AILab />
        <Process />
        <Work />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
