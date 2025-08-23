import React, { useState, useEffect } from 'react';
import './SectionBar.css';

const SectionBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionLinks = [
    { label: 'Why Join Us', href: '#whyjoin' },
    { label: 'Our Teams', href: '#teams' },
    { label: 'Business Units', href: '#units' },
    { label: 'Hiring Process', href: '#hiring' },
    { label: 'Job Openings', href: '#jobopenings' },
    { label: 'Stay Connected', href: '#connect' }
  ];

  return (
    <div className="section-bar">
      {isMobile ? (
        <div className="mobile-dropdown">
          <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
            <span>Career Pathways</span>
            <span className="chevron">{isOpen ? '▲' : '▼'}</span>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              {sectionLinks.map(link => (
                <a key={link.href} href={link.href} className="dropdown-item">
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ) : (
        <nav className="desktop-nav">
          {sectionLinks.map(link => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
};

export default SectionBar;
