import React from 'react'
import Nav from './Nav';
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'
import rafikihome from '../../assets/rafikihome.png'
import Sponsors from './Sponsors';
import Homecards from './Homecards';
import AboutUs from './AboutUs';
import Services from './Services';
import Products from './Products';
import Team from './Team';
import { Contact } from './Contact';
import { Footer } from './Footer';

export const Landingpage = () => {
  
  return (
    <div>
      <div className=' bg-[#0D0346] lg:h-20 w-20 absolute -top-11 -left-11 rounded-full '></div> {/*<!--Arc at the top left. The dark purple stuff-->*/}
      
      <div className='bg-[#A69BE7] pb-16 md:pb-20'> {/* Div for the home section. Includes everything with a light purple backgrounnd.*/}
        <Nav /> {/*Navbar*/}

        <div className='mt-10 lg:mt-16 md:grid md:grid-cols-2 gap-8 ' id='Home'>
          <div className=' w-11/12 mx-auto '>
            <h2 className=' text-[40px] lg:text-6xl text-white w-11/12 font-playfair leading-[64px] md:mt-10'>Get Notifications On Your Vaccination Appointments.</h2>
            <p className=' mt-4 text-regular text-white font-poppins  lg:leading-7'>Digitizing vaccination processes and records for you. <br />An emerging “All in One” tool that aims at redefining vaccines last mile administration for effective tracking and surveillance, provision of easily accessible, verifiable, contactless certification. </p>
            <div className='flex py-4 justify-between w-fit'>
              <img src={googleplay} className='w-[176px] h-14 mr-4' alt='Get it on Google play'/> 
              <img src={appstore} className='w-[180px] h-14' alt='Get it on App store'/>
            </div>
          </div>

          <div className=' text-center '><img src={rafikihome} className='hidden md:block' alt="homeImage" /></div>
        </div>
      </div>
          {/* ==== Home content ends. Everything with a light purple background ends here. ==== */}
        
        <Sponsors /> {/* List of sponsors */}
        <Homecards />
        <AboutUs />
        <Services />
        <Products />
        <Team />
        <Contact />
        <Footer />
    </div>
  )
}
