import React from 'react'
import MeetCard from '../../Components/Googlemeet/MeetCard'

function AboutUsMeet() {
  return (
    <div className="meet-container">
    <div className="meet-left">
      {/* <img src="" alt="" className="meet-image" /> */}
      <div className="book-meet">Book a Google Meet Discussion</div>
      <h1>
        Our 
        <span className="blue-text">Achivements <br /></span> Speak for Themselves 
      </h1>
      <p>Our Google Meet discussions provide a convenient and secure way to connect with our expert counselors. Experience the benefits of professional counseling from the comfort of your home or office.</p>
      <button className="connect-button">Let's Get Connected</button>
    </div>
    
    <div className="meet-right">
     
      <MeetCard size="large" />
      <MeetCard size="medium" />
      <MeetCard size="small" />
      <MeetCard size="medium" />
    </div>
  </div>
  )
}

export default AboutUsMeet