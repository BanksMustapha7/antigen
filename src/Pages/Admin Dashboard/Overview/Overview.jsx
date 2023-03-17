import React from 'react'
import { names } from './mocknames'
import add from '../../../assets/addpurple.png'
import syringe from '../../../assets/dashboardsyringe.png'
import hospital from '../../../assets/hospital.png'
import './scrollbar.css'
import { Link } from 'react-router-dom'

export const Overview = () => {
  return (
    <div className='overflow-hidden'>
        {/* Stats on top */}
        <div className='mt-6 lg:mt-2 md:grid grid-cols-3'>
            <div className='bg-[#0D0346] text-white w-11/12 mx-auto rounded-lg flex justify-between px-7 md:px-3 lg:px-6 py-4 lg:py-0 lg:pt-4 lg:pb-8'>
                <div className=''>
                    <h3 className='w-11/12 md:w-9/12 mb-2 font-light text-lg'>NUMBER OF PATIENTS</h3>
                    <p className='font-light'>15,000</p>
                </div>
                <div className='bg-white rounded-full h-fit mt-6'><img className='p-[9px]' src={add} alt="" /></div>
            </div>

            <div className='bg-[#313163] text-white w-11/12 mx-auto rounded-lg flex justify-between px-7 md:px-3 lg:px-6 py-4 lg:py-0 lg:pt-4 lg:pb-8 md:mt-0 mt-3'>
                <div className=''>
                    <h3 className='w-11/12 md:w-9/12 mb-2 font-light text-lg'>VACCINES GIVEN</h3>
                    <p className='font-light'>5,060</p>
                </div>
                <div className='bg-white h-fit p-[10px] rounded-full mt-6'><img src={syringe} alt="" /></div>
            </div>

            <div className='bg-[#20354A] text-white w-11/12 mx-auto rounded-lg flex justify-between px-7 md:px-3 lg:px-6 py-4 lg:py-0 lg:pt-4 lg:pb-8 md:mt-0 mt-3'>
                <div className=''>
                    <h3 className='w-11/12 md:w-9/12 mb-2 font-light text-lg'>PENDING APPOINTMENTS</h3>
                    <p className='font-light'>84</p>
                </div>
                <div className='bg-white h-fit p-[10px] rounded-full mt-6'><img src={hospital} alt="" /></div>
            </div>
        </div>
        {/* End of Stats */}

        <div className='w-11/12 lg:w-[97%] mx-auto lg:grid grid-cols-2 gap-10 md:mt-10'>
            {/* Patients */}
            <div className='mt-6'>
                <h2 className='text-2xl text-black font-light'>Patients</h2>
                <div className='bg-white mt-2 rounded-lg pt-4 shadow-[0_4px_24px_rgba(172,172,172,0.3)] max-h-[512px] overflow-y-scroll scroll'>

                    {
                        names.map((name,index)=>{
                            const currentFace = `face${index + 1}`
                            return(
                                <div className='w-11/12 mx-auto items-center justify-between flex flex-nowrap font-normal text-sm pb-5  md:pl-2 '>
                                    <div className=' flex flex-nowrap items-center gap-2'><img className='rounded-md' width='42px' src={require(`../../../assets/faces/${currentFace}.jpg`)}/> <p className='text-[#353A45] font-light lg:font-bold'>{name}</p></div>
                                    <div className='flex flex-nowrap md:gap-6 gap-2 '>
                                        <p className='text-[#353A45]'>Active</p>
                                        <p className='text-[#313163]'><Link to="patient-details">View Details</Link></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* List of Children */}
            <div className='mt-6'>
                <h2 className='text-2xl text-black font-light'>List of Children</h2>
                <div className='bg-white mt-2 rounded-lg pt-4 shadow-[0_4px_24px_rgba(172,172,172,0.3)] max-h-[512px] overflow-y-scroll scroll'>

                    {
                        names.map((name,index)=>{
                            const currentFace = `face${index + 1}`
                            return(
                                <div className='w-11/12 mx-auto items-center justify-between flex flex-nowrap font-normal text-sm pb-5  md:pl-2 '>
                                    <div className=' flex flex-nowrap items-center gap-2'><img className='rounded-md' width='42px' src={require(`../../../assets/faces/${currentFace}.jpg`)}/> <p className='text-[#353A45] font-light lg:font-bold'>{name}</p></div>
                                    <div className='flex flex-nowrap md:gap-6 gap-2 '>
                                        <p className='text-[#353A45]'>Active</p>
                                        <p className='text-[#313163]'><Link to="child-details">View Details</Link></p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    </div>
  )
}
