const FEATURES = [
  '순찰 구역 GPS 자동 인증',
  '실시간 상황 보고 · 사진 첨부',
  '근태 · 순찰 통계 자동 생성',
]

type PatrolLog = {
  time: string
  place: string
  status: '완료' | '진행 중'
}

const PATROL_LOGS: PatrolLog[] = [
  { time: '06:12', place: 'A동 지하주차장', status: '완료' },
  { time: '06:28', place: 'B동 옥상 출입구', status: '완료' },
  { time: '06:45', place: '정문 초소', status: '완료' },
  { time: '07:00', place: 'C동 놀이터 주변', status: '진행 중' },
]

const STATUS_CLASS: Record<PatrolLog['status'], string> = {
  완료: 'bg-green-500/20 text-green-400',
  '진행 중': 'bg-gold/20 text-gold',
}

export default function SmartPatrol() {
  return (
    <section id="patrol" className="bg-bg-base py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-primary p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
            {/* 텍스트 */}
            <div>
              <p className="text-xs font-medium tracking-widest text-gold">
                SMART PATROL
              </p>
              <h2 className="mt-3 text-xl font-bold text-white md:text-2xl">
                스마트순찰시스템으로 근무를 기록으로 남깁니다
              </h2>
              <p className="mt-4 leading-relaxed text-white/60">
                GPS 기반 살다pro 앱으로 순찰 구역 진입 시 자동 인증. 관리자
                웹사이트에서 실시간 확인.
              </p>

              <ul className="mt-7 space-y-3">
                {FEATURES.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* 순찰 현황 목업 */}
            <div className="rounded-xl border border-white/10 bg-white/6 p-5">
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-gold"
                />
                <span className="font-medium text-white/80">
                  오늘의 순찰 현황
                </span>
                <span className="ml-auto text-xs text-white/40">
                  2026.08.12
                </span>
              </div>

              <ul className="mt-4">
                {PATROL_LOGS.map((log) => (
                  <li
                    key={log.time}
                    className="flex items-center gap-3 border-b border-white/6 py-2 text-sm text-white/70 last:border-b-0"
                  >
                    <span className="w-11 shrink-0 text-white/40 tabular-nums">
                      {log.time}
                    </span>
                    <span className="truncate">{log.place}</span>
                    <span
                      className={`ml-auto shrink-0 rounded-full px-2.5 py-0.5 text-xs ${STATUS_CLASS[log.status]}`}
                    >
                      {log.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
