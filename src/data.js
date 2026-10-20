import {
  BrainCircuit,
  Code2,
  Smartphone,
  BarChart3,
  CloudCog,
  PenTool,
  Eye,
  MessagesSquare,
  LineChart,
  Boxes,
  ScanFace,
  Workflow,
} from 'lucide-react'

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'AI Lab', href: '#lab' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const CLIENTS = [
  'NovaRetail',
  'FinEdge',
  'MediCore Health',
  'LogiTrack',
  'EduSpark',
  'UrbanNest',
  'AgroSense',
  'PayNest',
  'CloudKart',
  'TripNest',
]

export const SERVICES = [
  {
    icon: BrainCircuit,
    title: 'AI / ML Solutions',
    desc: 'Custom LLM apps, RAG pipelines, recommendation engines, forecasting and intelligent automation — trained on your data, deployed on your terms.',
    tags: ['LLMs & RAG', 'Predictive ML', 'MLOps'],
    gradient: 'from-violet-500/25 to-violet-500/0',
    iconColor: 'text-violet-300 bg-violet-500/15 border-violet-400/20',
  },
  {
    icon: Code2,
    title: 'Product Engineering',
    desc: 'End-to-end digital product development — from MVP in weeks to enterprise platforms used by millions. Clean architecture, obsessive quality.',
    tags: ['SaaS Platforms', 'APIs', 'Microservices'],
    gradient: 'from-cyan-500/25 to-cyan-500/0',
    iconColor: 'text-cyan-300 bg-cyan-500/15 border-cyan-400/20',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    desc: 'Blazing-fast web apps and native-feel mobile experiences with React, React Native and Flutter — one codebase, every screen.',
    tags: ['React / Next.js', 'React Native', 'PWA'],
    gradient: 'from-fuchsia-500/25 to-fuchsia-500/0',
    iconColor: 'text-fuchsia-300 bg-fuchsia-500/15 border-fuchsia-400/20',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    desc: 'Pipelines, warehouses and real-time dashboards that turn raw data into decisions. If it can be measured, we make it matter.',
    tags: ['Data Pipelines', 'BI Dashboards', 'Streaming'],
    gradient: 'from-amber-500/25 to-amber-500/0',
    iconColor: 'text-amber-300 bg-amber-500/15 border-amber-400/20',
  },
  {
    icon: Eye,
    title: 'Computer Vision & NLP',
    desc: 'Document intelligence, visual inspection, OCR, chat and voice interfaces — machines that see, read and understand your business.',
    tags: ['OCR & Vision', 'Chatbots', 'Speech AI'],
    gradient: 'from-emerald-500/25 to-emerald-500/0',
    iconColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/20',
  },
  {
    icon: CloudCog,
    title: 'Cloud, DevOps & UX',
    desc: 'Cloud-native infrastructure, CI/CD and design systems. Beautiful on the surface, bulletproof underneath — 99.9% uptime as a habit.',
    tags: ['AWS / GCP / Azure', 'Kubernetes', 'UI/UX Design'],
    gradient: 'from-sky-500/25 to-sky-500/0',
    iconColor: 'text-sky-300 bg-sky-500/15 border-sky-400/20',
  },
]

export const PRODUCT_CATEGORIES = ['All', 'AI / ML', 'Digital Products', 'Data']

export const PRODUCTS = [
  {
    icon: MessagesSquare,
    name: 'BasketAI Studio',
    category: 'AI / ML',
    tagline: 'Conversational AI platform',
    desc: 'Build, train and deploy customer-facing AI assistants grounded in your own knowledge base — with guardrails, analytics and human handoff built in.',
    metric: '68% tickets auto-resolved',
    gradient: 'from-violet-600 via-violet-500 to-fuchsia-500',
    bars: [42, 58, 50, 72, 66, 84, 92],
    badge: 'Flagship',
  },
  {
    icon: ScanFace,
    name: 'VisionCart',
    category: 'AI / ML',
    tagline: 'Computer vision for retail',
    desc: 'Shelf monitoring, planogram compliance and checkout-free shopping powered by real-time video intelligence at the edge.',
    metric: '99.2% detection accuracy',
    gradient: 'from-cyan-600 via-cyan-500 to-teal-400',
    bars: [60, 48, 70, 64, 80, 76, 90],
  },
  {
    icon: Boxes,
    name: 'ShopForge',
    category: 'Digital Products',
    tagline: 'Headless commerce engine',
    desc: 'A composable e-commerce platform with storefronts, OMS, payments and AI merchandising — launch a full D2C brand in days, not months.',
    metric: '3.1× faster time-to-market',
    gradient: 'from-fuchsia-600 via-pink-500 to-rose-400',
    bars: [38, 52, 61, 57, 74, 83, 88],
  },
  {
    icon: LineChart,
    name: 'PulseMetrics',
    category: 'Data',
    tagline: 'Product analytics suite',
    desc: 'Event tracking, funnels, cohorts and AI-generated insight summaries. Know exactly why users convert, churn or come back.',
    metric: '12B+ events processed / yr',
    gradient: 'from-amber-500 via-orange-500 to-yellow-400',
    bars: [52, 44, 68, 59, 79, 71, 95],
  },
  {
    icon: Workflow,
    name: 'ForgeML',
    category: 'AI / ML',
    tagline: 'MLOps without the pain',
    desc: 'Train, version, deploy and monitor models from one console — drift detection, A/B rollouts and cost controls included.',
    metric: 'Deploy models in < 10 min',
    gradient: 'from-indigo-600 via-blue-500 to-cyan-400',
    bars: [46, 62, 55, 73, 69, 85, 80],
  },
  {
    icon: PenTool,
    name: 'LaunchKit',
    category: 'Digital Products',
    tagline: 'Startup-in-a-box platform',
    desc: 'Auth, billing, admin, CMS and landing pages pre-wired into one launch-ready stack. Focus on your idea — we handle the plumbing.',
    metric: 'MVP live in 2 weeks',
    gradient: 'from-emerald-600 via-emerald-500 to-lime-400',
    bars: [56, 49, 64, 72, 67, 81, 93],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'We dig into your users, market and data. Workshops, audits and a ruthless scope-cut leave us with a roadmap worth building.',
    duration: 'Week 1–2',
  },
  {
    step: '02',
    title: 'Design',
    desc: 'Wireframes to pixel-perfect UI, validated with real users. For AI products, we prototype prompts and models in parallel.',
    duration: 'Week 2–4',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Two-week sprints, demo every Friday. You see working software from week one — never a big-bang reveal at the end.',
    duration: 'Week 4–10',
  },
  {
    step: '04',
    title: 'Train & Deploy',
    desc: 'Models are fine-tuned, evaluated and shipped behind guardrails. CI/CD, observability and security reviews come standard.',
    duration: 'Week 8–12',
  },
  {
    step: '05',
    title: 'Scale & Improve',
    desc: 'We monitor, A/B test and retrain. Your product gets measurably smarter and faster every single month.',
    duration: 'Ongoing',
  },
]

export const CASE_STUDIES = [
  {
    client: 'NovaRetail',
    industry: 'Retail · Computer Vision',
    title: 'Checkout-free stores powered by edge vision',
    desc: 'Deployed VisionCart across 140 stores to track shelves and enable grab-and-go billing with real-time video intelligence.',
    results: [
      { value: '−42%', label: 'stock-outs' },
      { value: '2.4×', label: 'faster checkout' },
      { value: '₹18 Cr', label: 'annual savings' },
    ],
    gradient: 'from-cyan-500/20 via-transparent to-transparent',
  },
  {
    client: 'FinEdge',
    industry: 'Fintech · AI Support',
    title: 'An AI advisor that customers actually trust',
    desc: 'Built a RAG-based assistant on BasketAI Studio, grounded in 40,000+ policy documents with full audit trails for compliance.',
    results: [
      { value: '68%', label: 'auto-resolved queries' },
      { value: '4.8/5', label: 'CSAT score' },
      { value: '−55%', label: 'support cost' },
    ],
    gradient: 'from-violet-500/20 via-transparent to-transparent',
  },
  {
    client: 'MediCore Health',
    industry: 'Healthcare · Data Platform',
    title: 'Predicting patient risk before it becomes critical',
    desc: 'A HIPAA-aligned data platform with ML risk scoring across 26 hospitals, surfacing early warnings to care teams in real time.',
    results: [
      { value: '31%', label: 'fewer readmissions' },
      { value: '6 hrs', label: 'earlier intervention' },
      { value: '26', label: 'hospitals live' },
    ],
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
  },
]

export const TECH_STACK = [
  { group: 'AI / ML', items: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'OpenAI & Claude APIs', 'scikit-learn', 'Vector DBs'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native', 'Flutter'] },
  { group: 'Backend', items: ['Node.js', 'Python · FastAPI', 'Go', 'GraphQL', 'PostgreSQL', 'Redis', 'Kafka'] },
  { group: 'Cloud & Data', items: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Snowflake', 'dbt', 'Airflow'] },
]

export const TESTIMONIALS = [
  {
    quote:
      'ByteBasket rebuilt our entire commerce stack and layered AI recommendations on top. Revenue per session jumped 34% in the first quarter — and the site has never been faster.',
    name: 'Priya Sharma',
    role: 'VP Digital, NovaRetail',
    initials: 'PS',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    quote:
      'Most agencies talk AI. ByteBasket ships it — with evaluations, guardrails and dashboards our compliance team signed off on in one review. Rare and refreshing.',
    name: 'Arjun Mehta',
    role: 'CTO, FinEdge',
    initials: 'AR',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    quote:
      'From a napkin sketch to a funded product in five months. Their sprint demos every Friday meant zero surprises — just steady, visible progress week after week.',
    name: 'Sarah',
    role: 'Founder & CEO, TripNest',
    initials: 'SL',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    quote:
      'Their ML team caught data issues our internal team had missed for a year. The risk-scoring platform they built now supports care decisions across all 26 of our hospitals.',
    name: 'Dr. Kavita Rao',
    role: 'Chief Medical Informatics Officer, MediCore',
    initials: 'KR',
    gradient: 'from-emerald-500 to-teal-500',
  },
]

export const PRICING = [
  {
    name: 'Discovery Sprint',
    price: '₹2.5L',
    unit: 'fixed · 2 weeks',
    desc: 'De-risk your idea before you commit big. Walk away with a prototype, architecture and a costed roadmap.',
    features: [
      'Product & AI feasibility audit',
      'Clickable UX prototype',
      'Model / data proof-of-concept',
      'Technical architecture blueprint',
      'Fixed-price build estimate',
    ],
    highlighted: false,
    cta: 'Start with a sprint',
  },
  {
    name: 'Product Squad',
    price: '₹6L',
    unit: 'per month · dedicated team',
    desc: 'A cross-functional team — PM, designers, engineers, ML — shipping your product sprint after sprint.',
    features: [
      'Dedicated 4–6 member squad',
      'Weekly demos & transparent backlog',
      'AI/ML + full-stack engineering',
      'Design system & QA included',
      'Scale up or down monthly',
    ],
    highlighted: true,
    cta: 'Hire a squad',
  },
  {
    name: 'Enterprise AI',
    price: 'Custom',
    unit: 'annual partnership',
    desc: 'For organisations embedding AI across products and operations — with security, compliance and SLAs.',
    features: [
      'Private / VPC model deployment',
      'SOC 2-aligned processes',
      'Dedicated AI research pod',
      '24×7 support & 99.9% SLA',
      'Team training & handover',
    ],
    highlighted: false,
    cta: 'Talk to us',
  },
]

export const FAQS = [
  {
    q: 'How long does it take to build an MVP?',
    a: 'A focused MVP typically ships in 6–10 weeks: 2 weeks of discovery and design, then 4–8 weeks of build. AI-powered MVPs using our BasketAI or LaunchKit platforms can be live in as little as 2–4 weeks because the plumbing is already built.',
  },
  {
    q: 'Do you work with our existing data and systems?',
    a: 'Yes — most of our AI work starts with your data. We integrate with your databases, CRMs, ERPs and document stores, and we can deploy models inside your own cloud or VPC so sensitive data never leaves your boundary.',
  },
  {
    q: 'Who owns the IP and the code?',
    a: 'You do — 100%. All code, models, designs and documentation we produce for you are your property from day one, delivered into repositories you control. No lock-in, no licensing traps.',
  },
  {
    q: 'Can you take over or extend an existing product?',
    a: 'Absolutely. We start with a structured audit of your codebase, infrastructure and data, then propose a pragmatic path — refactor, rebuild or extend. Roughly half our engagements begin this way.',
  },
  {
    q: 'What does support look like after launch?',
    a: 'Every launch includes monitoring, alerting and a hyper-care period. After that, choose from flexible support plans covering model retraining, feature sprints and SLAs up to 24×7 with 99.9% uptime guarantees.',
  },
  {
    q: 'How do you price AI projects?',
    a: 'Discovery sprints are fixed-price. Builds are either fixed-scope or a monthly dedicated squad — whichever gives you more control. Model API and cloud costs are passed through at cost with full transparency, and we actively optimise them (caching, routing, distillation).',
  },
]

export const STATS = [
  { value: 120, suffix: '+', label: 'Products shipped' },
  { value: 48, suffix: '+', label: 'AI models in production' },
  { value: 15, suffix: 'M+', label: 'End users reached' },
  { value: 98, suffix: '%', label: 'Client retention' },
]
