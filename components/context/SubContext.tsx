import React, { createContext, useState } from 'react'

type SubContextProviderProps = {
  children: React.ReactNode
}

const useValue = () => {
  const [plan, setPlan] = useState("monthlyPlan")

  return {
    plan,
    setPlan,
  }
}

export const SubContext = createContext({} as ReturnType<typeof useValue>)

export const SubContextProvider = ({ children }: SubContextProviderProps) => {
  return (
    <SubContext.Provider value={useValue()}>{children}</SubContext.Provider>
  )
}
