import React from 'react'
import fedex from '../../assets/FedEx.png'
import airbnb from '../../assets/Airbnb.png'
import hubspot from '../../assets/Hubspot.png'
import google from '../../assets/googlelogo.png'
import microsoft from '../../assets/Microsoft.png'
import walmart from '../../assets/Walmart.png'

const Sponsors = () => {
  return (
    <div>
        <div className=' h-[1px] w-9/12 mx-auto mt-10 bg-gradient-to-r from-[#c0ccda1a] via-[#c0ccda99] to-[#c0ccda1a] '></div>
        <div className='flex flex-wrap w-11/12 lg:w-10/12 gap-6 md:gap-8 lg:gap-16 mx-auto justify-center my-6'>
          <div><img src={airbnb} alt='Airbnb' className=' min-w-[70px]' /></div>
          <div><img src={hubspot} alt='Hubspot' className=' min-w-[70px]'/></div>
          <div><img src={google} alt='Google' className=' min-w-[70px]' /></div>
          <div><img src={microsoft} alt='Microsoft' className=' min-w-[65px]'/></div>
          <div><img src={walmart}alt='Walmart'  className=' min-w-[70px]'/></div>
          <div><img src={fedex} alt='Fedex' className=' min-w-[70px]'/></div>
        </div>
        <div className=' h-[1px] w-10/12 mx-auto bg-gradient-to-r from-[#c0ccda1a] via-[#c0ccda99] to-[#c0ccda1a] '></div>
    </div>
  )
}

export default Sponsors