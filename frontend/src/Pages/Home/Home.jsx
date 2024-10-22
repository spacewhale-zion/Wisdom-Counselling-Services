import React from 'react'
import Topheader  from '../../Components/Topheader/Topheader.jsx'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import './home.css'
import HeroSection from '../../Components/HeroSection/HeroSection.jsx'
import Topcouncelors from '../../Components/TopCouncelors/Topcouncelors.jsx'
import Services from '../../Components/Services/Services.jsx'
import Meet from '../../Components/Googlemeet/meet.jsx'
import Slot from '../../Components/BookSlot/Slot.jsx'
import Testimonials from '../../Components/Testimonials/Testimonials.jsx'
import ContactUs from '../../Components/ContactUs/ContactUs.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import Copyright from '../../Components/Footer/Copyright.jsx'


function Home() {
  return (
    <div className="home">
      {/* <Topheader />  */}
      {/* <Navbar /> */}
      <HeroSection/>
      <Topcouncelors/>
     <Services/>
        <Meet/>
       <Slot/>
       <Testimonials/>
       {/* <ContactUs/> */}
       {/* <Footer/> */}
       {/*  <Copyright/> */}
    </div>
  )
}

export default Home