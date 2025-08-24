import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AISolutionsServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeSolution, setActiveSolution] = useState('ml');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSolutionChange = (solution) => {
    setActiveSolution(solution);
  };

  const faqs = [
    {
      question: "What are AI solutions?",
      answer: "AI solutions leverage machine learning, deep learning, and other AI technologies to automate processes, gain insights, and enhance decision-making for businesses."
    },
    {
      question: "Which industries do you serve with AI solutions?",
      answer: "We provide AI solutions for healthcare, finance, retail, manufacturing, and more, tailoring models to specific industry needs."
    },
    {
      question: "How long does it take to implement an AI solution?",
      answer: "Timelines vary by complexity. Basic AI models take 2-4 months, while advanced systems may require 6-12 months. We provide a detailed timeline after consultation."
    },
    {
      question: "Are your AI solutions secure?",
      answer: "Yes, we prioritize security with encrypted data, secure APIs, and compliance with standards like GDPR and HIPAA."
    },
    {
      question: "What is the cost of an AI solution?",
      answer: "Costs depend on scope and complexity. Basic AI projects start at $15,000, mid-tier solutions range from $30,000-$80,000, and enterprise systems can exceed $100,000. We offer transparent quotes."
    }
  ];

  const solutions = {
    ml: [
      { name: "TensorFlow", logo: "🧠", description: "Open-source ML framework" },
      { name: "PyTorch", logo: "🔥", description: "Flexible deep learning platform" },
      { name: "Scikit-learn", logo: "📊", description: "ML library for Python" },
      { name: "Keras", logo: "⚙", description: "High-level neural network API" }
    ],
    nlp: [
      { name: "BERT", logo: "📜", description: "Advanced NLP model" },
      { name: "spaCy", logo: "✍", description: "Industrial-strength NLP library" },
      { name: "Hugging Face", logo: "🤗", description: "Transformers for NLP tasks" },
      { name: "NLTK", logo: "📚", description: "Toolkit for text processing" }
    ],
    vision: [
      { name: "OpenCV", logo: "👁", description: "Computer vision library" },
      { name: "YOLO", logo: "🎯", description: "Real-time object detection" },
      { name: "TensorFlow Vision", logo: "🖼", description: "Image processing models" },
      { name: "PyTorch Vision", logo: "📸", description: "Vision tasks framework" }
    ]
  };

  return (
    <div className="ai-solutions-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>AI Solutions Services</h1>
          <p>Harness the power of AI to drive innovation and efficiency.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container">
          <h2 className="text-center">Intelligent AI Solutions</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>At Techlynx Innovations, we deliver AI solutions that transform businesses with automation, predictive analytics, and intelligent insights.</p>
              <p className='text-body fs-5'>Our expertise in machine learning, NLP, and computer vision ensures tailored solutions that align with your goals.</p>
              <p className='text-body fs-5'>We empower organizations to stay ahead with scalable and secure AI systems.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="AI solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our AI Solutions Services</h2>
          <p className="text-center">Tailored AI for your business needs</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🧠</div>
              <h3>Machine Learning</h3>
              <p className='text-dark fs-5'>Predictive models and analytics for data-driven decisions.</p>
              <ul>
                <li>Predictive analytics</li>
                <li>Classification models</li>
                <li>Custom algorithms</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📜</div>
              <h3>Natural Language Processing</h3>
              <p className='text-dark fs-5'>Intelligent text analysis and chatbot solutions.</p>
              <ul>
                <li>Chatbots</li>
                <li>Sentiment analysis</li>
                <li>Text summarization</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">👁</div>
              <h3>Computer Vision</h3>
              <p className='text-dark fs-5'>Image and video analysis for automation and insights.</p>
              <ul>
                <li>Object detection</li>
                <li>Image recognition</li>
                <li>Video analytics</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">⚙</div>
              <h3>AI Integration</h3>
              <p className='text-dark fs-5'>Seamless AI integration with existing systems.</p>
              <ul>
                <li>API integration</li>
                <li>Workflow automation</li>
                <li>Scalable deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Expertise */}
      <section className="solutions">
        <div className="container">
          <h2 className="text-center">Our AI Expertise</h2>
          <p className="text-center">Cutting-edge AI technologies</p>
          <div className="solution-tabs">
            <button className={`solution-tab ${activeSolution === 'ml' ? 'active' : ''}`} onClick={() => handleSolutionChange('ml')}>
              Machine Learning
            </button>
            <button className={`solution-tab ${activeSolution === 'nlp' ? 'active' : ''}`} onClick={() => handleSolutionChange('nlp')}>
              NLP
            </button>
            <button className={`solution-tab ${activeSolution === 'vision' ? 'active' : ''}`} onClick={() => handleSolutionChange('vision')}>
              Computer Vision
            </button>
          </div>
          <div className="tech-grid">
            {solutions[activeSolution].map((tech, index) => (
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
              <h3>Custom AI Models</h3>
              <p className='text-dark fs-5'>Tailored solutions for your unique challenges.</p>
            </div>
            <div className="benefit">
              <h3>Scalable AI</h3>
              <p className='text-dark fs-5'>Systems designed for growth and efficiency.</p>
            </div>
            <div className="benefit">
              <h3>Expert Team</h3>
              <p className='text-dark fs-5'>AI specialists with deep industry knowledge.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx's AI chatbot increased our customer satisfaction by 50%."</p>
              <p className="testimonial-author">- Lisa Brown, CEO of RetailPro</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their computer vision solution revolutionized our inventory management."</p>
              <p className="testimonial-author">- Michael Lee, CTO of ManuTech</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our AI Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p className='text-dark'>Define goals and assess data requirements.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Data Preparation</h3>
              <p className='text-dark'>Clean and preprocess data for modeling.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Model Development</h3>
              <p className='text-dark'>Build and train custom AI models.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Validate models for accuracy and performance.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Deployment</h3>
              <p className='text-dark'>Integrate and monitor AI solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Transparent Pricing</h2>
          <p className="text-center text-dark">Flexible plans for AI solutions</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic AI</h3>
              <p>Simple AI models for small-scale needs</p>
              <div className="price">$15,000+</div>
              <ul className="plan-features">
                <li>Single AI model</li>
                <li>Basic integration</li>
                <li>Core features</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Business AI</h3>
              <p>Advanced AI for growing businesses</p>
              <div className="price">$40,000+</div>
              <ul className="plan-features">
                <li>Multiple models</li>
                <li>Custom integration</li>
                <li>Analytics dashboard</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise AI</h3>
              <p>Complex AI systems for large-scale needs</p>
              <div className="price">$100,000+</div>
              <ul className="plan-features">
                <li>Scalable AI models</li>
                <li>Advanced integrations</li>
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
          <h2 className="text-center">AI Solutions FAQs</h2>
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
          <h2>Ready to Transform with AI?</h2>
          <p>Contact us for a free consultation to build intelligent solutions.</p>
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
          --secondary: #00b894;
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
          box-shadow: 0 4px 6px rgba(0, 184, 148, 0.3);
        }

        .btn:hover {
          background: #009c7b;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(0, 184, 148, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(0, 184, 148, 0.8)),
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

        .solutions { background: white; }

        .solution-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .solution-tab {
          padding: 0.9rem 2.2rem;
          background: #a061ffff;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
        }

        .solution-tab.active {
          background: #ff4757;
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
          box-shadow: 0 5px 10px rgba(0, 184, 148, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #009c7b);
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

export default AISolutionsServices;