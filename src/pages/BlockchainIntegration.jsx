import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BlockchainIntegration = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeSolution, setActiveSolution] = useState('smart-contracts');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSolutionChange = (solution) => {
    setActiveSolution(solution);
  };

  const faqs = [
    { question: "What is blockchain integration?", answer: "Integrating blockchain for secure, transparent, decentralized solutions." },
    { question: "How long does integration take?", answer: "Basic: 2-4 months; complex: 6-12 months." },
    { question: "Which blockchains do you support?", answer: "Ethereum, Binance Smart Chain, Polygon, Solana, and more." },
    { question: "Is blockchain secure?", answer: "Yes, with cryptographic security and decentralization." },
    { question: "Do you offer maintenance?", answer: "Yes, including upgrades and monitoring." }
  ];

  const solutions = {
    'smart-contracts': [
      { name: "Ethereum", logo: "Ξ", description: "Smart contract platform" },
      { name: "Solidity", logo: "📜", description: "Contract programming" },
      { name: "Truffle", logo: "🍫", description: "Development framework" },
      { name: "Hardhat", logo: "🛠", description: "Contract testing" }
    ],
    dapps: [
      { name: "Web3.js", logo: "🌐", description: "Blockchain interaction" },
      { name: "React", logo: "⚛", description: "DApp frontends" },
      { name: "IPFS", logo: "📂", description: "Decentralized storage" },
      { name: "Metamask", logo: "🦊", description: "Wallet integration" }
    ],
    defi: [
      { name: "Uniswap", logo: "🦄", description: "Decentralized exchange" },
      { name: "Chainlink", logo: "🔗", description: "Oracle services" },
      { name: "Aave", logo: "💸", description: "Lending protocol" },
      { name: "Compound", logo: "🏦", description: "DeFi lending" }
    ]
  };

  return (
    <div className="blockchain-integration">
      <section className="hero">
        <div className="container">
          <h1>Blockchain Integration Services</h1>
          <p>Secure, decentralized solutions for your business.</p>
          <a href="#contact" className="btn">Free Consultation</a>
        </div>
      </section>

      <section className="overview">
        <div className="container">
          <h2 className="text-center">Transform with Blockchain</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className='text-body fs-5'>Techlynx Innovations integrates blockchain for transparency and efficiency.</p>
              <p className='text-body fs-5'>Smart contracts, DApps, and DeFi for innovative solutions.</p>
            </div>
            <div className="overview-image">
              <img src="https://media.licdn.com/dms/image/v2/D5612AQEX0ThJTGo80A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682826577221?e=2147483647&v=beta&t=3iIGPociYpoqwyjhmwNDGxooyrA48WDNBWcTeTMAg58" alt="Blockchain" />
            </div>
          </div>
        </div>
      </section>

      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Services</h2>
          <p className="text-center">End-to-end blockchain solutions</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">📜</div>
              <h3>Smart Contracts</h3>
              <p className='text-dark fs-5'>Automated, secure agreements.</p>
              <ul>
                <li>Contract development</li>
                <li>Audits</li>
                <li>Deployment</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🌐</div>
              <h3>DApps</h3>
              <p className='text-dark fs-5'>Decentralized applications.</p>
              <ul>
                <li>Frontend integration</li>
                <li>Wallet support</li>
                <li>Scalable backend</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">💸</div>
              <h3>DeFi Solutions</h3>
              <p className='text- fs-5'>Financial protocols on blockchain.</p>
              <ul>
                <li>Exchanges</li>
                <li>Lending platforms</li>
                <li>Yield farming</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔗</div>
              <h3>Blockchain Consulting</h3>
              <p className='text-dark fs-5'>Strategic blockchain adoption.</p>
              <ul>
                <li>Feasibility analysis</li>
                <li>Platform selection</li>
                <li>Integration planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions">
        <div className="container">
          <h2 className="text-center">Our Expertise</h2>
          <p className="text-center text-dark">Cutting-edge blockchain technologies</p>
          <div className="solution-tabs">
            <button className={`solution-tab ${activeSolution === 'smart-contracts' ? 'active' : ''}`} onClick={() => handleSolutionChange('smart-contracts')}>
              Smart Contracts
            </button>
            <button className={`solution-tab ${activeSolution === 'dapps' ? 'active' : ''}`} onClick={() => handleSolutionChange('dapps')}>
              DApps
            </button>
            <button className={`solution-tab ${activeSolution === 'defi' ? 'active' : ''}`} onClick={() => handleSolutionChange('defi')}>
              DeFi
            </button>
          </div>
          <div className="tech-grid">
            {solutions[activeSolution].map((solution, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{solution.logo}</div>
                <h3>{solution.name}</h3>
                <p className='text-dark'>{solution.description}</p>
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
              <h3>Secure Solutions</h3>
              <p className='text-dark fs-5'>Robust, audited contracts.</p>
            </div>
            <div className="benefit">
              <h3>Expertise</h3>
              <p className='text-dark fs-5'>Proven blockchain developers.</p>
            </div>
            <div className="benefit">
              <h3>Scalability</h3>
              <p className='text-dark fs-5'>Future-proof integrations.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">Client Feedback</h3>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Techlynx's DeFi platform doubled our transaction volume."</p>
              <p className="testimonial-author">- Emma Lee, FinTech Startup</p>
            </div>
            <div className="testimonial">
              <p className='text-dark fs-5'>"Their smart contract audit saved us from vulnerabilities."</p>
              <p className="testimonial-author">- Raj Patel, Crypto Exchange</p>
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
              <p className='text-dark'>Assess business needs.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design</h3>
              <p className='text-dark'>Create blockchain architecture.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p className='text-dark'>Build and test solutions.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Audit</h3>
              <p className='text-dark'>Ensure security and compliance.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Deployment</h3>
              <p className='text-dark'>Launch and maintain.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Pricing</h2>
          <p className="text-center text-dark">Flexible blockchain plans</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic Integration</h3>
              <p>Simple blockchain setup</p>
              <div className="price">$20,000+</div>
              <ul className="plan-features">
                <li>Single smart contract</li>
                <li>Basic DApp</li>
                <li>One blockchain</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Popular</div>
              <h3>Advanced Integration</h3>
              <p>Comprehensive solutions</p>
              <div className="price">$50,000+</div>
              <ul className="plan-features">
                <li>Multiple contracts</li>
                <li>Custom DApp</li>
                <li>Multi-chain support</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise Integration</h3>
              <p>Full-scale blockchain</p>
              <div className="price">$100,000+</div>
              <ul className="plan-features">
                <li>DeFi platforms</li>
                <li>Custom protocols</li>
                <li>Security audits</li>
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
          <h2>Unlock Blockchain Potential</h2>
          <p>Contact us for a free consultation to innovate your business.</p>
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
          --secondary: #00bcd4;
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
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(0, 188, 212, 0.3);
        }
        .btn:hover { background: #0097a7; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(0, 188, 212, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(0, 188, 212, 0.8)), 
                     url('https://images.unsplash.com/photo-1620727129742-7f66d0e3abce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
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
        .solutions { background: white; }
        .solution-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .solution-tab {
          padding: 0.9rem 2.2rem; background:  #a061ffff; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .solution-tab.active { background: #ff4757; color: white; }
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
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(0, 188, 212, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #0097a7); color: white; text-align: center; padding: 6rem 0;
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

export default BlockchainIntegration;