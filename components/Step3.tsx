import React, { useContext } from 'react'
import { AddOnsContext } from './context/AddOnsContext'
import { SubContext } from './context/SubContext'

interface IAddOns {
  itemId: number
  title: string
  description: string
  price: string
}

export const Step3 = () => {
  const { plan, } = useContext(SubContext)
  const { addOns, setAddOns } = useContext(AddOnsContext)

  const addOnItem = ({ itemId, title, description, price }: IAddOns) => {
    return (
      <div key={itemId} onClick={()=>addItem(itemId)} className="border border-purplishBlue bg-blue-100 rounded-md h-[76px] grid col-span-5 items-center">
        <div className="col-span-1">
          <input type="checkbox" name="check" id="check" />
        </div>
        <div className="col-span-3 flex flex-col">
          <h6>{title}</h6>
          <span>{description}</span>
        </div>

        <div className="col-span-1">+${price}</div>
      </div>
    )
  }

  const addItem = (itemId: any ) => {
    if(addOns.indexOf(itemId) === -1) {
      setAddOns(addOns => [ ...addOns, itemId])
    } else {
      const id = addOns.findIndex(itemId)
      setAddOns([
      ...addOns.slice(id, id),])
    }
  }

  if (plan === 'monthlyPlan') {
    return (
      <div>
        <div className="">
          {addOnItem({
            itemId: 1,
            title: 'Online service',
            description: 'Access to multiplayer games',
            price: '1/mo',
          })}
          {addOnItem({
            itemId: 2,
            title: 'Larger storage',
            description: 'Extra 1GB of cloud save',
            price: '2/mo',
          })}
          {addOnItem({
            itemId: 3,
            title: 'Customizable profile',
            description: 'custom theme on your profile',
            price: '2/mo',
          })}
        </div>
      </div>
    )
  }

  if (plan === 'yearlyPlan') {
    return (
      <div>
        <div className="">
          {addOnItem({
            itemId: 1,
            title: 'Online service',
            description: 'Access to multiplayer games',
            price: '10/yr',
          })}
          {addOnItem({
            itemId: 2,
            title: 'Larger storage',
            description: 'Extra 1GB of cloud save',
            price: '20/yr',
          })}
          {addOnItem({
            itemId: 3,
            title: 'Customizable profile',
            description: 'custom theme on your profile',
            price: '20/yr',
          })}
        </div>
      </div>
    )
  }
}
