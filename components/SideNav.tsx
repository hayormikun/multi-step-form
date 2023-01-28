import React, { useContext } from 'react'
import { StepContext } from './context/StepContext'

export interface INavItem {
  navstep: number
  heading: string
  title: string
}

export const SideNav = () => {
  const { step } = useContext(StepContext)

  const navItem = ({ navstep, heading, title }: INavItem) => {
    return (
      <div className="flex gap-4 items-center">
        <span
          className={
            step + 1 === navstep
              ? 'text-black border font-semibold border-black flex items-center justify-center uppercase rounded-[50%] w-8 h-8 bg-lightBlue'
              : 'text-white border font-semibold border-white flex items-center justify-center uppercase rounded-[50%] w-8 h-8 bg-transparent p-[10px]'
          }
        >
          {navstep}
        </span>

        <div className="flex flex-col">
          <h6 className='font-normal text-sm text-lightGray'>{heading}</h6>
          <p className='text-white font-semibold'>{title}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-center gap-y-5 uppercase">
      {navItem({ navstep: 1, heading: 'step 1', title: 'your info' })}
      {navItem({ navstep: 2, heading: 'step 2', title: 'select plan' })}
      {navItem({ navstep: 3, heading: 'step 3', title: 'add-ons' })}
      {navItem({ navstep: 4, heading: 'step 4', title: 'summary' })}
    </div>
  )
}
