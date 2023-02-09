import React from 'react'
import facebook from '../../assets/facebookvector.png'
import twitter from '../../assets/twittervector.png'
import linkedin from '../../assets/linkedinvector.png'
import instagram from '../../assets/instavector.png'
import { useState } from 'react'

export const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
  return (
    <section className='mt-14 lg:mt-20' id='contact'>
        <h2 className='font-playfair text-center font-light text-4xl md:5xl text-[#20354A]'>Contact Us</h2>
        <div className='thickLine'></div>
        <div className='bg-[#A69BE7] mt-8 md:grid grid-cols-2 pb-12 lg:pb-20 lg:pt-10'>
            <div className='flex flex-col lg:w-3/5 w-4/5 mx-auto'>
                <div className=''>
                    <h4 className='text-white text-lg font-light mt-8'>Email Address</h4>
                    <p className='text-[#E0E0E0] font-light mt-4 text-sm'>email@antigen.com</p>
                </div>
                <div>
                    <h4 className='text-white text-lg font-light mt-10'>Phone Number</h4>
                    <p className='text-[#E0E0E0] font-light text-sm mt-4'>0907781****</p>
                </div>
                <div className='flex gap-10 lg:gap-6 mt-10'>
                    <div className='w-11 h-11 flex justify-center items-center bg-white rounded-full cursor-pointer p-[17px]'><img src={facebook} alt="facebook logo" /></div>
                    <div className='w-11 h-11 flex justify-center items-center bg-white rounded-full cursor-pointer p-3'><img src={instagram} alt="Instagram logo"  /></div>
                    <div className='w-11 h-11 flex justify-center items-center bg-white rounded-full cursor-pointer p-3'><img src={linkedin} alt="LinkedIn logo" /></div>
                    <div className='w-11 h-11 flex justify-center items-center bg-white rounded-full cursor-pointer p-3'><img src={twitter} alt="Twitter logo" /></div>
                </div>
            </div>

            <form className='mt-12 md:mt-3 w-4/5 mx-auto' onSubmit={(event) => {
                event.preventDefault()
                setTimeout(() => {
                    setEmail('')
                    setMessage('')
                    setName('')}, 400)
                }}>
                <div>
                    <div htmlFor="name" className='text-white py-4 font-light'>Name</div>
                    <input type="text" className='rounded-md h-12 w-full text-[#333333] px-2' name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                    <div htmlFor="email" className='text-white py-4 font-light' >Email</div>
                    <input type="email" className='rounded-md h-12 w-full text-[#333333] px-2' name="email" value={email} onChange={(e)=>setEmail(e.target.value) } />
                </div>
                <div>
                    <div htmlFor="message" className='text-white py-4 font-light' >Message</div>
                    <textarea value={message} className='resize-none w-full outline-none px-1 text-base h-40 rounded-md' onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
                <button className='mt-4 text-white font-light bg-[#313163] w-32 h-10 rounded-lg hover:bg-white hover:text-[#313163] duration-300' type='submit'>Send</button>
            </form>
        </div>
    </section>
  )
}
