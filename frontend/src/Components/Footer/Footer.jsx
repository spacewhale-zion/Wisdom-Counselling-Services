import React from 'react';
import './Footer.css'; // Make sure to create a Footer.css file for styling
import NewsLetter from './NewsLetter';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Copyright from './Copyright';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Logo */}
        <div className="footer-logo">
          <img src="./Assests/logo_white.png" alt="Company Logo" />
        </div>
        
        <div className="footer-quote">
          <blockquote>
           <img src="./Assests/quotemark.png" alt="" />
           Lorem ipsum dolor sit amet consectetur. Eu enim arcu aliqua ullamcorper mattis egestas in ultrices cursus. Eu enim arcu aliqua ullamcorper mattis egestas in ultrices cursus.
           
          </blockquote>
        </div>
      </div>
      
      {/* Horizontal Line */}
      <hr className="footer-divider" />
      
      {/* Additional Sections */}
      <div className="footer-sections">
        <div className="footer-section-left">
        <div className="footer-section">
        <h4>Reach Us</h4>
          <p><FaEnvelope /> Email: contact@company.com</p>
          <p><FaPhone /> Phone: +123 456 7890</p>
          <p><FaMapMarkerAlt /> Address: Your Address Here</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Terms of Use</p>
          <p>Refund Policy</p>

        </div>
        </div>
        
        
        {/* Newsletter Card */}
        <div className="footer-section newsletter">
          <NewsLetter/>
        </div>
      </div>
    
    </footer>
  );
}

export default Footer;
