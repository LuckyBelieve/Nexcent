import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

function Footer() {
  return (
    <section className=' px-5 xl:px-36 py-16 bg-heading_black text-white'>
        <div className='flex flex-col lg:flex-row justify-between '>
            <div className='flex flex-col gap-10'>
                <div>
                    <img src="/Logo.svg" alt="logo" />
                </div>
                <div>
                    <p>Copyright © 2020 Nexcent ltd.</p>
                    <p>All rights reserved</p>
                </div>
                <div className=' flex flex-row gap-4'>
                    <div>
                        <img src="/footer/Icons-1.svg" alt="image" />
                    </div>
                    <div>
                        <img src="/footer/Icons-2.svg" alt="image" />
                    </div>
                    <div>
                        <img src="/footer/Icons-3.svg" alt="image" />
                    </div>
                    <div>
                        <img src="/footer/Icons.svg" alt="image" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between lg:w-[60%]'>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold'>Company</h1>
                    <div className='flex flex-col gap-3'>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>testimonials</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold'>Support</h1>
                    <div className='flex flex-col gap-3'>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='text-[20px] font-semibold'>Stay up to date</h1>
                    <div className='flex items-center gap-3 rounded-lg bg-[#515b60] overflow-hidden pr-3'>
                        <input type="email" name="message" placeholder='Your email address' className='flex-1 h-full py-3 px-2 bg-inherit outline-none' />
                        <FaTelegramPlane/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer