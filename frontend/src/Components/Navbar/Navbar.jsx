import React, { useState } from 'react';
import './Navbar.css'; // Import your custom styles

function MyNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Replace with your search logic
      alert(`Searching for: ${searchQuery}`);
      // You can call a search function or redirect to a search page here
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <div className="navbar-brand">
        <img src='../../../public/Assests/logo_white.png'alt="Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          onKeyPress={handleSearch} // Detect Enter key press
        />
      </div>
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn">
            Organization <span className="dropdown-arrow">▼</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <a href="#action/3.1">Action 1</a>
              <a href="#action/3.2">Action 2</a>
              <a href="#action/3.3">Action 3</a>
            </div>
          )}
        </div>
        <a href="#counselor">Counselor</a>
        <button className="login-button">Login</button>
      </div>
    </nav>
  );
}

export default MyNavbar;
