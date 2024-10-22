import React, { useEffect, useState } from 'react';
import '../Services/Services.css';
import Card from '../Services/Card';

function Services() {
    const servicesList = [
        {
            id: 1,
            image: 'http://example.com/image1.jpg', // Replace with actual image URL
            heading: 'Service One',
        },
        {
            id: 2,
            image: 'http://example.com/image2.jpg', // Replace with actual image URL
            heading: 'Service Two',
        },
        {
            id: 3,
            image: 'http://example.com/image3.jpg', // Replace with actual image URL
            heading: 'Service Three',
        },
        {
            id: 4,
            image: 'http://example.com/image4.jpg', // Replace with actual image URL
            heading: 'Service Four',
        },
        {
            id: 5,
            image: 'http://example.com/image5.jpg', // Replace with actual image URL
            heading: 'Service Five',
        },
        {
            id: 6,
            image: 'http://example.com/image6.jpg', // Replace with actual image URL
            heading: 'Service Six',
        },
    ];

    const [cardsToShow, setCardsToShow] =useState(4);


    useEffect(()=>{

        const screenSize=window.innerWidth;
        const updateCardsToShow = () => {
            if(screenSize<1110){
                setCardsToShow(3);
            }
            if(screenSize<878){
                setCardsToShow(2);
            }
            if(screenSize<769){
                setCardsToShow(1);
            }
          };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);

        return ()=>{
            window.removeEventListener('resize', updateCardsToShow); 
        }
    
    


    },[])

    const [currentIndex, setCurrentIndex] = useState(0); // Track the current index

    // Function to go to the previous service
    const handlePrev = () => {
        const newIndex = currentIndex === 0 ? servicesList.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Function to go to the next service
    const handleNext = () => {
        const newIndex = currentIndex === servicesList.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Set how many services you want to display at a time
    const visibleServices = servicesList.slice(currentIndex, currentIndex + cardsToShow);

    return (
        <>
            <div className="top-Services">
                <div className="top-cont">
                <h1>Explore Our <span style={{ color: '#00A6F6' }}>Comprehensive <br /> Counseling Services</span></h1>
                <span className='ExploreService'>Explore More Services →</span>
                </div>

                <div className="top-Services-container">
                    <button className="arrow-left" onClick={handlePrev}>←</button>

                    <div className="Services-card">
                    {/* Render the currently visible services */}
                    {visibleServices.map(service => (
                        <Card
                            key={service.id}
                            Image={service.image}
                            Heading={service.heading}
                        />
                    ))}
                    </div>

                    <button className="arrow-right" onClick={handleNext}>→</button>
                </div>
            </div>
        </>
    );
}

export default Services;
