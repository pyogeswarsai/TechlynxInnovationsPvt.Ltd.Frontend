import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MobileAppDevelopment = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activePlatform, setActivePlatform] = useState('ios');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePlatformChange = (platform) => {
    setActivePlatform(platform);
  };

  const faqs = [
    { question: "How long to develop a mobile app?", answer: "Basic apps: 3-5 months; complex apps: 6-9 months." },
    { question: "Do you develop for iOS and Android?", answer: "Yes, native apps with Swift (iOS) and Kotlin (Android), or cross-platform with React Native/Flutter." },
    { question: "How much does app development cost?", answer: "Basic: $15,000+; medium: $30,000-$70,000; enterprise: $100,000+." },
    { question: "Will my app work on all devices?", answer: "Yes, we ensure responsiveness across all device sizes." },
    { question: "Do you provide maintenance?", answer: "Yes, including bug fixes, updates, and analytics." }
  ];

  const platforms = {
    ios: [
      { name: "Swift", logo: "🦅", description: "iOS development language" },
      { name: "SwiftUI", logo: "📱", description: "Declarative UI for Apple" },
      { name: "Xcode", logo: "🛠", description: "macOS IDE" },
      { name: "ARKit", logo: "👓", description: "AR for iOS" }
    ],
    android: [
      { name: "Kotlin", logo: "📦", description: "Android development language" },
      { name: "Jetpack Compose", logo: "🎨", description: "Native UI toolkit" },
      { name: "Android Studio", logo: "🔧", description: "Android IDE" },
      { name: "Firebase", logo: "🔥", description: "Backend services" }
    ],
    cross: [
      { name: "React Native", logo: "⚛", description: "Native apps with React" },
      { name: "Flutter", logo: "📊", description: "Natively compiled UI" },
      { name: "Xamarin", logo: "🔗", description: ".NET cross-platform" },
      { name: "Ionic", logo: "🌐", description: "Hybrid app framework" }
    ]
  };

  return (
    <div className="mobile-app-development">
      <section className="hero">
        <div className="container">
          <h1>Mobile App Development</h1>
          <p>High-performance apps for user engagement and business growth.</p>
          <a href="#contact" className="btn">Free Consultation</a>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2 className="text-center">Comprehensive Mobile Solutions</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>Techlynx Innovations builds custom mobile apps for exceptional user experiences.</p>
              <p className='text-body fs-5'>Fast, secure, scalable apps for consumer and enterprise needs.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Mobile app" />
            </div>
          </div>
        </div>
      </section>

      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center text-dark">End-to-end mobile app solutions</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">📱</div>
              <h3>Native Apps</h3>
              <p className='text-dark'>Swift for iOS, Kotlin for Android.</p>
              <ul>
                <li>iOS & Android</li>
                <li>Platform features</li>
                <li>High performance</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔄</div>
              <h3>Cross-Platform</h3>
              <p className='text-dark fs-5'>React Native/Flutter for faster deployment.</p>
              <ul>
                <li>Single codebase</li>
                <li>Cost-effective</li>
                <li>Consistent UI</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🏢</div>
              <h3>Enterprise Apps</h3>
              <p className='text-dark fs-5'>Custom solutions for productivity.</p>
              <ul>
                <li>CRM/ERP integration</li>
                <li>Secure data</li>
                <li>Productivity tools</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🛒</div>
              <h3>E-Commerce Apps</h3>
              <p className='text-dark fs-5'>Seamless shopping experiences.</p>
              <ul>
                <li>Payment gateways</li>
                <li>Inventory management</li>
                <li>Recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="platforms">
        <div className="container">
          <h2 className="text-center">Platform Expertise</h2>
          <p className="text-center">Latest technologies for all platforms</p>
          <div className="platform-tabs">
            <button className={`platform-tab ${activePlatform === 'ios' ? 'active' : ''}`} onClick={() => handlePlatformChange('ios')}>
              iOS
            </button>
            <button className={`platform-tab ${activePlatform === 'android' ? 'active' : ''}`} onClick={() => handlePlatformChange('android')}>
              Android
            </button>
            <button className={`platform-tab ${activePlatform === 'cross' ? 'active' : ''}`} onClick={() => handlePlatformChange('cross')}>
              Cross-Platform
            </button>
          </div>
          <div className="tech-grid">
            {platforms[activePlatform].map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{tech.logo}</div>
                <h3>{tech.name}</h3>
                <p className='text-dark'>{tech.description}</p>
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
              <h3>User-Centric</h3>
              <p className='text-dark fs-5'>Intuitive interfaces for engagement.</p>
            </div>
            <div className="benefit">
              <h3>Technical Excellence</h3>
              <p className='text-dark fs-5'>Latest mobile technologies.</p>
            </div>
            <div className="benefit">
              <h3>Quality Assurance</h3>
              <p className='text-dark fs-5'>Rigorous testing for performance.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Feedback</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx's fitness app boosted user engagement by 300%."</p>
              <p className="testimonial-author">- Jessica Miller, FitLife</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their enterprise app transformed our field operations."</p>
              <p className="testimonial-author">- David Wilson, FieldTech</p>
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
              <h3>Strategy</h3>
              <p className='text-dark'>Define goals and functionality.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p className='text-dark'>Wireframes and visual designs.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p className='text-dark'>Agile sprints and demos.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Device testing and optimization.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Deployment</h3>
              <p className='text-dark'>App store launch and support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Pricing</h2>
          <p className="text-center text-dark">Flexible mobile app plans</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic App</h3>
              <p>Core functionality</p>
              <div className="price">$15,000+</div>
              <ul className="plan-features">
                <li>Single platform</li>
                <li>Basic UI</li>
                <li>3-5 features</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Popular</div>
              <h3>Business App</h3>
              <p>Feature-rich apps</p>
              <div className="price">$35,000+</div>
              <ul className="plan-features">
                <li>Two platforms</li>
                <li>Custom UI/UX</li>
                <li>API integration</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p>Advanced solutions</p>
              <div className="price">$75,000+</div>
              <ul className="plan-features">
                <li>Multiple platforms</li>
                <li>Advanced security</li>
                <li>Backend development</li>
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
          <h2>Build Your Mobile App</h2>
          <p>Contact us for a free consultation to drive business results.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
        </div>
        <div className="col-12 text-center mt-5">
                    <Link to="/services">
                    <button type="button" className="back-btn">← Back</button></Link>
                  </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #9b59b6;
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
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(155, 89, 182, 0.3);
        }
        .btn:hover { background: #8e44ad; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(155, 89, 182, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(155, 89, 182, 0.8)), 
                     url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
        .platforms { background: white; }
        .platform-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .platform-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .platform-tab.active { background: var(--secondary); color: white; }
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
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(155, 89, 182, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #8e44ad); color: white; text-align: center; padding: 6rem 0;
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

export default MobileAppDevelopment;