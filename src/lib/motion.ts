import type { Transition, Variants } from 'framer-motion'

/** whileInView 공통 설정 — 한 번만 실행한다. */
export const VIEWPORT = { once: true, amount: 0.2 } as const

type Reduced = boolean | null

/**
 * prefers-reduced-motion이면 duration/delay를 0으로 만들어 애니메이션을 끈다.
 * hidden 상태도 비워 두므로 요소는 처음부터 최종 모습으로 보인다.
 */
export function easeOut(reduced: Reduced, duration = 0.6, delay = 0): Transition {
  return {
    duration: reduced ? 0 : duration,
    delay: reduced ? 0 : delay,
    ease: 'easeOut',
  }
}

/** 아래에서 위로 떠오르며 나타난다. */
export function fadeUp(
  reduced: Reduced,
  { y = 20, duration = 0.6, delay = 0 } = {},
): Variants {
  return {
    hidden: reduced ? {} : { opacity: 0, y },
    visible: { opacity: 1, y: 0, transition: easeOut(reduced, duration, delay) },
  }
}

/** 옆에서 슬라이드인. x가 음수면 왼쪽, 양수면 오른쪽에서 들어온다. */
export function fadeX(
  reduced: Reduced,
  { x = 20, duration = 0.6, delay = 0 } = {},
): Variants {
  return {
    hidden: reduced ? {} : { opacity: 0, x },
    visible: { opacity: 1, x: 0, transition: easeOut(reduced, duration, delay) },
  }
}

/** 자식들을 순서대로 등장시키는 컨테이너. */
export function stagger(
  reduced: Reduced,
  { each = 0.15, delayChildren = 0 } = {},
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduced ? 0 : each,
        delayChildren: reduced ? 0 : delayChildren,
      },
    },
  }
}
