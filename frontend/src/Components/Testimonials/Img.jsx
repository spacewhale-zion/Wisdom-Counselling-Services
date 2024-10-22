import React from 'react';
import '../Testimonials/Testimonials.css'; // Import the CSS file for styles
import { FaStar } from 'react-icons/fa'; // Import a star icon for ratings
function Img() {
  return (
    <div className="testimonial-card">
      
      <div className="testimonial-review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque quisquam ab voluptatum autem obcaecati exercitationem libero temporibus nostrum tempore, qui perspiciatis rerum sapiente sequi.
      </div>
         {/* Ratings Section */}
         <div className="card-rating">
        {/* Display the number of filled stars based on the rating prop */}
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            color={"#ffc107" } // Color the stars based on the rating
            size={20} // Adjust the size of the stars if needed
          />
        ))}
      </div>
      <img src='/public/Assests/Ellipse 11.png' alt="Person" className="testimonial-image" />
    </div>
  );
}

export default Img;
