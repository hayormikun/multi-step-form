import Image from 'next/image'
import React from 'react'
import thankYou from '../public/assets/icon-thank-you.svg'

export const Step5 = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      
      <Image src={thankYou} alt={"Thank You"} width={82} height={82} />
      <h1 className='mt-[34px] mb-[25px] font-bold text-4xl'>Thank you!</h1>
      <p className='text-center text-lg font-normal text-coolGray'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com',
      </p>
    </div>
  )
}
