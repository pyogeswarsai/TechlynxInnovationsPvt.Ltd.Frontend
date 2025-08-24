import React, { useState } from 'react';
import { FaSearch, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [showLogin, setShowLogin] = useState(false);


  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    const element = document.getElementById('navbarNavDropdown');
    if (element) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(element);
      menuOpen ? bsCollapse.hide() : bsCollapse.show();
    }
  };

  const scrollToJobOpenings = () => {
    const section = document.getElementById('jobopenings');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-custom shadow-sm px-3 py-3 bg-white">
      <div className="container-fluid">

        {/* Logo + Brand */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="Company Logo" className="logo-img me-2" />
          <span className="company-name fw-bold fs-4">Techlynx Innovations Pvt. Ltd.</span>
        </div>

        {/* Custom Toggle Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes className="toggle-icon open" /> : <FaBars className="toggle-icon" />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto gap-lg-4 gap-2">
            <li className="nav-item fw-bold fs-5"><Link className="nav-link" to="/home">Home</Link></li>


            <li className="nav-item dropdown fw-bold fs-5">
              <Link className="nav-link dropdown-toggle" to="/about-us" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Us
              </Link>
              <ul className="dropdown-menu shadow" aria-labelledby="aboutDropdown">
                <li><Link className="dropdown-item" to="/about-us">Company Overview</Link></li>
                <li><Link className="dropdown-item" to="/about-us">Leadership</Link></li>
                <li><Link className="dropdown-item" to="/about-us">News & Events</Link></li>
                <li><Link className="dropdown-item" to="/about-us">Sustainability</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown fw-bold fs-5">
              <Link className="nav-link dropdown-toggle" to="/services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Services
              </Link>
              <ul className="dropdown-menu shadow" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to='/services'>Web Services</Link></li>
                <li><Link className="dropdown-item" to='/services'>App Development</Link></li>
                <li><Link className="dropdown-item" to='/services'>Cloud Services</Link></li>
                <li><Link className="dropdown-item" to='/services'>Backend Services</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown fw-bold fs-5">
              <Link className="nav-link dropdown-toggle" to="/careers" id="careersDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Careers
              </Link>
              <ul className="dropdown-menu shadow" aria-labelledby="careersDropdown">
                <li><Link className="dropdown-item" to="/careers">Why Join Us</Link></li>
                <li><Link className="dropdown-item" to="/careers">Hiring Process</Link></li>
                <li><Link className="dropdown-item" to="/careers">Job Openings</Link></li>
              </ul>
            </li>

            <li className="nav-item fw-bold fs-5"><Link className="nav-link" to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="d-flex align-items-center gap-2 gap-md-3 mt-3 mt-lg-0">
          <Link to="/careers/jobcards" ><button className="btn btn-primary apply-button" onClick={scrollToJobOpenings}>Apply</button></Link>
          <div className="language-icon d-flex align-items-center globe-hover">
            <FaGlobe className="me-1" /><span>EN</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
