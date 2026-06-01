import React from 'react';

const PortfolioFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="cta">Designed for clarity. Built to present product work with more confidence.</div>
          <div className="footer-actions">
            <a className="pill-btn secondary" href="#contact">
              Email
            </a>
            <a className="pill-btn" href="https://www.linkedin.com/in/marapana/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="text-muted">Currently open to product, website, and UX-focused frontend work.</span>
          <div className="footer-links">
            <a href="https://www.behance.net/marapana" target="_blank" rel="noreferrer">
              <i className="fab fa-behance" aria-hidden="true" />
              Behance
            </a>
            <a href="https://www.linkedin.com/in/marapana/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" aria-hidden="true" />
              LinkedIn
            </a>
            <a href="https://dribbble.com/Marapana" target="_blank" rel="noreferrer">
              <i className="fab fa-dribbble" aria-hidden="true" />
              Dribbble
            </a>
            <a href="#contact">
              <i className="fas fa-envelope" aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
