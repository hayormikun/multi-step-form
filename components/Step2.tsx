import React, { useContext } from 'react'
import { SubContext } from './context/SubContext'
import arcade from '../public/assets/icon-arcade.svg'
import advanced from '../public/assets/icon-advanced.svg'
import pro from '../public/assets/icon-pro.svg'
import Image from 'next/image'

interface IPackage {
  icon: string
  packageName: string
  price: string
}

export const Step2 = () => {
  const { plan, setPlan } = useContext(SubContext)

  const changePlan = () => {
    if (plan === 'monthlyPlan') setPlan('yearlyPlan')
    else setPlan('monthlyPlan')
  }

  const itemPackage = ({ icon, packageName, price }: IPackage) => {
    return (
      <div className="grid grid-rows-3 border border-purplishBlue rounded-md w-[135px] h-[160px] p-4">
        <Image src={icon} alt={icon} width={40} height={40} />

        <div className="flex flex-col h-fit mt-11 font-normal">
          <h1 className="font-semibold text-lg text-purplishBlue">
            {packageName}
          </h1>

          <span className="text-coolGray">${price}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {plan === 'monthlyPlan' ? (
        <div className="flex flex-row gap-8">
          {itemPackage({ icon: arcade, packageName: 'Arcade', price: "9/mo" })}
          {itemPackage({
            icon: advanced,
            packageName: 'Advanced',
            price: "12/mo",
          })}
          {itemPackage({ icon: pro, packageName: 'Pro', price: "15/mo" })}
        </div>
      ) : (
        <div className="flex flex-row gap-10">
          {itemPackage({ icon: arcade, packageName: 'Arcade', price: "90/yr" })}
          {itemPackage({
            icon: advanced,
            packageName: 'Advanced',
            price: "120/yr",
          })}
          {itemPackage({ icon: pro, packageName: 'Pro', price: "150/yr" })}
        </div>
      )}

      <div className="bg-marineBlue mt-8 w-full h-[45px] flex justify-center items-center rounded-md">
        <span className="flex flex-row gap-x-5">
          <p className="text-coolGray font-normal">Monthly</p>
          <input
            type={'checkbox'}
            onClick={() => {
              changePlan()
            }}
          />{' '}
          <p className="text-coolGray font-normal">Yearly</p>
        </span>
      </div>
    </div>
  )
}
