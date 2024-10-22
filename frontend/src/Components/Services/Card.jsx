import React from 'react'
import '../Services/Services.css'

function card() {
  return (
    <div className="card-containerServices">
    {/* Top Image */}
    <img src="./Assests/pic.png" alt="Card Image" className="card-image" />

     <p > Education <br /> Counselling</p>

    {/* Button */}
    <button className="card-buttonServices">Read more</button>
  </div>
  )
}

export default card