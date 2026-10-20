export default function Logo({ compact = false }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="ByteBasket Innovations — home">
      <span className="relative shrink-0">
        <svg width="42" height="42" viewBox="0 0 64 64" className="drop-shadow-[0_8px_20px_rgba(124,58,237,0.45)] transition-transform duration-300 group-hover:-rotate-6" aria-hidden="true">
          <defs>
            <linearGradient id="bb-logo-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8B5CF6" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="16" fill="url(#bb-logo-g)" />
          <circle cx="22" cy="16" r="3.2" fill="#fff" />
          <circle cx="32" cy="12" r="3.2" fill="#fff" opacity=".85" />
          <circle cx="42" cy="16" r="3.2" fill="#fff" />
          <path d="M12 26h40l-4.6 20.2a6 6 0 0 1-5.9 4.8H22.5a6 6 0 0 1-5.9-4.8L12 26Z" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinejoin="round" />
          <path d="M23 26l3 18M32 26v18M41 26l-3 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-[19px] font-bold tracking-tight text-white">
            Byte<span className="gradient-text">Basket</span>
          </span>
          <span className="mt-1 block text-[10px] font-semibold tracking-[0.32em] text-slate-400 uppercase">
            Innovations
          </span>
        </span>
      )}
    </a>
  )
}
