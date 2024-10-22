import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import '../HeroSection/hero.css'; // Import CSS

function BookYourAppointment() {
  return (
    <Card className="appointment-card">
      <div className="appointment-body">
        <Card.Body>
      
          <Card.Title>Book Your Appointment</Card.Title>
          <Card.Text className="card-text1">
          Schedule a session with one of our experts. Complete the form to confirm your appointment.
          </Card.Text>

          {/* Type of Counselling Section */}
          <div className="counselling-section">
            <h5>Type of Counselling</h5>
            <Form.Select aria-label="Select Type of Counselling" className="custom-dropdown">
              <option>Select type of counselling</option>
              <option value="1">Personal Counseling</option>
              <option value="2">Career Counseling</option>
              <option value="3">Therapy Sessions</option>
            </Form.Select>
          </div>

          <Card.Text className="card-text2">
          If your specific counseling need isn't listed, please select 'Other' and provide the details.
          </Card.Text>

          {/* Button Positioned to Right */}
          <div className="button-container">
            <Button variant="primary" style={{background: '#8D3AEA' ,width:'100px'}}>Proceed</Button>
          </div>
        </Card.Body>
      </div>
      
      {/* Right Side Image */}
      <div className="image-container">
        <Card.Img 
          variant="top" 
          src='./Assests/designCard.png' 
          className="circular-image" 
        />
      </div>
    </Card>
  );
}

export default BookYourAppointment;
