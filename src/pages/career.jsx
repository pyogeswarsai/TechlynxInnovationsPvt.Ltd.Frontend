import '../App.css';
import { FaSearch, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HiringProcess from '../components/HiringProcess';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaShareAlt } from "react-icons/fa";
import SubscribePopup from '../components/subscribe';
import { useState } from 'react';
import FaqPopup from '../components/faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import WallpaperCarousel from '../components/WallpaperCarousel';
import Navbar from '../components/nav';

const Career = () => {
   const [showPopup, setShowPopup] = useState(false);
   const [showFaq, setShowFaq] = useState(false);
   const [showSidebar, setShowSidebar] = useState(false);

     const scrollToJobOpenings = () => {
    const section = document.getElementById('jobopenings');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div>
      <Navbar/>
    </div>

<div className="mb-4">
  <WallpaperCarousel />
</div>

<div className="section-nav-mobile d-md-none">{/* visible on mobile only */}
      <ul className="nav">
      <li><a className="section-link" href="#whyjoinus">Why Join Us</a></li>
      <li><a className="section-link" href="#ourteams">Our Teams</a></li>
      <li><a className="section-link" href="#business">Business Units</a></li>
      <li><a className="section-link" href="#hiring">Hiring Process</a></li>
      <li><a className="section-link" href="#jobopenings">Job Openings</a></li>
      <li><a className="section-link" href="#stayconnect">Stay Connected</a></li>
    </ul>
  </div>
<div className="section-nav2 d-none d-md-flex justify-content-center align-items-center">
  <ul className="nav flex-nowrap">
    <li className="nav-item"><a className="nav-link section-link" href="#whyjoinus">Why Join Us</a></li>
    <li className="nav-item"><a className="nav-link section-link" href="#ourteams">Our Teams</a></li>
    <li className="nav-item"><a className="nav-link section-link" href="#business">Business Units</a></li>
    <li className="nav-item"><a className="nav-link section-link" href="#hiring">Hiring Process</a></li>
    <li className="nav-item"><a className="nav-link section-link" href="#jobopenings">Job Openings</a></li>
    <li className="nav-item"><a className="nav-link section-link" href="#stayconnect">Stay Connected</a></li>
  </ul>
</div>
           <section id="whyjoinus" className="why-join-section py-5" style={{ scrollMarginTop: '30px' }}>
              <div className="container text-center">
                <h2 className="fw-bold text-dark section-heading">Why Join Us</h2>
                <p className="section-subtext">Discover endless possibilities tailored for students, graduates, and professionals.</p>
                <p className="section-subtext mb-4">Be part of a team that values innovation, growth, and impact.</p>
                <div className="row g-4 card-row">
                  <div className="col-md-4">
                    <Link to="/careers/student-intern" style={{ textDecoration: 'none' }}>
                    <div className="image-card">
                     <img src="student.jpeg" alt="Student" className="card-img" />
                     <div className="overlay-text">
                     <h3>Student / Intern</h3>
                     </div>
                    </div>
                    </Link>
                  </div>
              <div className="col-md-4">
                <Link to="/careers/graduate" style={{ textDecoration: 'none' }}>
                <div className="image-card">
                   <img src="graduate.jpeg" alt="Graduate" className="card-img" />
                   <div className="overlay-text"><h3>Fresher</h3>
                    </div>
                  </div>
                  </Link>
               </div>
               <div className="col-md-4">
                 <Link to="/careers/jobcards" target="_blank" rel="noopener noreferrer">
                <div className="image-card">
                  <img src="experience.jpeg" alt="Experienced" className="card-img" />
                <div className="overlay-text"><h3>Experienced</h3>
                </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="discover-card mt-2 d-flex justify-content-between align-items-center flex-wrap">
          <div className="discover-text"><h3>Explore how we innovate, collaborate, and grow together.</h3>
          <p>At our core, we believe in empowering people to think boldly, act ethically, and grow continuously.
            Our culture encourages creativity, celebrates contributions, and rewards initiative.
            Whether you're starting your journey or scaling new heights, we’re here to grow with you.
            Come see what makes us different — and discover where you belong.</p>
            </div>
            <div className="discover-btn-wrapper">
              <Link to="/about-us">
              <button className="discover-btn-upgraded">Discover Us <span>&rarr;</span></button>
              </Link>
              </div>
              </div>

             <section id="ourteams" className="team-testimonials-section py-5 mt-5" style={{ scrollMarginTop: '70px' }}>

<div className="container">
    <h2 className="text-center text-white mb-5 fw-bold">Meet Our Team</h2>
    <div className="row justify-content-center">
      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="ceo.jpg" className="card-img-top" alt="member-2" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Nagul Meera Shaik</h5>
            <p className="card-text text-dark">
              "Every day here is a new horizon—an opportunity to innovate,inspire,and shape the future.Together,we’re growing"</p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="renuka.jpg" className="card-img-top" alt="member-3" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Renuka Kotlapati</h5>
            <p className="card-text text-dark">
              "We're committed to nurturing digital talent in our company.I value my role in building pathways for innovation."
            </p>
          </div>
        </div>
      </div>

            <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="pavani.jpg" className="card-img-top" alt="member-1" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Pavani Doredla</h5>
            <p className="card-text text-dark">
              "I’ve turned challenges into creative digital solutions with a supportive team that listens and empowers."
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-3 mb-4">
        <div className="card h-100">
          <img src="pra.jpg" className="card-img-top" alt="member-4" />
          <div className="card-body">
            <h5 className="card-title fw-bold">Pratyusha Kolluri</h5>
            <p className="card-text text-dark">
              "Being recognized for your passion and work is empowering — this place helps you grow on every level."
            </p>
          </div>
        </div>
      </div>

    </div>
    <div className="d-flex justify-content-center mt-4">
<Link to="/careers/our-full-team">
  <button type="button" className="see-more-btn">
    See More <span className="arrow">....</span>
  </button>
</Link>

    </div>
  </div>
</section>
         <div id='business' className="expertise container"></div>
         <section id="business" className="expertise container">
          <h2>Our Areas of Expertise</h2>
          <p>With expertise in Digital, Engineering and Cloud, we deliver solutions that fulfill the traditional,
             transformational and future needs of clients across the globe.
            </p>
            <div className="expertise-grid">
              <div className="expertise-card ">
                <div className="expertise-card-content">
                  <img src="digital-cyber-era-technology-concept-600nw-2304718219.webp" alt="Digital" className="expertise-icon" />
                  <h3>Digital</h3>
                  <p>End-to-end digital offerings enable enterprises to enhance business processes, user experience,and drive client engagement.</p>
                </div>
              </div>
            <div className="expertise-card">
            <div className="expertise-card-content">
              <img src="1_iW95hu86bn_FXskUWh3f7A.jpg" alt="Engineering" className="expertise-icon" />
              <h3>Data Engineering</h3>
              <p>Engineering and R&D services (ERS) help enterprises innovate and develop products for tomorrow.</p>
            </div>
          </div>
           <div className="expertise-card">
            <div className="expertise-card-content">
              <img src="cloud-computing.jpg" alt="Cloud" className="expertise-icon" />
              <h3>Cloud</h3>
              <p>CloudSMART offerings empower clients to modernize infrastructure and scale efficiently.</p>
            </div>
          </div>
        <div className="expertise-card">
          <div className="expertise-card-content">
            <img src="AdobeStock_604631734.jpeg" alt="AI" className="expertise-icon" />
            <h3>AI</h3>
            <p>
               AI services leverage deep learning, NLP, and ML to deliver intelligent automation and insights.
            </p>
          </div>
        </div>
        <div className="expertise-card">
          <div className="expertise-card-content">
            <img src="img03.jpg" alt="Backend Services" className="expertise-icon" />
            <h3>Backend Services</h3>
            <p>backend solutions ensure reliable, scalable, and efficient system architecture for enterprise apps.</p>
             </div>
            </div>
        <div className="expertise-card">
          <div className="expertise-card-content text-center">
            <img src="discover.jpg" alt="Explore Our Services" className="expertise-icon" />
            <p className="caption">Explore more our services</p>

            {/*service page*/}
            <Link to="/services">
            <button className="fill-on">Explore More</button>
            </Link>
            </div>
          </div>
          </div>
        </section>

      <section id="hiring" style={{ scrollMarginTop: '10px' }}>
        <HiringProcess />
      </section>

      <section id="jobopenings" className="py-5 job-openings-section" style={{ scrollMarginTop: '60px' }}>
        <div className="container">
        <h2 className="mb-5 text-center section-title">Job Openings</h2>
        <div className="row g-4">
        <div className="col-md-4">
          <div className="job-card-custom p-4 h-100">
          <div className="job-header mb-3">
            <h5 className="job-role mb-1">Frontend Developer</h5>
            <span className="job-type">Full-Time • Hybrid</span>
          </div>
          <p className="job-description">Build interactive and responsive UIs using React, HTML5, and CSS3.</p>
          <ul className="job-details list-unstyled mt-3">
            <li><strong>Package:</strong> ₹3-4 LPA</li>
            <li><strong>Location:</strong> Guntur</li>
            <li><strong>Experience:</strong> 1–2 Years</li>
          </ul>
          <div className="text-center mt-4">
            <Link to="/careers/apply-form">
              <button className="apply-btn-custom">Apply Now</button>
            </Link>
            </div>
          </div>
        </div>
          <div className="col-md-4">
            <div className="job-card-custom p-4 h-100">
            <div className="job-header mb-3">
              <h5 className="job-role mb-1">Backend Developer</h5>
              <span className="job-type">Full-Time • Hybrid</span>
            </div>
          <p className="job-description">Work with Node.js, Express, and MongoDB. Handle API development and logic.</p>
          <ul className="job-details list-unstyled mt-3">
            <li><strong>Package:</strong> ₹4-5 LPA</li>
            <li><strong>Location:</strong> Guntur</li>
            <li><strong>Experience:</strong> 0-1 Years</li>
          </ul>
          <div className="text-center mt-4">
            <Link to="/careers/apply-form" target="_blank" rel="noopener noreferrer">
              <button className="apply-btn-custom">Apply Now</button>
              </Link>
            </div>
          </div>
        </div>
          <div className="col-md-4">
            <div className="job-card-custom p-4 h-100">
            <div className="job-header mb-3">
              <h5 className="job-role mb-1">UI/UX Designer</h5>
              <span className="job-type">Full-Time • Hybrid</span>
            </div>
             <p className="job-description">Design user-friendly interfaces. Proficiency in Figma or Adobe XD required.</p>
            <ul className="job-details list-unstyled mt-3">
              <li><strong>Package:</strong> ₹3-4 LPA</li>
              <li><strong>Location:</strong> Guntur</li>
             <li><strong>Experience:</strong> 0–2 Years</li>
            </ul>
           <div className="text-center mt-4">
              <Link to="/careers/apply-form"><button className="apply-btn-custom">Apply Now</button></Link>
             </div>
           </div>
         </div>
         </div>
       </div>
              <div className="d-flex justify-content-center mt-4">
                <Link to="/careers/jobcards" target="_blank" rel="noopener noreferrer">
                <button type="button" className="see-more">See More <span className="arrow">....</span></button></Link>
              </div>
       </section>
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
    </>
  );
};

export default Career;
