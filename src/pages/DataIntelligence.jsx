import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DataIntelligence = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeService, setActiveService] = useState('analytics');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleServiceChange = (service) => {
    setActiveService(service);
  };

  const faqs = [
    {
      question: "What is data intelligence?",
      answer: "Data intelligence involves collecting, analyzing, and utilizing data to drive informed decision-making, optimize processes, and uncover actionable insights for business growth."
    },
    {
      question: "What types of data do you analyze?",
      answer: "We analyze structured and unstructured data, including customer data, operational data, financial data, and real-time streaming data, using advanced analytics and AI."
    },
    {
      question: "How secure is my data?",
      answer: "We prioritize data security with encryption, secure cloud infrastructure, and compliance with GDPR, CCPA, and other regulations to protect your sensitive information."
    },
    {
      question: "How long does it take to implement a data solution?",
      answer: "Timelines vary based on complexity. Basic analytics solutions take 2-4 months, while advanced AI-driven systems may take 6-12 months. We provide tailored timelines after consultation."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide maintenance, updates, and continuous optimization services to ensure your data intelligence solutions remain effective and aligned with your goals."
    }
  ];

  const services = {
    analytics: [
      { name: "Power BI", logo: "📊", description: "Interactive data visualization and business intelligence" },
      { name: "Tableau", logo: "📈", description: "Advanced analytics and reporting platform" },
      { name: "Google Analytics", logo: "🌐", description: "Web and user behavior analytics" },
      { name: "Looker", logo: "🔍", description: "Data exploration and insights platform" }
    ],
    ai: [
      { name: "TensorFlow", logo: "🤖", description: "Machine learning framework for predictive analytics" },
      { name: "PyTorch", logo: "🔥", description: "Deep learning for AI-driven insights" },
      { name: "Azure AI", logo: "☁", description: "Cloud-based AI and machine learning services" },
      { name: "AWS SageMaker", logo: "🛠", description: "Scalable machine learning platform" }
    ],
    cloud: [
      { name: "AWS", logo: "☁", description: "Scalable cloud computing for data storage" },
      { name: "Azure", logo: "🌥", description: "Cloud platform for data processing" },
      { name: "Google Cloud", logo: "⛅", description: "Data analytics and storage solutions" },
      { name: "Snowflake", logo: "❄", description: "Cloud-based data warehousing" }
    ]
  };

  return (
    <div className="data-intelligence">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Data Intelligence Solutions</h1>
          <p>Transform your data into actionable insights with our advanced analytics and AI-driven solutions.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container">
          <h2 className="text-center">Unlock the Power of Your Data</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations Private Limited, we empower businesses with cutting-edge data intelligence solutions. Our services help you harness data to drive strategic decisions, optimize operations, and achieve measurable results.</p>
              <p className='text-body fs-5'>From predictive analytics to real-time insights, we deliver scalable, secure, and customized data solutions tailored to your needs.</p>
            </div>
            <div className="overview-image">
              <img src="data:image/jpeg;base64,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" alt="Data intelligence" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Data Intelligence Services</h2>
          <p className="text-center">Comprehensive solutions to meet your data needs</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">📊</div>
              <h3>Data Analytics</h3>
              <p className='text-dark fs-5'>Extract insights from your data with advanced analytics and visualization tools.</p>
              <ul>
                <li>Descriptive analytics</li>
                <li>Data visualization</li>
                <li>Performance dashboards</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p className='text-dark fs-5'>Predict trends and automate decisions with AI and machine learning models.</p>
              <ul>
                <li>Predictive analytics</li>
                <li>Natural language processing</li>
                <li>Recommendation systems</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">☁</div>
              <h3>Cloud Data Solutions</h3>
              <p className='text-dark fs-5'>Scalable cloud-based data storage and processing for real-time insights.</p>
              <ul>
                <li>Data warehousing</li>
                <li>Cloud integration</li>
                <li>Real-time analytics</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔒</div>
              <h3>Data Security</h3>
              <p className='text-dark fs-5'>Protect your data with robust security measures and compliance protocols.</p>
              <ul>
                <li>Data encryption</li>
                <li>Access controls</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Expertise */}
      <section className="services">
        <div className="container">
          <h2 className="text-center">Our Technical Expertise</h2>
          <p className="text-center">Cutting-edge tools and platforms for data intelligence</p>
          <div className="service-tabs">
            <button 
              className={`service-tab ${activeService === 'analytics' ? 'active' : ''}`}
              onClick={() => handleServiceChange('analytics')}
            >
              Analytics
            </button>
            <button 
              className={`service-tab ${activeService === 'ai' ? 'active' : ''}`}
              onClick={() => handleServiceChange('ai')}
            >
              AI & ML
            </button>
            <button 
              className={`service-tab ${activeService === 'cloud' ? 'active' : ''}`}
              onClick={() => handleServiceChange('cloud')}
            >
              Cloud Solutions
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
          <h2 className="text-center">Why Choose Us for Data Intelligence</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Data-Driven Insights</h3>
              <p className='text-dark fs-5'>Transform raw data into actionable strategies with our expertise.</p>
            </div>
            <div className="benefit">
              <h3>Scalable Solutions</h3>
              <p className='text-dark fs-5'>Build systems that grow with your business and data needs.</p>
            </div>
            <div className="benefit">
              <h3>Security First</h3>
              <p className='text-dark fs-5'>Ensure data integrity with industry-leading security practices.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Success Stories</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx's data analytics transformed our marketing strategy, boosting ROI by 200%."</p>
              <p className="testimonial-author">- Sarah Johnson, CMO of GrowEasy</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their AI solutions helped us predict customer churn with 90% accuracy."</p>
              <p className="testimonial-author">- Michael Lee, CEO of DataCore</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Data Intelligence Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Data Strategy</h3>
              <p className='text-dark'>Define objectives and data sources through consultation.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Data Collection</h3>
              <p className='text-dark'>Gather and clean data from multiple sources.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Analysis & Modeling</h3>
              <p className='text-dark'>Apply analytics and AI to uncover insights.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Visualization</h3>
              <p className='text-dark'>Create intuitive dashboards and reports.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Deployment & Support</h3>
              <p className='text-dark'>Implement solutions and provide ongoing optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Transparent Pricing</h2>
          <p className="text-center text-dark">Flexible plans for your data intelligence needs</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Starter Analytics</h3>
              <p>Basic analytics for small businesses</p>
              <div className="price">$10,000+</div>
              <ul className="plan-features">
                <li>Data visualization</li>
                <li>Basic reporting</li>
                <li>Single data source</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Business Intelligence</h3>
              <p>Advanced analytics for growing companies</p>
              <div className="price">$25,000+</div>
              <ul className="plan-features">
                <li>Custom dashboards</li>
                <li>Multiple data sources</li>
                <li>Basic AI integration</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise AI</h3>
              <p>Comprehensive AI-driven solutions</p>
              <div className="price">$50,000+</div>
              <ul className="plan-features">
                <li>Advanced AI models</li>
                <li>Cloud integration</li>
                <li>Real-time analytics</li>
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
          <h2 className="text-center">Data Intelligence FAQs</h2>
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
          <h2>Ready to Leverage Your Data?</h2>
          <p>Contact us for a free consultation to explore how our data intelligence solutions can drive your business forward.</p>
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
                     url('https://images.unsplash.com/photo-1551288049-b1f3a0a2f3b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
        .offerings .offering-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .offering-card {
          background: white;
          border NixOSradius: 12px;
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

export default DataIntelligence;