import React, { useState } from 'react';
import './Blogs.css'; // Assuming you have an external CSS file for styling

const cardData = [
  {
    title: 'Resume Building',
    heading: 'Learn how to craft a resume that stands out and effectively showcase your skill & experiences',
    description: 'At Wisdom Counseling Services, we are dedicated to providing compassionate and personalized support to help you achieve your educational and career goals.',
    image: './Assests/blogimg.png',
    authorImage: './Assests/Ellipse14.png',
    authorName: 'Dr. Jane Doe',
    date: 'Created: 20/12/2023',
  },
  {
    title: 'Career Guidance',
    heading: 'Explore career opportunities and find the best match for your skills and passion.',
    description: 'We offer insights and resources to help you pursue your dream career with confidence.',
    image: './Assests/blogimg.png',
    authorImage: './Assests/Ellipse 15.png',
    authorName: 'Mr. John Smith',
    date: 'Created: 15/12/2023',
  },
  // Add more card data as needed
];

function MostlyViewed() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Function to handle card change
  const handleCardChange = (direction) => {
    if (direction === 'left') {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
      );
    } else if (direction === 'right') {
      setCurrentCardIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const currentCard = cardData[currentCardIndex];

  return (
    <div className="mostly-viewed-container">
      {/* Title and Option Bar Container */}
      <div className="mostly-viewed-header">
        <h1 className="mostly-viewed-title">
          Mostly Viewed <span className="mostly-viewed-highlight">Blogs</span>
        </h1>

        {/* Today Option Bar */}
        <div className="mostly-viewed-today-option-bar">
          <select name="Today" className="mostly-viewed-select">
            <option value="default">Today</option>
            <option value="yesterday">Yesterday</option>
          </select>
        </div>
      </div>

      <div className="mostly-viewed-cards-container">
        {/* Left Arrow */}
        <div
          className="mostly-viewed-left-arrow"
          onClick={() => handleCardChange('left')}
        >
          {"<"}
        </div>

        {/* Card */}
        <div className="mostly-viewed-card">
          {/* Left part of the card */}
          <div className="mostly-viewed-card-left">
            <img
              src={currentCard.image}
              alt="blog"
              className="mostly-viewed-blog-image"
            />
          </div>

          {/* Right part of the card */}
          <div className="mostly-viewed-card-right">
            <p className="hero-counselors-text1 blog-text">{currentCard.title}</p>

            <h2>{currentCard.heading}</h2>
            <div className="mostly-viewed-author-details">
              <img
                src={currentCard.authorImage}
                alt="profile"
                className="mostly-viewed-profile-picture"
              />
              <span className="mostly-viewed-name">{currentCard.authorName}</span>
              <span className="mostly-viewed-date">{currentCard.date}</span>
            </div>
            <p className="mostly-viewed-description">
              {currentCard.description}
            </p>
            <button className="card-buttonServices blog-button">
              View More
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <div
          className="mostly-viewed-right-arrow"
          onClick={() => handleCardChange('right')}
        >
          {">"}
        </div>
      </div>
    </div>
  );
}

export default MostlyViewed;
