import { complexes } from '../data/complexes'
import Reveal from './Reveal'

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-gold">
            PORTFOLIO
          </p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            주요 관리 단지
          </h2>
          <p className="mt-4 text-sm text-text-light">
            수도권 전역에서 아파트의 안전을 책임지고 있습니다.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {complexes.map((complex) => (
            <li
              key={complex.id}
              className="flex flex-col rounded-lg transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={complex.image}
                alt={complex.name}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-t-lg object-cover"
              />
              {/* flex-1 + min-h로 단지명 길이와 무관하게 카드 하단을 맞춘다. */}
              <div className="flex min-h-[3rem] flex-1 items-center rounded-b-lg border border-t-0 border-line bg-white p-3 md:p-4">
                <p className="text-sm font-medium text-primary">
                  {complex.name}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-text-light">
          이 외에도 수도권 전역에서 다수의 단지를 관리하고 있습니다.
        </p>
      </Reveal>
    </section>
  )
}
