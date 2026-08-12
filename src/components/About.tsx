import { motion, useReducedMotion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { getYearsSinceFounding } from '../data/company'
import { VIEWPORT, easeOut, fadeUp, fadeX, stagger } from '../lib/motion'

/** 자본금 구체적 금액은 표시하지 않는다. */
const HISTORY = [
  { year: '2024', description: '자본금 증자, 관리 단지 확대' },
  { year: '2021', description: '경기도 의정부 센타프라자 본사 이전' },
  { year: '2019', description: '사업 확장, 자본금 증자' },
  { year: '2013', description: '사업 확장, 자본금 증자' },
  { year: '2007', description: '(주)동남시큐리티 설립, 경비업 허가' },
]

export default function About() {
  const reduced = useReducedMotion()
  const header = fadeUp(reduced)
  const timeline = stagger(reduced)
  const entry = fadeUp(reduced, { y: 12, duration: 0.45 })
  const card = fadeX(reduced, { x: 20, duration: 0.7 })

  const dot: Variants = {
    hidden: reduced ? {} : { scale: 0 },
    visible: {
      scale: 1,
      transition: reduced
        ? { duration: 0 }
        : { type: 'spring', stiffness: 500, damping: 18 },
    },
  }

  const quote: Variants = {
    hidden: reduced ? {} : { opacity: 0, rotate: -18, scale: 0.8 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: easeOut(reduced, 0.6, 0.2),
    },
  }

  return (
    <section id="about" className="bg-bg-base py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center"
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="text-xs font-medium tracking-widest text-gold">ABOUT</p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            {getYearsSinceFounding()}년 동안 쌓아온 기록
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* 연혁 타임라인 */}
          <motion.ol
            className="relative border-l-2 border-line pl-6"
            variants={timeline}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {HISTORY.map((item, i) => (
              <motion.li
                key={item.year}
                variants={entry}
                className="relative pb-8 last:pb-0"
              >
                {/* 도트를 세로선 위에 겹쳐 놓는다. */}
                <motion.span
                  aria-hidden="true"
                  variants={dot}
                  className={`absolute top-1 -left-[1.9375rem] h-3 w-3 rounded-full ${
                    i === 0 ? 'bg-gold' : 'bg-line'
                  }`}
                />
                <p className="text-sm font-medium text-gold">{item.year}</p>
                <p className="mt-1 text-sm text-text-body">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          {/* CEO 메시지 */}
          <motion.figure
            className="rounded-xl border border-line bg-white p-6 md:p-8"
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.span
              aria-hidden="true"
              variants={quote}
              className="block origin-bottom-left font-serif text-4xl leading-none text-gold"
            >
              &ldquo;
            </motion.span>

            <blockquote className="mt-2 text-lg font-medium text-primary italic">
              백 마디의 말보다 먼저 실천에 옮기는 회사이고자 합니다.
            </blockquote>

            <p className="mt-4 text-sm leading-relaxed text-text-body">
              주요 임원들의 솔선수범으로 현장 교육 및 본사의 정기적 교육을 통해
              전 직원의 자질 향상과 근무능력을 향상시킵니다. 현장의 사소한
              문제점 발견 시 담당 관리감독자의 1차 방문, 임원의 2차 방문 상담을
              통하여 원인을 분석한 후 민원 해소에 적극 노력하고 있습니다.
            </p>

            <figcaption className="mt-6 text-right text-sm font-medium text-primary">
              대표이사 김성남
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
