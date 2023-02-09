import React from 'react'
import services_rafiki from '../../assets/services_rafiki.png'

const Products = () => {
  return (
    <section className='mt-16 lg:mt-20' id='products'>
      <h2 className='font-playfair text-center font-light text-4xl md:5xl text-[#20354A]'>Our Product</h2>
      <div className='thickLine'></div>

      <div className='mt-8 md:grid grid-cols-7'>
        <div className=' bg-[#a69be733] items-center flex justify-center col-span-4'><img src={services_rafiki} alt='notifications reminder' /></div>
        <div className='bg-[#313163] pt-8 px-5 lg:pb-0 pb-8 col-span-3 lg:pr-20 lg:pl-16 text-justify'>
          <h3 className='font-playfair font-light text-4xl text-white'>Vaccine Reminder</h3>
          <hr className='bg-white w-14 mt-4 mb-6 h-[2px]' />
          <p className='text-[#E0E0E0] font-thin'>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
        </div>
      </div>
    </section>
  )
}

export default Products