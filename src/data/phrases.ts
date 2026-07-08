export interface PhraseCategory {
  id: string
  emoji: string
  category: string
  phrases: string[]
}

export const PHRASE_CATEGORIES: PhraseCategory[] = [
  {
    id: 'restaurant',
    emoji: '🍽️',
    category: '식당',
    phrases: [
      '한 입 먹는 순간, 단골 되는 맛',
      '오늘 저녁 뭐 먹지? 고민 끝!',
      '정성 가득, 매일매일 즉석 조리',
      '웨이팅 있어도 줄 서는 이유가 있어요',
    ],
  },
  {
    id: 'cafe',
    emoji: '☕',
    category: '카페',
    phrases: [
      '아침을 깨우는 진한 한 잔',
      '커피 한 잔에 여유 한 스푼',
      '인생 라떼, 여기 있었네',
      '디저트 맛집으로 소문난 그곳',
    ],
  },
  {
    id: 'hair',
    emoji: '💇',
    category: '미용실',
    phrases: [
      '머리만 바꿨을 뿐인데 인생샷 완성',
      '손끝에서 시작되는 스타일 변신',
      '예약 필수! 실력으로 증명하는 곳',
      '오늘부터 내 머리 취향 저격',
    ],
  },
  {
    id: 'clothes',
    emoji: '👗',
    category: '의류',
    phrases: [
      '이번 시즌 필수템, 지금 만나보세요',
      '입는 순간 완성되는 스타일',
      '당신의 옷장에 꼭 필요한 한 벌',
      '매일 다른 나, 매일 다른 스타일',
    ],
  },
]
