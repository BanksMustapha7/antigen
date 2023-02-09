import React from 'react'
import certificate from '../../assets/certificate.png'
import reminder from '../../assets/reminder.png'
import building from '../../assets/building.png'
import doctor from '../../assets/doctor.png'

const Homecards = () => {
  return (
    <div className='flex flex-wrap justify-center items-center mt-8 gap-8 text-center '>
        <div className=' max-w-[360px] lg:max-w-[310px] sm:mt-1 flex flex-nowrap flex-col items-center shadow-[2px_4px_10px_#acacac40]'>
          <div className=' flex justify-center items-center rounded-full h-14 w-14 bg-[#a69be733] mt-6'><img src={certificate} alt=''/></div>
          <h3 className=' text-[#20354A] font-medium text-lg my-4'>Get your certificate online</h3>
        <p className=' text-sm text-[#828282] mb-4  w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
      </div>

      <div className='max-w-[360px] lg:max-w-[310px] sm:mt-1 flex flex-nowrap flex-col items-center shadow-[2px_4px_10px_#acacac40] ' >
        <div className='flex justify-center items-center rounded-full h-14 w-14 bg-[#a69be733] mt-6'><img src={reminder} alt='' /></div>
        <h3 className='text-[#20354A] font-medium text-lg my-4'>Set reminders for vaccinations</h3>
        <p className=' text-sm text-[#828282] mb-4 w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>

      <div className='max-w-[360px] lg:max-w-[310px] sm:mt-1 flex flex-nowrap flex-col items-center shadow-[2px_4px_10px_#acacac40]' >        
        <div className='flex justify-center items-center rounded-full h-14 w-14 bg-[#a69be733] mt-6'><img src={building} alt='' /></div>
        <h3 className='text-[#20354A] font-medium text-lg my-4'>Schedule Appointments</h3>
        <p className=' text-sm text-[#828282] mb-4 w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>

      <div className='max-w-[360px] lg:max-w-[310px] sm:mt-1 flex flex-nowrap flex-col items-center shadow-[2px_4px_10px_#acacac40]' >        
        <div className='flex justify-center items-center rounded-full h-14 w-14 bg-[#a69be733] mt-6'><img src={doctor} alt='' /></div>
        <h3 className='text-[#20354A] font-medium text-lg my-4'>Speak With A Doctor</h3>
        <p className=' text-sm text-[#828282] mb-4 w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>
    </div>
  )
}

export default Homecards