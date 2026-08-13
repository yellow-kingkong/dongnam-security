# 동남시큐리티 홈페이지

## 프로젝트 개요
(주)동남시큐리티 회사 소개 정적 웹사이트.
아파트 경비용역 전문 업체.

## 기술 스택
- Vite + React + TypeScript + Tailwind CSS v4
- 정적 사이트, DB 없음, 백엔드 없음
- Vercel 배포

## 디자인 시스템 (B안 — 네이비 + 골드 프리미엄)
- Primary: #1B2A4A (네이비)
- Gold: #C8A96E (골드 액센트)
- Gold Light: #E8D5B0
- Background: #F8F6F3 (웜 그레이)
- Card: #FFFFFF
- Border: #E5E2DD
- Text Dark: #1B2A4A
- Text Body: #3D4A5C
- Text Light: #7A8494
- 서체: Pretendard (웹폰트)
- 라이트 모드 전용
- 톤: 신뢰감, 안정감, 전문성, 프리미엄

Tailwind v4 `@theme` 토큰은 `src/index.css`에 정의되어 있다.
클래스명: `bg-primary`, `text-gold`, `bg-gold-light`, `bg-bg-base`, `bg-card`,
`border-line`, `text-text-dark`, `text-text-body`, `text-text-light`

## 섹션 순서
1. Navbar — 고정, 앵커 링크, 오른쪽에 전화번호(031-877-9112), 왼쪽에 DSN 로고+동남시큐리티 텍스트
2. Hero — 네이비 배경, "내 집이라는 마음가짐으로 아파트를 지킵니다" + 숫자 카운터 3개(48,000+세대 / 19년 / 2단계 민원대응)
3. Services — 시설경비 및 보안경비 / 위생·환경관리 / 주택관리·지원 3카드
4. Process — 민원 3단계 대응 (접수→1차 관리감독자 방문→2차 임원 방문)
5. SmartPatrol — 스마트순찰시스템 소개 (전자순찰기기 태그 인식, 실시간 보고, 근태관리)
6. Portfolio — 사진이 있는 주요 관리 단지만 카드형으로 표시 (전체 목록 아님)
7. About — 연혁 타임라인 + CEO 메시지 (자본금 정보 넣지 않음)
8. Footer — 회사 정보 + 전화번호 CTA

섹션 앵커 id: `hero`, `services`, `process`, `patrol`, `portfolio`, `about`, `footer`

## 금지 사항
- 견적 상담 폼 없음 (문의는 전화로만)
- 자본금 정보 표시하지 않음
- 관리 단지 총 개수 표시하지 않음 (계약 변동 때문)
- 다크 모드 없음

## 회사 정보
- 회사명: (주)동남시큐리티
- 대표이사: 김성남
- 설립: 2007년 04월 17일
- 소재지: 경기도 의정부시 청사로 5번길 8-17 센타프라자빌딩 204호
- TEL: 031-877-9112
- FAX: 031-877-5112
- 사업자등록번호: 127-86-04362

## 컨벤션
- 컴포넌트: PascalCase
- 파일명: PascalCase.tsx
- CSS: Tailwind utility classes
- 이미지: public/images/ 에 영문 파일명으로 저장

## 폴더 구조
```
assets/            원본 자료 (한글 파일명 사진 원본, 순찰시스템.pptx) — gitignore, 로컬 전용
public/images/     사이트에서 사용하는 이미지 (영문 파일명, 가로 최대 800px / JPEG q80)
src/components/    섹션 컴포넌트
src/data/          정적 데이터 (complexes.ts, company.ts)
src/lib/           motion.ts (framer-motion variants 헬퍼)
```

## 애니메이션 규칙
- 스크롤 진입 애니메이션은 **framer-motion**(`motion` 컴포넌트 + `whileInView`)을 쓴다.
  variants는 `src/lib/motion.ts`의 `fadeUp` / `fadeX` / `stagger` 헬퍼로 만든다.
- `viewport`는 공통 상수 `VIEWPORT`(`{ once: true, amount: 0.2 }`)를 쓴다 — 한 번만 실행.
- `transform`과 `opacity`만 애니메이션한다. layout shift를 만드는 속성은 쓰지 않는다.
  (예: hover 골드 라인은 `border-t-2 border-t-transparent` → `hover:border-t-gold`로,
  두께를 항상 차지하게 해서 흔들림을 없앤다.)
- **reduced motion**: 헬퍼에 `useReducedMotion()` 값을 넘기면 hidden 상태가 비고
  duration이 0이 되어 애니메이션이 꺼진다. CSS 애니메이션(`.hero-mesh`, `.arrow-pulse`)은
  framer-motion이 제어하지 못하므로 `index.css`의 `@media (prefers-reduced-motion: reduce)`에서 끈다.

## Hero 배경 레이어 (index.css)
`.hero-mesh`(60초 순환 그라디언트) → `.hero-grid`(격자) → `.hero-glow`(하단 골드 번짐)
순으로 `absolute inset-0 -z-10`에 쌓는다. 섹션에 `relative isolate overflow-hidden` 필요.

## 자동 계산되는 값 (하드코딩 금지)
- 경력 연수: `getYearsSinceFounding()` (src/data/company.ts) — Hero 카운터, About 제목
- 저작권 연도: `new Date().getFullYear()` — Footer
- 순찰 목업 날짜: `formatToday()` — SmartPatrol
