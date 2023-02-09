import React from 'react'
import Group286 from '../../assets/Group 286.png';
import { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';


const Nav = () => {
    const [openLink, setOpenLink] = useState(false)
    const toggleNavbar = () => {
        setOpenLink(!openLink)
    }

  return (
    <nav className="px-2 sm:px-4 py-2.5">

          <div className="container flex flex-wrap md:flex-nowrap items-center justify-between mx-auto">
            <a href="#Antigen" className="lg:ml-8">
                <img src={Group286} className=" ml-2 h-11 mr-3 lg:h-14 lg:mt-4 " alt="Logo" />
            </a>
            <div onClick={toggleNavbar} data-collapse-toggle="navbar-default " type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </div>

            <div className={`w-full overflow-hidden md:block md:w-auto absolute md:static top-14 left-0 z-10  bg-[#A69BE7] ${openLink ? "flex" : "hidden"} ` }>
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:items-center md:flex-row md:space-x-9 font-normal md:font-light md:mt-0 md:text-base lg:text-lg  md:border-0">
                <li>
                  <NavHashLink smooth to="/index#home" className={`block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-[#313163] duration-300 `} >Home</NavHashLink>
                </li>
                <li>
                  <NavHashLink smooth to="/index#about" className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-[#313163] md:p-0 duration-300">About Us</NavHashLink>
                </li>
                <li>
                  <NavHashLink smooth to="/index#services" className="block py-2 pl-3 pr-4 text-white text-w hitemd:hover:bg-transparent md:border-0 md:hover:text-[#313163] md:p-0 duration-300">Our Services</NavHashLink>
                </li>
                <li>
                  <NavHashLink smooth to="/index#products" className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-[#313163] md:p-0 duration-300">Our Product</NavHashLink>
                </li>
                <li>
                  <NavHashLink smooth to="/index#contact" className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-[#313163] md:p-0 duration-300">Contact Us</NavHashLink>
                </li>
                <li className=' mr-12 '>
                  <button className=' bg-[#313163] w-24 h-8 block font-light text-base  text-white rounded-xl lg:mr-16 hover:bg-white hover:text-[#313163] duration-300'>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  )
}

export default Nav