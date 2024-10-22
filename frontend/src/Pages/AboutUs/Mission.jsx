import React from 'react';
import './About.css';

function Mission() {
    return (
        <div className="Mission">
            <div className="mission-container">
                <div className="mission-section">
                    <h1>Our <span>Mission</span></h1>
                    <p>At Wisdom Counseling Services, our mission is to provide personalized and compassionate guidance to help individuals achieve their educational and career goals.</p>
                </div>
                <div className="image-section">
                    <div className="semi-circle1">
                        <img src="./Assests/aboutus2semicircle.png" alt="Mission" className="mission-image1" />
                        -
                    </div>
                </div>
            </div>

            <div className='vision-container'>
                <div className="vision-section">
                    <div className="image-section">
                        <div className="semi-circle2">
                            <img src="./Assests/aboutus1semicircle.png" alt="Vision" className="mission-image2" />
                          
                        </div>
                    </div>
                    <h1>Our <span>Vision</span></h1>
                    <p>At Wisdom Counseling Services, our vision is to create a supportive environment where individuals can thrive in their personal and professional journeys.</p>
                </div>
            </div>
        </div>
    );
}

export default Mission;
