import React from 'react'
import Meet from '../../Components/Googlemeet/meet'
import Slot from '../../Components/BookSlot/Slot'
import Topcouncelors from '../../Components/TopCouncelors/Topcouncelors'
import OurServices from './OurServices'
import ServiceHero from './ServiceHero'

function Service() {
  return (
    <div>
     <ServiceHero/>   
   <OurServices/>
  <Meet/> 
 <Slot/>
  <Topcouncelors/> 

    </div>
  )
}

export default Service