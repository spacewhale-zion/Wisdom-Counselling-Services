import React from 'react';
import BookYourAppointment from './BookYourAppointment';
import '../HeroSection/hero.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <p className="hero-counselors-text1">100% Guaranteed choice </p>
        <h1>Find the <span>Right <br />Counselor</span>  for you</h1>
        <p>
          Get Expert Guidance for Your Educational, Career, and Personal Growth.
          Achieve Your Goals with Personalized Support from Top Counselors. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate eum magnam accusamus natus nobis sunt vitae, neque laudantium autem esse ipsum, debitis dolorem tempore ad animi dolorum porro voluptatem expedita corrupti aspernatur ullam aliquam, impedit soluta quaerat. Voluptas voluptatem labore soluta sint placeat provident numquam iste. Omnis excepturi veniam consequatur.
        </p>

        <div className="hero-buttons">
          <button className='connected'>Let's get Connected</button>
          <button className='Learn'>Learn More</button>
        </div>
        <p className="hero-counselors-text2">
          See the highly certified Counselors in wisdom counselor services
        </p>
      </div>
      <div className="hero-appointment">
        <BookYourAppointment />
      </div>
    </div>
  );
}

export default HeroSection;
