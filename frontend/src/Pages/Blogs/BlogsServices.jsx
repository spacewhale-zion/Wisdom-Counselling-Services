import React, { useState } from 'react';
import Card from '../../Components/Services/Card';
import './Blogs.css'

function BlogsServices() {
  const cardsArray = Array(50).fill(null); // Create an array with 50 elements
  const cardsPerPage = 8; // Number of cards to display at once
  const [currentPage, setCurrentPage] = useState(0); // Track current page of cards

  // Calculate the range of cards to be displayed based on the current page
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedCards = cardsArray.slice(startIndex, endIndex);

  // Handle navigation function
  const handleNavigation = (direction) => {
    if (direction === 'next' && endIndex < cardsArray.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="ourservice-container ourservice-new-feature">
      <div className="ourservice-header">
        <h1>Blogs related to All <span>Services</span></h1>
        <div className="ourservice-search-filter">
          <input type="search" placeholder="Search Services" className="ourservice-search-input ourservice-new-feature-input" />
          <select className="ourservice-filter-dropdown">
            <option>Filter</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <span className="ourservice-filter-icon">🔍</span>
        </div>
      </div>

      {/* Card Container with Arrows */}
      <div className="ourservice-card-navigation ourservice-new-feature-navigation">
        <button
          className="ourservice-prev-arrow ourservice-new-feature-arrow"
          onClick={() => handleNavigation('prev')}
          disabled={currentPage === 0} // Disable if on first page
        >
          {"<"}
        </button>

        <div className="ourservice-card-container">
          {displayedCards.map((_, index) => (
            <Card key={startIndex + index} className="ourservice-new-feature-card" />
          ))}
        </div>

        <button
          className="ourservice-next-arrow ourservice-new-feature-arrow"
          onClick={() => handleNavigation('next')}
          disabled={endIndex >= cardsArray.length} // Disable if on last page
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default BlogsServices;
