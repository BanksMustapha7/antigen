import React from 'react'
import child from '../../../assets/faces/child.jpeg'

export const ChildDetails = () => {
  return (
    <>
        <div className='mt-6 md:mt-2 lg:mt-0 flex justify-between items-center w-11/12 mx-auto'>
            <h2 className='text-[#313163] text-lg md:text-xl lg:text-2xl font-medium'>Child's Details</h2>
            <div>
                <button className='text-[#B00020] text-sm md:text-base border-[#B00020] border border-solid rounded-2xl py-2 px-4 md:py-3 md:px-6 hover:bg-[#B00020] hover:text-white duration-100'>Delete Patient</button>
            </div>
        </div>
        <hr className='h-px bg-[#BDBDBD] my-5 w-11/12 mx-auto' />

        <div className='bg-white w-11/12 mx-auto px-3 md:pl-6 lg:pl-2 py-3 md:py-6 rounded-md shadow-[2px_8px_20px_rgba(181,181,181,0.2)]'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-around gap-5 '>
                <div className='col-span-2 md:col-span-1'>
                    <h2 className='text-[#333333] text-xl font-medium mb-2'>Profile Picture</h2>
                    <img src={child} className='w-28 lg:w-36 rounded-lg' alt="" />
                </div>

                <p className=' hidden lg:inline-block h-auto opacity-100 w-[0.5px] bg-[#BDBDBD]' />

                <div className='ml-2'>
                    <div className='mb-3 lg:mb-14'>
                        <h3 className='text-[#333333] text-lg font-medium '>Child Name:</h3>
                        <p className='text-[#4f4f4f] font-light'>Shola Aluko</p> 
                    </div>
                    <div>
                        <h3 className='text-[#333333] text-lg font-medium'>Sex:</h3>
                        <p className='text-[#4f4f4f] font-light'>Female</p>
                    </div>
                </div>

                <div className='ml-2'>
                    <div className='mb-3 lg:mb-14'>
                        <h3 className='text-[#333333] text-lg font-medium'>Date of Birth:</h3>
                        <p className='text-[#4f4f4f] font-light'>01/08/1991</p>
                    </div>
                    <div>
                        <h3 className='text-[#333333] text-lg font-medium'>Genotype:</h3>
                        <p className='text-[#4f4f4f] font-light'>AA</p>
                    </div>
                </div>

                <div className='ml-2'>
                    <div className='mb-3 lg:mb-14'>
                        <h3 className='text-[#333333] text-lg font-medium'>Country:</h3>
                        <p className='text-[#4f4f4f] font-light'>Nigeria</p>
                    </div>
                    <div>
                        <h3 className='text-[#333333] text-lg font-medium'>Blood Group:</h3>
                        <p className='text-[#4f4f4f] font-light'>O<sup>-</sup> </p>
                    </div>
                </div>

                <div className='ml-2'>
                    <div className='mb-3 lg:mb-14'>
                        <h3 className='text-[#333333] text-lg font-medium'>Mobile Number:</h3>
                        <p className='text-[#4f4f4f] font-light'>+234 700 0000 000</p>
                    </div>
                    <div>
                        <h3 className='text-[#333333] text-lg font-medium'>HIV Status:</h3>
                        <p className='text-[#4f4f4f] font-light'>Negative</p>
                    </div>
                </div>
            </div>
            <hr className='h-px bg-[#BDBDBD] mt-7 mb-5 w-11/12 mx-auto' />

            <div className='w-11/12 mx-auto '>
                <h2 className='text-[#333333] font-medium text-xl pb-3 lg:pb-2'>About Child</h2>
                <p className='text-[#4F4F4F] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id suspendisse ultricies. Massa ultrices metus enim pharetra, sit porttitor. Tortor tempus molestie sagittis cras dui a, pharetra. Massa erat ullamcorper amet nam tempor. </p>
            </div>

            <hr className='h-px bg-[#BDBDBD] mt-7 mb-5 w-11/12 mx-auto' />

            <div className='w-11/12 mx-auto '>
                <h2 className='text-[#333333] font-medium text-xl pb-3 lg:pb-2'>Child Current Health Issue</h2>
                <p className='text-[#4F4F4F] font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci lectus nec proin aenean semper suspendisse in. Viverra aenean sagittis tincidunt id suspendisse ultricies. Massa ultrices metus enim pharetra, sit porttitor. Tortor tempus molestie sagittis cras dui a, pharetra. Massa erat ullamcorper amet nam tempor. </p>
            </div>

        </div>
        
    </>
  )
}