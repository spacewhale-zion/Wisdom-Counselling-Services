import React from 'react';
import '../ContactUs/Contact.css';
import ReachOut from './ReachOut';

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-left"> {/* Left */}
        <h1><span>Get in Touch </span>with us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi accusamus consectetur, voluptas laudantium molestiae ducimus cupiditate in iusto modi?</p>
        
        <h2>Contact Information</h2>
        <span >Phone Number</span><strong>: 0124896484</strong>
        <br />
        <span>Email Address</span>: <strong>Lorem ipsum dolor sit amet consectetur</strong>
        <br />
        <span>Office Address</span>:<strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, odio rerum nesciunt magni veniam quidem totam beatae modi consectetur illo! </strong>

        <h2>Office Hours</h2>
        <span>Monday to Friday </span> <strong>: 9:00 AM - 6:00 PM</strong>
        <br />
    
        <span>Saturday</span> <strong>: 10:00 AM - 4:00 PM</strong>
        <br />
        <span>Sunday </span> <strong> :Closed</strong>
      </div>

      <div className="contact-right"> {/* Right */}
        <div className="image-containerContact">
          <img src="/Assests/FORM.png" alt="Image 1" className="image" />
          <img src="/Assests/FORM1.png" alt="Image 2" className="image" />
          <img src="/Assests/FORM2.png" alt="Image 3" className="image" />

          <ReachOut />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
