import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

interface Props{
    image: string;
    desc:string;
}
function UpdateCard({image,desc}:Props) {
  return (
    <div className=' w-[30%] flex flex-col items-center'>
        <div className='w-full'>
            <img src={image} alt="image" />
        </div>
        <div className='p-4 flex flex-col items-center gap-4 bg-bg_gray shadow-lg w-[90%] -mt-20 rounded-lg '>
            <p className='text-lg font-semibold text-text_black text-center'>
                {desc}
            </p>
            <button className='text-lg font-semibold flex items-center text-primary gap-2 '>
                Read More <FaArrowRight/>
            </button>
        </div>
    </div>
  )
}

export default UpdateCard