import { getYearsSinceFounding } from '../data/company'
import Reveal from './Reveal'

/** 자본금 구체적 금액은 표시하지 않는다. */
const HISTORY = [
  { year: '2024', description: '자본금 증자, 관리 단지 확대' },
  { year: '2021', description: '경기도 의정부 센타프라자 본사 이전' },
  { year: '2019', description: '사업 확장, 자본금 증자' },
  { year: '2013', description: '사업 확장, 자본금 증자' },
  { year: '2007', description: '(주)동남시큐리티 설립, 경비업 허가' },
]

export default function About() {
  return (
    <section id="about" className="bg-bg-base py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-gold">ABOUT</p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            {getYearsSinceFounding()}년 동안 쌓아온 기록
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
          {/* 연혁 타임라인 */}
          <ol className="relative border-l-2 border-line pl-6">
            {HISTORY.map((item, i) => (
              <li key={item.year} className="relative pb-8 last:pb-0">
                {/* 도트를 세로선 위에 겹쳐 놓는다. */}
                <span
                  aria-hidden="true"
                  className={`absolute top-1 -left-[1.9375rem] h-3 w-3 rounded-full ${
                    i === 0 ? 'bg-gold' : 'bg-line'
                  }`}
                />
                <p className="text-sm font-medium text-gold">{item.year}</p>
                <p className="mt-1 text-sm text-text-body">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          {/* CEO 메시지 */}
          <figure className="rounded-xl border border-line bg-white p-6 md:p-8">
            <span
              aria-hidden="true"
              className="block font-serif text-4xl leading-none text-gold"
            >
              &ldquo;
            </span>

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
          </figure>
        </div>
      </Reveal>
    </section>
  )
}
