import React from 'react';
import { Container, Navbar, Nav, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './../Css/Navbar.css';

const PortfolioNavbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar bg="light" expand="lg" className="py-3 px-4">
      <Container fluid>

        {/* Mobile Layout */}
        <div className="d-flex d-lg-none flex-column align-items-center w-100">
          {/* Social Icons */}
          <div className="d-flex gap-3 social-icons">
            <a
              href="mailto:youremail@example.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.behance.net/yourprofile"
              className="behance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-behance"></i>
            </a>
            <a
              href="https://dribbble.com/yourprofile"
              className="dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>

          {/* Name & Avatar */}
          <div className="d-flex align-items-center mb-2">
            <img
              src="/path-to-avatar.png"
              alt="Avatar"
              width="40"
              height="40"
              className="rounded-circle me-2"
              style={{ border: '4px solid orange' }}
            />
            <span className="fw-bold">Tharindu Marapana</span>
          </div>

          {/* Availability */}
          <div className="d-flex align-items-center mb-3">
            <span className="blinking-dot me-2"></span>
            <small className="text-muted">Available for work</small>
          </div>

          {/* Nav Links in Same Row */}
          <div className="d-flex gap-4 mb-3">
            <Nav.Link as={Link} to="/" className={`mx-3 ${isActive('/') ? 'fw-bold text-dark' : 'text-muted'}`}>
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={`mx-3 ${isActive('/about') ? 'fw-bold text-dark' : 'text-muted'}`}>
              About
            </Nav.Link>


          </div>
        </div>

        {/* Desktop Layout */}
        <div className="d-none d-lg-flex justify-content-between align-items-center w-100">
          {/* Left: Avatar + Name + Availability */}
          <div className="d-flex align-items-center">
            <img
              src="/path-to-avatar.png"
              alt="Avatar"
              width="40"
              height="40"
              className="rounded-circle me-2"
              style={{ border: '4px solid orange' }}
            />
            <span className="fw-bold me-3">Tharindu Marapana</span>
            <div className="d-flex align-items-center">
              <span className="blinking-dot me-2"></span>
              <small className="text-muted">Available for work</small>
            </div>
          </div>

          {/* Center Nav Links */}
          <Nav>
            <Nav.Link as={Link} to="/" className={`mx-3 ${isActive('/') ? 'fw-bold text-dark' : 'text-muted'}`}>
              Work
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className={`mx-3 ${isActive('/about') ? 'fw-bold text-dark' : 'text-muted'}`}>
              About
            </Nav.Link>
          </Nav>

          {/* Right: Social Icons */}
          <div className="d-flex gap-3 social-icons">
            <a
              href="mailto:youremail@example.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.behance.net/yourprofile"
              className="behance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-behance"></i>
            </a>
            <a
              href="https://dribbble.com/yourprofile"
              className="dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-dribbble"></i>
            </a>
          </div>
        </div>

        {/* Blinking Dot Style */}
        <style>{`
          .blinking-dot {
            width: 10px;
            height: 10px;
            background-color: #28a745;
            border-radius: 50%;
            display: inline-block;
            animation: blink 1.2s infinite ease-in-out;
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.1; }
          }
        `}</style>
      </Container>
    </Navbar>
  );
};

export default PortfolioNavbar;
