const STATS = [
  { value: '48,000', unit: '+', label: '관리 세대 수' },
  { value: '19', unit: '년', label: '아파트 관리 경력' },
  { value: '2', unit: '단계', label: '민원 대응 체계' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="text-white"
      style={{
        backgroundImage:
          'linear-gradient(135deg, #0F1A2E 0%, #1B2A4A 55%, #253756 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-14 text-center md:px-6 md:pt-25 md:pb-20">
        <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs text-gold">
          SINCE 2007 · 아파트 경비 전문
        </span>

        <h1 className="mt-7 text-3xl leading-tight font-bold md:text-5xl">
          내 집이라는 마음가짐으로
          <br />
          <span className="text-gold">아파트를 지킵니다</span>
        </h1>

        <p className="mt-5 text-white/60">
          아파트 경비 전문 기업 (주)동남시큐리티
        </p>

        <div className="mt-9">
          <a
            href="#portfolio"
            className="inline-block rounded-md border border-white/30 px-7 py-3 text-sm text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            관리 단지 보기
          </a>
        </div>
      </div>

      {/* 숫자 카운터 */}
      <div className="border-t border-white/10 bg-white/5">
        <dl className="mx-auto grid max-w-7xl grid-cols-3 px-4 py-8 md:px-6 md:py-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="text-3xl font-bold text-white">
                {stat.value}
                <span className="ml-0.5 text-lg text-gold">{stat.unit}</span>
              </dd>
              <dt className="mt-2 text-sm text-white/45">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
