import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, RotateCcw, ImageOff, ShieldCheck, Lightbulb, PartyPopper } from 'lucide-react'
import type { Step } from '../types'
import ProgressBar from './ProgressBar'

interface StepScreenProps {
  step: Step
  totalSteps: number
  isLast: boolean
  onPrev: () => void
  onNext: () => void
  onOpenPhraseLibrary: () => void
}

const SWIPE_THRESHOLD = 60

export default function StepScreen({
  step,
  totalSteps,
  isLast,
  onPrev,
  onNext,
  onOpenPhraseLibrary,
}: StepScreenProps) {
  const [replayKey, setReplayKey] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const deltaX = e.changedTouches[0].clientX - touchStartX.current
    if (deltaX > SWIPE_THRESHOLD) {
      onPrev()
    } else if (deltaX < -SWIPE_THRESHOLD) {
      onNext()
    }
    touchStartX.current = null
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <ProgressBar current={step.id} total={totalSteps} />

      <div
        className="flex-1 overflow-y-auto px-5 pb-40 pt-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <h2 className="mb-3 text-center text-lg font-bold text-gray-400">
          STEP {step.id}. {step.title}
        </h2>

        {/* 스크린샷(또는 placeholder) + 하이라이트 오버레이 */}
        <div
          className={`relative mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-3xl bg-gray-50 ${
            step.screenshot ? 'border border-gray-200' : 'border-2 border-dashed border-gray-300'
          }`}
        >
          {step.screenshot ? (
            <img
              src={step.screenshot}
              alt={step.placeholderLabel}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
              <ImageOff className="h-8 w-8 text-gray-300" strokeWidth={1.5} />
              <p className="text-sm font-medium text-gray-400">{step.placeholderLabel}</p>
              <p className="text-xs text-gray-300">(실제 캡컷 화면 사진으로 교체 예정)</p>
            </div>
          )}

          <div
            key={replayKey}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ top: `${step.highlight.top}%`, left: `${step.highlight.left}%` }}
          >
            <span
              className="absolute inline-flex animate-ping rounded-full bg-brand-yellow opacity-75"
              style={{ width: `${step.highlight.size}vw`, maxWidth: '90px', aspectRatio: '1 / 1' }}
            />
            <span
              className="relative inline-flex rounded-full border-4 border-brand-yellow"
              style={{ width: `${step.highlight.size}vw`, maxWidth: '90px', aspectRatio: '1 / 1' }}
            />
            {step.highlight.label && (
              <span className="mt-2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-xs font-bold text-white shadow">
                {step.highlight.label}
              </span>
            )}
          </div>
        </div>

        {/* 무엇을 눌러야 하는지 */}
        <p className="mt-6 text-center text-xl font-bold leading-relaxed text-gray-900">
          {step.instruction}
        </p>

        {/* 격려 문구 */}
        <div className="mt-4 rounded-2xl bg-brand-light px-4 py-3 text-center text-base font-semibold text-brand-dark">
          {step.encouragement}
        </div>

        {/* 안심 문구 */}
        <div className="mt-3 flex items-start gap-2 rounded-2xl bg-gray-50 px-4 py-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
          <p className="text-sm text-gray-500">{step.reassurance}</p>
        </div>

        {/* 팁 */}
        {step.tip && (
          <div className="mt-3 flex items-start gap-2 rounded-2xl bg-brand-yellow/20 px-4 py-3">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
            <p className="text-sm font-medium text-brand-dark">{step.tip}</p>
          </div>
        )}

        {step.linkToPhrases && (
          <button
            onClick={onOpenPhraseLibrary}
            className="mt-3 flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-brand-light text-base font-bold text-brand-dark active:bg-brand-light/70"
          >
            홍보 문구 예시 모음 보러가기
          </button>
        )}

        <button
          onClick={() => setReplayKey((k) => k + 1)}
          className="mx-auto mt-5 flex min-h-[44px] items-center gap-1.5 rounded-full border border-gray-200 px-4 text-sm font-semibold text-gray-500 active:bg-gray-100"
        >
          <RotateCcw className="h-4 w-4" />
          이 단계 다시 보기
        </button>
      </div>

      {/* 하단 고정 이전/다음 버튼 */}
      <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-app border-t border-gray-100 bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+16px)] pt-3">
        <div className="flex gap-3">
          <button
            onClick={onPrev}
            className="flex min-h-[56px] flex-1 items-center justify-center gap-1 rounded-2xl bg-gray-100 text-lg font-bold text-gray-500 active:bg-gray-200"
          >
            <ChevronLeft className="h-5 w-5" />
            이전 단계
          </button>
          <button
            onClick={onNext}
            className="flex min-h-[56px] flex-[1.4] items-center justify-center gap-1 rounded-2xl bg-brand text-lg font-bold text-white shadow-lg shadow-brand/30 active:bg-brand-dark"
          >
            {isLast ? (
              <>
                완성하기
                <PartyPopper className="h-5 w-5" />
              </>
            ) : (
              <>
                다음 단계
                <ChevronRight className="h-5 w-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
