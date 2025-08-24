import React from 'react'
import './ServiceFooter.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaShareAlt, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceFooter = () => {
  return (
    <div>
                <section id='stayconnect' className="stay-connected-custom py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="text-white mb-3">Stay Connected</h2>
                <p className="text-light mb-3">Be the first to know about new job openings, events, and updates.  Join our growing community and stay informed!</p>
                <Link to="/careers/our-full-team"><button className="btn btn-outline-light d-block mb-3 w-50" >View our team</button></Link>
                <Link to="/contact-us" ><button className="btn btn-primary d-block w-50" >Contact Us</button></Link>
            </div>
         <div className="col-md-5 text-center">
           <h4 className="text-white mb-4">Follow us on</h4>
           <div className="social-icons-container">
            <a href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/people/Techlynx-Innovations/61579158831359/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://x.com/TechlynxLimited" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/techlynxinnovations/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@techlynxinnovationsprivatelimi" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
          </div>
        </div>
      </section>
     
    </div>
  )
}

export default ServiceFooter