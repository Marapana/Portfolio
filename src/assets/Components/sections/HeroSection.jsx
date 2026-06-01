import React from 'react';
import { ArrowDownTrayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { heroOffers } from '../../data/portfolioData.js';
import cvPdf from '../../Documents/Tharindu Marapana - UIUX Engineer CV.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section page-section">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <h1 className="hero-title">Designing digital products that feel clearer, sharper, and easier to trust.</h1>
            <p className="hero-description">
              Crafting clear, modern digital experiences with thoughtful UX, polished interfaces, and responsive
              front-end execution. Focused on products and websites that feel easier to use and stronger to present.
            </p>

            <div className="hero-skill-line">
              <span>React</span>
              <span>Design Systems</span>
              <span>TypeScript</span>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View selected work
                <ArrowRightIcon className="button-icon" aria-hidden="true" />
              </a>
              <a className="button button-secondary" href={cvPdf} download="Tharindu Marapana - UIUX Engineer CV.pdf">
                Download CV
                <ArrowDownTrayIcon className="button-icon" aria-hidden="true" />
              </a>
            </div>

            <div className="hero-socials">
              <a href="https://www.behance.net/marapana" target="_blank" rel="noreferrer" aria-label="Behance">
                <i className="fab fa-behance" aria-hidden="true" />
              </a>
              <a href="https://dribbble.com/Marapana" target="_blank" rel="noreferrer" aria-label="Dribbble">
                <i className="fab fa-dribbble" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/marapana/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true" />
              </a>
              <a href="#contact" aria-label="Email">
                <i className="fas fa-envelope" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-value-panel">
              <div className="hero-value-copy">
                <span className="hero-value-kicker">What I can offer</span>
                <h2>Design direction that is easier to trust, easier to use, and easier to ship.</h2>
              </div>

              <div className="offer-grid">
                {heroOffers.map((offer) => (
                  <article className="offer-card" key={offer.title}>
                    <div>
                      <h2>{offer.title}</h2>
                      <p>{offer.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
