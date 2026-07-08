interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = Math.round((current / total) * 100)

  return (
    <div className="w-full px-5 pt-4 pb-2 bg-white">
      <div className="flex items-center justify-between mb-2">
        <span className="text-base font-bold text-brand">
          {current} / {total} 단계
        </span>
        <span className="text-sm font-semibold text-gray-500">{percent}%</span>
      </div>
      <div className="h-3 w-full rounded-full bg-brand-light overflow-hidden">
        <div
          className="h-full rounded-full bg-brand transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
