import type { Step } from '../types'

const WIDTH = 800
const PADDING = 48
const HEADER_HEIGHT = 190
const ITEM_HEIGHT = 56
const FOOTER_HEIGHT = 70

export function generateChecklistImage(steps: Step[]): string {
  const height = HEADER_HEIGHT + steps.length * ITEM_HEIGHT + FOOTER_HEIGHT
  const canvas = document.createElement('canvas')
  canvas.width = WIDTH
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  // 배경
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, WIDTH, height)

  // 상단 브랜드 바
  ctx.fillStyle = '#1a7d4f'
  ctx.fillRect(0, 0, WIDTH, 12)

  // 제목
  ctx.fillStyle = '#111827'
  ctx.font = 'bold 40px system-ui, sans-serif'
  ctx.textBaseline = 'alphabetic'
  ctx.fillText('캡컷 숏폼 완성 체크리스트', PADDING, 90)

  ctx.fillStyle = '#6b7280'
  ctx.font = '22px system-ui, sans-serif'
  ctx.fillText('17단계를 모두 완료하셨어요! 🎉', PADDING, 130)

  // 구분선
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(PADDING, HEADER_HEIGHT - 30)
  ctx.lineTo(WIDTH - PADDING, HEADER_HEIGHT - 30)
  ctx.stroke()

  // 단계 목록
  steps.forEach((step, index) => {
    const y = HEADER_HEIGHT + index * ITEM_HEIGHT

    // 체크 원
    ctx.fillStyle = '#1a7d4f'
    ctx.beginPath()
    ctx.arc(PADDING + 16, y + 20, 16, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(PADDING + 9, y + 20)
    ctx.lineTo(PADDING + 14, y + 26)
    ctx.lineTo(PADDING + 24, y + 12)
    ctx.stroke()

    // 텍스트
    ctx.fillStyle = '#1f2937'
    ctx.font = '26px system-ui, sans-serif'
    ctx.fillText(`STEP ${step.id}. ${step.title}`, PADDING + 48, y + 29)
  })

  // 하단
  ctx.fillStyle = '#9ca3af'
  ctx.font = '18px system-ui, sans-serif'
  ctx.fillText('캡컷으로 숏폼 만들기 · 왕초보 따라하기', PADDING, height - 28)

  return canvas.toDataURL('image/png')
}

export function downloadChecklistImage(steps: Step[]) {
  const dataUrl = generateChecklistImage(steps)
  if (!dataUrl) return

  const link = document.createElement('a')
  link.href = dataUrl
  link.download = '캡컷_숏폼_완성_체크리스트.png'
  link.click()
}
