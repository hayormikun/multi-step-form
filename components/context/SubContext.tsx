import React, { createContext, useState } from 'react'

type SubContextProviderProps = {
  children: React.ReactNode
}

const useValue = () => {
  const [plan, setPlan] = useState(["monthly", "yearly"])

  return {
    plan,
    setPlan,
  }
}

export const SubContext = createContext({} as ReturnType<typeof useValue>)

export const StepContextProvider = ({ children }: SubContextProviderProps) => {
  return (
    <SubContext.Provider value={useValue()}>{children}</SubContext.Provider>
  )
}
