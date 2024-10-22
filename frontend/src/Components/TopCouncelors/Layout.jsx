import React from 'react';
import '../TopCouncelors/Councellor.css';
import { FaStar } from 'react-icons/fa'; // Import a star icon for ratings

function Layout({ name, image, details1, details2, description, rating }) {
  return (
    <div className="card-container">
      {/* Top Image */}
      <img src={image} alt="Card Image" className="card-image" />

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

      {/* Name */}
      <h2 className="card-name">{name}</h2>

      {/* Two side-by-side divs */}
      <div className="card-info">
        <div className="info-box">
          <h4>{details1}</h4>
        </div>
        <div className="info-box">
          <h4>{details2}</h4>
        </div>
      </div>

      {/* Text below the divs */}
      <p className="card-text">
        {description}
      </p>

      {/* Button */}
      <button className="card-button">Book Now</button>
    </div>
  );
}

export default Layout;
