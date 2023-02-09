import React from 'react'
import logofooter from '../../assets/Group 302.png';
import facebook from '../../assets/facebookvector.png'
import twitter from '../../assets/twittervector.png'
import linkedin from '../../assets/linkedinvector.png'
import instagram from '../../assets/instavector.png'


export const Footer = () => {
  return (
    <footer className='bg-[#313163] mt-8 lg:flex lg:flex-nowrap flex-row lg:justify-around lg:py-10'>
        <div className=' pt-11 lg:pt-6 w-10/12 mx-auto lg:max-w-xs lg:mx-0 lg:ml-14 lg:w-11/12'>
            <div className='lg:w-12'><img src={logofooter} alt="Footer Logo" /></div>
            <div><p className='text-justify mt-5 text-[#E0E0E0] font-light text-sm'>An emerging "All in one" tool that aims at redefining vaccines last mile administration for effective tracking and surveillance, provision of easily accessible, verifiable, contactless certification.</p></div>
        </div>
        {/* Footer Links */}
        <div className='text-[#e0e0e0] font-thin text-sm flex flex-row flex-wrap justify-around lg:justify-start w-10/12 mx-auto lg:flex-nowrap'>
            <div className='min-w-[150px] mt-10 lg:ml-36'>
                <div className='text-white font-normal text-base mb-3'>Navigation</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
            </div>
            <div className='min-w-[150px] mt-10 lg:ml-20'>
                <div className='text-white font-normal text-base mb-3'>Account</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
            </div>
            <div className='min-w-[150px] mt-10 lg:ml-20'>
                <div className='text-white font-normal text-base mb-3'>Legal</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
                <div className='mb-3'>Lorem</div>
            </div>

            <div className='mt-10'>
                <p className='text-white font-normal text-base'>Follow Us</p>
                <div className='flex flex-wrap max-w-[130px] lg:max-w-fit gap-y-5 gap-x-8  lg:gap-6 mt-7'>
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer p-[14px]'><img src={facebook} alt="facebook logo" /></div>
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer p-2'><img src={instagram} alt="Instagram logo"  /></div>
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer p-2'><img src={linkedin} alt="LinkedIn logo" /></div>
                    <div className='w-10 h-10 flex justify-center items-center bg-white rounded-full cursor-pointer p-2'><img src={twitter} alt="Twitter logo" /></div>
                </div>
            </div>
        </div>
    </footer>
  )
}
