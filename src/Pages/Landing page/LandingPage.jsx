import React from 'react'
import Group287 from '../../assets/Group 286.png';
import './Landing.css';
import rafikihome from '../../assets/rafikihome.png'
import googleplay from '../../assets/googleplay.png'
import appstore from '../../assets/appstore.png'
import fedex from '../../assets/FedEx.png'
import airbnb from '../../assets/Airbnb.png'
import hubspot from '../../assets/Hubspot.png'
import google from '../../assets/googlelogo.png'
import microsoft from '../../assets/Microsoft.png'
import walmart from '../../assets/Walmart.png'
import certificate from '../../assets/certificate.png'
import reminder from '../../assets/reminder.png'
import building from '../../assets/building.png'
import doctor from '../../assets/doctor.png'
import vaxxPhases from '../../assets/vaccinePhases.png'
import syringe from '../../assets/syringe.png'
import doctor_services from '../../assets/doctor_services.png'
import notification_services from '../../assets/notification_services.png'
import hospital_services from '../../assets/hospital_services.png'
import certificate_services from '../../assets/certificate_services.png'
import services_rafiki from '../../assets/services_rafiki.png'


export const LandingPage = () => {
  return (
    <>
    <nav>
      <div className='navbar'>
        <div className='logoContainer'> <img src={Group287} alt='' width='40px'/> </div>
        <div className='rightSide'>
          <a href='#home'>Home</a>
          <a href='#about'>About us</a>
          <a href='#services'>Our Services</a>
          <a href='#products'>Our Products</a>
          <a href='#contact'>Contact Us</a>
          <button className='loginButton'>Login</button>
        </div>
      </div>
    </nav>
    
      {/*================================== Navbar ends here ============================ */}
    <section className='home' id='home'>

      <div className='homeContent'>
        <div className='homeText'>
          <h2>Get Notifications On Your Vacination Appointments.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='appStore'>
            <img src={googleplay} alt='Get it on Google play' width='200px'/> 
            <img src={appstore} alt='Get it on App store' width='180px'/>
          </div>
        </div>
        <div className='rafikiHome'>
          <img src={rafikihome} alt='' width='100%' />
        </div>
      </div>
    </section>

    <div className='fadeEffectTop'></div>
    <div className='logoSection'>
      <div><img src={airbnb} alt='' width='90px' /></div>
      <div><img src={hubspot} alt=''/></div>
      <div><img src={google} alt='' /></div>
      <div><img src={microsoft} alt=''/></div>
      <div><img src={walmart}alt='' /></div>
      <div><img src={fedex} alt=''/></div>
    </div>
    <div className='fadeEffectBottom'></div>

    <div className='frames'>
      <div className='frameContent'>
        <div className='imgContainer'><img src={certificate} alt=''/></div>
        <h3>Get your certificate online</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
      </div>
      <div className='frameContent' >
        <div className='imgContainer'><img src={reminder} alt='' /></div>
        <h3>Set reminders for vaccinations</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>
      <div className='frameContent' >        
        <div className='imgContainer'><img src={building} alt='' /></div>
        <h3>schedule Appointments</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>
      <div className='frameContent' >        
        <div className='imgContainer'><img src={doctor} alt='' /></div>
        <h3>Speak With A Doctor</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
      </div>

    </div>

    <section className='about' id='about'>
      <h2>About us</h2>
      <div className='thickLine'></div>

      <div className='whoWeAre' >
        <div className='aboutContent'>
          <div className='imgContainer'> <img src={vaxxPhases} alt='' width='100%'/>  </div>
          <div className='textContainer'>
            <p className='fourteenpx' style={{color: '#313163'}}>Antigen</p>
            <h3>Who We Are</h3>
            <p className='sixteenPx' style={{color: '#4f4f4f', textAlign: 'justify'}}>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
          </div>
        </div>

        {/* ===============SECOND ROW =================================== */}
        <div className='aboutContent' style={{marginTop: '3rem'}}>
          <div className='textContainer'>
            <p className='fourteenpx' style={{color: '#313163'}}>Antigen</p>
            <h3>Who We Are</h3>
            <p className='sixteenPx' style={{color: '#4f4f4f', textAlign: 'justify'}}>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
          </div>
          <div className='imgContainer' style={{textAlign: 'right'}}> <img src={syringe} alt='' width='90%'/>  </div>
        </div>
      </div>
    </section>

    <section  className='services' id='services'>
      <h2>OurServices</h2>
      <div className='thickLine'></div>

      <div className='servicesContainer'>
        <div className='whatWeOffer'>
          <h3>What we offer</h3>
          <hr style={{backgroundColor: 'white', width: '50px', marginTop: '1rem', marginBottom: '1.8rem'}} />
          <p>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
        </div>

        <div className='servicesRight'>
          <div className='eachService'>
            <div className='imgContainer'><img src={certificate_services} alt='Certificate' width='50px' /></div>
            <div className='textContainer'>
              <h3>Get your certificate online</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>

          <div className='eachService'>
            <div className='imgContainer'><img src={hospital_services} alt='Reminder' width='50px' /></div>
            <div className='textContainer'>
              <h3>Schedule appointments</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>

          <div className='eachService'>
            <div className='imgContainer'><img src={notification_services} alt='Hospital Building' width='50px' /></div>
            <div className='textContainer'>
              <h3>Set reminders for vaccinations</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>

          <div className='eachService'>
            <div className='imgContainer'><img src={doctor_services} alt='Doctor' width='50px' /></div>
            <div className='textContainer'>
              <h3>Speak with a Doctor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='products' id='products'>
      <h2>Our Product</h2>
      <div className='thickLine'></div>

      <div className='productContainer'>
        <div className='imgContainer'><img src={services_rafiki} alt='notifications reminder'  /></div>
        <div className='textContainer'>
          <h3>Vaccine Reminder</h3>
          <hr style={{backgroundColor: 'white', width: '50px', marginTop: '1rem', marginBottom: '1.8rem', height: '2px'}} />
          <p>Enim non vel diam fusce elementum. Faucibus ut faucibus integer purus egestas adipiscing in amet ligula. Sem sed volutpat eget odio mauris ultrices egestas. Viverra nisl, amet, faucibus pretium amet, quis. Placerat tellus fusce vivamus lacinia arcu massa nam eget. Libero, at eu neque in adipiscing bibendum elit. Dui auctor aliquet nibh donec accumsan. Venenatis, id ac habitant in. Sed eget porttitor leo morbi congue maecenas erat. Mauris sed eu nisl sem dui pharetra, luctus pharetra molestie.</p>
        </div>
      </div>
    </section>

    <section className='team' id='team'>
      <h2>The Team</h2>
      <div className='thickLine'></div>
      <div className='cardContainer'></div>
    </section>
    </>
  )
}