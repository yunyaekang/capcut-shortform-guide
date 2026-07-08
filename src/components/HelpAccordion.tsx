import { useState } from 'react'
import { HelpCircle, X, ChevronDown } from 'lucide-react'
import { FAQS } from '../data/faqs'

export default function HelpAccordion() {
  const [isOpen, setIsOpen] = useState(false)
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 bottom-24 z-40 flex justify-center">
        <div className="flex w-full max-w-app justify-end px-4">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="도움말 열기"
            className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark text-white shadow-xl active:scale-95"
          >
            <HelpCircle className="h-7 w-7" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40">
          <div className="w-full max-w-app rounded-t-3xl bg-white px-5 pb-[calc(env(safe-area-inset-bottom)+24px)] pt-5 max-h-[80dvh] overflow-y-auto">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">자주 묻는 질문</h3>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="도움말 닫기"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 active:bg-gray-200"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-2">
              {FAQS.map((faq) => {
                const isFaqOpen = openFaqId === faq.id
                return (
                  <div key={faq.id} className="overflow-hidden rounded-2xl border border-gray-100">
                    <button
                      onClick={() => setOpenFaqId(isFaqOpen ? null : faq.id)}
                      className="flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-3 text-left"
                    >
                      <span className="text-base font-bold text-gray-800">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${isFaqOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isFaqOpen && (
                      <div className="border-t border-gray-100 bg-gray-50 px-4 py-3">
                        <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
