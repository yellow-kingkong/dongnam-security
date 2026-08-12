import { useState } from 'react'

const NAV_LINKS = [
  { href: '#services', label: '서비스' },
  { href: '#process', label: '민원 대응' },
  { href: '#patrol', label: '스마트순찰' },
  { href: '#portfolio', label: '관리 현황' },
  { href: '#about', label: '회사 소개' },
]

const TEL = '031-877-9112'

function PhoneIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* 로고 */}
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src="/images/dongnam-logo.jpg"
            alt="동남시큐리티 로고"
            className="h-8 w-auto"
          />
          <span className="flex flex-col leading-none">
            <span className="font-semibold text-primary">동남시큐리티</span>
            <span className="mt-0.5 text-xs text-text-light">SINCE 2007</span>
          </span>
        </a>

        {/* 데스크톱 앵커 링크 */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-body transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* 전화 + 모바일 햄버거 */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${TEL}`}
            className="flex items-center gap-2 font-semibold text-primary"
            aria-label={`전화 ${TEL}`}
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden md:inline">{TEL}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 ml-1 p-2 text-primary md:hidden"
            aria-label="메뉴 열기"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 세로 메뉴 */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-white md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-text-body transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
