import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { getYearsSinceFounding } from '../data/company'
import { easeOut } from '../lib/motion'

const DURATION = 1500

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** active가 true가 되면 0에서 target까지 easeOut(cubic)으로 한 번 올라간다. */
function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (prefersReducedMotion()) {
      setValue(target)
      return
    }

    let raf = 0
    let startedAt: number | null = null

    const tick = (now: number) => {
      if (startedAt === null) startedAt = now
      const t = Math.min((now - startedAt) / DURATION, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active])

  return value
}

function Stat({
  value,
  unit,
  label,
  active,
}: {
  value: number
  unit: string
  label: string
  active: boolean
}) {
  const current = useCountUp(value, active)

  return (
    <div className="px-2 text-center md:px-4">
      {/* 모바일 3컬럼(≈114px)에 "48,000+"가 들어가도록 한 단계 줄인다. */}
      <dd className="text-2xl font-bold text-white tabular-nums md:text-3xl">
        {current.toLocaleString('en-US')}
        <span className="ml-0.5 text-base text-gold md:text-lg">{unit}</span>
      </dd>
      <dt className="mt-2 text-xs text-white/45 md:text-sm">{label}</dt>
    </div>
  )
}

export default function Hero() {
  const statsRef = useRef<HTMLDListElement>(null)
  const [started, setStarted] = useState(false)
  const reduced = useReducedMotion()

  const stats = [
    { value: 48000, unit: '+', label: '관리 세대 수' },
    { value: getYearsSinceFounding(), unit: '년', label: '아파트 관리 경력' },
    { value: 2, unit: '단계', label: '민원 대응 체계' },
  ]

  // 카운터 영역이 뷰포트에 들어오면 한 번만 애니메이션을 시작한다.
  useEffect(() => {
    const el = statsRef.current
    if (!el || started) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  /** 히어로 텍스트는 페이지 로드 시 1회만, 순서대로 등장한다. */
  const rise = (delay: number) => ({
    initial: reduced ? undefined : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: easeOut(reduced, 0.8, delay),
  })

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-[#0F1A2E] text-white"
    >
      {/* 배경 레이어: 그라디언트 메시 → 격자 → 하단 빛 번짐 */}
      <div aria-hidden="true" className="hero-mesh absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 pt-20 pb-14 text-center md:px-6 md:pt-25 md:pb-20">
        <motion.span
          {...rise(0.3)}
          className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs text-gold"
        >
          SINCE 2007 · 아파트 경비 전문
        </motion.span>

        {/* 375px에서 text-3xl(30px)이면 12자 제목이 넘쳐 어색하게 줄바꿈된다. */}
        <h1 className="mt-7 text-2xl leading-tight font-bold sm:text-3xl md:text-5xl">
          <motion.span {...rise(0.5)} className="block">
            내 집이라는 마음가짐으로
          </motion.span>
          <motion.span {...rise(0.7)} className="block text-gold">
            아파트를 지킵니다
          </motion.span>
        </h1>

        <motion.p
          {...rise(0.9)}
          className="mt-5 text-sm text-white/60 md:text-base"
        >
          아파트 경비 전문 기업 (주)동남시큐리티
        </motion.p>

        <motion.div {...rise(1.1)} className="mt-9">
          <a
            href="#portfolio"
            className="inline-block rounded-md border border-white/30 px-7 py-3 text-sm text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            관리 단지 보기
          </a>
        </motion.div>
      </div>

      {/* 숫자 카운터 — 글래스모피즘 바 */}
      <div className="border-t border-white/10 bg-white/5 backdrop-blur-md">
        <dl
          ref={statsRef}
          className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-white/10 px-4 py-8 md:px-6 md:py-10"
        >
          {stats.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              unit={stat.unit}
              label={stat.label}
              active={started}
            />
          ))}
        </dl>
      </div>
    </section>
  )
}
