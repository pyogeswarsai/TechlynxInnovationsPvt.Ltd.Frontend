import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../pages/ourteams.css'
import SubscribePopup from '../components/subscribe';
import FaqPopup from '../components/faq';
import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaShareAlt } from 'react-icons/fa';
import Navbar from '../components/nav';

const testimonials = [
  { name: 'Pavani Doredla', role: 'Board of Director', text: "Leading this organization is about vision, values, and empowering people to succeed.", fullText: "As a Board of Director, my focus is on driving sustainable growth, fostering innovation, and ensuring we remain true to our core values. What makes this organization remarkable is its people — their dedication, creativity, and resilience. Together, we’re building not just a company, but a culture of excellence and long-term impact.", img: '/pavani.jpg' },
  { name: 'Pratyusha Kolluri', role: 'Operational Co-worker and Head Of Department', text: 'In operations, teamwork and precision keep every process running smoothly.', fullText: 'Being part of the operations team has taught me the importance of collaboration and consistency. Every day we solve problems, streamline workflows, and ensure everything runs on time. The support from colleagues and management makes the challenges rewarding and the work truly meaningful', img: '/pratyusha-1.jpg' },
  { name: 'Rajiya Sultana Shaik', role: 'Team Lead', text: 'Leading a talented team means turning challenges into opportunities every day.', fullText: 'As a Team Lead, I believe in guiding through collaboration and trust. My role is to empower my team, encourage innovation, and ensure we grow together while delivering impactful results. Every success we achieve is a reflection of the collective effort, passion, and dedication of the team.', img: '/rajiya.jpg' },
  { name: 'Yogeswar Sai Polisetty', role: 'Project Manager', text: 'Leadership supports growth. Every project taught me something valuable.', fullText: 'I feel empowered to take on new challenges every day. There’s encouragement at every level. Every voice is heard.', img: '/yogeswar.png' },
  { name: 'Nowshad Ali Shaik', text: 'Positive team spirit all around. We work hard and celebrate together.', fullText: 'People collaborate without ego and support each other. The energy is contagious. Learning happens every day.', img: '/nowshad.jpg' },
  { name: 'Sabarish Gudiseva', text: 'Challenging but rewarding. Every hurdle strengthens our resolve.', fullText: 'Every day here is a new learning experience. We’re constantly evolving. Mistakes become lessons.', img: '/sabarish.jpg' },
  { name: 'Chandra Sekhar Kadiyala', text: 'Love the collaborative mindset. You are never alone on a project.', fullText: 'Feels more like a mission than a job. The team is always there to support. Feedback is valued.', img: '/chandra-3.jpg' },
  { name: 'Bushra Shaik', text: 'Great place to grow. My journey here has been transformative.', fullText: 'Plenty of learning opportunities and supportive leadership. Everyone wants you to succeed. Growth is encouraged daily.', img: '/bushra-1.jpg' },
  { name: 'Harshith Sai Bontha', text: 'Feels like family here. The atmosphere is warm and motivating.', fullText: 'The team always has your back. Every contribution is recognized. Communication is transparent.', img: '/harshit.jpg' },
  { name: 'Jhansi Lakshmi Vemula', text: 'Mentors are incredible. They push you to be your best.', fullText: 'You always have guidance when needed. Their support shapes our careers. Feedback is always constructive.', img: '/jhansi.jpg' },
  { name: 'Yaseen Shaik', text: 'Culture of innovation. New ideas are always appreciated.', fullText: 'We are encouraged to think outside the box. Creativity is welcomed. Change is embraced.', img: '/yaseen.jpg' },
  { name: 'Imam Chan Basha Shaik', text: 'Truly supportive leadership. Every employee is valued.', fullText: 'Management actually listens to your ideas. You can speak up freely. Decisions are made collaboratively.', img: '/chan basha.jpg' },
  { name: 'Sravani Martham', text: 'Great for career growth. Opportunities are endless here.', fullText: 'I’ve progressed faster here than anywhere else. Your goals become company goals. Learning is constant.', img: '/sravani.jpg' },
  { name: 'Ganesh Gowtham Ambati', text: 'Passionate people everywhere. There’s energy in every interaction.', fullText: 'Energy and passion are contagious here. You’ll always find support. The drive to succeed is shared.', img: '/ganesh.jpg' },
  { name: 'Meghana Kunchanapalli', text: 'Great mentors and training. They genuinely care about development.', fullText: 'The onboarding process was smooth and detailed. Questions are always welcomed. Every new hire feels ready.', img: '/meghana.jpg' },
  { name: 'Dharma Teja Darsi', text: 'Amazing workplace! There’s a healthy balance of work and fun.', fullText: 'Work-life balance is truly respected. No one feels left behind. Wellness is prioritized.', img: '/dharma teja.jpg' },
  { name: 'Chaitanya Godiboena', text: 'Amazing workplace! The team is always pushing limits.', fullText: 'Work-life balance is truly respected. Support is always available. Every success is celebrated.', img: '/chaitanya.jpg' },
  { name: 'Naga Chandana Vardhani T', text: 'Amazing workplace! Learning never stops here.', fullText: 'Work-life balance is truly respected. Efforts are recognized. Mentorship is always available.', img: '/chandana.jpg' },
  { name: 'Yamuna Mani Kodavatiganti', text: 'Amazing workplace! You feel inspired every day.', fullText: 'Work-life balance is truly respected. Everyone strives for excellence. Leaders are approachable.', img: '/yamuna.jpg' },
  { name: 'Raheema Shaik', text: 'Amazing workplace! I’ve never felt more valued.', fullText: 'Work-life balance is truly respected. Success is a shared goal. Every project teaches something new.', img: '/raheema.jpg' },
  { name: 'Sai Haritha pasupuleti', text: 'Amazing workplace! Motivation comes from all around.', fullText: 'Work-life balance is truly respected. Achievements are celebrated. There’s a sense of belonging.', img: '/haritha.jpg' },
];


const OurTeam = () => {

  const [showPopup, setShowPopup] = useState(false);
     const [showFaq, setShowFaq] = useState(false);
     const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div>
      <div>
        <Navbar/>
      </div>
<section className="ourteam-carousel-wrapper">
  <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
    <div className="carousel-inner ourteam-carousel-inner">
      <div className="carousel-item active ourteam-carousel-item">
        <img src="/pexels-pixabay-269077.jpg" className="d-block w-100" alt="Slide 1" />
        <div className="carousel-caption ourteam-carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <h2><span className="highlight-word">Our</span> People</h2>
        </div>
      </div>
      <div className="carousel-item ourteam-carousel-item">
        <img src="/pexels-seven11nash-380769.jpg" className="d-block w-100" alt="Slide 2" />
        <div className="carousel-caption ourteam-carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <h2 ><span className="highlight-word">Our</span> People</h2>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" />
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" />
    </button>
  </div>
</section>


      <section className="py-5" id="ceo-section">
        <div className="container">
    <h1 className="ceo-heading text-center">
      <span className="highlight-text">OUR CEO</span>
    </h1>
    
    <div className="row align-items-center ceo-card">
      <div className="col-md-6 mb-4 mb-md-0">
        
        <h5 className="ceo-greeting">Hello!</h5>
        <h2>
          I'm <span className="ceo-name">Nagul Meera Shaik</span> 
        </h2>
        <h3><span>Founder & CEO</span></h3>
        <p className="ceo-description">
          Passionately shaping the future of work — where people, innovation, and purpose align.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img src="/ceo1.jpg" alt="CEO" className="img-fluid rounded-circle ceo-image" />
      </div>
    </div>
  </div>
</section>


      {/* Section 3: Recruiters */}
      <section className="recruitment-wrapper py-5 bg-light">
        <div className="container">
          <div className="row gx-4 gy-4">
            <div className="col-md-6">
              <div className="recruitment-card h-100 p-4 shadow-sm d-flex align-items-center">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4>Senior HR</h4>
                    <h4>Renuka Kotlapati</h4>
                    <p className='text-dark'>We're hiring engineers, designers & marketers to shape the future.</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="/renuka.jpg" alt="HR 1" className="img-fluid recruit-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="recruitment-card h-100 p-4 shadow-sm d-flex align-items-center">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4>Junior HR</h4>
                    <h4>Vignasai Chunduri</h4>
                    <p className='text-dark'>We value creativity, passion, and drive to make a difference.</p>
                  </div>
                  <div className="col-md-6 text-center">
                    <img src="/vignasai.jpg" alt="HR 2" className="img-fluid recruit-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="py-5">
        <div className="container">
          <h3 className="testimonial-heading text-center">What Our People Say</h3>
          <div className="row">
            {testimonials.map((t, i) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
                <div
                  className="flip-card"
                  onClick={(e) => e.currentTarget.classList.toggle("flipped")}
                >
                  <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front">
                      <img src={t.img} alt={t.name} className="testimonial-img" />
                      <div className="card-front-body p-3 text-center">
                        <h5>{t.name}</h5>
                        <p className="text-muted mb-1">{t.role || 'Employee'}</p>
                        <p className="fst-italic text-dark small">{t.text}</p>
                        <p className="text-muted fs-6 mb-6">Click_Mee.....</p>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back text-center p-3">
                      <img src={t.logo || t.img} className="logo-small mb-2" alt="logo" />
                      <h5>Myself {t.name}</h5>
                      <h6>Currently: {t.text}</h6>
                      <p className="small text-dark text-start">{t.fullText}</p>
                      <button
                        className="btn btn-sm btn-outline-dark  mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.currentTarget.closest(".flip-card").classList.remove("flipped");
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default OurTeam;
