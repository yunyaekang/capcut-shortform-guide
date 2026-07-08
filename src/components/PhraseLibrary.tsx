import { useState } from 'react'
import { ChevronLeft, Copy, Check } from 'lucide-react'
import { PHRASE_CATEGORIES } from '../data/phrases'

interface PhraseLibraryProps {
  onBack: () => void
}

export default function PhraseLibrary({ onBack }: PhraseLibraryProps) {
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null)

  const handleCopy = async (phrase: string) => {
    try {
      await navigator.clipboard.writeText(phrase)
    } catch {
      // 클립보드 접근이 막혀 있어도 화면 안내는 그대로 보여줘요
    }
    setCopiedPhrase(phrase)
    window.setTimeout(() => setCopiedPhrase((current) => (current === phrase ? null : current)), 1800)
  }

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4">
        <button
          onClick={onBack}
          aria-label="뒤로 가기"
          className="flex h-11 w-11 items-center justify-center rounded-full active:bg-gray-100"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <h1 className="text-xl font-bold text-gray-900">홍보 문구 예시 모음</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-5 text-base text-gray-500">
          업종을 골라서 마음에 드는 문구를 톡 누르면 자동으로 복사돼요. 캡컷 글자 입력 칸에 붙여넣기만 하시면 돼요!
        </p>

        <div className="space-y-6">
          {PHRASE_CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <h2 className="mb-2 text-lg font-bold text-gray-900">
                {cat.emoji} {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.phrases.map((phrase) => {
                  const isCopied = copiedPhrase === phrase
                  return (
                    <button
                      key={phrase}
                      onClick={() => handleCopy(phrase)}
                      className={`flex min-h-[56px] w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                        isCopied ? 'border-brand bg-brand-light' : 'border-gray-100 bg-gray-50 active:bg-gray-100'
                      }`}
                    >
                      <span className="text-base font-medium text-gray-800">{phrase}</span>
                      {isCopied ? (
                        <Check className="h-5 w-5 shrink-0 text-brand" />
                      ) : (
                        <Copy className="h-5 w-5 shrink-0 text-gray-400" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {copiedPhrase && (
        <div className="pointer-events-none fixed inset-x-0 bottom-8 z-40 flex justify-center px-6">
          <div className="w-full max-w-app rounded-full bg-gray-900/90 px-5 py-3 text-center text-sm font-bold text-white shadow-lg">
            복사했어요! 캡컷에 붙여넣기 해보세요 😊
          </div>
        </div>
      )}
    </div>
  )
}
