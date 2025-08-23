import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const FullStackDevelopmentServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStack, setActiveStack] = useState('frontend');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleStackChange = (stack) => {
    setActiveStack(stack);
  };

  const faqs = [
    {
      question: "What is full-stack development?",
      answer: "Full-stack development involves building both the front-end (user interface) and back-end (server, database) of a web application, ensuring seamless functionality and user experience."
    },
    {
      question: "What technologies do you use for full-stack development?",
      answer: "We use modern tech stacks like MERN (MongoDB, Express.js, React, Node.js), MEAN, Django with PostgreSQL, and Spring Boot for robust, scalable solutions."
    },
    {
      question: "How long does it take to develop a full-stack application?",
      answer: "Timelines vary by complexity. A basic app takes 3-6 months, while complex solutions with advanced features may require 6-12 months. We provide a detailed timeline post-consultation."
    },
    {
      question: "Do you provide ongoing maintenance for web applications?",
      answer: "Yes, we offer maintenance packages including bug fixes, performance optimization, security updates, and feature enhancements to keep your app running smoothly."
    },
    {
      question: "How much does a full-stack project cost?",
      answer: "Costs depend on features and complexity. Basic projects start at $20,000, mid-tier apps range from $40,000-$100,000, and enterprise solutions can exceed $150,000. We provide detailed quotes."
    }
  ];

  const stacks = {
    frontend: [
      { name: "React", logo: "⚛", description: "JavaScript library for building user interfaces" },
      { name: "Vue.js", logo: "🌐", description: "Progressive framework for dynamic UIs" },
      { name: "TypeScript", logo: "📜", description: "Typed JavaScript for scalable apps" },
      { name: "Tailwind CSS", logo: "🎨", description: "Utility-first CSS framework" }
    ],
    backend: [
      { name: "Node.js", logo: "🚀", description: "JavaScript runtime for scalable servers" },
      { name: "Express.js", logo: "🔗", description: "Minimalist web framework for Node.js" },
      { name: "Django", logo: "🐍", description: "High-level Python web framework" },
      { name: "Spring Boot", logo: "🌱", description: "Java framework for microservices" }
    ],
    database: [
      { name: "MongoDB", logo: "🍃", description: "NoSQL database for flexible data" },
      { name: "PostgreSQL", logo: "🐘", description: "Relational database for structured data" },
      { name: "MySQL", logo: "🐬", description: "Popular open-source relational database" },
      { name: "Redis", logo: "🔥", description: "In-memory database for caching" }
    ]
  };

  return (
    <div className="full-stack-development-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Full-Stack Development Services</h1>
          <p className=' fs-5'>End-to-end web solutions for seamless performance and scalability.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container">
          <h2 className="text-center">Comprehensive Web Solutions</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations, we deliver full-stack web applications that combine stunning front-end interfaces with robust back-end systems. Our solutions drive business growth and user engagement.</p>
              <p className='text-body fs-5'>We leverage modern frameworks and cloud technologies to build scalable, secure, and high-performance applications tailored to your needs.</p>
              <p className='text-body fs-5'>From startups to enterprises, our agile approach ensures your web app evolves with your business.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Full-stack development" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Full-Stack Development Services</h2>
          <p className="text-center text-body">Complete solutions for your web application needs</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🌐</div>
              <h3>Front-End Development</h3>
              <p className='text-primary fs-5'>Engaging, responsive interfaces using React, Vue.js, and Tailwind CSS.</p>
              <ul>
                <li>Interactive UI/UX</li>
                <li>Responsive design</li>
                <li>Modern frameworks</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🛠</div>
              <h3>Back-End Development</h3>
              <p className='text-primary fs-5'>Robust server-side solutions with Node.js, Django, or Spring Boot.</p>
              <ul>
                <li>API development</li>
                <li>Secure authentication</li>
                <li>Scalable architecture</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">💾</div>
              <h3>Database Solutions</h3>
              <p className='text-primary fs-5'>Efficient data management with MongoDB, PostgreSQL, or MySQL.</p>
              <ul>
                <li>Data modeling</li>
                <li>High availability</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">☁</div>
              <h3>Cloud Integration</h3>
              <p className='text-primary fs-5'>Seamless deployment with AWS, Azure, or Google Cloud.</p>
              <ul>
                <li>Cloud-native apps</li>
                <li>Serverless architecture</li>
                <li>Cost optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Expertise */}
      <section className="stacks">
        <div className="container">
          <h2 className="text-center">Our Technology Expertise</h2>
          <p className="text-center text-dark f5-5">Modern stacks for high-performance applications</p>
          <div className="stack-tabs">
            <button className={`stack-tab ${activeStack === 'frontend' ? 'active' : ''}`} onClick={() => handleStackChange('frontend')}>
              Front-End
            </button>
            <button className={`stack-tab ${activeStack === 'backend' ? 'active' : ''}`} onClick={() => handleStackChange('backend')}>
              Back-End
            </button>
            <button className={`stack-tab ${activeStack === 'database' ? 'active' : ''}`} onClick={() => handleStackChange('database')}>
              Database
            </button>
          </div>
          <div className="tech-grid">
            {stacks[activeStack].map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{tech.logo}</div>
                <h3>{tech.name}</h3>
                <p className='text-dark'>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx Innovations</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>End-to-End Expertise</h3>
              <p className='text-dark fs-5'>Seamless integration of front-end, back-end, and database solutions.</p>
            </div>
            <div className="benefit">
              <h3>Scalable Architecture</h3>
              <p className='text-dark fs-5'>Future-proof systems designed for growth and performance.</p>
            </div>
            <div className="benefit">
              <h3>Agile Delivery</h3>
              <p className='text-dark fs-5'>Iterative development with regular updates and feedback.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx built our e-commerce platform with unmatched efficiency. Our user base grew by 200% after launch."</p>
              <p className="testimonial-author">- Sarah Johnson, CEO of ShopEasy</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their full-stack expertise transformed our internal tools, streamlining operations significantly."</p>
              <p className="testimonial-author">- Mark Thompson, CTO of CoreTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p className='text-dark'>Understand goals, define requirements, and plan architecture.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>UI/UX Design</h3>
              <p className='text-dark'>Design intuitive interfaces and interactive prototypes.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p className='text-dark'>Agile sprints for front-end, back-end, and database integration.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Rigorous testing for functionality, performance, and security.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Deployment & Support</h3>
              <p className='text-dark'>Launch app and provide ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Transparent Pricing</h2>
          <p className="text-center text-dark">Flexible plans for your web app needs</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic App</h3>
              <p className='text-dark'>Simple web apps with core features</p>
              <div className="price">$20,000+</div>
              <ul className="plan-features">
                <li>Single module</li>
                <li>Basic UI design</li>
                <li>Core functionality</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Business App</h3>
              <p className='text-dark'>Feature-rich apps for growing businesses</p>
              <div className="price">$50,000+</div>
              <ul className="plan-features">
                <li>Multiple modules</li>
                <li>Custom UI/UX</li>
                <li>API integration</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise Solution</h3>
              <p className='text-dark'>Complex systems with advanced features</p>
              <div className="price">$100,000+</div>
              <ul className="plan-features">
                <li>Scalable architecture</li>
                <li>Custom integrations</li>
                <li>Advanced security</li>
                <li>12 months support</li>
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
          <h2 className="text-center">Full-Stack Development FAQs</h2>
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
          <h2>Ready to Build Your Web App?</h2>
          <p>Contact us for a free consultation and quote to create a scalable, high-performance web solution.</p>
          <a href="mailto:web@techlynxinnovations.com" className="btn">Get in Touch</a>
        </div>
                <div className="col-12 text-center mt-5">
            <Link to="/services">
            <button type="button" className="back-btn">← Back</button></Link>
          </div>
 
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e67e22;
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
          box-shadow: 0 4px 6px rgba(230, 126, 34, 0.3);
        }

        .btn:hover {
          background: #d35400;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(230, 126, 34, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(230, 126, 34, 0.8)),
                     url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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

        .stacks { background: white; }

        .stack-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .stack-tab {
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

        .stack-tab.active {
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
          box-shadow: 0 5px 10px rgba(230, 126, 34, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #d35400);
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

export default FullStackDevelopmentServices;