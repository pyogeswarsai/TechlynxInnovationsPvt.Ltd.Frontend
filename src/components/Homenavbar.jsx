import React from 'react';
import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import './Homenavbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Homenavbar = ({onOpen}) => { {/*change here for login*/}
  const {isLoggedIn, logout} = useContext(AuthContext);

  return (

    <nav className="navbar navbar-expand-lg fixed-top navbar-blur px-3">
      <div className="container-fluid">
        {/* Logo and Company Name */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img src={logo} alt="Logo" width="47" height="47" className="me-2" />
          <span className="text-wrap fw-bold fs-3">Techlynx Innovations Pvt. Ltd.</span>
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-1  align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/home"><span className=' text-dark fs-5 fw-bold'>Home</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about-us"><span className='text-dark fs-5 fw-bold'>About Us</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services"><span className='text-dark fs-5 fw-bold'>Services</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers"><span className='text-dark fs-5 fw-bold'>Careers</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us"><span className='text-dark fs-5 fw-bold'>Contact Us</span></Link>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <button className='btn btn-outline-danger fw-bold fs-4 ms-lg-3' onClick={logout}>Logout</button>
              ) : (
                <button className='btn btn-outline-primary fw-bold fs-4 ms-lg-3' onClick={onOpen}>Login</button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Homenavbar;
