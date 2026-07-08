import { Clock, PlayCircle } from 'lucide-react'

interface IntroScreenProps {
  onStart: () => void
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between bg-white px-6 py-10 text-center">
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-light">
          <PlayCircle className="h-14 w-14 text-brand" strokeWidth={1.8} />
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-extrabold leading-snug text-gray-900">
            캡컷으로
            <br />
            숏폼 만들기
          </h1>
          <p className="text-lg font-medium text-gray-600">
            사진 한 장으로 광고 영상 뚝딱!
            <br />
            17단계만 따라하세요
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-brand-yellow/30 px-5 py-2.5">
          <Clock className="h-5 w-5 text-brand-dark" />
          <span className="text-base font-bold text-brand-dark">약 15분 소요</span>
        </div>
      </div>

      <div className="w-full space-y-3">
        <p className="text-sm font-medium text-gray-500">
          잘못 눌러도 괜찮아요, 천천히 하나씩 따라오시면 돼요 😊
        </p>
        <button
          onClick={onStart}
          className="w-full min-h-[64px] rounded-2xl bg-brand text-xl font-bold text-white shadow-lg shadow-brand/30 transition active:scale-[0.98] active:bg-brand-dark"
        >
          시작하기
        </button>
      </div>
    </div>
  )
}
