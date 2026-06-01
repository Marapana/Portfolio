import React, { useEffect, useMemo, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { navItems } from '../data/portfolioData.js';

const PortfolioNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href);
    const sections = sectionIds
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.45, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const socialItems = useMemo(
    () => [
      {
        href: '#contact',
        label: 'Email',
        iconClass: 'fas fa-envelope',
      },
      {
        href: 'https://www.linkedin.com/in/marapana/',
        label: 'LinkedIn',
        iconClass: 'fab fa-linkedin-in',
      },
      {
        href: 'https://www.behance.net/marapana',
        label: 'Behance',
        iconClass: 'fab fa-behance',
      },
      {
        href: 'https://dribbble.com/Marapana',
        label: 'Dribbble',
        iconClass: 'fab fa-dribbble',
      },
    ],
    []
  );

  return (
    <header className="portfolio-nav">
      <div className="container">
        <div className="nav-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
            <span className="avatar" aria-hidden="true">
              TM
            </span>
            <div>
              <div className="name">Tharindu Marapana</div>
              <div className="availability" aria-label="Available for design and frontend work">
                <span className="dot" /> UI/UX Designer and Frontend Engineer
              </div>
            </div>
          </a>

          <nav
            id="primary-navigation"
            className={`links ${menuOpen ? 'is-open' : ''}`}
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href ? 'is-active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <div className="social-icons">
              {socialItems.map((item) => {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    <i className={item.iconClass} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="nav-pill-cta">
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <XMarkIcon aria-hidden="true" /> : <Bars3Icon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default PortfolioNavbar;
