import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { VIEWPORT, fadeUp, stagger } from '../lib/motion'

type IconProps = { className?: string }

function ShieldIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2.5 4.5 5.7v5.6c0 4.3 3.2 8.3 7.5 10.2 4.3-1.9 7.5-5.9 7.5-10.2V5.7L12 2.5Z" />
      <path d="m9.2 11.8 2 2 3.6-3.6" />
    </svg>
  )
}

function LeafIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20.5A7.5 7.5 0 0 1 9.8 5.7C15.5 4.5 17 4 19 1.5c1 2.1 2 4.4 2 8.3 0 5.9-4.5 10.7-10 10.7Z" />
      <path d="M2.5 21.5c0-3.2 2-5.7 5.3-6.4" />
    </svg>
  )
}

function HouseCheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 9.6 12 3l8.5 6.6V20a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 20V9.6Z" />
      <path d="m9.2 13.4 2 2 3.6-3.6" />
    </svg>
  )
}

type Service = {
  title: string
  description: string
  tags: string[]
  icon: ReactNode
  /** 아이콘 배경 — 테마 토큰에 없는 색은 arbitrary value로 지정한다. */
  iconWrapClass: string
}

const SERVICES: Service[] = [
  {
    title: '시설경비 및 보안경비',
    description:
      '입출 통제, 순찰, 차량 관리, 택배 보관 등 단지 보안의 모든 영역을 책임집니다.',
    tags: ['시설경비', '순찰', '차량관리'],
    icon: <ShieldIcon className="h-6 w-6 text-primary" />,
    iconWrapClass: 'bg-primary/8',
  },
  {
    title: '위생 · 환경관리',
    description:
      '청소, 소독, 조경, 분리수거장 관리 등 쾌적한 주거 환경을 만듭니다.',
    tags: ['청소', '소독', '조경관리'],
    icon: <LeafIcon className="h-6 w-6 text-[#1D9E75]" />,
    iconWrapClass: 'bg-[#1D9E75]/8',
  },
  {
    title: '주택관리 · 지원',
    description:
      '시설 점검, 하자 보수 지원, 계약 및 보험 관리를 전문적으로 수행합니다.',
    tags: ['시설점검', '하자보수', '계약관리'],
    icon: <HouseCheckIcon className="h-6 w-6 text-gold" />,
    iconWrapClass: 'bg-gold/12',
  },
]

export default function Services() {
  const reduced = useReducedMotion()
  const header = fadeUp(reduced)
  const list = stagger(reduced)
  const card = fadeUp(reduced, { y: 30 })

  return (
    <section id="services" className="bg-bg-base py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center"
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="text-xs font-medium tracking-widest text-gold">
            OUR SERVICE
          </p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            단지 운영에 필요한 세 가지를 한 곳에서
          </h2>
          <p className="mt-4 text-sm text-text-light">
            경비·위생·주택관리를 통합 운영하여 효율적인 단지 관리를 실현합니다.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-3"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={card}
              /* border-t-2는 투명 상태로도 자리를 차지해 hover 시 레이아웃이 흔들리지 않는다. */
              className="group rounded-xl border border-t-2 border-line border-t-transparent bg-white p-6 shadow-sm transition-[background-color,border-color,box-shadow] duration-300 hover:border-t-gold hover:bg-[#FFFDF9] hover:shadow-lg md:p-8"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-110 ${service.iconWrapClass}`}
              >
                {service.icon}
              </div>

              <h3 className="mt-5 font-semibold text-primary">
                {service.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-text-body">
                {service.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-primary/5 px-3 py-1 text-xs text-text-light"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
