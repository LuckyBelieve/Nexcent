import React from 'react'

interface Props{
    icon: string;
    number: string;
    title: string;
}
function Stats({title,number,icon}:Props) {
  return (
    <div className='flex gap-4 items-center'>
        <div className='flex items-center'>
            <img src={icon} alt="icon" />
        </div>
        <div className='flex flex-col '>
            <h1 className='text-[28px] font-bold text-heading_black'>{number}</h1>
            <p className='text-base font-normal text-text_black'>{title}</p>
        </div>
    </div>
  )
}

export default Stats