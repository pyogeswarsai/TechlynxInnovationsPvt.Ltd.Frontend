import React, { useEffect, useState } from 'react';
import './Discover.css';

const imageList = ['/image3.jpg', '/image5.jpg', '/image2.jpg'];

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Closes menu and scrolls
  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    setIsMenuOpen(false); // CLOSE the menu immediately

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }, 200); // wait for menu to close smoothly
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-fullscreen"
        style={{ backgroundImage: `url(${imageList[currentImage]})` }}
      >
        <div className="overlay">
          <div className="text-section">
            <h1>
              Accelerate the Way<br />
              <span>We Deliver Progress</span>
            </h1>
            <p>
              Nagul Meera Shaik discusses our aspirations to deliver more value to our
              stakeholders at speed and scale, predictably and consistently.
            </p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bottom-navbar">
        <div className="navbar-logo">
          <img src="Companyimg.jpg" alt="Company Logo" />
        </div>

        <div className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
          <a href="#meet-our-people" onClick={handleLinkClick}>Meet our People</a>
          <a href="#History" onClick={handleLinkClick}>Our History</a>
          <a href="#core-values" onClick={handleLinkClick}>Our Core Values</a>
          <a href="#partner-ecosystem" onClick={handleLinkClick}>Our Partners</a>
          <a href="#awards" onClick={handleLinkClick}>Awards</a>
          <a href="#news" onClick={handleLinkClick}>News</a>
          <a href="#location" onClick={handleLinkClick}>Location</a>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </div>

    </>
  );
};

export default AboutUs;
