import React from 'react'
import doctor_services from '../../assets/doctor_services.png'
import notification_services from '../../assets/notification_services.png'
import hospital_services from '../../assets/hospital_services.png'
import certificate_services from '../../assets/certificate_services.png'

const Services = () => {
  return (
    <div id='services'>
      <h2 className='font-playfair font-normal text-center text-4xl md:text-5xl text-[#20354A] mt-16 lg:mt-20'>Our Services</h2>
      <div className='thickLine'></div>

      <div className='mt-8 lg:mt-10 bg-[#313163] md:grid grid-cols-5'>
          <div className='lg:pl-12 lg:pr-14 px-8 pb-10 col-span-2 '>
            <h3 className='text-white font-playfair font-medium text-4xl pt-8'>What we offer</h3>
            <hr className='h-[3px] bg-white w-12 mt-4 mb-7' />
            <p className='text-[#E0E0E0] text-justify text-[15px] font-poppins font-light'>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
          </div>

          <div className=" md:grid grid-rows-2 grid-cols-2 px-6 py-8 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:content[''] before:bg-bgservices before:bg-cover before:bg-no-repeat before:opacity-40 col-span-3">
            <div className='flex md:mt-6 lg:mt-8 relative'>
              <div className='mr-4'><img src={certificate_services} alt='Certificate' width='45px' /></div>
              <div className='w-3/4 md:w-10/12'>
                <h3 className='text-white font-poppins text-xl leading-6 w-11/12 lg:w-8/12'>Get your certificate online</h3>
                <p className='text-white font-light text-sm lg:w-8/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
              </div>
            </div>

            <div className='flex mt-6 lg:mt-8 relative'>
              <div className='mr-4'><img src={hospital_services} alt='Reminder' width='40px' /></div>
              <div className='w-3/4 md:w-10/12'>
                <h3 className='text-white font-poppins text-xl w-3/4 lg:w-8/12'>Schedule appointments</h3>
                <p className='text-white font-light text-sm lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
              </div>
            </div>

            <div className='flex mt-6 lg:mt-8 relative'>
              <div className='mr-4'><img src={notification_services} alt='Hospital Building' width='40px' /></div>
              <div className='w-3/4 md:w-10/12'>
                <h3 className='text-white font-poppins text-xl lg:w-9/12'>Set reminders for vaccinations</h3>
                <p className='text-white font-light text-sm lg:w-2/3' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
              </div>
            </div>

            <div className='flex mt-6 lg:mt-8 relative'>
              <div className='mr-4'><img src={doctor_services} alt='Doctor' width='40px' /></div>
              <div className='w-3/4 md:w-10/12'>
                <h3 className='text-white font-poppins text-xl w-3/5 lg:w-2/5'>Speak with a Doctor</h3>
                <p className='text-white font-light text-sm lg:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
              </div>
            </div>
      </div>
    </div>

    </div>
  )
}

export default Services