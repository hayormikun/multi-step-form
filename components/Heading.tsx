import React from 'react'

type HeadingProps = {
    title: string
    description: string
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div>
        <h1 className='mb-5 font-bold text-4xl text-purplishBlue'>{title}</h1>
        <p className='text-coolGray text-lg'>{description}</p>
    </div>
  )
}

export default Heading

