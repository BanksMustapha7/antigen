import React from 'react'
import vaxxPhases from '../../assets/vaccinePhases.png'
import syringe from '../../assets/syringe.png'

const AboutUs = () => {
  return (
    <div>
        <section id='about'>
            <h2 className=' font-playfair font-normal text-center text-4xl md:text-5xl text-[#20354A] mt-16 lg:mt-20'>About us</h2>
            <div className='thickLine'></div>

            <div className='bg-[#a69be733] w-11/12 mx-auto rounded-2xl px-4 py-1 mt-4 '>
                <div className='mt-6 lg:mt-8 md:flex flex-nowrap order-2'>
                <div className='order-1 md:w-2/4'>
                    <p className=' text-base font-semibold text-[#313163] mt-2' >Antigen</p>
                    <h3 className='font-playfair font-semibold text-3xl lg:text-4xl text-[#20354A] mt-1 lg:mt-3'>Who We Are</h3>
                    <p className=' font-light text-sm md:text-base text-[#4f4f4f] mt-4 md:mt-6 lg:w-4/5 text-justify'>Antigen is a team of youth-led solution-centric persons with diverse exceptional skills aiming at delivering a revolutionary product to tackle existing and emerging problems involving vaccination and Immunization, disease prevention and access to timely interventional health services.</p>
                </div>
                <div className='md:w-2/4 flex lg:justify-start '> <img src={vaxxPhases} alt=''/>  </div>
                </div>

                {/* ===============SECOND ROW =================================== */}
                <div className='mt-6 lg:mt-8 md:flex flex-nowrap md:w-11/12 mx-auto'>
                <div className='md:w-2/4 flex flex-nowrap flex-col mx-auto'>
                    <p className='text-base font-semibold text-[#313163] mt-2'>Antigen</p>
                    <h3 className='font-playfair font-semibold text-3xl lg:text-4xl text-[#20354A] mt-1 lg:mt-3'>Who We Are</h3>
                    <p className='font-light text-sm md:text-base text-justify text-[#4f4f4f] mt-4 md:mt-6 md:w-[92%] lg:w-10/12' >Africa and other developing continents constantly battle vaccine-preventable diseases with over 30 million children under age five suffering from them annually and about 1 in 5 children not receiving all important immunization. These are terrifying data insights because a lot of people are further predisposed to these diseases if communicable, thus continually deteriorating health systems in the implicated regions. Increased in the global burden of infectious diseases has exposed the need for an effective vaccination surveillance system in tandem with the 21st century technological interventions on ground. We’re building an all inclusive product that aims to address the important root causes of the increasing prevalence of Vaccine-preventable diseases however, we're taking it a Step at a Time!.</p>
                </div>
                <div className='md:w-2/4 flex items-center justify-center  '> <img src={syringe} alt='' width='85%'/>  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AboutUs