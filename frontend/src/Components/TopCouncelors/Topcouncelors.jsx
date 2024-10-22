import React from 'react';
import Layout from './Layout';
import '../TopCouncelors/Councellor.css'


const doctors = [
    {
        id: 1,
        name: "Dr. John Doe",
        image: "./Assests/Ellipse 11.png",
        details1: "Cardiology",
        details2: "10 years",
        description: "Passionate about helping patients with heart diseases."
    },
    {
        id: 2,
        name: "Dr. Jane Smith",
        image: "./Assests/Ellipse 12.png",
        details1: "Neurology",
        details2: "15 years",
        description: "Dedicated to treating brain and nervous system disorders."
    },
    {
        id: 3,
        name: "Dr. Emily Johnson",
      image: "./Assests/Ellipse 13.png",
        details1: "Pediatrician",
        details2: "12 years",
        description: "Caring for children and adolescentsLorem ipsum dolor sit amet ."
    },
    {
        id: 4,
        name: "Dr. Michael Brown",
      image: "./Assests/Ellipse14.png",
        details1: "Orthopedic",
        details2: "8 years",
        description: "Specializing in musculoskeletal injuries Lorem ipsum dolor sit amet."
    },
   
];

function Topcouncelors() {
    return (
        <div className="top-counselors">
            <h1> Our <span style={{ color: '#00A6F6'}}>Top Counselors</span></h1>
            <div className="top-counselors-container">
                {doctors.map(doctor => (
                    <Layout 
                        key={doctor.id} 
                        name={doctor.name} 
                        image={doctor.image} 
                        details1={doctor.details1} 
                        details2={doctor.details2} 
                        description={doctor.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Topcouncelors;
