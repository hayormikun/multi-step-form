import { type } from 'os'
import React, { createContext, useState } from 'react'

type StepContextProviderProps = {
  children: React.ReactNode
}

const useValue = () => {
  const [step, setStep] = useState(0)

  return {
    step,
    setStep,
  }
}

export const StepContext = createContext({} as ReturnType<typeof useValue>)

export const StepContextProvider = ({ children }: StepContextProviderProps) => {
  return (
    <StepContext.Provider value={useValue()}>{children}</StepContext.Provider>
  )
}
