import { motion, useReducedMotion } from 'framer-motion'
import { complexes } from '../data/complexes'
import { VIEWPORT, fadeUp, stagger } from '../lib/motion'

export default function Portfolio() {
  const reduced = useReducedMotion()
  const header = fadeUp(reduced)
  const grid = stagger(reduced, { each: 0.1 })
  const card = fadeUp(reduced, { y: 20, duration: 0.5 })

  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="text-center"
          variants={header}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <p className="text-xs font-medium tracking-widest text-gold">
            PORTFOLIO
          </p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            주요 관리 단지
          </h2>
          <p className="mt-4 text-sm text-text-light">
            수도권 전역에서 아파트의 안전을 책임지고 있습니다.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {complexes.map((complex) => (
            <motion.li
              key={complex.id}
              variants={card}
              className="group flex flex-col rounded-lg transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* overflow-hidden이 있어야 hover 시 확대된 이미지가 카드 밖으로 나가지 않는다. */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={complex.image}
                  alt={complex.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* flex-1 + min-h로 단지명 길이와 무관하게 카드 하단을 맞춘다. */}
              <div className="flex min-h-[3rem] flex-1 items-center rounded-b-lg border-x border-b-2 border-line bg-white p-3 transition-colors duration-200 group-hover:border-b-gold md:p-4">
                <p className="text-sm font-medium text-primary">
                  {complex.name}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-8 text-center text-sm text-text-light">
          이 외에도 수도권 전역에서 다수의 단지를 관리하고 있습니다.
        </p>
      </div>
    </section>
  )
}
