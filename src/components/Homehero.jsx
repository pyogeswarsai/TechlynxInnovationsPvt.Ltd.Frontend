// HeroSection.jsx
import React from "react";
import "./Homehero.css"; // We’ll use this for custom styles
import AuthModal from "./AuthModal"; //change here for login
import Homeavbar from "./Homenavbar"; //change here for login
import { useState } from "react"; //change here for login
import { Link } from "react-router-dom";

const Homehero = () => {
  const [showAuth, setShowAuth] = useState(false); //change here for login

  return (
   <div>
      <> {/*change here for login*/}
        <Homeavbar onOpen={() => setShowAuth(true)} />
        <div className={showAuth ? 'blurred-content' : ''}></div>
        <AuthModal isOpen={showAuth} onClose={() => setShowAuth(false)} />
      </>    
    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active hero-slide-1">
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
            <span className="badge bg-light text-dark mb-3">Only High Quality Services</span>
            <h1 className="display-5 fw-bold">We Provide Best IT Services<br />for Your Need</h1>
            <p className="lead">We create solutions with web development, Full stack applications,<br />UI/UX design, and Cloud applications across the globe.</p>
            <div>
              <Link to="/about-us" className="cnge btn me-2">Discover More</Link>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item hero-slide-2" >
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
                <span className="badge bg-light text-dark mb-3">Innovative Digital Solutions</span>
                <h1 className="display-5 fw-bold">Turning Ideas Into<br />Smart Applications</h1>
                <p className="lead">From concept to launch, we build scalable digital platforms<br />that drive growth and user engagement.</p>
            <div>
              <Link to="/about-us" className="cnge btn me-2">Discover More</Link>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item hero-slide-3" >
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
                <span className="badge bg-light text-dark mb-3">Trusted by Global Clients</span>
                <h1 className="display-5 fw-bold">Delivering Value Beyond<br />Just Code</h1>
                <p className="lead">Our team blends creativity, strategy, and technology<br />to build products that matter and last.</p>
            <div>
              <Link to="/about-us" className="cnge btn me-2">Discover More</Link>
            </div>
          </div>
        </div>  

        {/* Slide 4 */}
        <div className="carousel-item hero-slide-4" >
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
                <span className="badge bg-light text-dark mb-3">Empowering the Future</span>
                <h1 className="display-5 fw-bold">Digital Excellence in Every<br />Project We Build</h1>
                <p className="lead">We craft reliable IT solutions tailored for businesses<br />ready to lead in the digital era.</p>
            <div>
              <Link to="/about-us" className="cnge btn me-2">Discover More</Link>
            </div>
          </div>
        </div>      
      </div>

      {/* Carousel Controls (Optional) */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
    
   </div>
  );
};

export default Homehero;
