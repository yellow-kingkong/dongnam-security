export type Complex = {
  id: string
  name: string
  image: string
}

/**
 * 사진이 확보된 주요 관리 단지만 등록한다.
 * 전체 관리 단지 목록이 아니며, 총 개수는 표시하지 않는다.
 */
export const complexes: Complex[] = [
  { id: 'galmae-starhills', name: '갈매 스타힐스 아파트', image: '/images/galmae-starhills.jpg' },
  { id: 'guri-sutaek-jugong', name: '구리 수택주공 아파트', image: '/images/guri-sutaek-jugong.jpg' },
  { id: 'geumo-2-shindo-branew-up', name: '금오 2차 신도브래뉴업 아파트', image: '/images/geumo-2-shindo-branew-up.jpg' },
  { id: 'junggye-yeomgwang-areumbil', name: '중계 염광아름빌 아파트', image: '/images/junggye-yeomgwang-areumbil.jpg' },
  { id: 'jingeon-onam-shinwoo-idyll-2', name: '진건 오남 신우아이딜 2차 아파트', image: '/images/jingeon-onam-shinwoo-idyll-2.jpg' },
  { id: 'jingeon-hanshin-green-2', name: '진건 한신그린 2차 아파트', image: '/images/jingeon-hanshin-green-2.jpg' },
  { id: 'changdong-gunyoung-casville', name: '창동 건영캐스빌 아파트', image: '/images/changdong-gunyoung-casville.jpg' },
  { id: 'taereung-hyundai-hometown-1-2', name: '태릉 현대홈타운 1단지·2단지', image: '/images/taereung-hyundai-hometown-1-2.jpg' },
  { id: 'pyeongnae-woonam-firstvill', name: '평내 우남퍼스트빌 아파트', image: '/images/pyeongnae-woonam-firstvill.jpg' },
  { id: 'pocheon-sangwoon', name: '포천 상운 아파트', image: '/images/pocheon-sangwoon.jpg' },
  { id: 'pocheon-ilshin', name: '포천 일신 아파트', image: '/images/pocheon-ilshin.jpg' },
  { id: 'hanam-xi', name: '하남 자이 아파트', image: '/images/hanam-xi.jpg' },
  { id: 'hanil-u-and-i', name: '한일 유앤아이 아파트', image: '/images/hanil-u-and-i.jpg' },
  { id: 'howon-shindo-2-3', name: '호원 신도 2차·3차 아파트', image: '/images/howon-shindo-2-3.jpg' },
  { id: 'hoecheon-daekwang-rosebiang', name: '회천 대광로제비앙 아파트', image: '/images/hoecheon-daekwang-rosebiang.jpg' },
]
