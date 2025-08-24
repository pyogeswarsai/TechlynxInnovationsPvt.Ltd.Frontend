import React from 'react';
import './JobCards.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscribePopup from '../components/subscribe';
import FaqPopup from '../components/faq';
import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';
import Navbar from '../components/nav';
import { Link } from 'react-router-dom';

const jobListings = [
  { id: 1, title: "Java Full Stack Developer", location: "Hybrid", experience: "2+ years", type: "Full Time", link: "#apply-java" },
  { id: 2, title: "Python Developer", location: "Remote", experience: "Fresher", type: "Internship", link: "#apply-python" },
  { id: 3, title: "Cloud Engineer", location: "Guntur", experience: "3+ years", type: "Full Time", link: "#apply-cloud" },
  { id: 4, title: "UI/UX Designer", location: "Hybrid", experience: "1-2 years", type: "Part Time", link: "#apply-uiux" },
  { id: 5, title: "DevOps Engineer", location: "Remote", experience: "2-4 years", type: "Full Time", link: "#apply-devops" },
  { id: 6, title: "Technical Support", location: "Guntur", experience: "0-1 year", type: "Contract", link: "#apply-support" },
  { id: 7, title: "Frontend Developer", location: "Hybrid", experience: "3+ years", type: "Remote", link: "#apply-frontend" },
  { id: 8, title: "Data Analyst", location: "Remote", experience: "2 years", type: "Full Time", link: "#apply-data" },
  { id: 9, title: "AI/ML Engineer", location: "Guntur", experience: "4+ years", type: "Full Time", link: "#apply-ml" },
  { id: 10, title: "Business Analyst", location: "Hybrid", experience: "2+ years", type: "Full Time", link: "#apply-business" },
  { id: 11, title: "Mobile App Developer", location: "Remote", experience: "1+ years", type: "Full Time", link: "#apply-mobile" },
  { id: 12, title: "QA Tester", location: "Guntur", experience: "Fresher", type: "Internship", link: "#apply-qa" },
  { id: 13, title: "Network Engineer", location: "Hybrid", experience: "2-3 years", type: "Full Time", link: "#apply-network" },
  { id: 14, title: "System Administrator", location: "Remote", experience: "3+ years", type: "Full Time", link: "#apply-sysadmin" },
  { id: 15, title: "Security Analyst", location: "Guntur", experience: "2+ years", type: "Full Time", link: "#apply-security" },
  { id: 16, title: "Digital Marketing Specialist", location: "Hybrid", experience: "1-2 years", type: "Part Time", link: "#apply-marketing" },
  { id: 17, title: "Project Manager", location: "Remote", experience: "5+ years", type: "Full Time", link: "#apply-pm" },
  { id: 18, title: "Product Owner", location: "Guntur", experience: "5+ years", type: "Remote", link: "#apply-product" },
  { id: 19, title: "Content Writer", location: "Hybrid", experience: "1 year", type: "Contract", link: "#apply-writer" },
  { id: 20, title: "Graphic Designer", location: "Remote", experience: "2+ years", type: "Part Time", link: "#apply-graphic" },
];
const getIconForType = (type) => {
  switch (type.toLowerCase()) {
    case "full time": return "bi-briefcase-fill";
    case "internship": return "bi-mortarboard-fill";
    case "part time": return "bi-clock-history";
    case "contract": return "bi-file-earmark-text-fill";
    case "remote": return "bi-wifi";
    default: return "bi-briefcase";
  }
};

const JobCards = () => {

    const [showPopup, setShowPopup] = useState(false);
     const [showFaq, setShowFaq] = useState(false);
     const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='some'>
      <div>
        <Navbar/>
      </div>
    <div className="container py-4">
      <h2 className="text-center gradient-text mb-4">Latest Job Openings</h2>
      <div className="row">
        {jobListings.map((job) => (
          <div className="col-md-4 mb-4" key={job.id}>
            <div className="job-card card h-100">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <p className="text-muted mb-1">Posted: 20 Jul, 2025</p>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div>
                      <h5 className="card-title mb-0">{job.title}</h5>
                      <p className="company-name">Techlynx Innovations Pvt. Ltd.</p>
                    </div>
                    <i className={`bi ${getIconForType(job.type)} fs-3 text-secondary`}></i>
                  </div>
                  <div className="job-tags mb-2">
                    <span>{job.type}</span>
                    <span>{job.experience}</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="salary-location mb-2">
                    - {job.location}
                  </div>
                </div>
                <div className="text-end">

                  {/*<a href="/apply-form" target="_blank" rel="noopener noreferrer" className="details-btn">APPLYNOW</a>*/}
                  <Link to="/careers/apply-form">
                  <button className='details-btn'>APPLYNOW</button></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
    </div>

     <section id='stayconnect' className="stay-connected-custom py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <h2 className="text-white mb-3">Stay Connected</h2>
                <p className="text-light mb-3">Be the first to know about new job openings, events, and updates.  Join our growing community and stay informed!</p>
                <button className="btn btn-outline-light d-block mb-3 w-50" onClick={() => setShowFaq(true)}>FAQ</button>
                <button className="btn btn-primary d-block w-50" onClick={() => setShowPopup(true)}>Subscribe</button>
            </div>
         <div className="col-md-5 text-end">
           <h4 className="text-white mb-4">Follow us on</h4>
           <div className="social-icons-container">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://sharethis.com" target="_blank" rel="noopener noreferrer"><FaShareAlt /></a>
            </div>
          </div>
          </div>
        </div>
      </section>
     
      {showFaq && <FaqPopup onClose={() => setShowFaq(false)} />}
       {showPopup && <SubscribePopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default JobCards;
