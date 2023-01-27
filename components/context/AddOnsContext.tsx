import React, { createContext, useState } from 'react'

type AddOnsContextProviderProps = {
  children: React.ReactNode
}

const useValue = () => {
  const [addOns, setAddOns] = useState<number[]>([])

  return {
    addOns,
    setAddOns,
  }
}

export const AddOnsContext = createContext({} as ReturnType<typeof useValue>)

export const AddOnsContextProvider = ({ children }: AddOnsContextProviderProps) => {
  return (
    <AddOnsContext.Provider value={useValue()}>{children}</AddOnsContext.Provider>
  )
}
