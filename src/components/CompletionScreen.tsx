import { PartyPopper, Download, RotateCcw, Sparkles } from 'lucide-react'
import { STEPS } from '../data/steps'
import { downloadChecklistImage } from '../lib/checklistImage'

interface CompletionScreenProps {
  onRestart: () => void
  onOpenPhraseLibrary: () => void
}

export default function CompletionScreen({ onRestart, onOpenPhraseLibrary }: CompletionScreenProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center bg-white px-6 py-10 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-yellow/30">
        <PartyPopper className="h-14 w-14 text-brand-dark" strokeWidth={1.8} />
      </div>

      <h1 className="mt-6 text-3xl font-extrabold leading-snug text-gray-900">
        축하드려요!
        <br />
        첫 숏폼 영상 완성!
      </h1>
      <p className="mt-3 text-lg font-medium text-gray-600">
        17단계를 모두 따라오시느라
        <br />
        정말 수고 많으셨어요 🎉
      </p>

      <div className="mt-8 w-full rounded-3xl border border-gray-100 bg-gray-50 p-5 text-left">
        <h2 className="mb-3 flex items-center gap-1.5 text-base font-bold text-gray-800">
          <Sparkles className="h-5 w-5 text-brand" />
          완성 체크리스트
        </h2>
        <ul className="space-y-1.5">
          {STEPS.map((step) => (
            <li key={step.id} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                ✓
              </span>
              STEP {step.id}. {step.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 w-full space-y-3">
        <button
          onClick={() => downloadChecklistImage(STEPS)}
          className="flex min-h-[64px] w-full items-center justify-center gap-2 rounded-2xl bg-brand text-xl font-bold text-white shadow-lg shadow-brand/30 active:bg-brand-dark"
        >
          <Download className="h-6 w-6" />
          체크리스트 이미지로 저장하기
        </button>

        <button
          onClick={onOpenPhraseLibrary}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-brand-light text-lg font-bold text-brand-dark active:bg-brand-light/70"
        >
          홍보 문구 예시 모음 바로가기
        </button>

        <button
          onClick={onRestart}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-gray-100 text-lg font-bold text-gray-500 active:bg-gray-200"
        >
          <RotateCcw className="h-5 w-5" />
          처음부터 다시 보기
        </button>
      </div>
    </div>
  )
}
