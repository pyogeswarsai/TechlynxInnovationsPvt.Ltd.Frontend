import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTool, setActiveTool] = useState('design');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  const faqs = [
    {
      question: "What is UI/UX design?",
      answer: "UI (User Interface) design focuses on the visual elements and interactivity of a product, while UX (User Experience) design ensures the product is intuitive, user-friendly, and meets user needs."
    },
    {
      question: "How long does a UI/UX design project take?",
      answer: "Timelines depend on project complexity. Simple designs take 4-8 weeks, while comprehensive projects with user testing may take 3-6 months. We provide a detailed timeline after consultation."
    },
    {
      question: "Do you conduct user research?",
      answer: "Yes, we perform in-depth user research, including interviews, surveys, and usability testing, to ensure designs are tailored to your target audience."
    },
    {
      question: "Can you redesign an existing product?",
      answer: "Absolutely, we specialize in auditing and redesigning existing interfaces to improve usability, aesthetics, and performance based on user feedback and analytics."
    },
    {
      question: "Do you provide prototyping services?",
      answer: "Yes, we create interactive prototypes to test functionality and user flows before development, ensuring a seamless transition to the final product."
    }
  ];

  const tools = {
    design: [
      { name: "Figma", logo: "🎨", description: "Collaborative design and prototyping tool" },
      { name: "Adobe XD", logo: "🖌", description: "Design and prototyping for web and mobile" },
      { name: "Sketch", logo: "✏", description: "Vector-based design for UI/UX" },
      { name: "InVision", logo: "🔗", description: "Prototyping and collaboration platform" }
    ],
    research: [
      { name: "Hotjar", logo: "🔥", description: "Heatmaps and user behavior analytics" },
      { name: "UserTesting", logo: "👥", description: "Remote user testing platform" },
      { name: "Lookback", logo: "👀", description: "Live user research and interviews" },
      { name: "SurveyMonkey", logo: "📋", description: "User feedback and surveys" }
    ],
    animation: [
      { name: "After Effects", logo: "🎥", description: "Motion graphics for UI animations" },
      { name: "Principle", logo: "⚙", description: "Interactive UI animation tool" },
      { name: "Framer", logo: "🛠", description: "Prototyping with advanced animations" },
      { name: "Lottie", logo: "🎞", description: "Lightweight animations for web and mobile" }
    ]
  };

  return (
    <div className="uiux-design">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>UI/UX Design Services</h1>
          <p>Craft intuitive and engaging user experiences with our expert design solutions.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container">
          <h2 className="text-center">Designs That Delight Users</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations Private Limited, we create user-centric UI/UX designs that enhance engagement and drive results. Our designs blend aesthetics with functionality to deliver seamless experiences.</p>
              <p className='text-body fs-5'>From wireframes to interactive prototypes, we ensure every design is intuitive, accessible, and aligned with your business goals.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="UI/UX design" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our UI/UX Design Services</h2>
          <p className="text-center">End-to-end design solutions for exceptional user experiences</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🎨</div>
              <h3>UI Design</h3>
              <p className='text-dark fs-5'>Create visually stunning interfaces with modern design principles.</p>
              <ul>
                <li>Custom UI design</li>
                <li>Design systems</li>
                <li>Responsive layouts</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">👥</div>
              <h3>UX Research</h3>
              <p className='text-dark fs-5'>Understand user needs through research and testing.</p>
              <ul>
                <li>User interviews</li>
                <li>Usability testing</li>
                <li>User personas</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔗</div>
              <h3>Prototyping</h3>
              <p className='text-dark fs-5'>Interactive prototypes to validate designs and user flows.</p>
              <ul>
                <li>Clickable prototypes</li>
                <li>User flow mapping</li>
                <li>Wireframing</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">⚙</div>
              <h3>Interaction Design</h3>
              <p className='text-dark fs-5'>Engaging animations and micro-interactions for dynamic experiences.</p>
              <ul>
                <li>Motion design</li>
                <li>Transition effects</li>
                <li>Interactive elements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Expertise */}
      <section className="tools">
        <div className="container">
          <h2 className="text-center">Our Design Toolkit</h2>
          <p className="text-center">Industry-leading tools for exceptional designs</p>
          <div className="tool-tabs">
            <button 
              className={`tool-tab ${activeTool === 'design' ? 'active' : ''}`}
              onClick={() => handleToolChange('design')}
            >
              Design Tools
            </button>
            <button 
              className={`tool-tab ${activeTool === 'research' ? 'active' : ''}`}
              onClick={() => handleToolChange('research')}
            >
              Research Tools
            </button>
            <button 
              className={`tool-tab ${activeTool === 'animation' ? 'active' : ''}`}
              onClick={() => handleToolChange('animation')}
            >
              Animation Tools
            </button>
          </div>
          <div className="tech-grid">
            {tools[activeTool].map((tool, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{tool.logo}</div>
                <h3>{tool.name}</h3>
                <p className='text-dark'>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center">Why Choose Us for UI/UX Design</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>User-Centric Approach</h3>
              <p className='text-dark fs-5'>Designs driven by user research and feedback.</p>
            </div>
            <div className="benefit">
              <h3>Creative Excellence</h3>
              <p className='text-dark fs-5'>Visually appealing designs with modern aesthetics.</p>
            </div>
            <div className="benefit">
              <h3>Collaborative Process</h3>
              <p className='text-dark fs-5'>Work closely with clients to align with their vision.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx transformed our app's interface, increasing user retention by 40%."</p>
              <p className="testimonial-author">- Emily Chen, Product Manager at AppVibe</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their UX research helped us understand our users better than ever before."</p>
              <p className="testimonial-author">- James Carter, CEO of UserFlow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our UI/UX Design Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p className='text-dark'>Understand user needs and business goals.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Research</h3>
              <p className='text-dark'>Conduct user interviews and market analysis.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Design</h3>
              <p className='text-dark'>Create wireframes, prototypes, and visual designs.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Validate designs with usability testing.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Implementation</h3>
              <p className='text-dark'>Deliver design assets and support development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Transparent Pricing</h2>
          <p className="text-center text-dark">Flexible plans for your UI/UX needs</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic Design</h3>
              <p>Simple UI/UX for startups</p>
              <div className="price">$8,000+</div>
              <ul className="plan-features">
                <li>Basic UI design</li>
                <li>Wireframes</li>
                <li>Single platform</li>
                <li>1 month support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard Design</h3>
              <p>Comprehensive design for businesses</p>
              <div className="price">$15,000+</div>
              <ul className="plan-features">
                <li>Custom UI/UX</li>
                <li>Prototyping</li>
                <li>User research</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Premium Design</h3>
              <p>Advanced design with animations</p>
              <div className="price">$25,000+</div>
              <ul className="plan-features">
                <li>Advanced UI/UX</li>
                <li>Interaction design</li>
                <li>Usability testing</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
          <p className="text-center text-dark" style={{ marginTop: "2rem" }}>Need a custom solution? <a href="#contact">Contact us</a> for a tailored proposal.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">UI/UX Design FAQs</h2>
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

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Ready to Elevate Your User Experience?</h2>
          <p>Contact us for a free consultation to create designs that captivate and convert.</p>
          <a href="mailto:design@techlynxinnovations.com" className="btn">Get in Touch</a>
        </div>
        <div className="col-12 text-center mt-5">
                    <Link to="/services">
                    <button type="button" className="back-btn">← Back</button></Link>
                  </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #1abc9c;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body {
          line-height: 1.6;
          color: var(--text);
          background-color: #ffffff;
        }
        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 15px;
        }
        h1, h2, h3, h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }
        p { margin-bottom: 1rem; }
        .btn {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 0.8rem 1.8rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(26, 188, 156, 0.3);
        }
        .btn:hover {
          background: #16a085;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(26, 188, 156, 0.4);
        }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(26, 188, 156, 0.8)), 
                     url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 8rem 0;
          text-align: center;
        }
        .hero h1 {
          color: white;
          font-size: 3.2rem;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .overview { background: white; }
        .overview-content {
          display: flex;
          align-items: center;
          gap: 4rem;
        }
        .overview-text { flex: 1; }
        .overview-image {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .overview-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .overview-image img:hover { transform: scale(1.03); }
        .offerings { background: var(--light); }
        .offering-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .offering-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-top: 4px solid var(--secondary);
          text-align: center;
        }
        .offering-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .offering-card h3 {
          color: var(--secondary);
          margin: 1.2rem 0;
        }
        .offering-card .icon {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }
        .offering-card ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }
        .offering-card ul li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        .offering-card ul li:before {
          content: "✓";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .tools { background: white; }
        .tool-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }
        .tool-tab {
          padding: 0.9rem 2.2rem;
          background: #ff6f61;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
        }
        .tool-tab.active {
          background: var(--secondary);
          color: white;
        }
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .tech-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #f1f1f1;
        }
        .tech-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
        }
        .tech-logo {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }
        .benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .benefit {
          flex: 1;
          min-width: 300px;
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-left: 4px solid var(--secondary);
        }
        .benefit:hover { transform: translateY(-5px); }
        .testimonials { margin-top: 4rem; }
        .testimonial {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
        }
        .testimonial:before {
          content: '"';
          position: absolute;
          top: -15px;
          left: 20px;
          font-size: 4rem;
          color: var(--secondary);
          opacity: 0.2;
          font-family: Georgia, serif;
        }
        .testimonial-author {
          font-weight: bold;
          margin-top: 1.5rem;
          color: var(--secondary);
          font-style: italic;
        }
        .process { background: white; }
        .process-steps {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 3rem;
          position: relative;
        }
        .process-steps:before {
          content: "";
          position: absolute;
          top: 50px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: var(--secondary);
          z-index: 1;
        }
        .step {
          flex: 1;
          min-width: 180px;
          text-align: center;
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 2;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }
        .step-number {
          background: var(--secondary);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: bold;
          font-size: 1.5rem;
          box-shadow: 0 5px 10px rgba(26, 188, 156, 0.3);
        }
        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }
        .pricing-plans {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 3rem;
        }
        .plan {
          flex: 1;
          min-width: 300px;
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
          transition: all 0.3s ease;
        }
        .plan.featured {
          transform: scale(1.05);
          border: 2px solid var(--secondary);
          z-index: 2;
        }
        .plan.featured:hover { transform: scale(1.07); }
        .plan:hover { transform: translateY(-10px); }
        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--secondary);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .plan h3 {
          color: var(--secondary);
          border-bottom: 2px solid var(--light);
          padding-bottom: 1.2rem;
          margin-bottom: 1.2rem;
        }
        .price {
          font-size: 2.8rem;
          font-weight: bold;
          color: var(--primary);
          margin: 1.5rem 0;
        }
        .plan-features {
          list-style: none;
          margin: 2rem 0;
          padding: 0;
        }
        .plan-features li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #eee;
          text-align: center;
          position: relative;
          padding-left: 1.8rem;
        }
        .plan-features li:before {
          content: "•";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          top: 0.4rem;
        }
        .faq { background: white; }
        .faq-item {
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .faq-question {
          font-weight: bold;
          color: var(--primary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: var(--light);
          transition: background 0.3s ease;
          font-size: 1.1rem;
        }
        .faq-question:hover { background: #e9ecef; }
        .faq-answer {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .faq-answer.active {
          padding: 1.5rem;
          max-height: 500px;
        }
        .cta {
          background: linear-gradient(135deg, var(--secondary), #16a085);
          color: white;
          text-align: center;
          padding: 6rem 0;
        }
        .cta h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }
        .cta p {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: 1.2rem;
        }
        .cta .btn {
          background: white;
          color: var(--secondary);
          margin-top: 1.5rem;
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
        }
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

export default UIUXDesign;