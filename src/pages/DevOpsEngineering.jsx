import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const DevOpsEngineering = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeTool, setActiveTool] = useState('ci-cd');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleToolChange = (tool) => {
    setActiveTool(tool);
  };

  const faqs = [
    { question: "What is DevOps?", answer: "DevOps combines development and operations to enhance collaboration, automation, and delivery speed." },
    { question: "How long to set up a DevOps pipeline?", answer: "Basic pipelines: 2-4 weeks; complex setups: 2-4 months." },
    { question: "Which cloud platforms do you support?", answer: "AWS, Azure, Google Cloud, and others with custom integrations." },
    { question: "Do you ensure security in DevOps?", answer: "Yes, with DevSecOps practices, including automated security scans and compliance." },
    { question: "Do you offer ongoing support?", answer: "Yes, continuous monitoring, optimization, and 24/7 support." }
  ];

  const tools = {
    'ci-cd': [
      { name: "Jenkins", logo: "⚙", description: "CI/CD automation server" },
      { name: "GitLab CI", logo: "🦊", description: "Integrated CI/CD pipelines" },
      { name: "CircleCI", logo: "🔄", description: "Cloud-based CI/CD" },
      { name: "GitHub Actions", logo: "🐙", description: "Workflow automation" }
    ],
    cloud: [
      { name: "AWS", logo: "☁", description: "Scalable cloud infrastructure" },
      { name: "Azure DevOps", logo: "🌥", description: "Cloud CI/CD and collaboration" },
      { name: "Google Cloud", logo: "⛅", description: "Cloud-native DevOps" },
      { name: "Terraform", logo: "🏗", description: "Infrastructure as code" }
    ],
    monitoring: [
      { name: "Prometheus", logo: "📊", description: "Monitoring and alerting" },
      { name: "Grafana", logo: "📈", description: "Visualization dashboards" },
      { name: "New Relic", logo: "🔍", description: "Application performance" },
      { name: "Datadog", logo: "🐶", description: "Cloud-scale monitoring" }
    ]
  };

  return (
    <div className="devops-engineering">
      <section className="hero">
        <div className="container">
          <h1>DevOps Engineering Services</h1>
          <p>Streamline development with automation, CI/CD, and cloud solutions.</p>
          <a href="#contact" className="btn">Free Consultation</a>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2 className="text-center">Optimize Your Delivery Pipeline</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>Techlynx Innovations delivers DevOps solutions for faster, reliable software delivery.</p>
              <p className='text-body fs-5'>Automate, scale, and secure your workflows with our expertise.</p>
            </div>
            <div className="overview-image">
              <img src="https://qentelli.com/sites/default/files/2024-01/comprehensive-list-of-devops-tools.png" alt="DevOps" />
            </div>
          </div>
        </div>
      </section>

      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center">Comprehensive DevOps solutions</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">⚙</div>
              <h3>CI/CD Pipelines</h3>
              <p className='text-dark fs-5'>Automate build, test, and deployment.</p>
              <ul>
                <li>Automated testing</li>
                <li>Continuous deployment</li>
                <li>Pipeline optimization</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">☁</div>
              <h3>Cloud Infrastructure</h3>
              <p>Scalable cloud setups and migrations.</p>
              <ul>
                <li>Cloud migration</li>
                <li>Infrastructure as code</li>
                <li>Cost optimization</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📊</div>
              <h3>Monitoring & Analytics</h3>
              <p className='text-dark fs-5'>Real-time performance insights.</p>
              <ul>
                <li>Log monitoring</li>
                <li>Performance dashboards</li>
                <li>Incident response</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔒</div>
              <h3>DevSecOps</h3>
              <p className='text-dark fs-5'>Integrate security into workflows.</p>
              <ul>
                <li>Security scans</li>
                <li>Compliance automation</li>
                <li>Vulnerability management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="tools">
        <div className="container">
          <h2 className="text-center">Our Toolkit</h2>
          <p className="text-center">Industry-standard DevOps tools</p>
          <div className="tool-tabs">
            <button className={`tool-tab ${activeTool === 'ci-cd' ? 'active' : ''}`} onClick={() => handleToolChange('ci-cd')}>
              CI/CD
            </button>
            <button className={`tool-tab ${activeTool === 'cloud' ? 'active' : ''}`} onClick={() => handleToolChange('cloud')}>
              Cloud
            </button>
            <button className={`tool-tab ${activeTool === 'monitoring' ? 'active' : ''}`} onClick={() => handleToolChange('monitoring')}>
              Monitoring
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

      <section className="why-us">
        <div className="container">
          <h2 className="text-center">Why Choose Us</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Automation</h3>
              <p className='text-dark fs-5'>Streamline repetitive tasks.</p>
            </div>
            <div className="benefit">
              <h3>Scalability</h3>
              <p className='text-dark fs-5'>Flexible, cloud-native solutions.</p>
            </div>
            <div className="benefit">
              <h3>Reliability</h3>
              <p className='text-dark fs-5'>Robust, secure pipelines.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Feedback</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx reduced our deployment time by 70%."</p>
              <p className="testimonial-author">- Sarah Patel, DevOps Lead</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their cloud migration was seamless and cost-effective."</p>
              <p className="testimonial-author">- Mark Thompson, CTO</p>
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
              <h3>Assessment</h3>
              <p className='text-dark'>Analyze workflows and goals.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p className='text-dark'>Design custom pipelines.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p className='text-dark'>Deploy tools and automation.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className='text-dark'>Validate pipeline performance.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Support</h3>
              <p className='text-dark'>Ongoing optimization and monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Pricing</h2>
          <p className="text-center text-dark">Flexible DevOps plans</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Starter</h3>
              <p>Basic CI/CD setup</p>
              <div className="price">$12,000+</div>
              <ul className="plan-features">
                <li>Single pipeline</li>
                <li>Basic automation</li>
                <li>One cloud platform</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Popular</div>
              <h3>Professional</h3>
              <p>Advanced DevOps solutions</p>
              <div className="price">$30,000+</div>
              <ul className="plan-features">
                <li>Multiple pipelines</li>
                <li>Cloud integration</li>
                <li>Monitoring setup</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p>Comprehensive DevOps</p>
              <div className="price">$60,000+</div>
              <ul className="plan-features">
                <li>Custom pipelines</li>
                <li>DevSecOps</li>
                <li>Multi-cloud</li>
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
          <h2>Transform Your DevOps</h2>
          <p>Contact us for a free consultation to optimize your workflows.</p>
          <a href="mailto:devops@techlynxinnovations.com" className="btn">Get in Touch</a>
        </div>
        <div className="col-12 text-center mt-5">
                    <Link to="/services">
                    <button type="button" className="back-btn">← Back</button></Link>
                  </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e74c3c;
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
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(231, 76, 60, 0.3);
        }
        .btn:hover { background: #c0392b; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(231, 76, 60, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(231, 76, 60, 0.8)), 
                     url('https://images.unsplash.com/photo-1620712943543-bcc4686e175b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
        .tools { background: white; }
        .tool-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .tool-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .tool-tab.active { background: var(--secondary); color: white; }
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
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(231, 76, 60, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #c0392b); color: white; text-align: center; padding: 6rem 0;
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

export default DevOpsEngineering;