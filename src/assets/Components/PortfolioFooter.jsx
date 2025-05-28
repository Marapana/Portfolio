import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PortfolioFooter = () => {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '4rem 0' }}>
      <Container fluid className="px-5">
        <Row className="align-items-center">
          <Col md={8}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.2' }}>
              Let’s connect and create something meaningful
            </h1>
          </Col>
          <Col md={4} className="text-md-end mt-4 mt-md-0">
            <div className="d-flex justify-content-md-end justify-content-start gap-4">
              <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>Behance</a>
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn</a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className="mt-3" style={{ color: '#fff', fontSize: '1.2rem' }}>
              hello@portfolio.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default PortfolioFooter;
