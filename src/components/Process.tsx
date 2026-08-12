import { Fragment } from 'react'
import Reveal from './Reveal'

const STEPS = [
  {
    n: 1,
    title: '민원 발생 · 접수',
    description: '전화, 앱, 현장 접수를 통해 즉시 기록합니다.',
  },
  {
    n: 2,
    title: '관리감독자 1차 방문',
    description: '담당 관리감독자가 현장을 직접 확인합니다.',
  },
  {
    n: 3,
    title: '임원 2차 방문 상담',
    description: '원인 분석 후 임원이 직접 해결책을 제시합니다.',
  },
]

/** 모바일에서는 rotate-90으로 아래를 향하게 쓴다. */
function ArrowIcon({ className }: { className?: string }) {
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
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  )
}

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24">
      <Reveal className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-gold">
            PROCESS
          </p>
          <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
            민원은 미루지 않고, 사람이 직접 찾아갑니다
          </h2>
          <p className="mt-4 text-sm text-text-light">
            현장 발생 즉시 2단계 방문 상담으로 원인을 분석하고 해결합니다.
          </p>
        </div>

        <ol className="mt-12 flex flex-col gap-5 md:flex-row md:items-start md:gap-4">
          {STEPS.map((step, i) => (
            <Fragment key={step.n}>
              <li className="text-center md:flex-1">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 font-semibold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {step.description}
                </p>
              </li>

              {i < STEPS.length - 1 && (
                <li
                  aria-hidden="true"
                  className="flex justify-center text-gold md:pt-2.5"
                >
                  <ArrowIcon className="h-5 w-5 rotate-90 md:rotate-0" />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
