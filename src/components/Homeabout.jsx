// About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homeabout.css";
import { Link } from "react-router-dom";

const Homeabout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 120 });
  }, []);

  return (
    <section id="about" className="about-section d-flex flex-column flex-lg-row">
      {/* Left: Timeline */}
      <div className="timeline-section p-4 p-lg-5 text-white">
        <div className="mb-4 text-center text-lg-start" data-aos="fade-down">
            <img src="/Images/about.png" 
                alt="About visual" 
                className="img-fluid mb-4 rounded shadow" 
                  style={{
                    width: "100%",
                    maxWidth: "700px",   // Increase this value to make it wider
                    height: "auto",
                    maxHeight: "400px",  // Increase this to make it taller
                    borderRadius: "12px"
                  }}
                />
          <h2 className="mb-0">Our Journey</h2>
        </div>

        <ul className="timeline list-unstyled mt-4">
          <li data-aos="fade-right" data-aos-delay="100">
            <span className="year">2025</span>
           <p>Founded in Guntur with a passion for innovation and digital transformation.</p>
            <p>Built strategic partnerships and delivered solutions across 5+ industries.</p>
            <p>Expanded into AI, Cloud & Cybersecurity with cross-functional agile teams.</p>
            <p>Pioneered intelligent automation and launched enterprise AI platforms, scaling innovation across global markets.</p>                  
          </li>
        </ul>
      </div>

      {/* Right: Story + Why Techlynx */}
      <div className="story-section p-4 p-lg-5 text-white d-flex flex-column justify-content-center">
        <h2 className="mb-3 text-warning" data-aos="fade-left">Who We Are</h2>
        <p className="mb-4 fs-5" data-aos="fade-left" data-aos-delay="100">
          At <strong>Techlynx Innovations Pvt. Ltd</strong>, we don't just build software — we create intelligent ecosystems tailored to your business goals. Our team blends creativity with technology to redefine what’s possible.
        </p>

        <h3 className="mb-4" data-aos="fade-left" data-aos-delay="200">Why Techlynx?</h3>
        <div className="row">
          <div className="col-md-6 mb-3" data-aos="zoom-in" data-aos-delay="300">
            <div className="card feature-card">
              <div className="card-body">
                <h5 className="card-title">🚀 Innovation Driven</h5>
                <p className="card-text text-dark">Cutting-edge solutions built around real-world problems.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3" data-aos="zoom-in" data-aos-delay="400">
            <div className="card feature-card">
              <div className="card-body">
                <h5 className="card-title">👥 Team First Culture</h5>
                <p className="card-text text-dark">Empowered people, unified by purpose and passion.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3" data-aos="zoom-in" data-aos-delay="500">
            <div className="card feature-card">
              <div className="card-body">
                <h5 className="card-title">🌐 Scalable Tech</h5>
                <p className="card-text text-dark">Solutions that grow with your business, seamlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3" data-aos="zoom-in" data-aos-delay="600">
            <div className="card feature-card">
              <div className="card-body">
                <h5 className="card-title">🛡️ Secure by Design</h5>
                <p className="card-text text-dark">Built with security and trust at every layer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Us Button */}
        <div className="mt-4" data-aos="zoom-in" data-aos-delay="700">
          <Link to="/about-us" ><button className="btn change text-dark  px-4 py-2 rounded-pill">
            Discover Us
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Homeabout;
