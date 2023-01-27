import React, { useContext } from 'react'
import { SubContext } from './context/SubContext'

interface IPackage {
  icon: string,
  packageName: string,
  price: number,
}

export const Step2 = () => {
  const { plan, setPlan } = useContext(SubContext)

  const changePlan = () => {
    if (plan === 'monthlyPlan') setPlan('yearlyPlan')
    else setPlan('monthlyPlan')
  }

  const itemPackage = ({ icon, packageName, price }: IPackage) => {
    return (
      <div className="grid grid-rows-3">
        <span className="row-span-2">{icon}</span>

        <div className="flex row-span-1">
          <h1>{packageName}</h1>
          <span>${price}/mo</span>
        </div>
      </div>
    )
  }

  if (plan === 'monthlyPlan') {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-10">
          {itemPackage({icon: 'fa', packageName: 'Arcade', price: 9})}
          {itemPackage({icon: 'fa', packageName: 'Advanced', price: 12})}
          {itemPackage({icon: 'fa', packageName: 'Pro', price: 15})}
        </div>

        <div className="bg-blue-200">
          <span>
            Monthly <input type={"checkbox"} onClick={()=>{
              changePlan()
            }}/> Yearly
          </span>
        </div>
      </div>
    )
  }

  if (plan === 'yearlyPlan') {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row gap-10">
          {itemPackage({icon: 'fa', packageName: 'Arcade', price: 90})}
          {itemPackage({icon: 'fa', packageName: 'Advanced', price: 120})}
          {itemPackage({icon: 'fa', packageName: 'Pro', price: 150})}
        </div>

        <div className="bg-blue-200">
          <span>
            Monthly <input type={"checkbox"} onClick={()=>{
              changePlan()
            }}/> Yearly
          </span>
        </div>
      </div>
    )
  }
}
