import React from 'react';
import Card from '../../Components/Services/Card';
import './Sevice.css'; // Import the CSS file for styling

function OurServices() {
  const cardsArray = Array(8).fill(null); // Create an array with 6 elements

  return (
    <div className="ourservice-container">
      <div className="ourservice-header">
        <h1>Our <span>Services</span></h1>
        <div className="ourservice-search-filter">
          <input type="search" placeholder="Search Services" className="ourservice-search-input" />
          <select className="ourservice-filter-dropdown">
            <option>Filter</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <span className="ourservice-filter-icon">🔍</span> {/* Example icon, replace with actual icon */}
        </div>
      </div>
      
      {/* Map through the array to render 6 Card components */}
     
        <div className="ourservice-card-container">
          {cardsArray.map((_, index) => (
            <Card  key={index} />
          ))}
        </div>
      </div>
    
  );
}

export default OurServices;
