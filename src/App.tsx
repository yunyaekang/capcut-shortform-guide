import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import StepScreen from './components/StepScreen'
import CompletionScreen from './components/CompletionScreen'
import PhraseLibrary from './components/PhraseLibrary'
import HelpAccordion from './components/HelpAccordion'
import { STEPS, TOTAL_STEPS } from './data/steps'

type Screen = 'intro' | 'step' | 'completion' | 'phrases'

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [stepIndex, setStepIndex] = useState(0)
  const [returnTo, setReturnTo] = useState<Screen>('step')

  const currentStep = STEPS[stepIndex]

  const openPhraseLibrary = () => {
    setReturnTo(screen)
    setScreen('phrases')
  }

  return (
    <div className="mx-auto min-h-dvh w-full max-w-app bg-white shadow-xl">
      {screen === 'intro' && (
        <IntroScreen
          onStart={() => {
            setStepIndex(0)
            setScreen('step')
          }}
        />
      )}

      {screen === 'step' && (
        <StepScreen
          step={currentStep}
          totalSteps={TOTAL_STEPS}
          isLast={stepIndex === STEPS.length - 1}
          onPrev={() => {
            if (stepIndex === 0) {
              setScreen('intro')
              return
            }
            setStepIndex((i) => Math.max(0, i - 1))
          }}
          onNext={() => {
            if (stepIndex === STEPS.length - 1) {
              setScreen('completion')
              return
            }
            setStepIndex((i) => Math.min(STEPS.length - 1, i + 1))
          }}
          onOpenPhraseLibrary={openPhraseLibrary}
        />
      )}

      {screen === 'completion' && (
        <CompletionScreen
          onRestart={() => {
            setStepIndex(0)
            setScreen('intro')
          }}
          onOpenPhraseLibrary={openPhraseLibrary}
        />
      )}

      {screen === 'phrases' && <PhraseLibrary onBack={() => setScreen(returnTo)} />}

      <HelpAccordion />
    </div>
  )
}
