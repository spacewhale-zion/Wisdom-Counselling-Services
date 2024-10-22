import React from 'react';
import '../Googlemeet/meet.css'; 

function MeetCard({ size }) {
    // You can customize the content of the card as needed
    const cardContent = {
        image: './Assests/meet.png', // Replace with the actual image URL
        title: 'Convenient', // Replace with actual title
        para:'Connect from anywhere with an internet connection'
    };

    return (
        <div className={`meet-card ${size}`}>
            <img src={cardContent.image} alt={cardContent.title} className="meet-card-image" />
            <h2 className="meet-card-title">{cardContent.title}</h2>
            <p className='meet-card-p'>{cardContent.para}</p>
        </div>
    );
}

export default MeetCard;
