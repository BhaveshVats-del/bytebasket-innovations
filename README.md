# ByteBasket Innovations — Website

Official website for **ByteBasket Innovations**, a company that creates **digital products** and **AI/ML products**.

> *We build digital products. We power them with intelligence.*

## ✨ What's inside

- **Hero** — animated neural-network canvas (reacts to your mouse), live-updating AI console mock with a typewriter prompt, and animated company stats
- **Services** — AI/ML Solutions, Product Engineering, Web & Mobile Apps, Data & Analytics, Computer Vision & NLP, Cloud/DevOps & UX
- **Products** — filterable showcase of flagship platforms: BasketAI Studio, VisionCart, ShopForge, PulseMetrics, ForgeML and LaunchKit
- **Live AI Lab** — three working in-browser demos (no server needed):
  - *Sentiment Analyzer* — tone detection with confidence score and signal words
  - *Smart Summarizer* — extractive summarization with key-topic extraction
  - *Entity Extractor* — finds people/orgs, dates, money, emails, phones, URLs and hashtags
- **Process** — 5-step delivery timeline (Discover → Design → Build → Train & Deploy → Scale)
- **Case studies & tech stack**, **testimonials carousel**, **pricing / engagement models**, **FAQ accordion**
- **Contact** — validated enquiry form with service picker and budget selector, plus newsletter signup in the footer

## 🛠 Tech stack

- [React](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) icons
- Space Grotesk + Inter typography, dark glassmorphism design system

## 🚀 Running locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## 📁 Project structure

```
src/
  App.jsx                 # page assembly + CTA banner
  data.js                 # all site content (services, products, FAQs…)
  index.css               # Tailwind theme, keyframes, design helpers
  components/
    Navbar.jsx  Hero.jsx  Marquee.jsx  Services.jsx  Products.jsx
    AILab.jsx   Process.jsx  Work.jsx  Testimonials.jsx
    Pricing.jsx  Faq.jsx  Contact.jsx  Footer.jsx
    Logo.jsx  SectionHeading.jsx  Reveal.jsx (scroll-reveal wrapper)
public/
  favicon.svg
```

To customise the content (company info, phone, pricing, clients), edit `src/data.js` and the contact details in `src/components/Contact.jsx`.
