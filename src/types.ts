export interface Highlight {
  /** 화면 placeholder 박스 안에서의 위치 (퍼센트, 0~100) */
  top: number
  left: number
  /** 원 하이라이트의 지름 (퍼센트) */
  size: number
  /** 버튼 옆에 붙는 짧은 안내 말풍선 (선택) */
  label?: string
}

export interface Step {
  id: number
  title: string
  /** 화면 중앙에 크게 보여줄 "무엇을 눌러야 하는지" 한 문장 */
  instruction: string
  /** 잘 하고 있다는 격려 문구 */
  encouragement: string
  /** 실수해도 괜찮다는 안심 문구 */
  reassurance: string
  /** 스크린샷 placeholder 안에 표시할 설명 문구 */
  placeholderLabel: string
  /** 실제 캡컷 화면 스크린샷 경로 (public 폴더 기준, 예: "/screenshots/step-01.png"). 없으면 placeholder가 대신 보여요 */
  screenshot?: string
  highlight: Highlight
  /** 추가 팁 (선택) */
  tip?: string
  /** 이 단계에서 "홍보 문구 예시 모음" 바로가기를 보여줄지 여부 */
  linkToPhrases?: boolean
}

export interface Faq {
  id: string
  question: string
  answer: string
}
