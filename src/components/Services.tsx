import { motion, useReducedMotion } from 'framer-motion'
import { VIEWPORT, fadeUp, stagger } from '../lib/motion'

type Service = {
  number: string
  label: string
  title: string
  description: string
  tags: string[]
}

const SERVICES: Service[] = [
  {
    number: '01',
    label: 'SECURITY',
    title: '시설경비 및 보안경비',
    description:
      '입출 통제, 순찰, 차량 관리, 택배 보관 등 단지 보안의 모든 영역을 책임집니다.',
    tags: ['시설경비', '순찰', '차량관리'],
  },
  {
    number: '02',
    label: 'ENVIRONMENT',
    title: '위생 · 환경관리',
    description:
      '청소, 분리수거장 관리 등 쾌적한 주거 환경을 만듭니다.',
    tags: ['청소'],
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
            단지 운영에 필요한 것을 한 곳에서
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-text-light">
            경비·위생관리를 통합 운영하여 효율적인 단지 관리를 실현합니다.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
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
              <p className="text-5xl leading-none font-bold text-primary/10 transition-colors duration-300 group-hover:text-gold/30">
                {service.number}
              </p>
              <p className="mt-3 text-xs font-medium tracking-widest text-gold">
                {service.label}
              </p>

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
