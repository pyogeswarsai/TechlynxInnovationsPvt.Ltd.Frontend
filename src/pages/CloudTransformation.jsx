import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const CloudTransformations = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeService, setActiveService] = useState('migration');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  const faqs = [
    {
      question: "What is cloud transformation?",
      answer: "Cloud transformation involves migrating and optimizing business applications, data, and infrastructure to cloud environments for enhanced scalability, flexibility, and efficiency."
    },
    {
      question: "Which cloud platforms do you support?",
      answer: "We support major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and hybrid/multi-cloud solutions tailored to your needs."
    },
    {
      question: "How long does a cloud migration take?",
      answer: "Timelines vary based on complexity. Simple migrations take 1-3 months, while large-scale transformations may require 6-12 months. We provide a detailed plan post-assessment."
    },
    {
      question: "Is cloud transformation secure?",
      answer: "Yes, we implement robust security measures including encryption, access controls, and compliance with standards like GDPR, HIPAA, and SOC to ensure data protection."
    },
    {
      question: "What are the costs of cloud transformation?",
      answer: "Costs depend on scope and infrastructure. Basic migrations start at $10,000, mid-sized projects range from $25,000-$75,000, and enterprise solutions can exceed $100,000. We offer transparent quotes."
    }
  ];

  const services = {
    migration: [
      { name: "AWS", logo: "☁", description: "Scalable cloud computing services" },
      { name: "Azure", logo: "🌐", description: "Microsoft's cloud platform for enterprise" },
      { name: "Google Cloud", logo: "📊", description: "AI-driven cloud solutions" },
      { name: "Hybrid Cloud", logo: "🔗", description: "Blend of on-premises and cloud" }
    ],
    optimization: [
      { name: "Cost Optimization", logo: "💸", description: "Maximize ROI with efficient resource use" },
      { name: "Auto-Scaling", logo: "📈", description: "Dynamic resource allocation" },
      { name: "Performance Tuning", logo: "⚡", description: "Enhance application speed" },
      { name: "Serverless", logo: "🚀", description: "Event-driven computing" }
    ],
    security: [
      { name: "IAM", logo: "🔒", description: "Identity and access management" },
      { name: "Encryption", logo: "🛡", description: "Secure data in transit and at rest" },
      { name: "Compliance", logo: "📜", description: "Meet regulatory standards" },
      { name: "Monitoring", logo: "👁", description: "Real-time threat detection" }
    ]
  };

  return (
    <div className="cloud-transformation-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Cloud Transformation Services</h1>
          <p>Modernize your business with scalable, secure, and efficient cloud solutions.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container">
          <h2 className="text-center">Transform with the Cloud</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations, we empower businesses with cloud transformation services that enhance agility, reduce costs, and drive innovation.</p>
              <p className='text-body fs-5'>Our expertise spans migration, optimization, and security across leading cloud platforms, ensuring seamless integration and performance.</p>
              <p className='text-body fs-5'>We tailor solutions to your business needs, enabling scalability and future-ready infrastructure.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cloud transformation" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Cloud Transformation Services</h2>
          <p className="text-center text-dark">Comprehensive solutions for your cloud journey</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">☁</div>
              <h3>Cloud Migration</h3>
              <p className='text-dark fs-5'>Seamless transition of apps and data to cloud platforms.</p>
              <ul>
                <li>Assessment & planning</li>
                <li>Data migration</li>
                <li>Minimal downtime</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">⚙</div>
              <h3>Cloud Optimization</h3>
              <p className='text-dark fs-5'>Maximize performance and cost-efficiency in the cloud.</p>
              <ul>
                <li>Cost management</li>
                <li>Auto-scaling</li>
                <li>Performance tuning</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔒</div>
              <h3>Cloud Security</h3>
              <p className='text-dark fs-5'>Robust protection for your cloud infrastructure.</p>
              <ul>
                <li>Encryption & IAM</li>
                <li>Compliance audits</li>
                <li>Threat monitoring</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🚀</div>
              <h3>DevOps & Automation</h3>
              <p className='text-dark fs-5'>Streamline operations with CI/CD and automation tools.</p>
              <ul>
                <li>CI/CD pipelines</li>
                <li>Infrastructure as Code</li>
                <li>Automated monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Expertise */}
      <section className="services">
        <div className="container">
          <h2 className="text-center">Our Cloud Expertise</h2>
          <p className="text-center text-dark">Leveraging cutting-edge cloud technologies</p>
          <div className="service-tabs">
            <button className={`service-tab ${activeService === 'migration' ? 'active' : ''}`} onClick={() => handleServiceChange('migration')}>
              Migration
            </button>
            <button className={`service-tab ${activeService === 'optimization' ? 'active' : ''}`} onClick={() => handleServiceChange('optimization')}>
              Optimization
            </button>
            <button className={`service-tab ${activeService === 'security' ? 'active' : ''}`} onClick={() => handleServiceChange('security')}>
              Security
            </button>
          </div>
          <div className="tech-grid">
            {services[activeService].map((tech, index) => (
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
          <h2 className="text-center">Why Choose Techlynx Innovations</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Expert Migration</h3>
              <p className='text-dark fs-5'>Smooth transitions with minimal disruption.</p>
            </div>
            <div className="benefit">
              <h3>Cost Efficiency</h3>
              <p className='text-dark fs-5'>Optimize cloud spending for maximum ROI.</p>
            </div>
            <div className="benefit">
              <h3>Security First</h3>
              <p className='text-dark fs-5'>Enterprise-grade protection for your data.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx migrated our legacy systems to AWS, reducing costs by 40% and boosting performance."</p>
              <p className="testimonial-author">- Emily Davis, CIO of NextGen Solutions</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their cloud optimization services transformed our scalability and uptime significantly."</p>
              <p className="testimonial-author">- James Carter, CTO of CloudPeak</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Cloud Transformation Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Assessment</h3>
              <p className='text-dark'>Evaluate infrastructure and define cloud strategy.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p className='text-dark'>Design architecture and migration roadmap.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Migration</h3>
              <p className='text-dark'>Execute migration with minimal downtime.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Optimization</h3>
              <p className='text-dark'>Enhance performance and cost efficiency.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Support</h3>
              <p className='text-dark'>Ongoing monitoring and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Transparent Pricing</h2>
          <p className="text-center text-dark">Flexible plans for your cloud needs</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic Migration</h3>
              <p className='text-dark'>Simple cloud migration for small systems</p>
              <div className="price">$10,000+</div>
              <ul className="plan-features">
                <li>Single platform</li>
                <li>Basic assessment</li>
                <li>Core migration</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Business Transformation</h3>
              <p className='text-dark'>Comprehensive cloud solutions for growth</p>
              <div className="price">$30,000+</div>
              <ul className="plan-features">
                <li>Multi-platform</li>
                <li>Custom architecture</li>
                <li>Optimization included</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise Cloud</h3>
              <p className='text-dark'>Advanced solutions for large-scale systems</p>
              <div className="price">$80,000+</div>
              <ul className="plan-features">
                <li>Hybrid/multi-cloud</li>
                <li>Advanced security</li>
                <li>Full optimization</li>
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
          <h2 className="text-center">Cloud Transformation FAQs</h2>
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
          <h2>Ready to Transform with Cloud?</h2>
          <p>Contact us for a free consultation to modernize your infrastructure.</p>
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
          --secondary: #0984e3;
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
          box-shadow: 0 4px 6px rgba(9, 132, 227, 0.3);
        }

        .btn:hover {
          background: #0870c1;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(9, 132, 227, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(9, 132, 227, 0.8)),
                     url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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

        .services { background: white; }

        .service-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .service-tab {
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

        .service-tab.active {
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
          box-shadow: 0 5px 10px rgba(9, 132, 227, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #0870c1);
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

export default CloudTransformations;