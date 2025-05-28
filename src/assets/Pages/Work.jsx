import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Blogs from './../Components/BlogSection';
const Work = () => {
  return (
    <div style={{ backgroundColor: '#f7f8fa', padding: '6rem 0' }}>
      <Container className="text-center">
        <p className="text-muted" style={{ letterSpacing: '1px' }}>
          UI/UX Engineer specializing in UX Research, Human-AI Interaction, and Prompt UX —
        </p>

        <h1 className="fw-bold mb-4" style={{ fontSize: '2.5rem', lineHeight: '1.3' }}>
          Designing digital experiences with <br /> purpose and personality
        </h1>

        <p className="text-secondary mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
          I blend creativity and code to craft intuitive, accessible interfaces.
          Explore my work and see how thoughtful design can make a difference.
        </p>

        <Button variant="light" size="lg" style={{
          backgroundColor: '#e1e1e1',
          border: 'none',
          borderRadius: '10px',
          padding: '0.8rem 2rem',
        }}>
          View projects
        </Button>
      </Container>

      <Blogs />
    </div>
  );
};

export default Work;
