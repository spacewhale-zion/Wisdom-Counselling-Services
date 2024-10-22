import React, { useState,useEffect } from 'react';
import Img from '../Testimonials/Img'; // Assuming Img is a component that displays a testimonial
import '../Testimonials/Testimonials.css';

function Testimonials() {
  // Define the testimonials array with actual review data
  const reviews = [
    { testimonial: "This is a great service!", image: "/path/to/image1.png" },
    { testimonial: "Highly recommend!", image: "/path/to/image2.png" },
    { testimonial: "Will definitely use again.", image: "/path/to/image3.png" },
    { testimonial: "Amazing experience!", image: "/path/to/image4.png" },
    { testimonial: "Professional and friendly staff.", image: "/path/to/image5.png" },
    { testimonial: "Loved it!", image: "/path/to/image6.png" },
    { testimonial: "Highly recommend!", image: "/path/to/image2.png" },
    { testimonial: "Will definitely use again.", image: "/path/to/image3.png" },
    { testimonial: "Amazing experience!", image: "/path/to/image4.png" },
    { testimonial: "Professional and friendly staff.", image: "/path/to/image5.png" },
    { testimonial: "Loved it!", image: "/path/to/image6.png" },
  ];
  const [cardsToShow, setCardsToShow] = useState(3);


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateCardsToShow = () => {
     
      if(window.innerWidth <=769){
        setCardsToShow(1);
      }
       else if (window.innerWidth <=1200) {
        setCardsToShow(2)
      }
      else {
        setCardsToShow(3); // Default to 3 cards on normal screens
      }
    };

    // Initial call to set the number of cards based on screen size
    updateCardsToShow();

    // Add event listener for window resize
    window.addEventListener('resize', updateCardsToShow);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, []);

  const nextTestimonials = () => {
    // Move to the next set, but ensure it wraps back to the beginning if it reaches the end
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 < reviews.length ? prevIndex + 2 : 0
    );
  };

  const prevTestimonials = () => {
    // Move to the previous set, but ensure it wraps to the end if it reaches the beginning
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 >= 0 ? prevIndex - 2 : reviews.length - 2
    );
  };

  return (
    <div className="testimonials-container">
      <h1>
        What <span className="highlight">Our Clients</span> are Saying
      </h1>

      <div className="testimonials-wrapper">
        <button className="arrow-button left-arrow" onClick={prevTestimonials}>
          &#8249; {/* Left arrow */}
        </button>

        <div className="testimonials-grid">
          {reviews.slice(currentIndex, currentIndex + cardsToShow).map((review, index) => (
            <div key={index} className="testimonial-item">
              <Img testimonial={review.testimonial} image={review.image} />
            </div>
          ))}
        </div>

        <button className="arrow-button right-arrow" onClick={nextTestimonials}>
          &#8250; {/* Right arrow */}
        </button>
      </div>
      <button className="testimonials-button"> CreateReview+</button>
    </div>
  );
}

export default Testimonials;
