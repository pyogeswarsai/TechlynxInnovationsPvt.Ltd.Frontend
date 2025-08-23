import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CyberSecurity = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeService, setActiveService] = useState('assessment');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  const faqs = [
    { question: "What is cybersecurity?", answer: "Cybersecurity protects systems, networks, and data from attacks, unauthorized access, and damage." },
    { question: "How long does a security audit take?", answer: "Basic audits: 2-4 weeks; comprehensive audits: 1-3 months." },
    { question: "Do you support compliance standards?", answer: "Yes, including GDPR, HIPAA, PCI-DSS, and ISO 27001." },
    { question: "Can you respond to active threats?", answer: "Yes, we provide 24/7 incident response and mitigation." },
    { question: "Do you offer employee training?", answer: "Yes, tailored cybersecurity awareness programs." }
  ];

  const services = {
    assessment: [
      { name: "Penetration Testing", logo: "🔍", description: "Identify vulnerabilities" },
      { name: "Risk Assessment", logo: "⚠", description: "Evaluate security risks" },
      { name: "Compliance Audits", logo: "📜", description: "Ensure regulatory compliance" },
      { name: "Vulnerability Scanning", logo: "🛡", description: "Automated security scans" }
    ],
    protection: [
      { name: "Firewall Management", logo: "🔥", description: "Network protection" },
      { name: "Endpoint Security", logo: "💻", description: "Device-level protection" },
      { name: "SIEM Solutions", logo: "📡", description: "Threat detection" },
      { name: "Encryption", logo: "🔒", description: "Data security" }
    ],
    response: [
      { name: "Incident Response", logo: "🚨", description: "Rapid threat mitigation" },
      { name: "Forensic Analysis", logo: "🔬", description: "Post-incident investigation" },
      { name: "Threat Hunting", logo: "🎯", description: "Proactive threat detection" },
      { name: "Disaster Recovery", logo: "🔄", description: "Business continuity" }
    ]
  };

  return (
    <div className="cybersecurity">
      <section className="hero">
        <div className="container">
          <h1>Cybersecurity Services</h1>
          <p>Secure your business with robust protection and rapid response.</p>
          <a href="#contact" className="btn">Free Consultation</a>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2 className="text-center">Fortify Your Digital Assets</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>Techlynx Innovations provides cutting-edge cybersecurity solutions to safeguard your data and systems.</p>
              <p className='text-body fs-5'>From threat detection to compliance, we ensure your business stays secure.</p>
            </div>
            <div className="overview-image">
              <img src="https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FCyber_security_Benefits_and_Disadvantages_1_9912be4b1e.jpg&w=4500&q=90" alt="Cybersecurity" />
            </div>
          </div>
        </div>
      </section>

      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center">Comprehensive cybersecurity solutions</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🔍</div>
              <h3>Security Assessments</h3>
              <p className='text-dark fs-5'>Identify and mitigate vulnerabilities.</p>
              <ul>
                <li>Penetration testing</li>
                <li>Risk assessments</li>
                <li>Compliance audits</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🛡</div>
              <h3>Threat Protection</h3>
              <p className='text-dark fs-5'>Proactive defense mechanisms.</p>
              <ul>
                <li>Firewall management</li>
                <li>Endpoint security</li>
                <li>SIEM deployment</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🚨</div>
              <h3>Incident Response</h3>
              <p className='text-dark fs-5'>Rapid threat containment.</p>
              <ul>
                <li>24/7 response</li>
                <li>Forensic analysis</li>
                <li>Threat hunting</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📚</div>
              <h3>Training & Compliance</h3>
              <p className='text-dark fs-5'>Ensure staff readiness and compliance.</p>
              <ul>
                <li>Security training</li>
                <li>Policy development</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2 className="text-center">Our Expertise</h2>
          <p className="text-center">Advanced cybersecurity tools and methods</p>
          <div className="service-tabs">
            <button className={`service-tab ${activeService === 'assessment' ? 'active' : ''}`} onClick={() => handleServiceChange('assessment')}>
              Assessment
            </button>
            <button className={`service-tab ${activeService === 'protection' ? 'active' : ''}`} onClick={() => handleServiceChange('protection')}>
              Protection
            </button>
            <button className={`service-tab ${activeService === 'response' ? 'active' : ''}`} onClick={() => handleServiceChange('response')}>
              Response
            </button>
          </div>
          <div className="tech-grid">
            {services[activeService].map((service, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{service.logo}</div>
                <h3>{service.name}</h3>
                <p className='text-dark'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Proactive Defense</h3>
              <p className='text-dark fs-5'>Prevent threats before they strike.</p>
            </div>
            <div className="benefit">
              <h3>Expert Team</h3>
              <p className='text-dark fs-5'>Certified cybersecurity professionals.</p>
            </div>
            <div className="benefit">
              <h3>24/7 Support</h3>
              <p className='text-dark fs-5'>Round-the-clock protection.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Feedback</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx stopped a ransomware attack in hours."</p>
              <p className="testimonial-author">- Lisa Wong, IT Director</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their audits ensured our GDPR compliance."</p>
              <p className="testimonial-author">- Michael Reed, Compliance Officer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p className='text-dark'>Assess infrastructure and risks.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p className='text-dark'>Design tailored security strategies.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p className='text-dark'>Deploy security solutions.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Monitoring</h3>
              <p className='text-dark'>Continuous threat detection.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Support</h3>
              <p className='text-dark '>Ongoing maintenance and response.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Pricing</h2>
          <p className="text-center text-dark">Flexible cybersecurity plans</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic Security</h3>
              <p>Essential protection</p>
              <div className="price">$10,000+</div>
              <ul className="plan-features">
                <li>Vulnerability scans</li>
                <li>Basic firewall</li>
                <li>Compliance check</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Popular</div>
              <h3>Advanced Security</h3>
              <p>Comprehensive protection</p>
              <div className="price">$25,000+</div>
              <ul className="plan-features">
                <li>Penetration testing</li>
                <li>SIEM deployment</li>
                <li>Incident response</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise Security</h3>
              <p>Full-scale solutions</p>
              <div className="price">$50,000+</div>
              <ul className="plan-features">
                <li>Advanced threat hunting</li>
                <li>Full compliance</li>
                <li>24/7 monitoring</li>
                <li>12 months support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
          <p className="text-center text-dark" style={{ marginTop: "2rem" }}><a href="#contact">Contact us</a> for custom solutions.</p>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="text-center">FAQs</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question} <span>{openFaqIndex === index ? '-' : '+'}</span>
              </div>
              {openFaqIndex === index && (
                <div className="faq-answer active">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="container">
          <h2>Secure Your Business</h2>
          <p>Contact us for a free consultation to protect your digital assets.</p>
          <a href="mailto:security@techlynxinnovations.com" className="btn">Get in Touch</a>
        </div>
        <div className="col-12 text-center mt-5">
                    <Link to="/services">
                    <button type="button" className="back-btn">← Back</button></Link>
                  </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e91e63;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { line-height: 1.6; color: var(--text); background-color: #ffffff; }
        .container { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 15px; }
        h1, h2, h3, h4 { color: var(--primary); margin-bottom: 1rem; line-height: 1.2; }
        h1 { font-size: 2.5rem; } h2 { font-size: 2rem; } h3 { font-size: 1.5rem; }
        p { margin-bottom: 1rem; }
        .btn {
          display: inline-block; background: var(--secondary); color: white; padding: 0.8rem 1.8rem;
          border: none; border-radius: 30px; cursor: pointer; text-decoration: none; font-weight: 600;
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(233, 30, 99, 0.3);
        }
        .btn:hover { background: #c2185b; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(233, 30, 99, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(233, 30, 99, 0.8)), 
                     url('https://images.unsplash.com/photo-1558089687-0f3d8f7c036a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover; background-position: center; color: white; padding: 8rem 0; text-align: center;
        }
        .hero h1 { color: white; font-size: 3.2rem; margin-bottom: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .hero p { font-size: 1.3rem; max-width: 700px; margin: 0 auto 2.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .overview { background: white; }
        .overview-content { display: flex; align-items: center; gap: 4rem; }
        .overview-text { flex: 1; }
        .overview-image { flex: 1; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .overview-image img { width: 100%; height: auto; display: block; transition: transform 0.5s ease; }
        .overview-image img:hover { transform: scale(1.03); }
        .offerings { background: var(--light); }
        .offering-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 2rem; }
        .offering-card {
          background: white; border-radius: 12px; padding: 2.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border-top: 4px solid var(--secondary); text-align: center;
        }
        .offering-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .offering-card h3 { color: var(--secondary); margin: 1.2rem 0; }
        .offering-card .icon { font-size: 3rem; color: var(--secondary); margin-bottom: 1rem; }
        .offering-card ul { list-style: none; padding: 0; margin: 1.5rem 0; text-align: left; }
        .offering-card ul li { padding: 0.5rem 0; position: relative; padding-left: 1.5rem; }
        .offering-card ul li:before { content: "✓"; color: var(--secondary); position: absolute; left: 0; font-weight: bold; }
        .services { background: white; }
        .service-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .service-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .service-tab.active { background: var(--secondary); color: white; }
        .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .tech-card {
          background: white; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border: 1px solid #f1f1f1;
        }
        .tech-card:hover { transform: translateY(-7px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); }
        .tech-logo { font-size: 3rem; margin-bottom: 1.5rem; }
        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }
        .benefits { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 2rem; }
        .benefit {
          flex: 1; min-width: 300px; background: white; padding: 2.5rem; border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: all 0.3s ease; border-left: 4px solid var(--secondary);
        }
        .benefit:hover { transform: translateY(-5px); }
        .testimonials { margin-top: 4rem; }
        .testimonial {
          background: white; padding: 2.5rem; border-radius: 12px; margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative;
        }
        .testimonial:before {
          content: '"'; position: absolute; top: -15px; left: 20px; font-size: 4rem;
          color: var(--secondary); opacity: 0.2; font-family: Georgia, serif;
        }
        .testimonial-author { font-weight: bold; margin-top: 1.5rem; color: var(--secondary); font-style: italic; }
        .process { background: white; }
        .process-steps { display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 3rem; position: relative; }
        .process-steps:before {
          content: ""; position: absolute; top: 50px; left: 10%; right: 10%; height: 3px;
          background: var(--secondary); z-index: 1;
        }
        .step {
          flex: 1; min-width: 180px; text-align: center; padding: 2rem 1.5rem; position: relative; z-index: 2;
          background: white; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }
        .step-number {
          background: var(--secondary); color: white; width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-weight: bold;
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(233, 30, 99, 0.3);
        }
        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }
        .pricing-plans { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 3rem; }
        .plan {
          flex: 1; min-width: 300px; background: white; border-radius: 12px; padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative; transition: all 0.3s ease;
        }
        .plan.featured { transform: scale(1.05); border: 2px solid var(--secondary); z-index: 2; }
        .plan.featured:hover { transform: scale(1.07); }
        .plan:hover { transform: translateY(-10px); }
        .popular-badge {
          position: absolute; top: -12px; right: 20px; background: var(--secondary); color: white;
          padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: bold;
        }
        .plan h3 { color: var(--secondary); border-bottom: 2px solid var(--light); padding-bottom: 1.2rem; margin-bottom: 1.2rem; }
        .price { font-size: 2.8rem; font-weight: bold; color: var(--primary); margin: 1.5rem 0; }
        .plan-features { list-style: none; margin: 2rem 0; padding: 0; }
        .plan-features li { padding: 0.8rem 0; border-bottom: 1px solid #eee; text-align: center; position: relative; padding-left: 1.8rem; }
        .plan-features li:before { content: "•"; color: var(--secondary); position: absolute; left: 0; font-size: 1.5rem; top: 0.4rem; }
        .faq { background: white; }
        .faq-item { margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .faq-question {
          font-weight: bold; color: var(--primary); cursor: pointer; display: flex; justify-content: space-between;
          align-items: center; padding: 1.5rem; background: var(--light); transition: background 0.3s ease; font-size: 1.1rem;
        }
        .faq-question:hover { background: #e9ecef; }
        .faq-answer { padding: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease; }
        .faq-answer.active { padding: 1.5rem; max-height: 500px; }
        .cta {
          background: linear-gradient(135deg, var(--secondary), #c2185b); color: white; text-align: center; padding: 6rem 0;
        }
        .cta h2 { color: white; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta p { max-width: 700px; margin: 0 auto 2.5rem; font-size: 1.2rem; }
        .cta .btn { background: white; color: var(--secondary); margin-top: 1.5rem; font-size: 1.2rem; padding: 1rem 2.5rem; }
        @media (max-width: 768px) {
          .overview-content { flex-direction: column; }
          .hero h1 { font-size: 2.3rem; }
          .process-steps:before { display: none; }
          .plan.featured { transform: scale(1); }
          section { padding: 3.5rem 0; }
        }
      `}</style>
    </div>
  );
};

export default CyberSecurity;