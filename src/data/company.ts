/** 설립일: 2007년 04월 17일 */
export const FOUNDED_YEAR = 2007
export const FOUNDED_DATE = '2007-04-17'

/**
 * 설립 연도와 현재 연도의 차이를 반환한다.
 * 2026년 → 19, 2027년 → 20
 */
export function getYearsSinceFounding(now = new Date()) {
  return now.getFullYear() - FOUNDED_YEAR
}
